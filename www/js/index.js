function searchByName(name) {
    let ul = document.getElementById('list-results')
    const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="+name;
    while (ul.hasChildNodes()) {  
        ul.removeChild(ul.firstChild);
    }

    Framework7.request.get(searchUrl).then((res) => {
        let recipes = JSON.parse(res.data)
        console.log(recipes.meals)
        for(let r of recipes.meals){
            console.log("One recipe : ",r)
            let liHtml = '<li class="item-content"><div class="item-inner"><div class="item-title">'+ r.strMeal +'</div></div></li>';
            ul.insertAdjacentHTML("afterBegin",liHtml);
        }
    });
}

function getTitle(title){
    break
}

