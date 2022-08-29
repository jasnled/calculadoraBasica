const h1 = document.querySelector('h1');

const btn = document.querySelector('#btnCalcularSuma');
//const res = document.querySelector('#result');           //traemos primero la etiqueta con el ID: result
const divM = document.querySelector('#principal');

function btnOnClick(){
    console.log("click en el boton");
}

function impValue(oper){
    const val1input = document.querySelector('#calculo1');
    const val2input = document.querySelector('#calculo2');
    const val1 = val1input.value;
    const val2 = val2input.value;
    
    if(oper == "suma"){
        result = Number(val1) + Number(val2);
        return result;
    }
    if(oper == "resta"){
        result = Number(val1) - Number(val2);
        return result;
    }
    if(oper == "multi"){
        result = Number(val1) * Number(val2);
        return result;
    }
    if(oper == "divi"){
        result = Number(val1) / Number(val2);
        return result;
    }
    console.log(typeof(val1));
    
}



function Inp(cla){

    inputG = document.createElement('input');
    inputG.setAttribute('class','inp cal');
    inputG.setAttribute('id',cla); 
    inputG.setAttribute('placeholder','Escribe el valor: ');
    return inputG;
}

function creBtn(op){
    btnCal = document.createElement('button');
    btnCal.setAttribute('class','cal');
    btnCal.setAttribute('id','btnCalcularSuma');
    const strCon = "writeResult('#result',impValue(" + "'" + op + "'" + "))";
    btnCal.setAttribute('onclick',strCon);
    return btnCal;  
}


function creP(){

    const paraf = document.createElement('p');
    paraf.setAttribute('id','result');
    return paraf;
    

}

function opera(op){
    let operadores = {
        suma: "+",
        resta: "-",
        multi: "*",
        divi: "/"
    };
    return operadores[op];
}

function genInp(op){ //divM es el atributo ("id") del div, y btnC es el atributo de 
    const input1 = document.querySelector('#calculo1');
    const input2 = document.querySelector('#calculo2');
    const arrayA = ["calculo1","calculo2"];
    const div = document.querySelector('#principal');
    div.innerText = "";
    for (let i = 0; i<=1 ; i++) {
        
        div.append(Inp(arrayA[i]));
        if(i==0){
            operC = document.createElement('p');
            operC.setAttribute('id','operador');
            operC.append(opera(op));
            div.append(operC);
        }
    }
    
    div.append(creBtn(op));
    const btnCa = document.querySelector('#btnCalcularSuma');//'#btnCalcularSuma');
    btnCa.innerHTML='Calcular';

    
    
}



function writeResult(etiq,resul){

    const div = document.querySelector('#principal');

    if(document.querySelector('#result') == null){
        div.append(creP());
    }

    const res = document.querySelector(etiq);     
    console.log(typeof(resul))
    res.innerText = " ";
    res.innerText = "El resulto es: " + String(resul);
    
}


