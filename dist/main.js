const render = new Renderer()

$("button").on("click", function () {
    let recipeInput = $("#recipe-input").val()
    $.get(`/recipes/${recipeInput}`, function (recipesBase) {
        console.log(recipesBase)        
        render.render(recipesBase)
    })

})


$("body").on('click',"img" ,function(){
    let title=$(this).siblings('#ingredientsList').children()[0].innerHTML ;
    alert(title)
})