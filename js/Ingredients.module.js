/// <reference types="../@types/jquery" />

import { IngredientDetails } from "./IngredientDetails.module.js";

export class Ingredient{
    constructor()
    {
        console.log("Ingredient");
        this.ingredientApi();
    }

    async ingredientApi()
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        response = await response.json();
        // console.log(response.meals.slice(0,20));
        this.displayIngredient(response.meals.slice(0,20));
    }

    displayIngredient(ngrdts)
    {
        let cartona = ``;
    for(let ngrdt of ngrdts)
    {
        // console.log(ngrdt);
        cartona+=`
        <div  class="col-md-3 text-white">
                    <div class="overflow-hidden text-center"> 
                       <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${ngrdt.strIngredient}</h3>
                        <p>${ngrdt.strDescription.slice(0,100)}</p>
                    </div>
                </div>`
    } 
    $('#mealData').html(cartona);

    const ingDetail = new IngredientDetails();

    }
}