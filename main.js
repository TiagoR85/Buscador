// main.js

// ====================================
function PesquisaGoogle(){
    let pesquisa = document.getElementById('text_pesquisa_google').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://www.google.pt/search?safe=active&q="+palavras);
    }    
}

// ====================================
function PesquisaGoogleImages(){
    let pesquisa = document.getElementById('text_pesquisa_google_images').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://www.google.pt/search?tbm=isch&as_q="+palavras);
    }    
}

// ====================================
function PesquisaFreepik(){
    let pesquisa = document.getElementById('text_pesquisa_freepik').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://www.freepik.com/index.php?goto=2&searchform=1&k="+palavras);        
    }    
}

// ====================================
function PesquisaPixabay(){
    let pesquisa = document.getElementById('text_pesquisa_pixabay').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://pixabay.com/pt/images/search/"+palavras);        
    }    
}

// ====================================
function PesquisaPHP(){
    let pesquisa = document.getElementById('text_pesquisa_php').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("http://be2.php.net/manual-lookup.php?pattern="+palavras);        
    }    
}

// ====================================
function PesquisaHTML(){
    let pesquisa = document.getElementById('text_pesquisa_html').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://developer.mozilla.org/en-US/search?q="+palavras+"&topic=html");        
    }    
}

// ====================================
function PesquisaCSS(){
    let pesquisa = document.getElementById('text_pesquisa_css').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://developer.mozilla.org/en-US/search?q="+palavras+"&topic=css");        
    }    
}

// ====================================
function PesquisaJavascript(){
    let pesquisa = document.getElementById('text_pesquisa_javascript').value;
    if(pesquisa != ""){
        palavras = pesquisa.replace(" ", "+");
        window.open("https://developer.mozilla.org/en-US/search?q="+palavras+"&topic=javascript");        
    }    
}

// ====================================
function PesquisaPorItens(){

    let combo = document.getElementById('combo_itens');
    let palavras = '';
    if(combo.selectedIndex != -1){
        palavras = combo.options[combo.selectedIndex].text + " ";

        let pesquisa = document.getElementById('text_pesquisa_item').value;
        if(pesquisa != ""){
            palavras += pesquisa.replace(" ", "+");
            window.open("https://www.google.pt/search?safe=active&q="+ palavras);        
        }
    }    
}

// ====================================
function converterTimestamp(){
    //converte um valor timestamp para data hora
    var timestamp = document.getElementById('text_timestamp').value;
    var data_hora = new Date(timestamp*1000);
    var texto = data_hora.getDate() + '-' + 
                (data_hora.getMonth() + 1) + '-' + 
                data_hora.getFullYear() + " (" + 
                data_hora.getHours() + ":"+
                data_hora.getMinutes() + ":"+
                data_hora.getSeconds() + ")";
    document.getElementById('valor_data_hora').innerHTML = texto;

}