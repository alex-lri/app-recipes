var routes = [{
        path: "/",
        url: "./index.html",
    },
    {
        path: "/home/",
        on:{
            pageAfterIn: function(e, page){
                var router = this;
                var app = router.app;
                app.searchbar.create({
                    customSearch: true,
                    el: '.searchbar',
                    on: {
                        search: function(search) {
                            searchByName(search.query);
                            if(search.query == ""){
                                resetSearchResults();
                            }
                        },
                        disable: function() {
                            resetSearchResults();
                        },
                        clear: function(){
                            resetSearchResults();
                        }
                    }
                })

            }
        },
        async: function({router, to, resolve}) {
            // App instance
            var app = router.app;

            // Show Preloader
            const randomRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

            Framework7.request.get(randomRecipeUrl).then((res) => {
                var randomRecipe = JSON.parse(res.data)

                // Hide Preloader
                app.preloader.hide();

                resolve({
                    componentUrl: "./pages/home.html"},{
                    props: {
                        randomRecipe: randomRecipe,
                    }
                });
            });


        }
    },
    {
        path: "/about/",
        url: "./pages/about.html",
    },
    {
        path: "/form/",
        url: "./pages/form.html",
    },
    {
        path: "/recipes/",
        async: function({router, to, resolve}) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            const randomRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

            Framework7.request.get(randomRecipeUrl).then((res) => {
                var randomRecipe = JSON.parse(res.data)

                // Hide Preloader
                app.preloader.hide();

                resolve({
                    componentUrl: "./pages/recipes.html"},{
                    props: {
                        randomRecipe: randomRecipe,
                    }
                });
            });
        }
    },
    {
        path: "/recipe-details/:id/",
        async: function({router, to, resolve}) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            var id = to.params.id;

            const recipeDetailsUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

            Framework7.request.get(recipeDetailsUrl).then((res) => {
                var recipeDetails = JSON.parse(res.data)
                // Hide Preloader
                app.preloader.hide();

                resolve({
                    componentUrl: "./pages/recipe-details.html",
                },
                {
                    props: {
                        recipeDetails: recipeDetails,
                    }
                });
            });
        }
    },
    {
        path: "/recipes-by-category/:categoryName/",
        async: function({router, to, resolve}) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            var categoryName = to.params.categoryName

            const recipesByCategoryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName;

            Framework7.request.get(recipesByCategoryUrl).then((res) => {
                var recipes = JSON.parse(res.data)
                // Hide Preloader
                app.preloader.hide();

                resolve({
                    componentUrl: "./pages/recipes-by-category.html",
                },
                {
                    props: {
                        recipes: recipes,
                    }
                });
            });
        }
    },
    {
        path: "/settings/",
        url: "./pages/settings.html",
    },
    {
        path: "/wishlist/",
        async: function({router, to, resolve}) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            const randomRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

            Framework7.request.get(randomRecipeUrl).then((res) => {
                var randomRecipe = JSON.parse(res.data)

                // Hide Preloader
                app.preloader.hide();

                resolve({
                    componentUrl: "./pages/wishlist.html"},{
                    props: {
                        randomRecipe: randomRecipe,
                    }
                });
            });
        }
    },

    {
        path: "/dynamic-route/blog/:blogId/post/:postId/",
        componentUrl: "./pages/dynamic-route.html",
    },
    {
        path: "/request-and-load/user/:userId/",
        async: function({ router, to, resolve }) {
            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            // User ID from request
            var userId = to.params.userId;

            // Simulate Ajax Request
            setTimeout(function() {
                // We got user data from request
                var user = {
                    firstName: "Vladimir",
                    lastName: "Kharlampidi",
                    about: "Hello, i am creator of Framework7! Hope you like it!",
                    links: [{
                            title: "Framework7 Website",
                            url: "http://framework7.io",
                        },
                        {
                            title: "Framework7 Forum",
                            url: "http://forum.framework7.io",
                        },
                    ],
                };
                // Hide Preloader
                app.preloader.hide();

                // Resolve route to load page
                resolve({
                    componentUrl: "./pages/request-and-load.html",
                }, {
                    props: {
                        user: user,
                    },
                });
            }, 1000);
        },
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: "(.*)",
        url: "./pages/404.html",
    },
];