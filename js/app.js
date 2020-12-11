const search = document.getElementById('search');
const captions = document.getElementsByTagName('a');

window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

//Custom JavaScript code to search captions of the images and show or hide them
search.addEventListener('keyup', function() {
  for(i = 0; i < captions.length; i +=1) { //Loops through each caption and checks the value
    if(captions[i].dataset.caption.includes(search.value)) {
      captions[i].style.display = 'block';
    } else {
      captions[i].style.display = 'none';
    }
  }
});