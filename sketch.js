//fantasia, aventura, drama, romance

//a viagem de chihiro, LIVRE, fantasia, aventura
//paddington, LIVRE, fantasia, aventura
//as aventuras de pi, 10, drama
//guardiões da galaxia, 12, fantasia, aventura
//o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de fantasia")
}

function draw() {  
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = true;
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFantasia){
  if (idade >= 10){
    if (idade >= 14){
      return "O menino que descobriu o vento"
   } else {
     if(gostaDeFantasia) {
  return "As aventuras de pi";
   } else {
     return "Depois da chuva";
    } 
   }
} else {
  return "A viagem de chihiro" ;
}
}
