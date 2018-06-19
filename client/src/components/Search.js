import React from "react";
import {Button, Col, Form, Row, FormControl, Jumbotron} from "react-bootstrap";
import {Forms, Article} from "./Comps";


class Search extends React.Component {

	state = {

	}

	searchClick = () => {
		//axios get articles
	}

	render() {
		return (
		<React.Fragment>
			<Row className="search-row">
				<Jumbotron>
					<h2 class="jumbotron-heading">Search</h2>
					<Forms
					title="Name"/>
					<Forms
					title="Start Year"/>
					<Forms
					title="End Year"/>
					<Button
					onClick={this.searchClick}>Search</Button>
					
				</Jumbotron>
			</Row>
		</React.Fragment>
		)
	}
	
}

export default Search;