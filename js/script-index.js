$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.js-menu').on('click',function(){
      $('.js-back').toggle('fast');
   });

});

function printNews() {
    var str = "NUEVAS RECETAS";
    var result = str.bold();
    document.getElementById('noticia').innerHTML = result;
}


//$('.js-back').toggle();

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true) {
			var arreglo = recipesArray[i];
			renderRecipe(arreglo);
		}
	}
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/


function renderRecipe(recipe) {
	var title = recipe.title; //saco nombre de la receta
	var name = (recipe.source).name; //nombre del autor de la receta
	var img = recipe.name; // a cada imagen le va poner el nombre de la receta
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+title+'</span><span class="metadata-recipe"><span class="author-recipe">'+name+' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+img+'.jpg"/></a>');
	//console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


