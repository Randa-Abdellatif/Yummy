/// <reference types="../@types/jquery" />


export class Details{
    constructor(){
console.log("details");
        for(let col of $('.col-md-3') )
        {
            // $('#searchBy').addClass("d-none");
            
            $(col).click(()=>{
                const detailsId = $(col).attr('details-id');
                console.log(detailsId);
                this.displayMealsDetails(detailsId);
                $('#searchBy').addClass("d-none");
            })
        }

        
        // console.log($('.meal'))
        // this.detailsId = $('.col-md-3').eq(1).attr('details-id');
        // console.log(this.detailsId);
        // console.log(this.that);
        // document.querySelector('.meal').addEventListener('click',function(){
        //     const detailsId = this.getAttribute('details-id');
        //     console.log(detailsId);
        //     this.displayMealsDetails.bind(this);
        // });

        

        // $('.col-md-3').click((e)=>{
        //    const detailsId = e.target.getAttribute('details-id');//$(e.target)//.attr('detailsId');
        // //    const detailsId = this.getAttribute('details-id');
        //    console.log(detailsId);
        //    this.displayMealsDetails(detailsId);
        // });
    }


    async displayMealsDetails(mealId){
        console.log("displayMealsDetails");
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        response = await response.json();
        this.displayDetails(response.meals[0]);
    }
    
     displayDetails(details)
    {
        $("#closeButton").removeClass("d-none");
        let Recipes=``;
        
        for(let i=1;i<=20;i++)
        {
            let measure;
            let ingredient;
            let measureIngredient;
            if(details[`strIngredient${i}`]=="")
            {
                break;
            }
            else{
                measure = details[`strMeasure${i}`]
                ingredient = details[`strIngredient${i}`];
                measureIngredient = measure +""+ ingredient
            }
            Recipes+=`<li class="alert alert-info m-2 p-1">${measureIngredient}</li>`;
        }
        let tags =``
        const text = details.strTags;
        if(text != null)
        {
            const myArray = text.split(",");
        for(let tag of myArray)
        {
            tags += ` <li class="alert alert-danger m-2 p-1">${tag}</li>` ;
        }
        // console.log(tags);
        }
        
    
        let cartona = `
        <div class="col-md-4">
        <img class="img-fluid rounded-3" src="${details.strMealThumb}" alt="">
        <h2 class="text-white">${details.strMeal}</h2>
       </div>
       <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <p>${details.strInstructions}</p>
        <h3>
            <span class="fw-bolder">Area : </span>
            ${details.strArea}
        </h3>
        <h3>
            <span class="fw-bolder">Category : </span>
            ${details.strCategory}
        </h3>
        <h3>Recipes : </h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">${Recipes}</ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">${tags}</ul>
        <a target="_blank" href="${details.strSource}" class="btn btn-success">Source</a>
        <a target="_blank" href="${details.strYoutube}" class="btn btn-danger">Youtube</a>
       </div>
        `
    
        $('#mealData').html(cartona);
    }
}