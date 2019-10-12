import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

export default function SimpleBreadcrumbs({steps, currentstep}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="breadcrumb">
            {steps.map( step => {
                return(
                <Typography color="textSecondary">{step.name}</Typography>
            )})}
            <Typography color="textPrimary">{currentstep}</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}