/*
Dica:

word é a Palavra
clue é a dica sobre a palavra

*/

const words = [
    { word: "abacaxi", clue: "Fruta tropical" },
    { word: "elefante", clue: "Animal de grande porte com tromba longa" },
    { word: "computador", clue: "Dispositivo eletrônico" },
    { word: "girafa", clue: "Animal alto, com pescoço longo" },
    { word: "chocolate", clue: "Doce feito de cacau" },
    { word: "piano", clue: "Instrumento musical com teclas" },
    { word: "tigre", clue: "Felino selvagem" },
    { word: "esmeralda", clue: "Tipo de pedra preciosa" },
    { word: "navio", clue: "Embarcação no mar" },
    { word: "telefone", clue: "Dispositivo de comunicação" },
    { word: "floresta", clue: "Área com muitas árvores" },
    { word: "quadrado", clue: "Figura geométrica de quatro lados" },
    { word: "foguete", clue: "Veículo espacial" },
    { word: "sorvete", clue: "Doce gelado" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "avião", clue: "Meio de transporte aéreo" },
    { word: "macaco", clue: "Primate arbóreo" },
    { word: "raios", clue: "Descargas elétricas na atmosfera" },
    { word: "montanha", clue: "Elevação natural da terra" },
    { word: "vela", clue: "Objeto para iluminação" },
    { word: "otorrinolaringologista", clue: "Garganta"},
    { word: "carro", clue: "Possui rodas"},
    { word: "macaco", clue: "levantar pesos"},
    { word: "datena", clue: "arremessar cadeiras"},
    { word: "vassoura", clue: "uso doméstico"},
    { word: "capacete", clue: "usa na cabeça"},
    { word: "ventilador", clue: "refresca o ambiente"},
    { word: "som", clue: "produz ruidos"},
    { word: "dinossauro", clue: "baby"},
    { word: "pernilongo", clue: "vampiro noturno"},
    { word: "tempestade", clue: "clima"},
    { word: "piscina", clue: "lazer"},
    { word: "eslovaquia", clue: "país"},
    { word: "encaracolado", clue: "cabelo"},
    { word: "luz", clue: "iluminação"},
    { word: "esmalte", clue: "unha"},
    { word: "pitaya", clue: "fruta"},
    { word: "camburão", clue: "policia"},
    { word: "vermelho", clue: "cor"},
    { word: "fisioterapeuta", clue: "profissão"},
    { word: "programador", clue: "informática"},
    { word: "cabaré", clue: "cerveja"},
    { word: "caderno", clue: "escola"},
    { word: "onibus", clue: "transporte"},
    { word: "outono", clue: "clima"},
    { word: "atletico", clue: "galo"},
    { word: "cabeça", clue: "parte do corpo"},
  
  
  ];
  
  export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }