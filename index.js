// Question 1 - Create a button , on click of which you should be able to hide a paragraph text, 
// create another button onclick of which this paragraph should be visible.

$(".hide").click(function name() {
    $("p").hide();
})
$(".show").click(function name() {
    $("p").show();
})

// Question 2 - Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and 
// print the title as the heading of the page

$("#ajax").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/20",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("greet").innerText = response.title;
        }
    })
})



