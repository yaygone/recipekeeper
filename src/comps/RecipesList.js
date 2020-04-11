import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component
{
	render() {
		var recipes = this.props.recipes;
		var titles = [];
		for (var recipe in recipes){
			titles.push(recipe.title);
		}
		return recipes.map((recipe) => (
			<Recipe recipe = {recipe} />
		));
		// return (
			// <div className="RecipesList">
			// 	<h2>
			// 		Recipes:
			// 	</h2>
			// 	<p>
			// 		{titles[1]}
			// 	</p>
			// 	<recipes />
			// </div>
		// );
	}
}

export default RecipesList;
