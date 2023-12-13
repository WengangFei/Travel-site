import './index.css';
import Header from './components/header';
import Images from './components/listImages';
import logo from './images/logo.png';
import data from './data';


function App() {
  
  return (
    <div className="App">
      <Header image={logo}/>
      <Images data={data}/>
  
    </div>
  );
}

export default App;


