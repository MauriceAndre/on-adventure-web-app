import React from 'react'
import { Col, Form } from 'react-bootstrap'

const Input = React.forwardRef(({ name, label, errors, width, ...rest }, ref) => {
    
    return (
        <Form.Group as={Col} {...width}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                name={name}
                placeholder={label}
                autoComplete="off"
                ref={ref}
                {...rest}
            />
            {errors[name] && (
                <Form.Text className="text-danger">
                    {errors[name]}
                </Form.Text>
            )}
        </Form.Group>
    )
});

export default Input;