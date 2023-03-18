/// <reference types="../@types/jquery" />

import { Details } from "./Details.module.js";

export class AreaDetails{
    constructor()
    {
        console.log("AreaDetails");
        for(let col of $('.col-md-3') )
        {
            
            $(col).click(()=>{
                const detailsArea = $(col).find("h3").text();
                console.log(detailsArea);
                this.areaDetails(detailsArea)
            })
        }
        // this.areaDetails("American")
    }

    async areaDetails(area)
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        response = await response.json();
        // console.log(response.meals);
        this.displayAreaDetails(response.meals);
    }

    displayAreaDetails(meals)
    {
        console.log("displayAreaDetails");
        let cartona = ``;
        for(let ctg of meals)
        {
            // console.log(ctg)
            cartona +=`
            <div details-id="${ctg.idMeal}" class="col-md-3">
                        <div  class="meal position-relative overflow-hidden"> 
                            <img class="img-fluid rounded-3" src="${ctg.strMealThumb}" alt="">
                        <div class="layer position-absolute p-2 rounded-3">
                            <h3>${ctg.strMeal}</h3>
                        </div>
                        </div>
                    </div>`
        } 
        $('#mealData').html(cartona);
        const mealDetail = new Details();

    }
} 