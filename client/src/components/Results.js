import React from "react";
import {Button, Column, Jumbotron, Form, Row} from "react-bootstrap";
import {Article, Forms} from "./Comps";

class Results extends React.Component {


	state = {
		results: {}
	}


	render() {
		return (
		<React.Fragment>
			<Row className="results-row">
			<Jumbotron>
				<h2 class="jumbotron-heading">Results</h2>
				<div className="results">
					<Article
					title="A Article"/>
					<Article
					title="A Article"/>
					<Article
					title="A Article"/>
					<Article
					title="A Article"/>
				</div>
			</Jumbotron>
			</Row>
		</React.Fragment>
		)
	}
}

export default Results;