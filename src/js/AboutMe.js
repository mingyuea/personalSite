import React from 'react';
import Style from '../scss/AboutMe.scss';

class AboutMe extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className={Style.mainCont} style={this.props.style}>
				<div className={Style.titleCont}>
				<h3>About Me</h3>
				</div>
				<div>
					<div>Hey there!</div>
					<div></div>
				</div>
			</div>
		);
	}
}

export default AboutMe;