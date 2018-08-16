import React from 'react';
import Style from '../scss/Sidebar.scss';

class Sidebar extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose(){
		this.props.onClose();
	}

	handleClick(e){
		let id = e.currentTarget.id;
		this.props.onSelect(id);
	}

	render(){
		let rightDim = {right: this.props.style};
		let txtArr = ["Home", "AboutMe", "Projects"];

		let rendArr = txtArr.map((text) => {
			if(this.props.selected == text){
				return <div className={Style.tileSel} id={text} onClick={this.handleClick}> {text} </div>
			}
			else{
				return <div className={Style.tile} id={text} onClick={this.handleClick}> {text} </div>
			}
		})

		return(
			<div style={this.props.compStyle} className={Style.mainCont}>
			<div className={Style.sideBarCont} style={rightDim}>
				<div className={Style.closeBtn} onClick={this.handleClose}> X </div>
				<div className={Style.btnCont}>
					{rendArr}
					<div className={Style.tile}> <a href="https://github.com/mingyuea">GitHub </a></div>
					<div className={Style.tile}> Resume </div>
					<div className={Style.tile} onClick={this.props.handleContact}>Contact Me</div>
				</div>

			</div>
			</div>
		);
	}
}

export default Sidebar;