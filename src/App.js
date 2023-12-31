import React from "react";
import "./App.css"
import EnhancedComponent from "./HighOrder";

class App extends React.Component {
render() {
	// Call the props from originalComponent
	return <h1 className="high">{this.props.name}</h1>
}
}

// Passed the originalcomponent
export default EnhancedComponent(App);
