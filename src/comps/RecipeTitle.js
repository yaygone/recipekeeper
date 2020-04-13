import React from 'react'

export class RecipeTitle extends React.Component
{
	render()
	{
		return (
			<div>
				<p>{this.props.recipe.title}</p> 
			</div>
		);
	}
}

export default RecipeTitle;