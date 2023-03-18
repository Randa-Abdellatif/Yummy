/// <reference types="../@types/jquery" />

import { AreaDetails } from "./AreaDetails.module.js";


export class Area {
    constructor()
    {
        console.log("Area")
        this.areaApi();
    }

    async areaApi()
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        response = await response.json();
        // console.log(response.meals);
        this.displayareaApi(response.meals);
    }

    displayareaApi(areas)
    {
        let cartona = ``;
    for(let area of areas)
    {
        // console.log(area);
        cartona+=`
        <div  class="col-md-3 text-white">
                    <div> 
                       <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${area.strArea}</h3>
                    </div>
                </div>`
    } 
    $('#mealData').html(cartona);

    const areaDetail = new AreaDetails();

    }
}