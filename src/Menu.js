import React from 'react';
import MenuSummary from './MenuSummary.js';
import MenuDetails from './MenuDetails.js';
 
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      selectedMenuItem: null
    }
  }
 
  componentDidMount() {
    console.log("Calling menu service");
    fetch("/menu/menu")
      .then(res => res.json())
      .then(menu => {
        this.setState({ menuList: menu });
        console.log("Menu loaded");
      })
      .catch((error) => {
        console.log("Failed to get menu");
        alert(error);
      })
  }
 
  updateDetails = (menuItem) => {
    console.log("MenuItem selected: %s", JSON.stringify(menuItem));
    this.setState({ selectedMenuItem:menuItem});
  }
 
  render() {
    return (
      <div>
        <h1>Restaurant Menu</h1>
        <hr></hr>
        <div className="MenuList">
          <b>Menu</b>
          <ol>{
              this.state.menuList.map(
                (value, index) => {
                  return <li><MenuSummary menu={value} menuClicked={this.updateDetails} index={index} /></li>
                }
              )
            }</ol>
        </div>
        <div><MenuDetails menu={this.state.selectedMenuItem} /></div>
      </div>
    )
  }
}
 
export default Menu;