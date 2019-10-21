import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends Component {
    state = {
        value: this.props.counter.value
    };
    render() {
        return <div><span className={this.getBadgeClass()}>{this.state.value}</span>
            <button className="btn m-2 btn-sm btn-secondary" onClick={this.handleIncrementEvent} >Increament</button>
            <button className="btn m-2 btn-sm btn-danger" onClick={() => this.props.onDelete(this.props.counter.id)} >Delete</button>
        </div >;
    };

    handleIncrementEvent = () => {
        this.setState({ value: this.state.value + 1 })
        console.log("Increment received");
    };

    getBadgeClass() {
        let classNames = "badge m-2 ";
        classNames += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classNames;
    }
}
export default Counter;