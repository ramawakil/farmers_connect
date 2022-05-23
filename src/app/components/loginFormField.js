import React from 'react';
import AppForm from "./forms/AppForm";
import AppFormField from "./forms/AppFormField";
import AppSubmitButton from "./forms/AppSubmitButton";

function LoginFormField({initialValues, validationSchema, handleSubmit, name, type, ...props}) {
    return (
        <>
            <AppForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <AppFormField width='60%' name={name} variant='standard' forwardIcon={(<AppSubmitButton icon/>)}
                              type={type} {...props} />

            </AppForm>
        </>
    );
}

export default LoginFormField;