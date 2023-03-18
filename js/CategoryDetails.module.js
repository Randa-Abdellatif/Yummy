/// <reference types="../@types/jquery" />
import { Details } from "./Details.module.js";

export class CategoryDetails{
    constructor(){
        console.log("CategoryDetails");
        // console.log($('#mealData h3').text());
        for(let col of $('.col-md-3') )
        {
            
            $(col).click(()=>{
                const detailsId = $(col).find("h3").text();
                console.log(detailsId);
                this.categoriesDetails(detailsId);
            })
        }
    }

    async categoriesDetails(ctgr)
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctgr}`)
        response = await response.json();
        // console.log(response.meals);
        this.displayCategoriesDetails(response.meals);
    }


    displayCategoriesDetails(ctgs){
        console.log("displayCategoriesDetails");
        let cartona = ``;
        for(let ctg of ctgs)
        {
            cartona +=`
            <div details-id="${ctg.idMeal}" class="col-md-3">
                        <div  class="meal position-relative overflow-hidden"> 
                            <img class="img-fluid rounded-3" src="${ctg.strMealThumb}" alt="">
                        <div details-id="${ctg.idCategory}" class="layer position-absolute p-2 rounded-3">
                            <h3>${ctg.strMeal}</h3>
                        </div>
                        </div>
                    </div>`
        } 
        // console.log(cartona);
        $('#mealData').html(cartona);
        const mealDetail = new Details();
        }
}