import React, { Component } from 'react';
// import { Grid, Form, Button, Input, TextArea } from 'semantic-ui-react';
import { Container, Grid } from 'semantic-ui-react';
import yup from 'yup';

import { withFormik, Form, Field } from 'formik';

import ErrorMessage from './ErrorFormik';

import DropdownCustom from './DropdownCustom';
import DropdownSemantic from './DropdownSemantic';


// Helper for the demo
// import {
//   MoreResources,
//   DisplayFormikState,
// } from './FormikExample';


const DisplayFormikState = props1 =>
    <div style={{ margin: '1rem 0' }}>
        <pre
            style={{
                background: '#f6f8fa',
                padding: '.5rem',
            }}
        >
            <strong>props</strong> = {JSON.stringify(props1, null, 2)}
        </pre>
    </div>;


const MyForm = props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        handleReset,

        setFieldValue,
        setFieldTouched,
        dirty,
    } = props;
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Form className="ui form">
                        {/* <label htmlFor="email" style={{ display: 'block' }}>Email</label> */}
                        <div className="field">
                            <Field
                                type="text"
                                name="txtEmail"
                                placeholder="Email"
                                className={errors.txtEmail && touched.txtEmail ? ('text-input error') : ('text-input')}
                            />
                            <ErrorMessage name="txtEmail" />
                            {/* {errors.txtEmail && touched.txtEmail && (<div className="input-feedback">{errors.txtEmail}</div>)} */}
                        </div>
                        <div className="field">
                            <Field
                                type="text"
                                name="txtNumber_1"
                                placeholder="Nhập số lớn hơn 0"
                                className={errors.txtNumber_1 && touched.txtNumber_1 ? ('text-input error') : ('text-input')}
                            />
                            <ErrorMessage name="txtNumber_1" />
                            {/* {errors.txtNumber_1 && touched.txtNumber_1 && (<div className="input-feedback">{errors.txtNumber_1}</div>)} */}
                        </div>
                        <div className="field">
                            <Field
                                type="text"
                                name="txtNumber_2"
                                placeholder="Nhập số nhỏ hơn hoặc bằng 10"
                                className={errors.txtNumber_2 && touched.txtNumber_2 ? ('text-input error') : ('text-input')}
                            />
                            <ErrorMessage name="txtNumber_2" />
                            {/* {errors.txtNumber_2 && touched.txtNumber_2 && (<div className="input-feedback">{errors.txtNumber_2}</div>)} */}
                        </div>
                        <div className="field">
                            <Field
                                type="text"
                                name="txtOnlyText_1"
                                placeholder="Chỉ là chữ"
                                className={errors.txtOnlyText_1 && touched.txtOnlyText_1 ? ('text-input error') : ('text-input')}
                            />
                            <ErrorMessage name="txtOnlyText_1" />
                            {/* {errors.txtOnlyText_1 && touched.txtOnlyText_1 && (<div className="input-feedback">{errors.txtOnlyText_1}</div>)} */}
                        </div>
                        <div className="field">
                            <Field
                                type="text"
                                name="txtTextAndNumber"
                                placeholder="Chỉ là chữ và số"
                                className={errors.txtTextAndNumber && touched.txtTextAndNumber ? ('text-input error') : ('text-input')}
                            />
                            <ErrorMessage name="txtTextAndNumber" />
                            {/* {errors.txtTextAndNumber && touched.txtTextAndNumber && (<div className="input-feedback">{errors.txtTextAndNumber}</div>)} */}
                        </div>
                        <div className="field">
                            <Field component="select" name="color">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className="field">
                            <DropdownSemantic
                                value={values.topicsSemantic}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.topicsSemantic}
                                touched={touched.topicsSemantic}
                            />
                            <ErrorMessage name="topicsSemantic" />
                        </div>
                        <div className="field">
                            <DropdownCustom
                                value={values.topics}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.topics}
                                touched={touched.topics}
                            />
                            
                            {/* <Dropdown fluid selection options={stateOptions}></Dropdown> */}
                        </div>
                        <div className="field">
                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>

                    </Form>
                </Grid.Column>
                <Grid.Column width={8}>
                    <DisplayFormikState {...props} />
                </Grid.Column>

            </Grid.Row>
        </Grid>
    );
};



// const test = new RegExp("^([A-Za-z])*$");
// const zip = new RegExp("[0-9]{5}(-[0-9]{4})?");
const MyEnhancedForm = withFormik({
    mapPropsToValues: (props) => ({
        txtEmail: props.txtEmail || '',
        txtNumber_1: '',
        txtNumber_2: '',
        txtOnlyText_1: '',
        txtTextAndNumber: '',
        color: '',
        topics: [
            {
                "value": "Ken Wheeler",
                "label": "Ken Wheeler"
            }
        ],
        topicsSemantic: [
            "Being_Fabulous"
        ]
    }),

    // Custom sync validation
    // validate: (values) => {
    //     console.log(values)
    //     let errors = {};
    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // },
    validationSchema: yup.object().shape({
        txtEmail: yup.string().email(),
        txtNumber_1: yup.number().required().positive().integer(),
        txtNumber_2: yup.number()
            .required()
            .typeError('Value must be a number')
            .lessThan(10, "Nhập số nhỏ hơn hoặc bằng ${less}"), // eslint-disable-line
        txtOnlyText_1: yup.string().matches(/^([A-Za-z])*$/, 'Chỉ được nhập chữ'),
        txtTextAndNumber: yup.string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Bắt buộc nhập chữ và số'),
        topicsSemantic: yup.array().min(1, 'Pick at least 1 tag'),
        topics: yup.array()
            .min(3, "Pick at least 3 tags")
            .of(
                yup.object().shape({
                    label: yup.string().required(),
                    value: yup.string().required()
                })
            )
    }),

    handleSubmit: (values, { setSubmitting }) => {
        console.log(values)
        // console.log(setSubmitting(false))
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);

        // LoginToMyApp(values).then(
        //     user => {
        //         setSubmitting(false);
        //         // do whatevs...
        //         // props.updateUser(user)
        //     },
        //     errors => {
        //         setSubmitting(false);
        //         // Maybe even transform your API's errors into the same shape as Formik's!
        //         setErrors(transformMyApiErrors(errors));
        //     }
        // );

    },

    displayName: 'BasicForm', // helps with React DevTools
})(MyForm);


class ContactPage extends Component {
    render() {

        return (
            <Container>
                <MyEnhancedForm txtEmail="nguyenvan@gmail.com" />
            </Container>
            // <Grid container centered stackable>
            //     <Grid.Row>
            //         <Grid.Column>
            //             <Form>
            //                 <Form.Field control={Input} label='Tiêu đề' placeholder='Tiêu đề' />
            //                 <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Nội dung' placeholder='Nội dung' />
            //                 <Button type='submit'>Gửi</Button>
            //             </Form>
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>
        );
    }
}

export default ContactPage;







