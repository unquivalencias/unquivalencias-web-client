import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function createData(subject, status) {
    return { subject, status};
}

const rows = [
    createData('Introducción a la programación','Nunca otorgada'),
    createData('Estructuras de datos','Previamente aprobada'),
    createData('Sistemas operativos','Nunca otorgada'),
    createData('Programación con objetos','Previamente aprobada'),
    createData('Bases de datos','Nunca otorgada'),
    createData('Construcción de interfaces','Previamente aprobada'),
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
                        <Link href="/requests/1">
                            <TableRow key={row.subject}>
                                <TableCell>
                                    {row.subject}
                                </TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.status=="Previamente aprobada" ? <Button color="primary" variant="contained">Aceptar</Button>: null}</TableCell>
                            </TableRow>
                        </Link>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}