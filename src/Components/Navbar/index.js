import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import PshirtLogo from './pshirt.png';
import { LoginOutlined } from '@ant-design/icons';
import Link from "next/link";

class Navbar extends Component {
	state = {
    current: 'mail',
	visible: false
  }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
	const { direction, popupPlacement } = this.state;
    return (
        <nav className="menuBar">
        	<div className="logo">			
        		<img className="PshirtLogo" src={PshirtLogo} />
        	</div>
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu />
				    </div>
				    <div className="rightMenu">
	        			<RightMenu />
				    </div>
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
		          title="پیشرت"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <LeftMenu />
		          <RightMenu />
		        </Drawer>

        	</div>
	

        </nav>			
);
  }
}

export default Navbar;
