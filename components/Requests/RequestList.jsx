import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link'
import TablePagination from '@material-ui/core/TablePagination';

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

function createData(fileNumber, fullName, universityFrom, careerFrom, universityTo, careerTo) {
    return { fileNumber, fullName, universityFrom, careerFrom, universityTo, careerTo };
}

const rows = [
    createData('100/01', 'Sebastian Gonzalez', 'UNLP', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
    createData('100/02', 'Tobias Calvente', 'UBA', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
    createData('100/03', 'Rocio Otel', 'UNLAM', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
    createData('100/04', 'James Black', 'UCA', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
    createData('100/07', 'Uriel Espinoza', 'UTN', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
    createData('100/05', 'Erica Gerez', 'UADE', 'Ingenieria en sistemas', 'UNQ', 'Lic. en Informatica'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell align="right">Nombre y apellido</TableCell>
                        <TableCell align="right">Universidad origen</TableCell>
                        <TableCell align="right">Carrera origen</TableCell>
                        <TableCell align="right">Universidad destino</TableCell>
                        <TableCell align="right">Carrera destino</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <Link href="/requests/1">
                            <TableRow hover key={row.fileNumber}>
                                <TableCell>
                                    {row.fileNumber}
                                </TableCell>
                                <TableCell align="right">{row.fullName}</TableCell>
                                <TableCell align="right">{row.universityFrom}</TableCell>
                                <TableCell align="right">{row.careerFrom}</TableCell>
                                <TableCell align="right">{row.universityTo}</TableCell>
                                <TableCell align="right">{row.careerTo}</TableCell>
                            </TableRow>
                        </Link>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={17}
                rowsPerPage={10}
                page={0}
            />
        </Paper>
    );
}