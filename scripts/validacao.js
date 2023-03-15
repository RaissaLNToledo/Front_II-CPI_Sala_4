const form = document.getElementById('formulario');
const campos =document.querySelectorAll('.required');
const spans = document.querySelectorAll('.requerimento');

form.addEventListener('click',(Event) => {
    Event.preventDefault();
    titulo();
    url();
    descricao()
})


function setError(index){
    campos[index].style.border ='2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border ='2px solid green';
    spans[index].style.display = 'none';
    
}

function titulo(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}



function url(){
    if(campos[1].value.length < 6)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}




function descricao(){
    if(campos[2].value.length < 8 )
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

