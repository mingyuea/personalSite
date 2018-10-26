import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.js';
import Sidebar from './Sidebar.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactCard from './ContactCard.js';
import Resume from './Resume.js';
import Style from '../scss/MainApp.scss';


class MainApp extends React.Component  {
	constructor(props){
		super(props);

		this.state = {
			"Home": {display: 'block'},
			"About Me": {display: 'none'},
			"Projects": {display: 'none'},
			"SideBar": {display: 'none'},
			"toggleBtn": {display: 'block'},
			"contactStyle": {display: 'none'},
			"resumeStyle": {display: 'none'},
			"sideBarR": -132,
			"cloud1": [0, true],
			"cloud2": [55, false],
			"currentView": "Home",
			"currProjViewInd": 0,
			"timeStr": "",
			"timePost": "",
			"projectArr":[
				{
					"title": "Stock Trading Application",
					"text": "This is a fullstack stock trading simulation application. Stock data was provided by IEX and their stock API. You can search stocks by their symbols, buy a certain amount, sell stocks in your portfolio, view data about the stock, etc. I chose not to use D3 or other data visualization libraries for my graph, since they interfere with DOM manipulation in a way React cannot account for. The bar graph was made purely from a HTML canvas object, which through Javascript draws each line stroke by stroke. Though username and password are hashed on the server-side, it still isn't recommended to use an important password/username",
					"link": "https://s3-us-west-1.amazonaws.com/ming-stock-client/index.html",
					"git": "https://github.com/mingyuea/eshopClient",
				},
				{
					"title": "E-commerce shop",
					"text": "This is a fullstack fake e-commerce shop, where you can view the shop, add items to your cart, view your cart, and remove items from your cart. The front-end was written in React, and the server was written in Flask. I mainly wanted more experience with Flask and SQL databases. This project taught me a lot about cookies and HTTP pre-flight OPTIONS protocols. Deploying the application on AWS taught me a lot about troubleshooting on the cloud platform; the client is on S3, the server on Elastic Beanstalk/EC2, and databse on AWS RDS",
					"link": "http://s3-us-west-1.amazonaws.com/ming-react-commerce-client/index.html",
					"git": "https://github.com/mingyuea/stockReactClient",
				},
				{
					"title": "Meal Planner App",
					"text": "This is a fullstack meal planner app. You can search up recipes, view their instructions, add/remove recipes to your calendar. The client is written in React, the server is a NodeJS/Express server, with a MongoDB database",
					"link": "https://s3-us-west-1.amazonaws.com/ming-react-meal-planner/index.html",
					"git": "https://github.com/mingyuea/react_meal_planner",
				},
				{
					"title": "Polling App",
					"text": "This is a fullstack polling app, where you can create polls, pick a poll to vote on, etc. This was one of the first times I worked with databases, as well as graphics in React.",
					"link": "https://s3-us-west-1.amazonaws.com/ming-react-polling-app/index.html",
					"git": "https://github.com/mingyuea/poll_react_frontend",
				},				
				{
					"title": "React Game of Life",
					"text": "This is Conway's Game of Life, a representation of cell automata, written with React. I wrote this mainly to see just how efficient React's 'diffing algorithm' could be, and was pretty surprised to say the least.",
					"link": "https://s3-us-west-1.amazonaws.com/ming-react-gameoflife/index.html",
					"git": "https://github.com/mingyuea/react_gameOfLife",
				},
				{
					"title": "React Recipe List",
					"text": "This is a simple recipe list maker, written in React",
					"link": "",
					"git": "https://github.com/mingyuea/react_recipe_list",
				},
				{
					"title": "React Leaderboard",
					"text": "A simple leaderboard, written in React",
					"link": "",
					"git": "https://github.com/mingyuea/react_leaderboard",
				}
			]  
		}

		this.handleSideBarClose = this.handleSideBarClose.bind(this);
		this.handleSideBarSel = this.handleSideBarSel.bind(this);
		this.handleProjSel = this.handleProjSel.bind(this);
		this.handleToggleNav = this.handleToggleNav.bind(this);
		this.handleContact = this.handleContact.bind(this);
		this.handleContactCancel = this.handleContactCancel.bind(this);
		this.showResume = this.showResume.bind(this);
		this.closeResume = this.closeResume.bind(this);
	}

	handleToggleNav(){
		this.setState({
			"SideBar": {display: 'block'},
			"toggleBtn": {display: 'none'},
		});

		let transit = setInterval(() => {
			let dist = this.state.sideBarR + 4;
			//console.log(dist);
			this.setState({
				"sideBarR": dist
			});
			if(dist > -4){
				clearInterval(transit);
			}
		}, 1);
	}

