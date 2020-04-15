import React, {PropTypes} from 'react';

////stateless component / Functional component
const Field = (props) => (
    <input
    onChange={props.onChange}
 type={props.textarea ? 'textarea' : 'text'}
 value={props.value} 
 />
);
/////Looked this up and it says a protype is a way to ensure we are exspecting certain props that will enable the componet to fucntion properly.
Field.propTypes = {
onChnage: PropTypes.func.isRequired,
value: PropTypes.string.isRequired,
textarea: PropTypes.bool.isRequired,
};

Field.defaultProps = {
    textarea: false,
};

export default Field;