
import { Row, Col, PageHeader, Button } from 'antd'
import Tool from './Tool'

import React, { Component, useLayoutEffect, useState } from 'react';

import PshirtLogo from './pshirtL.png'
import './Tool.css';
import PshirtPice from './PshirtPice'

import R1 from './random1.png'
import R2 from './random2.png'
import R3 from './random9.png'
import R4 from './random4.png'
import R5 from './random8.jpg'
import R6 from './random6.png'
import R7 from './random10.webp'
 


var moreBack = false;
var noSides = true;
class Editor extends Component {
	state = {
		device: window.innerWidth > 767 ? 'L' : 'S',
		route: 'home'
	}

	constructor() {
		super();
		this.backFlag = React.createRef();
		this.handleCreate = this.handleCreate.bind(this);		
	}
	handleCreate() {			
		this.setState({ width: window.innerWidth, height: window.innerHeight, route: 'editor' });

	}

	getDevice() {
		return  window.innerWidth > 767 ? 'L' : 'S';
	}

	getToolColumnSpan() {
		return  this.getDevice() == 'L' ? 12 : this.getDevice() ==  'S' ? 24 : '' ;
	}
	getSideColumnSpan () {
		let r =  this.state.route ==  'home' ?  this.getDevice() == 'L' ? 6 : this.getDevice() ==  'S' ? 24 : 0 : 6;		
		return r;
	}


	isHome() {
		return this.state.route == 'home';
	}	
	isEditor() {
		return this.state.route == 'editor';
	}
	isPurchase() {
		return this.state.route == 'purchase';
	}

	getShowShirts() {
		if(this.state.route != 'home')
		return 0;

	
		if(this.getDevice() == 'S')
		return 8;

		if(this.getDevice() == 'L')
		return 24;
		
	}

	updateDimensions = () => {	
			this.setState({ width: window.innerWidth, height: window.innerHeight, device: this.getDevice() });
	};
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}


	goBack() {		
		if (this.isEditor())
		{
			this.setState({ width: window.innerWidth, height: window.innerHeight, route: 'home' })
			
			this.backFlag.current.handleHome();
		}

		if (this.isPurchase())
		this.setState({ width: window.innerWidth, height: window.innerHeight, route: 'editor' })
	}

	render() {		
	
		let headerColClass = 'CenterelizedText ToolSide';
		if (this.state.route == 'home')
		{
		moreBack = false;
		} else {
		moreBack = true;
		}

let tool = <Tool route={this.state.route} ref={this.backFlag} device={this.state.device} create={this.handleCreate}  />;




		return (
			<Row> 
				<Col className={headerColClass} span={24} >					
				
		{
			(this.isHome()) ? 
			<PageHeader className="site-page-header">
			<h1>پیشرت</h1>
			</PageHeader> : 
			<PageHeader className="site-page-header" onBack={()=>{ this.goBack(); }} title='پیشرت جدید من' >
			</PageHeader>
		}
				</Col>

				<Col className='CenterelizedText ToolSide' span={this.getSideColumnSpan()}>
					<Row>
						<Col span={this.getShowShirts()}>
							<PshirtPice dimage={R1} />
						</Col>
						<Col span={this.getShowShirts()}>
							<PshirtPice  dimage={R2} />
						</Col>
						<Col span={this.getShowShirts()}>
							<PshirtPice  dimage={R3} />
						</Col>
					</Row>
				</Col>
				<Col editor className='CenterelizedText' span={this.getToolColumnSpan()}>
					{ (this.state.route == 'home' ) ? 
					(tool) : (tool)   
					}

					</Col>

				<Col className='CenterelizedText ToolSide' span={this.getSideColumnSpan()}>
					<Row>
					<Col span={this.getShowShirts()}>
							<PshirtPice  dimage={R4} />
						</Col>
						<Col span={this.getShowShirts()}>
							<PshirtPice  dimage={R7} />
						</Col>
						<Col span={this.getShowShirts()}>
							<PshirtPice  dimage={R6} />
						</Col>
					</Row>
				</Col>
			</Row>

			
		);
	}
}

export default Editor;
