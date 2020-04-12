import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar, PageHeader, Row, Col, Button, Form, Input, Select } from 'antd';
import { CloseOutlined, SaveOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import PshirtLogo from './pshirtL.png'
import PshirtPice from './PshirtPice';
import  axios  from 'axios'
import './Tool.css';
const { Option } = Select;
const { Meta } = Card;
var editorState = undefined;
var openBook = false;

class Tool extends Component {
  state = {
    loading: true,
    create: false,
    route: ""
  };

  constructor(props) {
    super(props);

    
    this.handleEditor = this.handleEditor.bind(this);
  }

  handlePurchase() {

    this.setState({ route: "purchase" });

  }

  handleEditor() {


    this.setState({ route: 'editor' });
  }


  handleHome() {

    if(this.state.route == 'purchase'){
      this.setState({ route: 'editor' });
    
    } else {
      this.setState({ route: 'home' });
    }
  }
  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}



  render() {
    if (this.state.route == 'editor' & (this.props.route != 'editor'))
      this.props.create();

    
    if (this.state.route == 'purchase' & this.props.route != 'editor') {
      this.handleEditor();
    }
    
    return (
      <div>

        {(this.props.route == 'home' & this.state.route != 'editor') ? <Card>
          <PshirtPice create={this.handleEditor} large={true} />
        </Card> : ('')}

        {this.state.route == 'editor' ? (<Card>
          <PshirtPice newp={true} create={this.handleEditor} large={true} />



          <footer style={{ position: "relative", top: "calc(3vh)" }}>
            <Button onClick={() => { this.handlePurchase() }} key="close">ادامه</Button>
          </footer>




        </Card>) : (

            ''

          )}

        {this.state.route == 'purchase' ? (<Row>
          <Col span={24}>
            <Row>
              
            <Col span={24}>
            <Card>
              <Form              
                name="customized_form_controls"
              >

                <Col span={24}>
                  <Form.Item name="Size">
                    <span>
                      <Select placeholder='سایز *'  >
                        <Option value="xs">XS</Option>
                        <Option value="s">S</Option>
                        <Option value="m">M</Option>
                        <Option value="l">L</Option>
                        <Option value="xl">XL</Option>
                        <Option value="xxl">XXL</Option>
                      </Select>
                    </span>
                  </Form.Item>
                  <Form.Item name="Quantity" >
                    <span>
                      <Select placeholder='تعداد *'  >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                      </Select>

                    </span>
                  </Form.Item></Col>
                <Col span={24}>
                  <Form.Item name="َAddress"  >
                    <span>


                      <Input
                        type="text"
                        placeholder="آدرس *"

                      />
                    </span>
                  </Form.Item>
                </Col>

                <Row>
                  <Col span={12}>

                    <Form.Item name="َEmail"  >
                      <span>

                   

<Input
                          type="text"
                          placeholder="تلفن *"

                        />

                      </span>
                    </Form.Item>
                  </Col>

                  <Col span={12}>

                    <Form.Item name="َphone"  >
                      <span>


                      <Input
                          type="text"
                          placeholder="ایمیل"

                        />

                      </span>
                    </Form.Item>
                  </Col>

                </Row>

                <Col span={24}>
                  <Form.Item name="َAddress" >
                    <span>



                      <Row>
                        <Col span={24}>
                          <Button>
                            قابل پرداخت : 46,000,000
        </Button>
                        </Col>
                        </Row>

                    </span>

                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="َAddress" >
                    <span>



                      <Row>                        
                        </Row>
                        <Row>
                        <Col span={24}>
                          <Button onClick={ () =>{
                     
                            
                          let base33 = undefined;
                            axios.get('http://localhost:3000/static/media/random4.0340adaa.png', { responseType: 'arraybuffer' })
                            .then((response) => {                                                      
                              let image = btoa(
                                new Uint8Array(response.data)
                                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
                              );
                              base33 = `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
                              

                              window.tidioChatApi.messageFromVisitor('yooo');

                              
                              window.tidioChatApi.close();
                              window.location = "http://localhost:58062/payment/request";      
                            });
                            window.tidioChatApi.messageFromVisitor('new buyer: ');                                                        
                            window.tidioChatApi.close();
                                                  
                          }} type="primary" htmlType="submit">
                            خرید
        </Button>
                        </Col>
                      </Row>

                    </span>

                  </Form.Item>
                </Col>
              </Form>
        </Card>
        </Col>
        
            </Row>
          </Col>
        </Row>) : ('')}



      </div>
    );
  }
}

export default Tool
