const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce costuma separar o lixo adequadamente?",
        alternativas: [
            {
                texto: "Sim, com certeza!",
                afirmacao: "afirmaçao"
            },
            {
                texto: "Não, infelizmente.",
                afirmacao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "O descarte de lixo correto é muito importante para o meio ambiente",
        alternativas: [
            {
                texto: "Jogar lixo no lugar certo é esssencial para a preservação do meio ambiente e para a qualidade de vida de todos. Quando descartamos resíduos de forma convecional, eles podem poluir o solo, rios e oceano, causando danos irreparáveis á fauna e á flora",
            
            },
            {
                texto: "Jogar lixo no lugar errado é totalmente prejudical ao ambiente pois traz sérias consequências para a natureza, os animais e a sociedade. Quando os reísiduos são descartados de formas inadequada , eles poluem o solo e oceanos comprometendo a qualidade da água",
            
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
   
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();