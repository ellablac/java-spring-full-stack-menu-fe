import React from 'react';
class MenuDetails extends React.Component {
 
   render() {
    return (
      (this.props.menu) ? (
        <div>
          <label>Item Number</label>: {this.props.menu.menuItemNumber}<br />
          <label>Category</label>: {this.props.menu.category}<br />
          <label>Description</label>: {this.props.menu.description}<br />
          <label>Available</label>: {this.props.menu.numAvailable}<br />
        </div>)
        : (
          <div>No Item Selected</div>
        )
    )
  }
}
 
export default MenuDetails;