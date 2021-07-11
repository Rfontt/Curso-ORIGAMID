let page = window.location.href;

if(page === 'http://127.0.0.1:5500/DOM-FOR-BEGINNERS/index.html') {
    console.log('Está na página index');
}else {
    console.log(`Está na página ${page}`);
}