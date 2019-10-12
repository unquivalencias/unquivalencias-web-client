import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import TextFieldUI from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './style';
import { useRouter } from 'next/router'


export default function SignIn() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Formik
      initialValues={{ email: 'camila@gmail.com', password: 'root' }}
      onSubmit={() => {
        router.push('/')
      }}
    >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Form className={classes.form} noValidate>
              <Field name="email" component={TextField} label="Email" variant="outlined" fullWidth margin="normal" />
              <Field name="password" component={TextField} label="Password" variant="outlined" type="password" fullWidth margin="normal" />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
              Sign In
              </Button>
            </Form>
          </div>
        </Container>
    </Formik>
  );
}

function TextField({
  form: { handleFocus, handleChange, handleBlur },
  field: { name, value }, ...props
}) {
  return (
    <TextFieldUI
      {...props}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}
