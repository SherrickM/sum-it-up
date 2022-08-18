import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';


import Auth from '../utils/auth';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Signup = () => {

    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [severity, setSeverity] = useState('');

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            console.log(formState);
            const { data } = await addUser({
                variables: { ...formState }

            });
            console.log(data);
            // if (userData.status === 200) {
            //     setOpen(true)
            //     setAlertMsg('Form submission Success');
            //     setSeverity('success')
            // }
            // else {
            //     setOpen(true)
            //     setAlertMsg('Submission Failed, Try again!');
            //     setSeverity('warning')
            // }

            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(error);
            setOpen(true)
            setAlertMsg(e.text);
            setSeverity('error')
            console.log("signup error", e);
        }
    };

    return (
        // <Grid container justify="center">
        //     <Box component="form" className={classes.form} onSubmit={handleFormSubmit}>
        //         <InputField
        //             fullWidth={true}
        //             variant="outlined"
        //             label="Username"
        //             name="username"
        //             type="username"
        //             required
        //             inputProps={{ className: classes.input }}
        //             className={classes.field}
        //             value={formState.username}
        //             onChange={handleChange}
        //         />
        //         <InputField
        //             fullWidth={true}
        //             label="Email"
        //             variant="outlined"
        //             required
        //             name='email'
        //             type='email'
        //             value={formState.email}
        //             onChange={handleChange}
        //             inputProps={{ className: classes.input }}
        //             className={classes.field}
        //         />
        //         <InputField
        //             fullWidth={true}
        //             label="Password"
        //             name='password'
        //             required
        //             variant="outlined"
        //             value={formState.password}
        //             onChange={handleChange}
        //             inputProps={{ className: classes.input }}
        //         />
        //         <Button
        //             variant="outlined"
        //             fullWidth={true}
        //             endIcon={<CreateIcon />}
        //             type="submit"
        //             className={classes.button}>
        //             Signup
        //         </Button>
        //     </Box>
        //     <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} className={classes.alertbox}>
        //         <Alert onClose={() => setOpen(false)} severity={severity} className={classes.alertbox}>
        //             {error && alertMsg}
        //         </Alert>
        //     </Snackbar>
        // </Grid>
        <>
            {/* Section: Design Block */}
            <section className="text-center text-lg-start">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                    }}
                />
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="card cascading-right"
                                style={{
                                    background: "hsla(0, 0%, 100%, 0.55)",
                                    backdropFilter: "blur(30px)"
                                }}
                            >
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <form>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="">
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form3Example1"
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1">
                                                        Full name
                                                    </label>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="form-control"
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="form-control"
                                            />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultValue=""
                                                id="form2Example33"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mb-4"
                                        >
                                            Sign up
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-google" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-github" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                className="w-100 rounded-4 shadow-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
        </>

    );
};

export default Signup;
