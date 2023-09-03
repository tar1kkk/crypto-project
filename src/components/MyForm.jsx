import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const MyForm = ({title, handleClick}) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Некорректный email').required('Email обязателен'),
        password: Yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, {setSubmitting}) => {
        handleClick(values.email, values.password);
        setSubmitting(false);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className='form-box'>
                    <div>
                        <Field type="email" name="email"
                               placeholder="Email"/>
                        <ErrorMessage style={{color: '#CD5C5C', fontSize: '16px', marginTop: '10px'}} name="email"
                                      component="div" className="error"/>
                    </div>
                    <div>
                        <Field type="password" name="password"
                               placeholder="Password"/>
                        <ErrorMessage style={{color: '#CD5C5C', fontSize: '16px', marginTop: '10px'}} name="password"
                                      component="div" className="error"/>
                    </div>
                    <div className='button-form-div'>
                        <button
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            className='button-form'
                        >
                            {title}
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default MyForm;