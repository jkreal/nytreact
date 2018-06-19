import React from "react";
import {Button, Row} from "react-bootstrap";
import {Header, Footer} from "./Wrap";
import Saved from "./Saved";
import Search from "./Search";
import Results from "./Results";
import "./Main.css";

class MainBody extends React.Component {

	state = {

	}

	render() {
		return (
		<React.Fragment>

			<Header/>
			<Search/>
			<Results/>
			<Saved/>

			<Footer/>
		</React.Fragment>
		)
	}

}

export default MainBody;