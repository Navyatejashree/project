document.getElementById("survey_click_button").addEventListener("click", () =>{
    var c = 0 ;
    var total = 0 ;
    var q1=document.survey.q1.value;
    var q2=document.survey.q2.value;
    var q3=document.survey.q3.value;
    var q4=document.survey.q4.value;
    var q5=document.survey.q5.value;
    if (q1=="8"){
        c++;
        total++
    }
    else{
        total++;
    }
    if (q2=="6"){
        c++;
        total++
    }
    else{
        total++;
    }
    if (q3=="7"){
        c++;
        total++
    }
    else{
        total++;
    }
    if (q4=="2"){
        c++;
        total++
    }
    else{
        total++;
    }
    if (q5=="1"){
        c++;
        total++
    }
    else{
        total++;
    }
    document.write(c+"/"+total);
    
    localStorage.setItem("socre",c);

});
 
function submitUser(){
    var username  = document.getElementById("fname").value;
    localStorage.setItem("user",username);
}