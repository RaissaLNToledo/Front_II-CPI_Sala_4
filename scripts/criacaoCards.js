function criarCards(array, elementoPai) {
    for (let filme of array){
        if (filme !== array[(array.length) - 1]){
            continue
        }

        else{
            let divCard = document.createElement("div");
            divCard.setAttribute("class", "card");
            divCard.innerHTML = `
                <h2>${filme.titulo}</h2>
                <div class="imagem">
                <img src="${filme.img}">
                </div>
                <p>
                ${filme.descricao}
                </p>
            `;
            elementoPai.appendChild(divCard);
        }
    }
}

let elementoPai = document.getElementById("paiCards");


btnSalvar.addEventListener("click", function(){
    criarCards(listaObjetos, elementoPai);
    document.getElementById("formulario").reset();
    botao.setAttribute("disabled", "");
    botao.style.backgroundColor = "#1e1e1e";
    botao.style.background = "#181818";
    botao.style.cursor = "auto";
    campos[0].style.border = '2px solid #181818';
    campos[1].style.border = 'none';
    campos[2].style.border = 'none';
})