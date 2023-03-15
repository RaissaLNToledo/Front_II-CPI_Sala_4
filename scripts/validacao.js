const form = document.getElementById('formulario');
const campos =document.querySelectorAll('.required');
const spans = document.querySelectorAll('.requerimento');
const botao = document.getElementById("cadastrar");

function setError(index){
    campos[index].style.border ='2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border ='2px solid green';
    spans[index].style.display = 'none';
    
}

function titulo(){
    if(campos[0].value.length <= 3)
    {
        setError(0);
        spans[0].innerText = "Obrigatório o preenchimento com no mínimo 4 caracteres";
        document.getElementById("titulo").style.marginBottom = '0rem';
        return false

    }
    else
    {
        removeError(0);
        document.getElementById("titulo").style.marginBottom = '1rem';
        return true
    }
}



function url(){
    if(campos[1].value.length < 1)
    {
        setError(1);
        spans[1].innerText = "Campo obrigatório";
        document.getElementById("url").style.marginBottom = '0rem';
        return false
    }
    else
    {
        removeError(1);
        document.getElementById("url").style.marginBottom = '1rem';
        return true
    }
}




function descricao(){
    if(campos[2].value.length < 4 )
    {
        setError(2);
        spans[2].innerText = "Obrigatório o preenchimento com no mínimo 4 caracteres";
        document.getElementById("descricao").style.marginBottom = '0rem';
        return false
    }
    else
    {
        removeError(2);
        document.getElementById("descricao").style.marginBottom = '1rem';
        return true
    }
}


let validado = [] //Campos que estão validados de acordo com o solicitado

document.getElementById("titulo").addEventListener('keyup', function() {
    let valTit = titulo();
    if (valTit && !validado.includes("titulo")) {
        validado.push("titulo")
    }
    else if (!valTit && validado.includes("titulo")) {
        validado.splice(validado.indexOf("titulo"))
    }
});

document.getElementById("url").addEventListener('keyup', function() {
    let valUrl = url();
    if (valUrl && !validado.includes("url")) {
        validado.push("url")
    }
    else if (!valUrl && validado.includes("url")) {
        validado.splice(validado.indexOf("url"))
    }
})

document.getElementById("descricao").addEventListener('keyup', function() {
    let valDesc = descricao();
    if (valDesc && !validado.includes("descricao")) {
        validado.push("descricao")
    }
    else if (!valDesc && validado.includes("descricao")){
        validado.splice(validado.indexOf("descricao"))
    }
})

//Para liberação do botão
form.addEventListener('keyup', function() {
    if (validado.includes("titulo") && validado.includes("url") && validado.includes("descricao")) {
        botao.removeAttribute("disabled");
        botao.style.cursor = "pointer";
        botao.style.color = "#ffffff";
        botao.style.background = "#4b0082";
        botao.addEventListener("mouseenter", function() {
            botao.style.background = "#9333FF";
            botao.style.color = "#ffffff";
        })
        botao.addEventListener('mouseleave', function() {
            botao.style.background = "#4b0082";
            botao.style.color = "#ffffff";
        })
    }
    else {
        document.getElementById("cadastrar").setAttribute("disabled", "");
        botao.style.backgroundColor = "#1e1e1e";
        botao.style.background = "#181818";
    }
})

form.addEventListener('click',(Event) => {
    Event.preventDefault();
})