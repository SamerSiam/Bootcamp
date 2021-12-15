
import './App.css';
import FavoriteColor from './FavoriteColor.js';
import Box from './Box'
import './Box.css'
import Spinner from './Spinner';

function App() {
  return (
    <div className="App">
      <h1> my favorite color is
        <FavoriteColor />
      </h1>
      <div><Box />
      <Spinner message="Please accept location request"/>
      </div>
      
    </div>
  ); 
}

export default App;
