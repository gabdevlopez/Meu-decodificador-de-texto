let imagem = document.getElementById('imagem-menino');
let mensagem = document.getElementsByClassName('mensagem')[0];
let botao = document.getElementById('botao-copiar');  
    

function cript(){
    
    let cripto = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let texto = document.getElementById('textarea');
    let texto2 = texto.value;
    let texto3 = '';

    if(texto2 == ''){
        return;
    }

    for(let i = 0; i < texto2.length; i++){

        switch (texto2[i]){
            case 'a':
                texto3 += cripto[0];
                break;
        
            case 'e':
                texto3 += cripto[1];
                break;
        
            case 'i':
                texto3 += cripto[2];
                break;
        
            case 'o':
                texto3 += cripto[3];
                break;
        
            case 'u':
                texto3 += cripto[4];
                break;
        
            default:
                texto3 += texto2[i];
                break;
        }
    }
    display(texto3);
    texto.value = '';
}

 
function descript(){
    let texto = document.getElementById('textarea');
    let texto2 = texto.value;

    texto2 =  texto2.replace(/ai/g, 'a');
    texto2 =  texto2.replace(/enter/g, 'e');
    texto2 =  texto2.replace(/imes/g, 'i');
    texto2 =  texto2.replace(/ober/g, 'o');
    texto2 =  texto2.replace(/ufat/g, 'u');

    if(texto2 == texto.value || texto2 == ''){
        return;
    }
    
    display(texto2);
    texto.value = '';
}

function display(texto){
    
    imagem.style.display = 'none';
    mensagem.style.display = 'none';
    botao.style.display = 'inline';

    let textoCripto = document.getElementById('texto-cripto');

    textoCripto.innerHTML = '<p>'+texto+'</p>' 

    if(window.matchMedia("(max-width: 450px)").matches || window.matchMedia("(max-width: 800px)").matches){
        let textareaRows = document.getElementById('textarea');
        textareaRows.rows = 1;
    }
}

function copiarTexto(){
    let copiado = document.getElementById('texto-cripto').textContent;
    navigator.clipboard.writeText(copiado);
    
    document.getElementById('texto-cripto').textContent = '';
    
    imagem.style.display = 'block';
    mensagem.style.display = 'block';
    botao.style.display = 'none';

    if(window.matchMedia("(max-width: 450px)").matches){
        imagem.style.display = 'none';
    }
}   



if(window.matchMedia("(max-width: 400px)").matches || window.matchMedia("(max-width: 800px)").matches){

    textarea = document.getElementById('textarea');
    function autoResize(){
        while (textarea.scrollHeight > textarea.offsetHeight){
            textarea.rows += 1;
        }
        
        if(textarea.rows > 1){
            while (textarea.scrollHeight <= textarea.offsetHeight){
                textarea.rows -= 1;
            }
        }
    }
} 
