import React from 'react'
import HistoryAproved from '../../components/RequestDetail/HistoryApproved'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import StudentSubjectHistory from '../../components/RequestDetail/StudentSubjectHistory'

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

import SimpleBreadcrumbs from '../../components/breadcrumbs'

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
    const steps = [{ name: "Solicitudes Pendientes" }, { name: "Detalle Solicitud" }]
    const currentstep = "Equivalencia Materia"
    return (
        <div className={classes.root}>
            <SimpleBreadcrumbs steps={steps} currentstep={currentstep} />
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.rightPanel}>
                        <h1>Analisis Matematico</h1>
                        <HistoryAproved />
                        <div className={classes.actions}>
                            <Link href="/requests/1"><Button className={classes.button} variant="contained" color="primary" type="submit">Aceptar</Button></Link>
                            <Link href="/requests/1"><Button className={classes.button} variant="contained" color="secondary" type="submit">Rechazar</Button></Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className={classes.rightPanel}>
                        <h1>Materias aprobadas</h1>
                        <h2>Universidad: UNLP</h2>
                        <StudentSubjectHistory />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

