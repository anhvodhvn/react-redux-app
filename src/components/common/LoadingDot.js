import React, { PropTypes } from 'react';

class LoadingDot extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = { frame: 1 };
    }

    componentWillMount(){
        clearInterval(this.interval);
    }

    componentDidMount(){
        this.onMount(() => {
            this.interval = setInterval(() => {
                this.setState({ // eslint-disable-line react/no-did-mount-set-state
                    frame: this.state.frame + 1
                });
            }, this.props.interval);
        });
    }

    render(){
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while(dots > 0){
            text += '.';
            dots--;
        }
        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

LoadingDot.defaultProps = {
    interval: 300,
    dots: 5
};

LoadingDot.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};

export default LoadingDot;