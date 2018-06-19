import React from "react";
import {Button, Column, Jumbotron, Form, Row} from "react-bootstrap";
import {Article, Forms} from "./Comps";

class Saved extends React.Component {


	state = {
		
	}


	render() {
		return (
		<React.Fragment>
			<Row className = "saved-row">
			<Jumbotron>
				<h2 class="jumbotron-heading">Saved</h2>
				<Article
				title="Saved Article"/>
			</Jumbotron>
			</Row>
		</React.Fragment>
		)
	}
}

export default Saved;