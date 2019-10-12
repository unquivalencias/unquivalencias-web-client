import React, { useState, useCallback } from 'react';
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
import Link from 'next/link'
import { TextField, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


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
    },
    actionButton: {
        margin: "1rem"
    }

}));

const subjectState = {
    neverGiven: 'Nunca otorgada',
    previouslyGiven: 'Previamente otorgada',
    given: 'Otorgada',
    rejected: 'Rechazada'
}

function createData(subject, status) {
    return { subject, status };
}

export default function SimpleTable() {
    const [rows, setRows] = useState([
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
                        <TableRow hover key={row.subject}>
                            <TableCell>
                                {row.subject}
                            </TableCell>
                            <TableCell align='right'>{row.status}
                                {row.status === subjectState.neverGiven &&
                                    <CrossMarkIcon className={classes.failmark} />
                                }{row.status === subjectState.previouslyGiven &&
                                    <CheckCircleIcon className={classes.previouslyGiven} />}
                                {row.status === subjectState.rejected &&
                                    <CrossMarkIcon className={classes.failmark} />}
                                {row.status === subjectState.given &&
                                    <CheckCircleIcon className={classes.checkmark} />}
                            </TableCell>
                            <TableCell align='right'>
                                <ApproveEquivalenceButton disable={row.status == subjectState.given} onApprove={() => setRows(pRows => {
                                    const nRows = [...pRows];
                                    nRows[index] = { ...pRows[index], status: subjectState.given }
                                    return nRows;
                                })} />
                                <RejectButton disabled={row.status == subjectState.rejected} onReject={() => setRows(pRows => {
                                    const nRows = [...pRows];
                                    nRows[index] = { ...pRows[index], status: subjectState.rejected }
                                    return nRows;
                                })} />
                                <Link href="/equivalence/known">
                                    <Button
                                        className={classes.actionButton}
                                        color='primary'
                                        variant='outlined'
                                    >
                                        DETALLE
                                    </Button></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

function RejectButton({ onReject, disabled }) {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const rejectRequest = useCallback(() => {
        onReject()
        setOpen(false)
    }, [onReject])

    const close = useCallback(() => {
        setOpen(false)
    })

    const handleClickOpen = useCallback(() => {
        setOpen(true)
    })

    return (
        <>
            <Button className={classes.actionButton} variant="outlined" color="primary" onClick={handleClickOpen} disabled={disabled}>
                RECHAZAR
      </Button>
            <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Observaciones</DialogTitle>
                <DialogContent>
                    <TextField />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={rejectRequest}>Rechazar</Button>
                    <Button variant="outlined" color="primary" onClick={close}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}