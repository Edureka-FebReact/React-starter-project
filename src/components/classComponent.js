import React from "react";

class ClsComponent extends React.Component {
    constructor() {
        super(); // this must be used after constructor to define the parent class 
        this.state = {type: "class components" , by: "Nishant" , during: "Edureka Session"}
    }
    // static getDerivedStateFromProps(props, state) {
    //     return{by: props.trainer};
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({by: "AJay"})
        } , 5000)
    }


    render() {
        return <h1>This is the {this.state.type} by {this.state.by} during the {this.state.during}</h1>
    }
}

export default ClsComponent;