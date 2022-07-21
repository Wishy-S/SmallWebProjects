$.ajax({
    type:'get',
    url:'https://themealdb.com/api/json/v1/1/filter.php?a=Indian',
    success: function(response){
        console.log(response.meals)
        for(let i = 0 ;i<response.meals.length;i++){
            let dish = `<div class='col-md-3 shadow-lg p-3 mb-5 bg-white rounded text-center'>
            <p>${response.meals[i].strMeal}</p>
            <img src=${response.meals[i].strMealThumb} class='img-fluid'>
            <p>${response.meals[i].idMeal}</p>
            </div>`;
            $('#myitems').append(dish);
        }
    },
    error : function(error){

    }
})