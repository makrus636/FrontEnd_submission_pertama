var hidden = true;

function showForm() {
  const formContainer = document.getElementById('form-container');
  
  if (hidden) {
    formContainer.style.display = 'block';
    hidden = false;
  } else {
    formContainer.style.display = 'none';
    hidden = true;
  }
  
}
