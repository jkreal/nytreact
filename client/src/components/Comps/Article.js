import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Forms.css";

export const Article = props => {
return (
		<React.Fragment>
			<Row>
				<Col>
					<img
					src={props.imagesrc}
					className="article-image"/>
				</Col>

				<Col>
					<h6><a href={props.url}> {props.title}</a></h6>
				</Col>
			</Row>
		</React.Fragment>
)
}
