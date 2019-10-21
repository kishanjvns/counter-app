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
            {
                this.state.counters.map(counter => {
                    return <Counter key={counter.id} counter={counter} onDelete={this.handleDeleteEvent} />
                })

            }
        </div>
        );
    }
    handleDeleteEvent = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
        console.log("Delete invoked", counterId);
    };
}
export default Counters;