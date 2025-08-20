const shadowHost = document.querySelector('app-bar');
const shadowRoot = shadowHost.shadowRoot;
document.addEventListener('DOMContentLoaded', function() {
  const showFormBtn = shadowRoot.getElementById('showFormBtn');
  if (showFormBtn) {
    showFormBtn.addEventListener('click', showForm);
  } else {
    console.error('Id tidak ditemukan');
  }
});

function showForm() {
  const form = document.createElement('add-notes-form');
  document.getElementById('spaceForm').appendChild(form);
  console.log('bisa kok');
}
