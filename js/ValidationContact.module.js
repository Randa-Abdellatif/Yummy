/// <reference types="../@types/jquery" />
import { MealByName } from "./MealByName.module.js";
export class ValidationContact{
    constructor()
    {
        console.log("ValidationContact");
        this.validationInput = document.querySelectorAll("#validation .col-md-6 input");
        this.validationAlert = $("#validation .col-md-6 div");
        this.password;
        this.validationAlert.hide(0);
        this.btnValid ;
        this.btnRepassword = false;
        console.log($("#validation").next().attr("disabled"));
        

        $(this.validationInput).keyup(()=>{
            // console.log("key up");
            let x = 0;
            for(let i = 0 ; i<5 ; i++)
            {
                // console.log(this.validaion(i).test(this.validationInput[i].value));
                if(this.validaion(i).test(this.validationInput[i].value))
                {
                    // console.log(i);
                    x = x+i;
                    this.btnValid = x;
                    
                }
            }
            if(this.btnValid == 10 && this.btnRepassword == true)
            {
                console.log("btn valid");
                console.log(this.btnRepassword);
                $("#validation").next().attr("disabled",false);
            }
            else{
                $("#validation").next().attr("disabled",true);
                $("#validation").next().removeClass("border-5");
            }
            
        })

        $("#validation").next().click(function(){
        $("#validation").next().addClass("border-5");
        window.alert("success");
        $('#contactUs').addClass("d-none");
        const mealMealByName = new MealByName();
        })

        for(let i=0 ; i<6 ; i++){
            this.validationInput[i].addEventListener("input",()=>{
                // console.log(this.validationInput[i].value);
                // console.log(this.validationAlert[i]);
                if(i<5)
                {
                    // console.log(this.validaion(i).test(this.validationInput[i].value));
                    if(this.validaion(i).test(this.validationInput[i].value))
                {
                    $(this.validationAlert[i]).hide(0);
                    this.password = this.validationInput[4].value;
                }
                else{$(this.validationAlert[i]).show(100);}
                }
                else
                {
                    if(this.validationInput[5].value == this.password)
                    {
                        // console.log("true");
                        this.btnRepassword = true;
                        $(this.validationAlert[i]).hide(0)
                    }
                    else{
                        $(this.validationAlert[i]).show(100);
                        this.btnRepassword = false;
                    }
                   
                }
                
                
                
            })
        }


        // this.validationInput[0].addEventListener("input",()=>{
        //     console.log(this.validationInput[0].value);
        //     console.log(this.validationAlert[0]);
        //     $(this.validationAlert[0]).show(100);
        // })
        
    }


    validaion(num)
    {
        // console.log("validaion");
        // console.log(num);
        let regex;
        switch (num) {
            case 0:
              regex = /^[a-zA-Z\s]{1,}$/;
              break;
            case 1:
              regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
              break;
            case 2:
               regex = /^01[0125][0-9]{8}$/gm;
              break;
            case 3:
              regex = /^([1-7][0-9]|80)$/;
              break;
            case 4:
              regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
              break;
          }

          return regex;
    }
}