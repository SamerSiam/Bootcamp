import React from 'react';
import './App.css'
import Spinner from './Components/Spinner.js'
import Card from './Components/Card.js'


    class App extends React.Component{

        state={isLoading:false, isOpen: true};

        componentDidMount() {
            this.setState({ isLoading: true });
            setTimeout(() => {
              this.setState({ isLoading: false });
            }, 2000);
          }

          handleTimer = () => {
            this.setState({ isOpen: false });
          };

        render(){
            return (
            <div> 
                 <Card imageUrl='https://picsum.photos/460/220'primaryText='Primary Text' 
            secondaryText="Secondary Text" link1="#" link1Text='SHARE' 
            link2="#" link2Text='EXPLORE'/>

            {this.state.isLoading && <Spinner/>}
                 

            </div>
            )
        }
    }
    export default App;
