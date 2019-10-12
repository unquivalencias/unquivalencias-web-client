import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ApproveEquivalenceButton from '../MateriasList'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CrossMarkIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    checkmark: {
        color: 'green'
    },
    previouslyGiven: {
        color: 'blue'
    },
    failmark: {
        color: 'red'
    }

}));

const subjectState = {
    neverGiven: 'Nunca otorgada',
    previouslyGiven: 'Previamente Aprobada',
    given: 'Otorgada',
}

function createData(subject, status) {
    return { subject, status };
}

export default function SimpleTable() {
    const [rows, setRows] = useState([
        createData('Introducción a la programación', subjectState.neverGiven),
        createData('Sistemas operativos', subjectState.neverGiven),
        createData('Estructuras de datos', subjectState.previouslyGiven),
        createData('Programación con objetos', subjectState.previouslyGiven),
        createData('Bases de datos', subjectState.neverGiven),
        createData('Estrategias de persistencia', subjectState.previouslyGiven),
        createData('Construcción de interfaces', subjectState.previouslyGiven),
        createData('Lenguajes formales y automatas', subjectState.previouslyGiven),
        createData('Logica y programación', subjectState.neverGiven),
        createData('Programación funcional', subjectState.neverGiven),
    ]);

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Materia</TableCell>
                        <TableCell align='right'>Estado de solicitudes</TableCell>
                        <TableCell align='right'>Accion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.subject}>
                            <TableCell>
                                {row.subject}
                            </TableCell>
                            <TableCell align='right'>{row.status}
                                {row.status === subjectState.neverGiven &&
                                    <CrossMarkIcon className={classes.failmark} />
                                }{row.status === subjectState.previouslyGiven &&
                                    <CheckCircleIcon className={classes.previouslyGiven} />}
                            
                            {row.status === subjectState.given &&
                                    <CheckCircleIcon className={classes.checkmark} />}
                            </TableCell>
                            <TableCell align='right'>
                                <ApproveEquivalenceButton disable={row.status == subjectState.given} onApprove={() => setRows(pRows => {
                                    const nRows = [...pRows];
                                    nRows[index] = { ...pRows[index], status: subjectState.given }
                                    return nRows;
                                })} />
                                <Button color='primary' variant='outlined' disabled={row.status == subjectState.previouslyGiven}>
                                    DETALLE
                                    </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}