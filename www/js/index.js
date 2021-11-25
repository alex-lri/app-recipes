function searchByName(name) {
    let ul = document.getElementById("list-results");
    const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    Framework7.request.get(searchUrl).then((res) => {
        let recipes = JSON.parse(res.data)
        for(let r of recipes.meals){
            console.log(r)
            let liHtml = '<li class="item-content"><div class="item-inner"><div class="item-title"><a href="/recipe-details/'+ r.idMeal +'/">'+ r.strMeal +'</a></div><img src="'+ r.strMealThumb +'/preview"/></div></li>';
            ul.insertAdjacentHTML("afterBegin",liHtml);
        }
    });
}

function resetSearchResults() {
    let ul = document.getElementById("list-results");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

function truncateTitle(title) {
    return title.length < 20 ? title : title.slice(0, 19) + "...";
}

function getIngredients(recipeDetails) {
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (recipeDetails['strIngredient' + i]) {
            let thumbUrl = "https://www.themealdb.com/images/ingredients/" + recipeDetails['strIngredient' + i] + ".png";
            ingredients.push({
                name: recipeDetails['strIngredient' + i],
                thumbUrl: thumbUrl,
                measure: recipeDetails['strMeasure' + i]
            });
        }
    }

    return ingredients;
}