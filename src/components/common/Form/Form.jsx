import React from 'react'
import { useForm } from 'react-hook-form';
import { Form as BootstrapForm } from 'react-bootstrap';
import Input from './Input';
import Submit from './Submit';
import Textarea from './Textarea';
import findByType from '../../../utils/findByType';

const components = [Input, Textarea, Submit];

function Form({ children, onSubmit, ...rest }) {
    const { register, handleSubmit, errors } = useForm();

    const renderChild = (child) => {

        const row = findByType([child], BootstrapForm.Row);

        if (row) {
            return (
                <BootstrapForm.Row>
                    {React.Children.map(row.props.children, child => renderChild(child))}
                </BootstrapForm.Row>
            );
        }

        for (const SubComponent of components) {
            const component = findByType([child], SubComponent);

            if (!component) continue;

            return <SubComponent ref={register} errors={errors} {...component.props} />
        }

        return null;
    }

    return (
        <BootstrapForm onSubmit={handleSubmit(onSubmit)} {...rest} >
            {React.Children.map(children, child => renderChild(child))}
        </BootstrapForm>
    )
}

Form.Input = Input;
Form.Textarea = Textarea;
Form.Submit = Submit;
Form.Row = BootstrapForm.Row;

export default Form;