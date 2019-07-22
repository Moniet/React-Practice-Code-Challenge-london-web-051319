import React, { Fragment } from 'react'

class Sushi extends React.Component {
  render() {
    const { id, name, img, price, eaten } = this.props;
    return (
      <div className="sushi" key={ Math.random() }>
        <div className="plate"
             onClick={() => this.props.eatSushi(id, price)}>
          {
            eaten
            ? null
            : <img src={img} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    );
  }
}

export default Sushi
