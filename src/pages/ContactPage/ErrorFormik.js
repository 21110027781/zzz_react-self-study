import React from 'react';
import { Message } from 'semantic-ui-react'
import { Field, getIn } from 'formik';

const ErrorMessage = ({ name }) => (
    <Field
        type="text"
        name={name}
        render={({ form }) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
        return touch && error ? (<Message color='red'>{error}</Message>) : (null);
        }}
    />
);

export default ErrorMessage;