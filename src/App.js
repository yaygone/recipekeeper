import React from 'react';
import './App.css';
import Header from './comps/Header';
import RecipesList from './comps/RecipesList';

class Recipe {
	constructor(title, ingredientList) {
		this.title = title;
		this.ingredientList = ingredientList.slice(0);
	}
}

class App extends React.Component {
	state = {
		recipes: [
			new Recipe('Cake', ['Cake mix', 400]),
			new Recipe('Sandwich', ['Bread', 100]),
			new Recipe('Water', ['Water', 300])
		]
	}

	render() {
		for (var recipe in this.state.recipes) {
			console.log(recipe)
		}
		return (
			<div className="App">
				<Header />
				<RecipesList recipes = {this.state.recipes} />
			</div>
		);
	}
}
export default App;
