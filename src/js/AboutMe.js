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
				<div className={Style.textCont}>
					<img className={Style.selfImg} src={require('../resources/self.jpg')} />
					<div className={Style.textStart}>Hey there!</div>
					<div className={Style.textBody}>My name is Ming Albert Yue. I'm just a guy who's dreaming of becoming a software engineer one day.
					I'm a native Californian, born and raised in Los Angeles for most of my life. The Bay Area only became 
					my home in the last few years, after I moved up here to attend UC Berkeley. Originally, I was studying
					to become a civil engineer, with an emphasis on structural and geotechnical engineering. After awhile, I
					kind of realized I couldn't see myself doing this for the rest of my life, and started exploring other subjects
					I WAS interested in. A few year later, here I am, coding. 
					<br />
					<br />
					I started off perhaps the most computer illiterate person (I mean, I didn't know the difference between Java and Javascript). I stumbled for a long time; there is a strange
					plethora of acronymns in tech (MVC, RESTful, AJAX, SCRUM, CRUD, etc.) that shed no light on their actual meaning, and tutorials designed for "absolute beginners" are actually for people who kinda
					know some things already. And there was a lot of confusion, frustration, a lot of "dumb questions", and very helpful strangers (bless you StackOverflow).
					<br />
					<br />
					But over time, I began to a get it. Nowadays, I've built
					stuff I never even heard of before when I started, from data-structures to server-side engineering. I can actually figure out where I went wrong (learning to debug was a challenge).I can actually make full-stack applications!
					I get a tiny rush everytime I overcome some problem, instead of being frustrated wondering "where do I even start?". But even so, there's still
					so much I want to learn and dip my hands into (A.I and machine-learning! I get the concept, am not sure how it's performed on a technical level, but it sounds like its the future to me).
					<br />
					<br />
					In my free time, I'm a huge history buff. I love understanding different cultures, their people, and what effect they had 
					on the people that came after. My favorite books are a series of historical fiction novels (Patrick O'Brian's Stephen-Aubrey
					series, set during the Napoleaonic era, setting the stage for Britain's dominance over the seas).
					<br />
					<br />
					Normally, however, I wouldn't consider myself very extroverted. You couldn't tell it from the length of this About Me section, but I'm usually quite taciturn. I like to get lost in thought whenever I can. Thinking and observing. Which leads me to another favorite
					pastime of mine: people-watching. As opposed to interacting with people, I enjoy studying them. I believe that you can learn just as much, if not more, about a person from watching them than from
					talking to them.
					<br />
					<br />
					And I think that's where I'll leave you with my story, if you've even made it this far. I don't want to bore you any furthur with my ramblings; I've been told that I have a tendency to soliloquize
					when the situation calls for brevity. Hopefully, I've given an ample portrait of who I am. Draw what you will from this. It is impossible, after all, to lay bare oneself in a few hundred words. Cheers!					
					</div>
					<div className={Style.close}>
						-Ming
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;