let ouput=document.getElementById('output');
buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>
    {
        buttontext=e.target.innerText;
        console.log("button text is",buttontext);
        if(buttontext=='X')
        {
            buttontext='*';
            screenvalue+=buttontext;
            output.value=screenvalue;
        }
        else if(buttontext=='X')
        {
            buttontext='*';
            screenvalue+=buttontext;
            output.value=screenvalue;
        }
        else if(buttontext=='C')
        {
            screenvalue="";
            output.value=screenvalue;
        }
        else if(buttontext=='Del')
        {
            buttontext=pop(buttontext);
            screenvalue+=buttontext;
            output.value=screenvalue;
        }
        else if(buttontext=='=')
        output.value=eval(screenvalue);
        else{
            screenvalue+=buttontext;
            output.value=screenvalue;
        }
    })
}