import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Utils } from 'renderer/scripts/Utils'
import fs from 'fs'

export default class ListFiles extends React.Component <any, any> {
  constructor() {
    super()

    this.state = {
      fulldir: null,
      listfileArray: [],
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
        this.setState({})
        this.props.sendFilesData(this.state.listfileArray)
      }
    }
  }
  handleSelection = (id) => {
    let idx = id
    let listfileArray = [...this.state.listfileArray ]
    if(this.state.listfileArray[idx].selected == false)
      listfileArray[idx] = {...listfileArray[idx], selected: true}
    else
      listfileArray[idx] = {...listfileArray[idx], selected: false}

    console.log("listfiles: ", listfileArray)
    //save data with setState, keep for future array
    this.setState({listfileArray})
    this.props.sendFilesData(listfileArray)
  }
  render() {
    return (
      <ListGroup className='scroll'>
        {this.state.listfileArray.map(d => (
          <ListGroup.Item
            key={d.id}
            className={d.selected == true ? 'active': null}
            onClick={() => this.handleSelection(d.id)}
          >{d.name}
        </ListGroup.Item>
        ))} 
      </ListGroup>
    )
  }
}
