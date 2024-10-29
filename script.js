const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que são os problemas ambientais?",
        alternativas: [
            {
                texto: "São o conjunto de desafios e problemas enfrentados pela Terra e seus sistemas naturais. Das mudanças climáticas e poluição á superpopulação e á utilização de energia, estas questões são complexas e interligadas.",
                afirmacao: "afirmação"
            },
            {
                texto: "São o conjunto de desafios e problemas enfrentados pela Terra e seus sistemas naturais. Das mudanças climáticas e poluição á superpopulação e á utilização de energia, estas questões são complexas e interligadas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que não representa o impacto ambiental?",
        alternativas: [
            {
                texto: "A poluição sonora",
                afirmacao: "afirmação"
            },
            {
                texto: "A poluição sonora",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais problemas as mudanças climáticas trouxeram para o meio ambiente?",
        alternativas: [
            {
                texto: "Aumento da temperatura,queimadas e derretimento das geleiras",
                afirmacao: "afirmação"
            },
            {
                texto: "Aumento da temperatura,queimadas e derretimento das geleiras",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();