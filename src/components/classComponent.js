import React from "react";

class ClsComponent extends React.Component {
    constructor() {
        super();
        this.state = {type: "class components" , by: "Nishant" , during: "Edureka Session"}
    }


    render() {
        return <h1>This is the {this.state.type} by {this.state.by} during the {this.state.during}</h1>
    }
}

export default ClsComponent;