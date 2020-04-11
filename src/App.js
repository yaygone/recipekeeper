import React from 'react';
import './App.css';
import Header from './comps/Header';
import RecipesList from './comps/RecipesList';


class App extends React.Component
{
	state =
	{
		recipes:
		[
			{
				title: 'Cake',
				ingredientsList: ['Cake mix', 400]
			},
			{
				title: 'Sandwich',
				ingredientsList: ['Bread', 100]
			},
			{
				title: 'Water',
				ingredientsList: ['Water', 300]
			}
		]
	}

	render()
	{
		return (
			<div className="App">
				<Header />
				<RecipesList recipes = {this.state.recipes} />
			</div>
		);
	}
}
export default App;
