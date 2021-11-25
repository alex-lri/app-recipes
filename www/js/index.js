function searchByName(name) {
    let ul = document.getElementById("list-results");
    const searchUrl =
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    Framework7.request.get(searchUrl).then((res) => {
        let recipes = JSON.parse(res.data)
        for(let r of recipes.meals){
            let liHtml = '<li class="item-content"><div class="item-inner"><div class="item-title"><a href="/recipe-details/'+ r.idMeal +'/">'+ r.strMeal +'</a></div></div></li>';
            ul.insertAdjacentHTML("afterBegin",liHtml);
        }
    });
}

function truncateTitle(title) {
    const newMealTitle = title.length < 20 ? title : title.slice(0, 19) + "...";
    console.log("Nouveau titre du plat :", newMealTitle);
    return newMealTitle;
}

// function recipesTitle(recipeStrMeal, recipeStrMeal, recipeNok) {
//     if (recipeStrMeal <= 20) return recipeStrMeal;
//     else return recipeNok;
// }
