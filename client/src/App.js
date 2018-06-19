import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import axios from "axios";

import MainBody from "./components/MainBody";

class App extends Component {

	click = () => {
		axios.get("/api/articles", function(req, res) {

		});
	}

  render() {
		return (
		<MainBody/>
    );
  }
}

export default App;
