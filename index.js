let btn_num = [...document.getElementsByClassName("btn_num")];
let tela = document.getElementById("tela");
let btn_sinal = [...document.getElementsByClassName("btn_sinal")];
let btn_igual = document.getElementById("igual");
let btr_apagar = document.getElementById("apagar");
let chave = 1;
let control = 1;
let igualLigado = 0;
console.log(btn_num);



btn_num.map((el)=>{
    el.addEventListener("click", () =>{
        if ((tela.innerHTML == "00" && chave) || (igualLigado && !control))
        {
            tela.innerHTML = "";
            chave = 0;
            if(igualLigado)
                igualLigado = 0;
        }
        tela.innerHTML += el.dataset.op;
        control = 0;
    })
})

btn_sinal.map((el)=>{
    el.addEventListener("click", ()=>{
        if (tela.innerHTML == "00" && el.dataset.op == "-")
        {
            tela.innerHTML = "";
            tela.innerHTML += el.dataset.op;
            return ;
        }
        if (control != 0)
            return ;
        if (tela.innerHTML == "00")
            tela.innerHTML = "";
        tela.innerHTML += el.dataset.op;
        control = 1;
    })
})

btn_igual.addEventListener("click", ()=>{
    tela.innerHTML = eval(tela.innerHTML);
    igualLigado = 1;
})

btr_apagar.addEventListener("click", ()=>{
    tela.innerHTML = "00";
})