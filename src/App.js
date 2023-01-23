//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
      {/* <Switch> */}
          {/* <Route exact path="/about" component={About}>  */}
              {/* <About/> */}
          {/* </Route>
          <Route exact path="/" component={TextForm}>   */}
              <TextForm heading="Enter the Text To  Analyze" mode={mode} showAlert={showAlert}></TextForm>
          {/* </Route> */}
      {/* </Switch> */}
      </div>
  </>
  );
}
 
export default App; 
