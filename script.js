let menu = document.getElementById('bi-list');
let drop = document.getElementById('dropme');
let close = document.getElementById('bi-menu');




if (menu) {
    menu.addEventListener('click', () =>{
        drop.style.display = 'block';
        menu.style.display = 'none';
        close.style.display = 'block';

        
    })
    
}
if (close) {
    close.addEventListener('click', () =>{
        drop.style.display = 'none';
        menu.style.display = 'block';
        close.style.display = 'none';

        
    })
    
}







// scrolling

const firstImage = document.getElementById('image1');
const secondImage = document.getElementById('image2');
const thirdImage = document.getElementById('image3');

window.addEventListener('scroll', function () {
    var top = window.scrollY;
    if (top > 0 && top < 5535) {
        firstImage.style.opacity = 1;
        secondImage.style.opacity = 0;
        thirdImage.style.opacity = 0;
        firstImage.style.position = 'sticky';

    } else if (top > 5535 && top < 6256) {
        firstImage.style.opacity = 0;
        secondImage.style.opacity = 1;
        thirdImage.style.opacity = 0;
    } else if (top > 6256 && top < 7561) {
        firstImage.style.opacity = 0;
        secondImage.style.opacity = 0;
        thirdImage.style.opacity = 1;
    } else {
        firstImage.style.opacity = 1;
        secondImage.style.opacity = 1;
        thirdImage.style.opacity = 1;
    }

})



