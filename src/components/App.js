import React from "react";
import Buttons from "../components/Buttons";
import CounterListContainer from "../containers/CounterListContainer";

import * as actions from '../actions';
import { connect } from 'react-redux';

import { getRandomColor } from "../utils";

class App extends React.Component {
	render() {
		const { onCreate, onRemove } = this.props;
		return (
			<div className="App">
				<Buttons
					onCreate = {onCreate}
					onRemove = {onRemove}
				/>
				<CounterListContainer />
			</div>
		);
	}
}

const mapToDispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: (index) => dispatch(actions.remove(index)),
});

export default connect(null, mapToDispatch)(App);