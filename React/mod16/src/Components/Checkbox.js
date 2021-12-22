import React from "react";
import { Component } from "react/cjs/react.production.min";

class Checkbox extends React.Component{

   state={isChecked:false}


   toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
  
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  
    handleCheckboxChange(label);
  }
    render (){
        return (
           <div className="checkbox">
        
          <input
                     type="checkbox"
                     value={this.props.label}
                     checked={this.state.isChecked}
                     onChange= {this.toggleCheckboxChange}
          />

          
        
      </div>
            );
    }
}
export default Checkbox;

