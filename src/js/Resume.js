import React from 'react';
import Style from '../scss/Resume.scss';

class Resume extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div style={this.props.style} className={Style.mainCont}>
				<div className={Style.close} onClick={this.props.close}>X</div>
				<embed className={Style.content} src={require('../resources/Resume_MingYueAlbert.pdf')} type="application/pdf" />
			</div>
		)
	}
}

export default Resume;