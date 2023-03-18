/// <reference types="../@types/jquery" />

import { CategoryDetails } from "./CategoryDetails.module.js";

export class Category{
    constructor(){
        console.log("category");
        this.mealCategories();

        $('.meal').click(function(){
            console.log("click");
        })
    }


    async mealCategories()
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json();
        // console.log(response);
        this.displayCategories(response.categories);
}

displayCategories(ctgs)
{
    let cartona = ``;
    for(let ctg of ctgs)
    {
        cartona+=`
        <div  class="col-md-3">
                    <div details-id="${ctg.idCategory}" class="meal position-relative overflow-hidden"> 
                        <img class="img-fluid rounded-3" src="${ctg.strCategoryThumb}" alt="">
                    <div details-id="${ctg.idCategory}" class="layer position-absolute p-2 rounded-3">
                        <h3>${ctg.strCategory}</h3>
                        <p>${ctg.strCategoryDescription}</p>
                    </div>
                    </div>
                </div>`
    } 
    // console.log(cartona);
    $('#mealData').html(cartona);

    const categoryDetails = new CategoryDetails();
// console.log($('#mealData h3'))
}




}

