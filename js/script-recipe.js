$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	 $(".recipe2").click(function(){
    $(".recipe").toggle();
});

});

