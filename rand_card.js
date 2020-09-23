function PegarCarta() {
    var num = Math.floor(Math.random() * 30) + 1;
    var imagem = num.toString();
    var frente = 'img/F'+ imagem + '.jpg';
    var verso = 'img/V'+ imagem + '.jpg';

    document.getElementById("F").src = frente;
    document.getElementById("V").src = verso;
    document.getElementById("nome").innerText = 'Carta ' + imagem;
    console.log(frente + ' | ' + verso);
}