let preveiwContainer = document.querySelector('.faci-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.faci-container .facilities').forEach(product => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling when the modal is open
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling when the modal closes
  };
});