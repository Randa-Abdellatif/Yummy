/// <reference types="../@types/jquery" />
import { Details } from "./Details.module.js";

//load
//body

export class MealByName{
    constructor(){
        this.SearchMealByName("");
        console.log("MealByName");

        this.SearchByName = document.getElementById("SearchByName");
        // console.log(this.SearchByName);
        this.SearchByName.addEventListener("input",()=>{
         console.log(this.SearchByName.value);
         this.SearchMealByName(this.SearchByName.value);
         $('#mealData').removeClass("d-none");
})

this.SearchByFirstLetter = document.getElementById("SearchByFirstLetter");
// console.log(this.SearchByFirstLetter);
this.SearchByFirstLetter.addEventListener("input",()=>{
    this.mealsByFirstLetter(this.SearchByFirstLetter.value);
    $('#mealData').removeClass("d-none");
 console.log(this.SearchByFirstLetter.value);
})

    }

    async mealsByFirstLetter(term = "a")
    {
        let response;
        if(term == "")
        { response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)}
        else
        { response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)}
    response = await response.json();
    this.displayMeals(response.meals);
    }

    async SearchMealByName(term )
{
    // console.log(term);
   
    // $(('.load')).removeClass("d-none");
    // $("body").css("overflow", "visible");
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json();
    this.displayMeals(response.meals);
    // $(('.load')).addClass("d-none");
    return response;
}


displayMeals(meals)
{
    // console.log(meals);
    if(meals == null)
    {
        $('#mealData').html("<span>hfyjkk</span>");
    }
    else
   { let cartona = ``;
    for(let meal of meals)
    // for(var i=0;i<meals.length;i++) //onclick="displayMealsDetails(${meal.idMeal})"
    {
        cartona+=`
        <div details-id="${meal.idMeal}" class= "col-md-3">
                    <div details-id="${meal.idMeal}" class="meal position-relative overflow-hidden"> 
                        <img class="img-fluid rounded-3" src="${meal.strMealThumb}" alt="">
                    <div details-id="${meal.idMeal}" class="layer position-absolute p-2 rounded-3 d-flex">
                        <h3>${meal.strMeal}</h3>
                    </div>
                    </div>
                </div>`
    }
$('#mealData').html(cartona);

const mealDetail = new Details();
}}

}