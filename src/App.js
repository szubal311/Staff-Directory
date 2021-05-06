import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Index from "./pages/Index";
import './index.css';  

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper> 
          <Route path="/" component={props => <Index {...props} />}/>
          </Wrapper>        
      </div>
    </Router>
  );
}

export default App;
