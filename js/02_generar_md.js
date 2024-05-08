function generarMarkdown() {
    var urlInput = document.getElementById('urlInput').value;
    var faviconUrl = 'http://www.google.com/s2/favicons?domain=' + urlInput;
    var markdown = `<img src="${faviconUrl}" style="vertical-align:middle;margin-right:5px;"> [${urlInput}](${urlInput})`;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = markdown;

    // Agregar botón de copiado
    var botonCopiar = document.createElement('button');
    botonCopiar.textContent = 'Copiar';
    botonCopiar.onclick = function() {
        copiarAlPortapapeles(markdown);
    };
    resultado.appendChild(botonCopiar);
}

function copiarAlPortapapeles(texto) {
    var elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    alert('¡Copiado al portapapeles!');
}

// export { generarMarkdown };