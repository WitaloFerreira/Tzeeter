const tzButton = document.getElementById("tzeet-button");
const modal = document.querySelector("dialog");
const closem = document.getElementById("close-modal");

tzButton.onclick = function () {
    modal.showModal();

    let textModal = document.querySelector(".textareaModal");
    let contadorModal = document.querySelector(".contadorModal");
    let buttonModal = document.querySelector(".sendModal");

    limitaTamanho(textModal, contadorModal, buttonModal, limiteChar);
}

closem.onclick = function () {
    modal.close();
}

const modais = document.querySelectorAll("#textarea");


function limitaTamanho(textMain, contador, button,  limiteChar){
    textMain.addEventListener("keyup", function(event){
        let cont = limiteChar - event.target.textLength;
        contador.innerHTML = `${cont}`;
    
        if(textMain.value === ""){
            contador.classList.add("hidden");
        }
        else{
            contador.classList.remove("hidden");
        }
    
        if(textMain.value === ""){
            contador.classList.add("hidden");
            button.disabled = true;
        } else {
            contador.classList.remove("hidden");
            button.disabled = false;
        }
    
    
        if(cont < 40){
            contador.classList.add("contador-yellow");
        }
        else{
            contador.classList.remove("contador-yellow");
        }
    
        if(cont < 0){
            contador.classList.add("contador-red");
        }
        else{
            contador.classList.remove("contador-red");
        }
    
    });
}

const limiteChar = 140;

let textMain = document.getElementById("textarea");
let contadorMain = document.getElementById("contador");
let button = document.getElementById("send");


limitaTamanho(textMain, contadorMain, button, limiteChar);








