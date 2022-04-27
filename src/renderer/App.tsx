// import icon from '../../assets/icon.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Container } from 'react-bootstrap'
import Topnavbar from './components/TopNavbar'
import InputFolder from './components/InputFolder';
import ListFiles from './components/listFiles'
import Footer from './components/Footer'

import React from 'react';

export default class App extends React.Component{
  getInitialState() {
    return {
      filespathdata: ''
    }
  }
  handlePathData = (value) => {
    let report = "app" + value
    alert(report)
  }
  render() {
    return (
      <div>
        <Topnavbar/>
        <Container>
          <InputFolder filespath={this.handlePathData}/>
          <ListFiles/>
          <Footer/>
        </Container>
      </div>
    );  
  }
}
