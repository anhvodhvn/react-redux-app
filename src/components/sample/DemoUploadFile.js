import React, {PropTypes} from 'react';

const DemoUploadFile = ({handleSubmitFile}) => {  
    return (
        <form onSubmit={handleSubmitFile}>
            <input type="file" name="myFile" />
            <input type="submit" />
        </form>
    );
};

DemoUploadFile.propTypes = {
    handleSubmitFile: PropTypes.func
};

export default DemoUploadFile;