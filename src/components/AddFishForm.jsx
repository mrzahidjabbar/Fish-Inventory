import React from 'react'

class AddFishForm extends React.Component {
    createFish(event) {
        event.preventDefault()
        console.log('create fish')
        const Fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value
        }
        // console.log('before calling addFish')
        this.props.addFish(Fish)
        console.log(Fish)
        this.fishForm.reset()
    }

    render() {
        return (
            <form className='fish-edit' ref={(input) => { this.fishForm = input }} onSubmit={(e) => this.createFish(e)}>
                <input type='text' ref={(input) => { this.name = input }} placeholder='Fish Name' />
                <input type='price' ref={(input) => { this.price = input }} placeholder='Fish Price' />
                <select ref={(input) => { this.status = input }}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Not Fresh</option>
                </select>
                <textarea type='text' ref={(input) => { this.desc = input }} placeholder='Fish Desc'></textarea>
                <button type='submit'>Add Fish</button>

            </form >
        )
    }
}

export default AddFishForm