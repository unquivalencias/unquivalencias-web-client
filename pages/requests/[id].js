import React, { useState, useMemo } from 'react'
import StudentData from '../../components/RequestDetail/StudentData'
import SubjectList from '../../components/RequestDetail/SubjectList'
import Navbar from '../../components/Navbar'
import { Container, Typography, Paper, Grid } from '@material-ui/core'

import SimpleBreadcrumbs from '../../components/breadcrumbs'


const subjectState = {
    neverGiven: 'Nunca otorgada',
    previouslyGiven: 'Previamente otorgada',
    given: 'Otorgada',
    rejected: 'Rechazada'
}


function createData(subject, status) {
    return { subject, status };
}

export default function RequestDetail() {
    const steps = [{ name: "Solicitudes Pendientes" }]
    const currentstep = "Detalle Solicitud"

    const [subjects, setSubjects] = useState([
        createData('Introducción a la programación', subjectState.given),
        createData('Sistemas operativos', subjectState.given),
        createData('Estructuras de datos', subjectState.previouslyGiven),
        createData('Programación con objetos', subjectState.previouslyGiven),
        createData('Bases de datos', subjectState.neverGiven),
        createData('Estrategias de persistencia', subjectState.previouslyGiven),
        createData('Construcción de interfaces', subjectState.previouslyGiven),
        createData('Lenguajes formales y automatas', subjectState.previouslyGiven),
        createData('Logica y programación', subjectState.neverGiven),
        createData('Programación funcional', subjectState.neverGiven),
    ]);

    return (
        <>
            <Navbar />
            <Container fixed>
                <SimpleBreadcrumbs steps={steps} currentstep={currentstep} />
                <Grid container alignItems="stretch" spacing={2}
                >
                    <Grid item xs={6}>
                        <StudentData />
                    </Grid>
                    <Grid item xs={6}>
                        <SubjectsResume subjects={subjects} />
                    </Grid>
                </Grid>
                <SubjectList
                    subjects={subjects}
                    setSubjects={setSubjects} />
            </Container></>)
}

function SubjectsResume({ subjects }) {
    const given = useMemo(() => subjects.filter(({ status }) => status === subjectState.given).length);
    const rejected = useMemo(() => subjects.filter(({ status }) => status === subjectState.rejected).length);
    const neveerGiven = useMemo(() => subjects.filter(({ status }) => status === subjectState.neveerGiven).length);
    const previouslyGiven = useMemo(() => subjects.filter(({ status }) => status === subjectState.previouslyGiven).length);


    return <Paper>
        <Typography align="right">Anteriormente Otorgadas: {previouslyGiven}</Typography>
        <Typography align="right">Nunca Otorgadas: {neveerGiven}</Typography>
        <Typography align="right">Otorgadas: {given}</Typography>
        <Typography align="right">Rechazadas: {rejected}</Typography>
    </Paper>
}