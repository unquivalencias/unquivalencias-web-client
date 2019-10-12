import React from 'react'
import RequestList from '../../components/Requests/RequestList'
import SimpleBreadcrumbs from '../../components/breadcrumbs'
import Navbar from '../../components/Navbar'
import { Container } from '@material-ui/core'

export default function Requests() {
    return (<>
        <Navbar />
        <Container fixed>
            <SimpleBreadcrumbs steps={[]} currentstep={"Solicitudes Pendientes"} />
            <RequestList />
        </Container></>)
}
