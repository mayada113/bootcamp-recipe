class Renderer {
    render = function(recipesBase){
        $("#ingredient-info").empty() 
        var source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipesBase});
        $('#ingredient-info').append(newHTML);
    }
}