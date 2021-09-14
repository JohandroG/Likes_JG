function increaselikes(){
    let numberin = document.querySelector('.num');
    let numberLikes = parseInt(numberin.innerHTML);
    numberLikes += 1;
    numberin.innerHTML = numberLikes;
}
