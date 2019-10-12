import React, { Fragment } from 'react'
import StudentData from '../../components/RequestDetail/StudentData'
import SubjectList from '../../components/RequestDetail/SubjectList'
import Navbar from '../../components/Navbar'
import { Container, Typography } from '@material-ui/core'

export default function RequestDetail() {
    return (
        <>
        <Navbar/>
            <Container fixed>
            <StudentData />
            <SubjectList />
        </Container></>)
}