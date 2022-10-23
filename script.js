let string="";
let buttons=document.querySelectorAll(".btn-size");
Array.from(buttons).forEach(function(buttons){
    buttons.addEventListener("click",function(event){
        
        if(event.target.innerText=="="){
            string=eval(string);
            document.getElementsByTagName("input")[0].value=string;
        }
        else if(event.target.innerText=="C"){
            string="";
            document.getElementsByTagName("input")[0].value=string;
        }
        else{
            string=string+event.target.innerText;
            document.getElementsByTagName("input")[0].value=string;
        }
    })
})