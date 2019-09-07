import React from 'react'


class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this)
    }

    goToStore = (event) => {
        event.preventDefault();
        console.log(this.storeInput.value);
    }

    render() {
        //comment in JS
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/*comment in JSX*/}
                <h2>Please enter a Store test</h2>
                <input type="text" placeholder="enter your name"
                    ref={(input) => {
                        this.storeInput = input
                    }} />
                <button type="submit">Visit the Store</button>
            </form>
        )
    }

}


export default StorePicker