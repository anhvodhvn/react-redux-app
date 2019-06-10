import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        let {count} = this.state;
        this.setState({count: count+1});
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <ClickCounter count={this.state.count} incrementCount={this.incrementCount} />
                <HoverCounter count={this.state.count} incrementCount={this.incrementCount} />
            </div>
        );
    }
}

export default Container;