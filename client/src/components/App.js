import React, {Component} from 'react';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {Switch, Route} from "react-router-dom";
import './index.css';
import Search from "./Search";
import SavePhoto from "./SavePhoto";

class App extends Component{
    constructor(props) {
    super(props);
        this.state = {
              photos: []
  };
     // this.handleGetPhotos = this.handleGetPhotos.bind(this);
}

// handleGetPhotos(photos){
//    this.setState({'photos': photos});
//  }

  render() {
      return (
          <div>
              <Navbar/>
                  <Switch>
                      <Route exact path="/" component={Search}/>
                      <Route path="/boards" component={SavePhoto}/>
                  </Switch>
              <Footer/>
          </div>
        )
    }
}

export default App;
