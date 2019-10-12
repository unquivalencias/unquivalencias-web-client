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
    failmark: {
        color: 'red'
    }

}));

function createData(subject, status) {
    return { subject, status };
}

const rows = [
    createData('Introducción a la programación', 'Nunca otorgada'),
    createData('Sistemas operativos', 'Nunca otorgada'),
    createData('Estructuras de datos', 'Previamente aprobada'),
    createData('Programación con objetos', 'Previamente aprobada'),
    createData('Bases de datos', 'Nunca otorgada'),
    createData('Estrategias de persistencia', 'Previamente aprobada'),
    createData('Construcción de interfaces', 'Previamente aprobada'),
    createData('Lenguajes formales y automatas', 'Previamente aprobada'),
    createData('Logica y programación', 'Nunca otorgada'),
    createData('Programación funcional', 'Nunca otorgada'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Materia</TableCell>
                        <TableCell align="right">Estado de solicitudes</TableCell>
                        <TableCell align="right">Accion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.subject}>
                            <TableCell>
                                {row.subject}
                            </TableCell>
                            <TableCell align="right">{row.status}{row.status == "Previamente aprobada" ?
                                <CheckCircleIcon className={classes.checkmark} /> :
                                <CrossMarkIcon className={classes.failmark} />}</TableCell>
                            <TableCell align="right">
                                <ApproveEquivalenceButton disable={row.status == "Nunca otorgada"} />
                                <Button color="primary" variant="outlined" disabled={row.status == "Previamente aprobada"}>
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