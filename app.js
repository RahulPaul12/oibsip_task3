let btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
   e.preventDefault()
    let val = document.getElementById('temp').value;
    if(isNaN(val)){
        document.getElementById('result').value = '*please enter a valid number'
        document.getElementById('result').style.color='red'
    }
    else{
        document.getElementById('result').style.color='black'
       if(document.getElementById('unit').value=='celcius'){
        let resultvalue  = farenheit(val)
        document.getElementById('result').value= resultvalue
    }
    else if(document.getElementById('unit').value=='fahrenheit'){
        let resultvalue  = celceis(val)
        document.getElementById('result').value= resultvalue
    }
    else if(document.getElementById('unit').value=='kelvin'){
        let resultvalue  = kelvin(val)
        document.getElementById('result').value= resultvalue
    } 
    }
    
})

let farenheit =(value)=>{
    let result = (value*1.8)+32;
    return result.toFixed(3) + "° F";
}

let celceis=(value)=>{
    let result = (value-32)/1.8;
    return result.toFixed(3) + "° C";
}
let kelvin=(value)=>{
    let result = (value-273.15);
    return result+"° C"
}