	handleSideBarClose(){
		let transit = setInterval(() => {
			let dist = this.state.sideBarR - 4;
			//console.log(dist);
			this.setState({
				"sideBarR": dist
			});
			if(dist < -138){
				clearInterval(transit);
			}
		}, 1);
		
		let closeTransit = setTimeout(() => {
			this.setState({
			"SideBar": {display: 'none'},
			"toggleBtn": {display: 'block'},
			});
		}, 100);
	}

	handleSideBarSel(id){
		let newStateObj = {};
		let currView = this.state.currentView;

		newStateObj[currView] = {display: 'none'};
		newStateObj[id] = {display: 'block'};
		newStateObj.currentView = id;
		this.setState(newStateObj);

		this.handleSideBarClose();
	}

	handleProjSel(id){
		console.log(id);
		this.setState({
			"currProjViewInd": id
		});
	}

	handleContact(){
		this.setState({
			"contactStyle": {display: 'block'}
		});

		this.handleSideBarClose();
	}

	handleContactCancel(){
		this.setState({
			"contactStyle": {display: 'none'}
		});
	}

	showResume(){
		this.handleSideBarClose();

		this.setState({
			"resumeStyle": {display: 'block'}
		});
	}

	closeResume(){
		this.setState({
			"resumeStyle": {display: 'none'}
		});
	}

	componentDidMount(){
		let dateInit = new Date();
		let initTime = dateInit.toLocaleTimeString();
		let ind = initTime.lastIndexOf(":");
		let newState = {};
		newState["timeStr"] = initTime.slice(0, ind);
		newState["timePost"] = initTime.slice(ind+4);

		this.setState(newState);

		let getTime = setInterval(() => {
			let dateObj1 = new Date();
			let currTime1 = dateObj1.toLocaleTimeString();
			let ind = currTime1.lastIndexOf(":");
			let newState1 = {};
			newState1["timeStr"] = currTime1.slice(0, ind);
			newState1["timePost"] = currTime1.slice(ind+4);

			this.setState(newState1);
		}, 60000);

		let cloudMove = setInterval(() => {
			let cl1 = this.state.cloud1;
			let cl2 = this.state.cloud2;
			let newCl1 = [];
			let newCl2 = [];
			let moveSpeed = 0.1;

			if(cl1[1]){
				let newVal = cl1[0] + moveSpeed;
				newCl1.push(newVal);
				if(newVal > 100){
					newCl1.push(false);
				}
				else{
					newCl1.push(true);
				}
			}
			else{
				let newVal = cl1[0] - moveSpeed;
				newCl1.push(newVal);
				if(newVal < -40){
					newCl1.push(true);
				}
				else{
					newCl1.push(false);
				}
			}

			if(cl2[1]){
				let newVal = cl2[0] + moveSpeed;
				newCl2.push(newVal);
				if(newVal > 100){
					newCl2.push(false);
				}
				else{
					newCl2.push(true);
				}
			}
			else{
				let newVal = cl2[0] - moveSpeed;
				newCl2.push(newVal);
				if(newVal < -40){
					newCl2.push(true);
				}
				else{
					newCl2.push(false);
				}
			}
			//console.log(newCl1, newCl2);

			this.setState({
				"cloud1": newCl1,
				"cloud2": newCl2,
			});


		}, 130);

	}

	render() {
		return(
			<div className={Style.mainCont}>
				<div style={this.state.toggleBtn} className={Style.navBtn} onClick={this.handleToggleNav}>
					<div className={Style.navDivBar}></div>
					<div className={Style.navDivBar}></div>
					<div className={Style.navDivBar}></div>
				</div>
				<Sidebar compStyle={this.state.SideBar} selected={this.state.currentView} style={this.state.sideBarR} onClose={this.handleSideBarClose} onSelect={this.handleSideBarSel} showResume={this.showResume} handleContact={this.handleContact} />
				<Landing style={this.state.Home} timeStr={this.state.timeStr} timePost={this.state.timePost} cloud1={this.state.cloud1[0]} cloud2={this.state.cloud2[0]} />
				<AboutMe style={this.state["About Me"]}/>
				<Projects style={this.state.Projects} titles={this.state.projectArr} projData={this.state.projectArr[this.state.currProjViewInd]} onSelect={this.handleProjSel} currInd={this.state.currProjViewInd} />
				<Resume style={this.state.resumeStyle} close={this.closeResume} />
				<ContactCard style={this.state.contactStyle} close={this.handleContactCancel} />
			</div>
		);
	}
}

export default MainApp;

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<MainApp />, wrapper) : false;