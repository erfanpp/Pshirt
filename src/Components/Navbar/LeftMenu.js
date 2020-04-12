import React, { Component } from 'react';
import { Menu, Icon, Button, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './LeftMenu.css'
import Link from "next/link";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };





  render() {
    return (
      <Menu mode="horizontal">      
      <Menu.Item key="rules">
        <a onClick={this.showModal}>قوانین</a>
        <Modal
          title="قوانین"
          visible={this.state.visible}
          onOk={this.handleOk}

          footer={[
            <Button key="submit" type="primary" onClick={this.handleOk}>
              باشه
            </Button>,
          ]}

        >
          <p>
توجه داشته باشید کلیه اصول و رویه‏‌های ‏ <strong>پیشرت</strong>  منطبق با قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است </p>      
        </Modal>
      </Menu.Item>
    </Menu>
    
    );
  }
}

export default LeftMenu;
