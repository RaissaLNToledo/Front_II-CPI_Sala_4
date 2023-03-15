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
                <img src="${filme.img}">
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
    document.getElementById("formulario").reset()
    console.log(listaObjetos);
})