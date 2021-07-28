import React from 'react'; 
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import { thisExpression } from '@babel/types';


class App extends React.Component {
     state = {
         fishes: {},
         order: {}
     };

     addFish = fish => {
         
        //take a copy of the exsitting state
        const fishes = {...this.state.fishes};
        //Add our new fish to that fishes variable.
        fishes[`fish${ Date.now()}`] = fish;
        // Set the new fishes object
        this.setState({fishes});
     };

     loadSampleFishes = () => {
         this.setState({ fishes : sampleFishes});
     }
    render() {
        return (
            <div className="catch-of-the-day"> 
           <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
                {Object.keys(this.state.fishes).map(
                    key => <Fish key={key} details={this.state.fishes[key]}/>
                    )}
               
            </ul>
           </div>
           <Order />
           <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
           
            </div>
        )
    }

}

export default App;