import React, { Component } from 'react';
// import { Grid, Form, Button, Input, TextArea } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';


import { withFormik, Form, Field } from 'formik';
// Helper for the demo
// import {
//   MoreResources,
//   DisplayFormikState,
// } from './FormikExample';

const DisplayFormikState = props1 =>
    <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'monospace' }} />
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
        // values,
        touched,
        errors,
        isSubmitting,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        handleReset,
        dirty,
    } = props;
    return (
        <Form>
            {/* <label htmlFor="email" style={{ display: 'block' }}>Email</label> */}
            <Field 
                type="email" 
                name="email" 
                placeholder="Email" 
                className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            />
            <Field 
                type="text" 
                name="txtNumber_1" 
                placeholder="Nhập số lớn hơn 0" 
                className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            />
            <Field 
                type="text" 
                name="txtNumber_2" 
                placeholder="Nhập số nhỏ hơn hoặc bằng 10" 
                className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            />
            <Field 
                type="text" 
                name="txtOnlyNumber_1" 
                placeholder="Chỉ là số" 
                className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            />
            <Field 
                type="text" 
                name="txtTextAndNumber" 
                placeholder="Chỉ là chữ và số" 
                className={errors.email && touched.email ? ('text-input error') : ('text-input')}
            />
            {/* <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.email && touched.email ? ('text-input error') : ('text-input')
                }
            /> */}
            {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}

            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >Reset
            </button>
            <button type="submit" disabled={isSubmitting}>Submit</button>

            <DisplayFormikState {...props} />
        </Form>
    );
};



const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ email: '' }),

    // Custom sync validation
    validate: (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        // console.log(values)
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
                <MyEnhancedForm />
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







