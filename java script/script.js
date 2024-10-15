let n1,n2, operacio;

function suma(){
    n1 = parceFloat(document.getElementById("pantalla").value)
    operacio = "+"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function resta(){
    n1 = parceFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus();
}
function mult(){
    n1 = parceFloat(document.getElementById("pantalla").value)
    operacio = "*"
    document.getElementById("pantalla").value =""
    document.getElementById("pantalla").focus();
}
function div(){
    n1 = parceFloat(document.getElementById("pantalla").value)
    operacio = "/"
    document.getElementById("pantalla").value =""
    document.getElementById("pantalla").focus();  
}

function arrel(){
    let n1 = parseFloat(prompt("Dime un numero"));
    let n2 = parseFloat(prompt("Dime otro numnero"));
    document.write(Math.sqrt(n1))
}

function calcula(){
    let = resultat 
    n2 = parceFloat(document.getElementById("pantalla").value)
    
    if(operacio=="+"){
     resultat= n1+n2
     document.getElementById("pantalla").value = resultat
}
  
else if(operacio=="-"){
        resultat= n1+n2
        document.getElementById("pantalla").value = resultat
}
else if(operacio=="*"){
    resultat= n1+n2
    document.getElementById("pantalla").value = resultat
}
else if(operacio=="/"){
    resultat= n1+n2
    document.getElementById("pantalla").value = resultat
}

}

    
