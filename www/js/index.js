function searchByName(name) {
    const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="+name;

    Framework7.request.get(searchUrl).then((res) => {
        let recipes = JSON.parse(res.data)
        console.log(recipes.meals)
        for(let r of recipes.meals){
            console.log("One recipe : ",r)
        }
    });
}

