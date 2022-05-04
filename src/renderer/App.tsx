// import icon from '../../assets/icon.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Container } from 'react-bootstrap'
import Topnavbar from './components/TopNavbar'
import InputFolder from './components/InputFolder';
import ListFiles from './components/listFiles'
import WorkerOptions from './components/WorkerOptions'

import React from 'react';

export default class App extends React.Component{
  constructor() {
    super()

    this.state = {
      filespathdata: null,
      listFilesData: []
    }
  }
  handlePathData = (value) => {
    // let report = "app" + value
    this.setState({
      filespathdata: value
    })
  }
  handlerSendFilesData = (value) => {
    this.setState({
      listFilesData: value
    })
  }
  render() {
    return (
      <div>
        <Topnavbar/>
        <Container>
          <InputFolder filespath={this.handlePathData}/>
          <WorkerOptions
            workerListFilesData={this.state.listFilesData}
          />
          <ListFiles
            retrievefilespath={this.state.filespathdata}
            sendFilesData={this.handlerSendFilesData}
          />
        </Container>
      </div>
    );  
  }
}
