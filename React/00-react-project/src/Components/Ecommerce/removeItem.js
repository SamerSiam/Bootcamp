import React from "react";
import Data from '../src/API/Data'

class removeItem extends React.Component {
    state={
        id:''
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }

      const {data}= await Data.post(`Items`, newRecord);
      
  }


}