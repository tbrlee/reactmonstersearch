import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		/* Destructring equivalent
		const monsters = this.state.monsters;
		const searchField = this.state.searchField
		*/
		const { monsters, searchField } = this.state;

		/*this monster state was checked to see if searchfield  has close or near matching name in real time search*/
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<SearchBox placeholder="search monsters" handleChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
