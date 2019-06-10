import React, { Component } from 'react';

const updatedComponent = OriginalComponent => {
    class Hoc extends Component {
        render() {
            return (
                <OriginalComponent />
            );
        }
    }
    return Hoc;
};

export default updatedComponent;