import React, {useState} from 'react'
import classes from './styles.module.css'
import githubLogo from './../../assets/github-icon.svg'
import {getUser} from '../../redux/actions/userActions'
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

export const Navbar = () => {
    
    const dispatch = useDispatch()
    
    const usernameSchema = yup.object().shape({
        username : yup.string()
        .required("username is required")
        .min(2, "very short")
    })

    const initialValue = {
        username : ""
    }

    return (
            <div className={classes.root}>
                <div className={classes.logo}>
                    <img src={githubLogo} width={100} height={100} alt="githublogo"/>
                </div>
                <div  className={classes.search}>
                <Formik 
                    initialValues = {initialValue}
                    validationSchema = {usernameSchema}
                    onSubmit = {(values) => 
                        getUser(values.username)(dispatch)}
                >
                    {(formik) => {
                        const {errors, touched, isValid, dirty} = formik
                            return (
                                <Form  className={classes.searchContent}>
                                    <div className={classes.inputAndBtn}>
                                    <Field 
                                        type="search" 
                                        name="username"
                                        id="username"
                                        placeholder="Search..."
                                        className={errors.username && touched.username ? "input-error" : null} />
                                        
                                         <button type={"submit"}
                                            className={!(dirty && isValid) ? "disabled-btn" : ""}
                                            disabled={!(dirty && isValid)}
                                        >
                                            Search
                                        </button>
                                    
                                    </div>
                                   
                                   <div className={classes.errorMessage}>
                                     <ErrorMessage name="username" component="span" className="error" />  
                                   </div>
                                </Form>
                            )
                    }}
                 </Formik>
                 </div>
            </div> 
  

    )
}
