import React from 'react'

class Fish extends React.Component {
    render() {
        console.log(this.props.details)
        console.log('fish')
        const details = this.props.details;
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                {/* <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                >
                    {isAvailable ? "Add To Order" : "Sold Out!"}
                </button> */}
            </li>
        )
    }
}

export default Fish