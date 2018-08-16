import React from 'react';
import Style from '../scss/ContactCard.scss';

class ContactCard extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className={Style.wrapper} style={this.props.style}>
				<div className={Style.close} onClick={this.props.close}><div className={Style.x}>X</div></div>
				<div className={Style.mainCont}>
					<div className={Style.title}>Contact Me</div>
					<div className={Style.divider}></div>
					<div className={Style.infoCont}>
						<div>mingyuea@gmail.com</div>
						<div>ming92@berkeley.edu</div>
						<div>(510) 426-2889 </div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactCard;