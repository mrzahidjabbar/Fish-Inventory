import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import samplefishes from '../sample-fishes'
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this)
        this.loadSamples = this.loadSamples.bind(this)
        this.addOrder = this.addOrder.bind(this)
        //components states
        this.state = {
            fishes: {},
            Order: {}
        }
    }

    //func for updating fish state
    addFish = (fish) => {
        console.log('ahhahhahh')
        //create a copy of current state
        const fishes = { ...this.state.fishes }
        //create a timestamp
        const timestamp = Date.now()
        fishes[`fish-${timestamp}`] = fish
        //update the state
        this.setState({ fishes: fishes })
    }

    addOrder(key) {
        const order = { ...this.state.order }
        order[key] = order[key] + 1 || 1;
        this.setState({ order: order })
    }

    //func for updating order state
    loadSamples() {
        console.log('hahahhaha');
        this.setState({
            fishes: samplefishes,
        })
    }

    render() {
        const { fishes } = this.state
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    {
                        Object
                            .keys(fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} />)
                    }
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App