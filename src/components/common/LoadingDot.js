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
        this.interval = setInterval(() => {
            if(this.props.loading){
                this.setState({ // eslint-disable-line react/no-did-mount-set-state
                    frame: this.state.frame + 1
                });
            }
            else{
                this.setState({
                    frame: 0
                });
            }
        }, this.props.interval);
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
    dots: 5,
    loading: false
};

LoadingDot.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number,
    loading: PropTypes.bool
};

export default LoadingDot;