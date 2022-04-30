import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Utils } from 'renderer/scripts/Utils'
import fs from 'fs'

export default class ListFiles extends React.Component {
  constructor() {
    super()

    this.state = {
      fulldir: null,
      listfileArray: [],
      isDataExist: true,
      listFilesHtml: []
    }
  }
  componentDidUpdate(props)
  {
    if(this.props.retrievefilespath !== props.retrievefilespath)
    {
      let path = this.props.retrievefilespath
      let dirLocation = Utils.fulldirFunc(path)
      let rdir = fs.readdirSync(dirLocation)
      let countList = 0
      rdir.forEach((filename) => {
        this.state.listfileArray.push({
            id: countList,
            name: filename,
            selected: false
        })
        countList++
      })
      if(countList > 0)
      {
        this.setState({
          isDataExist: true
        })
      }
    }
  }
  render() {
    return (
      <ListGroup>
        {this.state.listfileArray.map(d => (
          <ListGroup.Item key={d.id}>{d.name}</ListGroup.Item>
        ))} 
      </ListGroup>
    )
  }
}
