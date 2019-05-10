import React, {PropTypes} from 'react';

const DemoUploadFile = ({onChangeFile}) => {  
    return (
        <div>
            <input id="inputFile" type="file" name="inputFile" onChange={onChangeFile} />
        </div>
    );
};

DemoUploadFile.propTypes = {
    onChangeFile: PropTypes.func
};

export default DemoUploadFile;