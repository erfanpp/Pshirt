import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar, PageHeader, Row, Col } from 'antd';
import { CloseOutlined, SaveOutlined, ShoppingCartOutlined, PlusCircleOutlined, UploadOutlined } from '@ant-design/icons';
import PshirtLogo from './pshirtL.png'
import FilledPlay from './filledPlay.png'


import './Tool.css';

const { Meta } = Card;

let clickObj = undefined;
let newp = undefined;
let image = undefined;

class PshirtPice extends Component {
  state = {
    loading: true,
    largeClass: '',
    file: null    
  };

  constructor(props) {
    super(props);
   
  clickObj = clickObj ? clickObj : props.create;
  newp = props.newp;
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    try{
      let d = URL.createObjectURL(event.target.files[0]);
    this.setState({
      file: d
    })
    image = d;
  }
    catch { 
      
    }
  }
click() {  
  clickObj();
}

render() {
  if(this.state.file != image)
  this.setState({
    file: image
  })
  var largeClass = '';
  if (this.props.large) {
    largeClass = 'LargeShirt';
  }
  let classn = 'UserPic ' + largeClass;
  let classs = 'shirt ' + largeClass;
if(!this.props.large)
  return (
    <div className={classs}>
      
      <img className={classn} src={this.props.dimage} />
    </div>



  );
  if(!newp)
  return (
    <div onClickCapture={() => {this.setState()}} className={classs}>
      <PlusCircleOutlined onClick={  this.click } className='UserPic Scale6' ></PlusCircleOutlined>
    </div>)

let uploadButtonIconClass = 'UserPic Scale6 UploadPiceBottom';
if(this.state.file != null)
uploadButtonIconClass += ' ND'

  return (
    <div onClickCapture={() => {this.setState()}} className={classs}>
 <Row>
   <Col span={24} ><div class="upload-btn-wrapper">
  <button class="btn"> 
  
    <div className='previewImageWrapperClass' >
      <img className='previewImageClass' src={this.state.file}/>
      </div>
  
   <UploadOutlined onClick={  this.click } className={uploadButtonIconClass} ></UploadOutlined></button>
  <input className='UploadPice2' type="file" onChange={this.handleChange} name="myfile" />
</div></Col>
   
 </Row>
      
    </div>


  );
}
}

export default PshirtPice
