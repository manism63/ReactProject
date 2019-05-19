import React from 'react';


export default class Logout extends React.PureComponent {
    constructor(props) {
        super(props);
        props.history.replaceState(null, null, "/");
    }

    componentDidMount(){
        this.props.history.push({
            pathname: '/loginPage'
        });
    }

    render() {
        return(
            <div>Logout Page </div>
        )
    }
};
