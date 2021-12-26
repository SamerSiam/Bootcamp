
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Data from '../src/API/Data'
import HomePage from './Components/Ecommerce/HomePage'
import Products from './Components/Ecommerce/Products'
import Header from './Components/Ecommerce/Header'
import ProductDetails from './Components/Ecommerce/ProductDetails'
import NotFound from './Components/Ecommerce/NotFound';
import Button from './Components/Button';
import axios from 'axios';


class App extends React.Component {

    state={data:[],errorMsg:''}

    async componentDidMount(){
        try {
            const {data}=await Data.get('Items')
            this.setState({data:data});
            } 
            catch (err) {
                this.setState ({errorMsg:err.message})
            }
        }
   
     createNewRecord= async ()=>{
        let newRecord = {
        name:'Samer',
        address:'Moshe Levi',
        city:'Jerusalem',
        country:'Israel',
        }
       const {data}= await Data.post(`Items`, newRecord);
       
       this.setState((state)=>{
           return {data:[...state.data,data]};
       });

    }

     deleteRecord= async (id)=>{
       console.log("inside delete")
       await Data.delete(`Items/${id}`)
       const data=this.state.data.filter((el)=> el.id!==id)
       console.log(data);
       this.setState({ data });
    }

    getRecordbyID=()=>{

    }
    drawTable=() =>{
     
    }
                
  
    render()
    {
        // this.createNewRecord();
      
    return (
        <div className="ui container">
            
            <BrowserRouter>
            <Header/>
                <Switch>
                <Route path="/"> <HomePage/></Route>
                <Route path="/products" exact component={Products} />
                <Route path="/ProductDetails/:id" exact component={ProductDetails} />
                <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            <ul>
        {
          this.state.data
            .map(el =>
              <li key={el.id}>{el.id} {el.name} - {el.address} ,  {el.city} 
               <input
                type="updatedName"
                handleCallback={this.update}
                id={el.id}
              />
              <Button text="DELETE" onHandleClick={this.deleteRecord}/></li>
             
            )
        }
      </ul>
           <Button text="Add"/>
        </div>
        );
    }

}
export default App;
