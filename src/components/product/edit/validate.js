const DEFAULT_MIN_LENGTH = 3;
const DEFAULT_MAX_LENGTH = 50;

const validation = values => {
    let errors = {};
    
    ['title', 'author', 'category', 'length'].forEach(field => {
        if(!values[field]) errors[field]= 'Required';
    });

    // ['start_date', 'end_date'].forEach((field) => {
    //     if(values[field] && new Date(values[field]) <= (new Date()))
    //         errors[field] = `Value must be larger current date`;
    // });

    // ['notes'].forEach((field) => {
    //     if(values[field] && values[field].length < DEFAULT_MIN_LENGTH)
    //         errors[field] = `Must be at least ${DEFAULT_MIN_LENGTH} characters`;
    // });

    // ['notes'].forEach((field) => {
    //     if(values[field] && values[field].length > DEFAULT_MAX_LENGTH)
    //         errors[field] = `Must be at least ${DEFAULT_MAX_LENGTH} characters`;
    // });

    // if(Array.isArray(values.leaves) && values.leaves.length){
    //     let membersArrayErrors = [];
    //     values.leaves.forEach((item, index) => {
    //         let memberErrors = {};
    //         if (!item || !item.leave_date) {
    //             memberErrors.leave_date = 'Required';
    //             membersArrayErrors[index] = memberErrors;
    //         }
    //         if (!item || !item.start_time) {
    //             memberErrors.start_time = 'Required';
    //             membersArrayErrors[index] = memberErrors;
    //         }
    //         if (!item || !item.end_time) {
    //             memberErrors.end_time = 'Required';
    //             membersArrayErrors[index] = memberErrors;
    //         }
    //     });
    //     if (membersArrayErrors.length) {
    //         errors.leaves = membersArrayErrors;
    //     }
    // }

    return errors;
};
export default validation;

