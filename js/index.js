
/// <reference types="../@types/jquery" />

import { MealByName } from "./MealByName.module.js";
import { Category } from "./Categories.module.js";
import { Area } from "./Area.module.js";
import { Ingredient } from "./Ingredients.module.js";
import { ValidationContact } from "./ValidationContact.module.js";


const mealMealByName = new MealByName(); 
let x = $("#search").nextAll();
// const category = new Category();

// console.log(mealMealByName.SearchMealByName())

// import { Details } from "./Details.module.js";
// const mealDetails = new Details(); 
//wow



$(document).ready(() => {
    let sideBarInnerWidth = $(".sideBar-inner").innerWidth();
    // SearchMealByName("");
    $('#sideBar').css('left',-sideBarInnerWidth);

    $('.spinner').fadeOut(1000 , function(){
        $("#loading").fadeOut(1000 , function(){
            // $("#loading").clear();
            $("body").css('overflow','auto');
        });
    });

    function animation(){
        $("#search").addClass("animate__fadeInUp");
        $(x[0]).addClass("animate__fadeInUp");
        $(x[1]).addClass("animate__fadeInUp");
        $(x[2]).addClass("animate__fadeInUp");
        $(x[3]).addClass("animate__fadeInUp")
    }

    function animationRemove()
    {
        $("#search").removeClass("animate__fadeInUp");
$(x[0]).removeClass("animate__fadeInUp");
$(x[1]).removeClass("animate__fadeInUp");
$(x[2]).removeClass("animate__fadeInUp");
$(x[3]).removeClass("animate__fadeInUp");

    }

    /*Events */
$('#sideBar .bn').click(function(){
    $('#sideBar').animate({left:"0px"},200);
    $('#sideBar .bn').hide(0);
    $('#sideBar .bt').show(0);
    // new WOW().init();
    // $("#search").css({"visibility": "visible", "animation-name": "fadeInUp"});
    animation();

})

$('.bt').click(function(){
// $("#ani").addClass("animate__fadeOutDown");
$("#ani").addClass("animate__fadeOutDown");
$('#sideBar').animate({left:-sideBarInnerWidth},200,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});

$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);

animationRemove();

})

$("#closeButton").click(function(){
const mealMealByName = new MealByName(); 
// SearchMealByName("");
$("#closeButton").addClass("d-none");
})

$("#search").click(function(){
$('#contactUs').addClass("d-none");
$('#searchBy').removeClass("d-none");
$('#mealData').html("");
$("#ani").addClass("animate__fadeOutDown");
$('#sideBar').animate({left:-sideBarInnerWidth},1000,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});
$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);
animationRemove();
})


// let x = $("#search").nextAll();
// console.log(x[0]);

$(x[0]).click(function(){
const category = new Category();
$('#contactUs').addClass("d-none");
$('#searchBy').addClass("d-none");
$("#ani").addClass("animate__fadeOutDown");
$('#sideBar').animate({left:-sideBarInnerWidth},200,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});
$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);
animationRemove();
})

$(x[1]).click(function(){
    $('#contactUs').addClass("d-none");
$('#searchBy').addClass("d-none");
// console.log("Area");
const area = new Area();
$("#ani").addClass("animate__fadeOutDown");
$('#sideBar').animate({left:-sideBarInnerWidth},200,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});
$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);
animationRemove();
})

$(x[2]).click(function(){
// console.log("Ingredient");
$('#contactUs').addClass("d-none");
$('#searchBy').addClass("d-none");
const ingredient = new Ingredient();
$("#ani").addClass("animate__fadeOutDown");
$('#sideBar').animate({left:-sideBarInnerWidth},200,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});
$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);
animationRemove();
})

$(x[3]).click(function(){

    // console.log("Contact");
    const contactUs = new ValidationContact();
$('#contactUs').removeClass("d-none");
$('#mealData').html("");
    $('#searchBy').addClass("d-none");
    $("#ani").addClass("animate__fadeOutDown");
    $('#sideBar').animate({left:-sideBarInnerWidth},200,function(){
    $("#ani").removeClass("animate__fadeOutDown");
});
$('#sideBar .bn').show(0);
$('#sideBar .bt').hide(0);
animationRemove();

    })
  
})

// /*Events */
// $('#sideBar .bn').click(function(){
//         $('#sideBar').animate({left:"0px"},200);
//         $('#sideBar .bn').hide(0);
//         $('#sideBar .bt').show(0);
//         new WOW().init();
// })

