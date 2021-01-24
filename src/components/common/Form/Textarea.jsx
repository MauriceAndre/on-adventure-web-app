import React from 'react'
import Input from './Input';

const Textarea = React.forwardRef((props, ref) => {
    return <Input as="textarea" ref={ref} {...props} />
});

export default Textarea;
