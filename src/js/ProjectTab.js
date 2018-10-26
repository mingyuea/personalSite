import React from 'react';
import Style from '../scss/Projects.scss';

class Projects extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			"hoverId": null;
		}

		this.handleSelect = this.handleSelect.bind(this);
		this.handleHover = this.handleHover.bind(this);
	}

	handleSelect(e){
		let id = e.currentTarget.id;
		this.props.onSelect(id);


	}

	handleHover(e){
		let id = e.currentTarget.id;
		

	}

	render(){
		let titles = this.props.titles.map((projObj, ind) => {
			if(ind == this.props.currInd){
				return <div id={ind} className={Style.menuTileSel} onClick={this.handleSelect}>{projObj.title}<div className={Style.hoverBlock} id="hoverBlock"></div></div>
			}
			else{
				return <div id={ind} className={Style.menuTile} onClick={this.handleSelect}>{projObj.title}</div>
			}
		});

		let deploy = "No live deployments as of now";
		if(this.props.projData.link.length > 0){
			deploy = <a className={Style.link} href={this.props.projData.link}> Link/Live Deployment </a>
		}

		return(
			<div className={Style.mainCont} style={this.props.style}>
				<div className={Style.titleCont}>
				<h3>Projects/Portfolio</h3>
				</div>
				<div className={Style.introCont}>These are some of the projects that I have built. Some are just React Single Page Applications,
				others, are fullstack applications with front-end written in React, backend written in NodeJS/Express, and a database of some
				sort. They are all deployed on free tiers of cloud services like Amazon AWS S3 or Heroku, so they might need a few minutes/
				a few refreshes before they actually wake up and start functioning. They are purely intended for personal use, do not use 
				sensitive or important credentials when signing up and using them.
				</div>
				<div className={Style.menuCont}>{titles}</div>
				<div className={Style.bodyCont}>
					<div className={Style.projTitle}> {this.props.projData.title} </div>
					<div className={Style.divider}></div>
					<p>{this.props.projData.text}</p>
					<div><a className={Style.link} href={this.props.projData.git}>Git/Code</a></div>
					<div>{deploy}</div>
				</div>
			</div>
		);
	}
}

export default Projects;