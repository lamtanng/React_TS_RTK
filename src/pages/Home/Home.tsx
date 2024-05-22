import { CssBaseline } from '@mui/material';
import { Stack } from '@mui/system';
import { MainStyled } from 'components/Layouts/Main/Main.styled';
import SideBar from 'components/Layouts/SideBar/SideBar';
import TodoList from 'components/TodoList/TodoList';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <CssBaseline>
        <Stack
          className='main-app'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='start'
          gap='2'
        >
          <SideBar />
          <MainStyled>
            <Outlet />
          </MainStyled>
        </Stack>
      </CssBaseline>
    </>
  );
}

export default Home;
