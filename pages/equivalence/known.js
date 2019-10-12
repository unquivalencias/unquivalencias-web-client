import React from 'react'
import HistoryAproved from '../../components/RequestDetail/HistoryApproved'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import StudentSubjectHistory from '../../components/RequestDetail/StudentSubjectHistory'

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    rightPanel: {
marginLeft: "4rem",
    },
    actions: {
        marginTop: 20
    },
    button: {
        marginRight: 10
    }
}));

export default function index() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <h1>Analisis Matematico</h1>
                    <HistoryAproved />
                    <div className={classes.actions}>
                <Link href="/requests/1"><Button className={classes.button} variant="contained" color="primary" type="submit">Aceptar</Button></Link>
                <Link href="/requests/1"><Button className={classes.button} variant="contained" color="secondary" type="submit">Rechazar</Button></Link>
            </div>
                </Grid>
                <Grid item xs={6} >
                <div className={classes.rightPanel}>
                    <StudentSubjectHistory />
                </div>
                </Grid>
            </Grid>
            </div>
    )
}

