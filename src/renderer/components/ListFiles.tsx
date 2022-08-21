import React from 'react';
import { ListGroup } from 'react-bootstrap';
import fs from 'fs';
import { Utils } from '../scripts/Utils';

export default class ListFiles extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      listfileArray: [],
    };
  }

  componentDidUpdate(props: { retrievefilespath: string }) {
    if (this.props.retrievefilespath !== props.retrievefilespath) {
      const path = this.props.retrievefilespath;
      const dirLocation = Utils.fulldirFunc(path);
      const rdir = fs.readdirSync(dirLocation);
      let countList = 0;
      rdir.forEach((filename) => {
        this.state.listfileArray.push({
          id: countList,
          name: filename,
          selected: false,
        });
        countList += 1;
      });
      if (countList > 0) {
        this.setState({});
        this.props.sendFilesData(this.state.listfileArray);
      }
    }
  }

  handleSelection = (id: any) => {
    const idx = id;
    const listfileArray = [...this.state.listfileArray];
    if (this.state.listfileArray[idx].selected === false)
      listfileArray[idx] = { ...listfileArray[idx], selected: true };
    else {
      listfileArray[idx] = { ...listfileArray[idx], selected: false };
    }

    console.log('listfiles: ', listfileArray);
    // save data with setState, keep for future array
    this.setState({ listfileArray });
    this.props.sendFilesData(listfileArray);
  };

  render() {
    return (
      <ListGroup className="scroll">
        {this.state.listfileArray.map((d: any) => (
          <ListGroup.Item
            key={d.id}
            className={'' + (d.selected === true ? 'active' : null)} // eslint-disable-line
            onClick={() => this.handleSelection(d.id)}
          >
            {d.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
