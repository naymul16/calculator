document.getElementById("7").addEventListener('click',function(){
    inputValue("7");
})
document.getElementById("8").addEventListener('click',function(){
    inputValue("8");
})
document.getElementById("9").addEventListener('click',function(){
    inputValue("9");
})
document.getElementById("1").addEventListener('click',function(){
    inputValue("1");
})
document.getElementById("2").addEventListener('click',function(){
    inputValue("2");
})
document.getElementById("3").addEventListener('click',function(){
    inputValue("3");
})
document.getElementById("4").addEventListener('click',function(){
    inputValue("4");
})
document.getElementById("5").addEventListener('click',function(){
    inputValue("5");
})
document.getElementById("6").addEventListener('click',function(){
    inputValue("6");
})
document.getElementById("0").addEventListener('click',function(){
    inputValue("0");
})
document.getElementById("clear").addEventListener('click',function(){
    var inputValue=document.getElementById("history-value").innerText;
    document.getElementById("history-value").innerText='';
    document.getElementById("output-value").innerText=''

})
document.getElementById("backspace").addEventListener('click',function(){
    var inputValue=document.getElementById("history-value").innerText;
    let value='';
   for(var i=0;i<inputValue.length-1;i++){
    value=value+inputValue[i];
   }
   document.getElementById("history-value").innerText=value;

  
})
document.getElementById("+").addEventListener('click',function(){
    textAdd("+");
   
   }) 

document.getElementById("-").addEventListener('click',function(){
    textAdd("-");
   })
document.getElementById("/").addEventListener('click',function(){
  textAdd("/");
   
   })
document.getElementById("*").addEventListener('click',function(){
   textAdd('*');
   
   })

document.getElementById("=").addEventListener('click',function(){
    var secondElement=document.getElementById("history-value").innerText;
    var secondOutput=document.getElementById("output-value").innerText;
    var Value='';
    for (var i = 0; i < secondOutput.length-1; i++) {
        var Value = Value + secondOutput[i];
        }
    if(secondOutput[secondOutput.length-1]=='+'){
        var result=parseInt(Value)+parseInt(secondElement);
        document.getElementById("output-value").innerText = result;
        
    }
    else if(secondOutput[secondOutput.length-1]=='-'){
        var result=parseInt(Value)-parseInt(secondElement);
        document.getElementById("output-value").innerText = result;
        
    }
    else if(secondOutput[secondOutput.length-1]=='*'){
        var result=parseInt(Value)*parseInt(secondElement);
        document.getElementById("output-value").innerText = result;
        
    }
    else if(secondOutput[secondOutput.length-1]=='/'){
        var result=parseInt(Value)/parseInt(secondElement);
        document.getElementById("output-value").innerText = result;
        
    }
})
function inputValue(id){
    var inputValue=document.getElementById("history-value").innerText;
    document.getElementById("history-value").innerText=inputValue+id;
}
function textAdd(id){
    var firstInput = document.getElementById("history-value").innerText;
    var output = document.getElementById("output-value").innerText;
    document.getElementById("output-value").innerText =firstInput+id;
    document.getElementById("history-value").innerText = '';
}