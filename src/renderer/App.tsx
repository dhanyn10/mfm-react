// import icon from '../../assets/icon.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import Topnavbar from './components/TopNavbar';
import { InputFolder } from './components/InputFolder';
import ListFiles from './components/ListFiles';
import WorkerOptions from './components/WorkerOptions';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      filespathdata: null,
      listFilesData: [],
    };
  }

  handlePathData = (value: string) => {
    // let report = "app" + value
    this.setState({
      filespathdata: value,
    });
  };

  handlerSendFilesData = (value: Array<any>) => {
    console.log('App - filesdata: ', value);
    this.setState({
      listFilesData: value,
    });
  };

  render() {
    return (
      <div>
        <Topnavbar />
        <Container>
          <InputFolder filespath={this.handlePathData} />
          <WorkerOptions workerListFilesData={this.state.listFilesData} />
          <ListFiles
            retrievefilespath={this.state.filespathdata}
            sendFilesData={this.handlerSendFilesData}
          />
        </Container>
      </div>
    );
  }
}
