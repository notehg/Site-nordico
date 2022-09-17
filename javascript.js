function leiaMais(){

    var pontos = document.getElementById('pontos');
    var maisTexto = document.getElementById('maisTexto');
    var leiaMais = document.getElementById('leia Mais');

        if(pontos.style.display === "none"){
            pontos.style.display="inline";
            maisTexto.style.display="none"; 
            leiaMais.innerHTML='leia Mais';
        }else{
            pontos.style.display = "none";
            maisTexto.style.display = "inline"; 
            leiaMais.innerHTML='leia Menos';
        }
           
}