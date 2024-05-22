import { Box, Paper, Typography } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { useState } from 'react';
import MyButton from './style';

//styles
const paperStyles = (color: string) => ({
  display: 'block',
  height: 150,
  width: 150,
  bgcolor: color,
  borderRadius: 1.5,
});

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

//data
const colorList = [
  'brown',
  'green',
  'pink',
  'yellow',
  'orange',
  'black',
  'purple',
  'white',
  'red',
  'blue',
];

function ColorBox() {
  const [color, setColor] = useState(sessionStorage.getItem('color') || colorList[0]);

  //handle event
  const handleClick = () => {
    var colorIndex = randomColorIndex(colorList.length);
    setColor(colorList[colorIndex]);
    sessionStorage.setItem('color', colorList[colorIndex]);
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Typography>Please click on the button below to change the color</Typography>
        <Paper sx={paperStyles(color)} />
        <CssVarsProvider>
          <MyButton variant='contained' size='medium' onClick={handleClick}>
            Changes
          </MyButton>
        </CssVarsProvider>
      </Box>
    </>
  );
}

function randomColorIndex(length: number): number {
  let max = Math.floor(length);
  return Math.trunc(Math.random() * max);
}

export default ColorBox;
