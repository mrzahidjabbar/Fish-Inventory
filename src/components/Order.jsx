import React from 'react'

class Order extends React.Component{
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this)
    }

    goToStore(){
        console.log('hi im the goToStore')
    }

    render(){
        return(
            <p>The Order</p>
        )
    }
}

export default Order