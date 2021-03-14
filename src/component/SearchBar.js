import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import  { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = () => {
  const classes = useStyles();

    const [term, setTerm] = useState('')

    console.log("Term", term)

  return (
    <Paper component="form" className={classes.root}>

       

      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=> setTerm(e.target.value)}
      />


      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

      <Divider className={classes.divider} orientation="vertical" />
     
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>

    </Paper>
  );
}

export default SearchBar
