import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import { thisExpression } from '@babel/types';
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {       
        const { params } = this.props.match;
        //first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {           
            this.setState({ order: JSON.parse(localStorageRef)})
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
        
            context:this,
            state: "fishes"
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    
    componentDidUpdate(){
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }


    addFish = fish => {

        //take a copy of the exsitting state
        const fishes = { ...this.state.fishes };
        //Add our new fish to that fishes variable.
        fishes[`fish${Date.now()}`] = fish;
        // Set the new fishes object
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        // 1.take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;

        // 3. Call setState to update our state object
        this.setState({ order });
    }


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                 key={key}
                                 index={key} 
                                 details={this.state.fishes[key]}
                                addToOrder={this.addToOrder} />
                        ))}


                    </ul>
                </div>
                <Order  fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />

            </div>
        )
    }

}

export default App;