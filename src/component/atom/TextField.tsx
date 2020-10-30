import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '95%',
    },
  },
}));

interface Props {
  type: 'Standard' | 'Filled' | 'Outlined'
  label?: string
}

export default memo(({ type, label = '' }:Props) => {
  const classes = useStyles();
  const textFieldType = {
    Standard: {id: 'standard-basic' },
    Filled: {id: 'filled-basic' },
    Outlined: {id: 'outlined-basic' },
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id={textFieldType[type].id} label={label} />
    </form>
  );
})
