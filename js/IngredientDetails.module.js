/// <reference types="../@types/jquery" />
import { Details } from "./Details.module.js";

export class IngredientDetails{
    constructor(){
        console.log("IngredientDetails");

        for(let col of $('.col-md-3') )
        {
            
            $(col).click(()=>{
                const detailsIngr =  $(col).find("h3").text();
                console.log(detailsIngr);
                this.ingredientApi(detailsIngr);
            })
        }


    }


    async ingredientApi(ingrdnt)
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrdnt}`)
        response = await response.json();
        // console.log(response.meals);
        this.displayIngredientDetails(response.meals);
    }

    displayIngredientDetails(ingrdnts){
        console.log("displayIngredientDetails");
        let cartona = ``;
        for(let ingrdnt of ingrdnts)
        {
            // console.log(ingrdnt);
            cartona +=`
            <div details-id="${ingrdnt.idMeal}" class="col-md-3">
                        <div  class="meal position-relative overflow-hidden"> 
                            <img class="img-fluid rounded-3" src="${ingrdnt.strMealThumb}" alt="">
                        <div class="layer position-absolute p-2 rounded-3">
                            <h3>${ingrdnt.strMeal}</h3>
                        </div>
                        </div>
                    </div>`
        } 
        $('#mealData').html(cartona);
        const mealDetail = new Details();


    }
}