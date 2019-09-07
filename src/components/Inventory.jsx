import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
    // constructor(props) {
    //     super(props)
    // }


    haha() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <AddFishForm addFish={this.props.addFish} />
                <div><button type='button' onClick={this.props.loadSamples}>Load Samples</button></div>
            </div>
        )
    }
}
export default Inventory