// $('.bt').click(function(){
//     $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
// })

// $("#closeButton").click(function(){
//     const mealMealByName = new MealByName(); 
//     // SearchMealByName("");
//     $("#closeButton").addClass("d-none");
// })

// $("#search").click(function(){
//     $('#searchBy').removeClass("d-none");
//     $('#mealData').html("");
//     $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
// })


// let x = $("#search").nextAll();
// // console.log(x[0]);

// $(x[0]).click(function(){
//     const category = new Category();
//     $('#searchBy').addClass("d-none");
//     $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
// })

// $(x[1]).click(function(){
// $('#searchBy').addClass("d-none");
// // console.log("Area");
// const area = new Area();
// $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
// })

// $(x[2]).click(function(){
//     // console.log("Ingredient");
//     $('#searchBy').addClass("d-none");
//     const ingredient = new Ingredient();
//     $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
//     })

// $(x[3]).click(function(){
//         // console.log("Contact");
//         const contactUs = new ValidationContact();
//     $('#contactUs').removeClass("d-none");
//     $('#mealData').html("");
//         $('#searchBy').addClass("d-none");
//         $('#sideBar').animate({left:-sideBarInnerWidth},200);
//     $('#sideBar .bn').show(0);
//     $('#sideBar .bt').hide(0);
//         })
/*here end code*/


// const SearchByName = document.getElementById("SearchByName");
// SearchByName.addEventListener("input",function(){
//     console.log(SearchByName.value);
// })


// async function SearchMealByName(term)
// {
//     $(('.load')).removeClass("d-none");
//     $("body").css("overflow", "visible");
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//     response = await response.json();
//     displayMeals(response.meals);
//     $(('.load')).addClass("d-none");
//     return response;
    
// }

// function displayMeals(meals)
// {
//     console.log(meals);
//     let cartona = ``;
//     for(let meal of meals)
//     // for(var i=0;i<meals.length;i++) //onclick="displayMealsDetails(${meal.idMeal})"
//     {
//         cartona+=`
//         <div class="col-md-3">
//                     <div  class="meal position-relative overflow-hidden"> 
//                         <img class="img-fluid rounded-3" src="${meal.strMealThumb}" alt="">
//                     <div class="layer position-absolute p-2 rounded-3">
//                         <h3>${meal.strMeal}</h3>
//                     </div>
//                     </div>
//                 </div>`
//     }
// $('#mealData').html(cartona);
// }


// async function displayMealsDetails(mealId){
//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
//     response = await response.json();
//     displayDetails(response.meals[0]);
// }

// function displayDetails(details)
// {
//     $("#closeButton").removeClass("d-none");
//     let Recipes=``;
    
//     for(i=1;i<=20;i++)
//     {
//         let measure;
//         let ingredient;
//         let measureIngredient;
//         if(details[`strIngredient${i}`]=="")
//         {
//             break;
//         }
//         else{
//             measure = details[`strMeasure${i}`]
//             ingredient = details[`strIngredient${i}`];
//             measureIngredient = measure +""+ ingredient
//         }
//         Recipes+=`<li class="alert alert-info m-2 p-1">${measureIngredient}</li>`;
//     }
//     let tags =``
//     const text = details.strTags;
//     if(text != null)
//     {
//         const myArray = text.split(",");
//     for(tag of myArray)
//     {
//         tags += ` <li class="alert alert-danger m-2 p-1">${tag}</li>` ;
//     }
//     // console.log(tags);
//     }
    

//     let cartona = `
//     <div class="col-md-4">
//     <img class="img-fluid rounded-3" src="${details.strMealThumb}" alt="">
//     <h2 class="text-white">${details.strMeal}</h2>
//    </div>
//    <div class="col-md-8 text-white">
//     <h2>Instructions</h2>
//     <p>${details.strInstructions}</p>
//     <h3>
//         <span class="fw-bolder">Area : </span>
//         ${details.strArea}
//     </h3>
//     <h3>
//         <span class="fw-bolder">Category : </span>
//         ${details.strCategory}
//     </h3>
//     <h3>Recipes : </h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">${Recipes}</ul>
//     <h3>Tags :</h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">${tags}</ul>
//     <a target="_blank" href="${details.strSource}" class="btn btn-success">Source</a>
//     <a target="_blank" href="${details.strYoutube}" class="btn btn-danger">Youtube</a>
//    </div>
//     `

//     $('#mealData').html(cartona);
// }

