import React from 'react'; 
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import NotFound from './NotFound';


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
    render() {
        return (
            <div className="catch-of-the-day"> 
           <div className="menu">
            <Header tagline="Fresh Seafood Market" />
           </div>
           <Order />
           <Inventory addFish={this.addFish} />
           
            </div>
        )
    }

}

export default App;