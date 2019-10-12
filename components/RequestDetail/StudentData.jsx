
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function StudentData() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5">100/07</Typography>
                <Typography variant="h5">Uriel Espinoza</Typography>
                <Typography variant="h7">Universidad Tecnológica Nacional</Typography> - 
                <Typography variant="h7">Ingenieria en Sistemas</Typography>
            </Paper>
        </div>
    );
}