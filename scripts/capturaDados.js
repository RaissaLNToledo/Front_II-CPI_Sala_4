function insercao(filme, descricao, url) {
    this.titulo = filme,
    this.descricao = descricao,
    this.img = url
};

let tit = document.getElementById('titulo');
let urlImg = document.getElementById('url');
let desc = document.getElementById('descricao');



function capturaDados() {
    let titulo = tit.value;
    let imagem = urlImg.value;
    let descricao = desc.value;
    let obj = new insercao(titulo, descricao, imagem);
    return obj 
};

let listaObjetos = [];
let btnSalvar = document.getElementById("cadastrar");
btnSalvar.addEventListener("click", function() {
    listaObjetos.push(capturaDados());
});
