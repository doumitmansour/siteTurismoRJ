const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.geral');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = ('#EB4D42')

card1.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/cristo.jpg')";
    title.innerText = 'Cristo Redentor';
    textCard.innerText = 'No alto do morro do Corcovado está instalado o Cristo Redentor, um dos pontos turísticos mais procurados do Rio de Janeiro. Maior e mais famosa escultura Art Déco do mundo, a estátua do Cristo Redentor começou a ser planejada em 1921 e foi desenvolvida pelo engenheiro Heitor da Silva Costa ao longo de cinco anos de trabalho, de 1926 a 1931, o ano de inauguração do monumento.';
});
card2.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/copacabana.jpg')";
    title.innerText = 'Copacabana';
    textCard.innerText = 'Carinhosamente apelidada pela população de Princesinha do Mar, uma canção popular dos brasileiros João de Barro – o Braguinha – e Alberto Ribeiro, a praia de Copacabana localiza-se no bairro de mesmo nome, na zona Sul da cidade do Rio de Janeiro. Copacabana conta com bicicletários, ciclovia, quiosques, hotéis, bares e restaurantes, frequentados tanto de dia como à noite. Possui também dois Fortes Militares, um em cada extremidade da praia, com vistas panorâmicas, abertos à visitação.';
});
card3.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/pao\ de\ acucar.jpg')";
    title.innerText = 'Pão de Açucar';
    textCard.innerText = 'Partindo da Praia Vermelha, os visitantes pegam o primeiro bonde leva ao Morro da Urca, e de lá um segundo bondinho os leva até o topo do Morro do Pão de Açúcar, que fica a 396 metros do nível do mar. Diferentes histórias justificam o nome desse ponto turístico; a mais popular diz que durante os séculos XVI e XVIII, no auge da produção de cana de açúcar, os produtores armazenavam os blocos de açúcar em formas para serem exportados, e a semelhança do objeto com o Morro do Pão do Açúcar deu origem ao nome.';
});
card4.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/rocinha.jpg')";
    title.innerText = 'Rocinha';
    textCard.innerText = 'No tour você conhece o show dos meninos da capoeira e a escola de inglês gratuita do Projeto Favela Phoenix, por exemplo. A escola, fundada pelo também guia de turismo Jody king, dono da empresa de turismo criada para ajudar a escola de inglês gratuita para crianças, jovens e adultos da comunidade, recebe 40% de todos os passeios feito pelos guias.';
})