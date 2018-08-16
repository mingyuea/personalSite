import React from 'react';
import Style from '../scss/Landing.scss';

class Landing extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let cloud1Style = {left: this.props.cloud1+"%"};
		let cloud2Style = {left: this.props.cloud2+"%"};

		return(
			<div className={Style.mainCont} style={this.props.style}>
				<div className={Style.timeCont}>
					<div className={Style.timeStr}>{this.props.timeStr}</div>
					<div className={Style.timePost}>{this.props.timePost}</div>
				</div>
				<div className={Style.greetTxt}>I'm Ming.
					<div className={Style.welcome}>Welcome to my site!</div>
				</div>
				
				<div className={Style.bgCont}><img className={Style.bgImg} src={require('../resources/forest.jpg')} /></div>
				<div style={cloud1Style} className={Style.cloud1Cont}><img className={Style.cloud1} src={require('../resources/cloud2.png')} /></div>
				<div style={cloud2Style} className={Style.cloud2Cont}><img className={Style.cloud2} src={require('../resources/cloud3.png')} /></div>
			</div>
		);
	}
}

export default Landing;