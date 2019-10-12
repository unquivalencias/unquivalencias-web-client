import React from 'react'
import RequestList from '../../components/Requests/RequestList'
import Navbar from '../../components/Navbar'
import { Container} from '@material-ui/core'

export default function Requests() {
    return (<>
        <Navbar />
        <Container fixed>
            <RequestList />
        </Container></>)
}