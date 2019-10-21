import React, { Component } from "react";
import Counter from './Counter'

class Counters extends Component {
    state = {
        counters: [{ id: 1, value: 0 },
        { id: 2, value: 4 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }]
    };

    render() {
        return (<div>
            <button className="btn btn-sm btn-danger m-2" onClick={this.handleOnResetEvent}>Reset</button>
            {
                this.state.counters.map(counter => {
                    return <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrementEvent} onDelete={this.handleDeleteEvent} />
                })

            }
        </div>
        );
    }
    handleIncrementEvent = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({ counters })
    }

    handleDeleteEvent = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
        console.log("Delete invoked", counterId);
    };

    handleOnResetEvent = () => {
        console.log("reset invoked");
        const counters = this.state.counters.map(e => {
            e.value = 0
            return e;
        });
        this.setState({ counters });
    };
}
export default Counters;