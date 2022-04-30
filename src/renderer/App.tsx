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
  constructor() {
    super()

    this.state = {
      filespathdata: null
    }
  }
  handlePathData = (value) => {
    // let report = "app" + value
    this.setState({
      filespathdata: value
    })
  }
  render() {
    return (
      <div>
        <Topnavbar/>
        <Container>
          <InputFolder filespath={this.handlePathData}/>
          <ListFiles retrievefilespath={this.state.filespathdata}/>
          <Footer/>
        </Container>
      </div>
    );  
  }
}
