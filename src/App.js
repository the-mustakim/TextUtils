//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Switch, Route} from 'react-router-dom';

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg : message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background='#020a17';
      showAlert("Dark Mode has been Enabled","Success")
      document.title="TextUtils-Dark Mode"
    }
    else
    {
      setMode('light')
      document.body.style.background="white";
      showAlert("Light Mode has been Enabled","Success")
      document.title="TextUtils-Light Mode"
    }
  }

  return (
  <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about" component={About}> 
              <About mode={mode}/>
          </Route>
          <Route path="/" component={TextForm}>  
              <TextForm heading="TestUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}></TextForm>
          </Route>
      </Switch>
      </div>
  </>
  );
}
 
export default App; 
