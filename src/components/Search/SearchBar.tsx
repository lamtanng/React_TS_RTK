import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import React, { useRef } from 'react';

function SearchBar({ onSearch }: { onSearch: (searchInput: string) => void }) {
  //   const searchInput = useRef<string>('');
  return (
    <>
      <Paper
        // component='form'
        // onSubmit={() => onSearch(searchInput.current)}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '2px' }} aria-label='menu'>
          {/* <MenuIcon /> */}
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search product'
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => onSearch(e.target.value as string)}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
