const form = document.getElementById('formulario');
const campos =document.querySelectorAll('.required');
const spans = document.querySelectorAll('.requerimento');

function toggleButton(){
    const titulo = document.getElementsByTagName('input')[0].value;
    const v_url = document.getElementsByTagName('input')[1].value;
    const vdescricao = document.getElementsByTagName('textarea')[2].value;
    

    if (titulo &&  v_url && vdescricao  ) {
        document.querySelector('#cadastrar').disabled = false;
        return

    }
    document.querySelector('#cadastrar').disabled = true;
}




form.addEventListener('submit',(Event) => {
    Event.preventDefault();
    vtitulo();
    v_url();
    vdescricao();
})


function setError(index){
    campos[index].style.border ='2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border ='';
    spans[index].style.display = 'none';
}

function vtitulo(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}



function v_url(){
    if(campos[1].value.length < 6)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}




function vdescricao(){
    if(campos[2].value.length < 8 )
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

