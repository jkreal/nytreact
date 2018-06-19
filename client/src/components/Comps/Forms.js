import React from "react";
import { FormControl } from "react-bootstrap";
import "./Forms.css";

export const Forms = props => {
return (
		<React.Fragment>
		<div className="forms">
			<h3>{props.title}</h3>
			<FormControl
			className={props.formName}/>
		</div>
		</React.Fragment>
)
}
