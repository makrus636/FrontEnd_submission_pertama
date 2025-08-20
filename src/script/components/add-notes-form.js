class AddNotesForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  
  constructor() {
    super();
    
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }
  
  _updateStyle() {
    this._style.textContent = `
  div {
    border: 1px solid black;
    border-radius: 4.5px;
  }
  
  h2 {
    font-size: 1.2rem;
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid black;
    background-color: aquamarine;
  }
  
  form {
    padding: 10px;
    padding-top: ;
  }
  form p {
    display: flex;
    flex-direction: column;
  }
    `;
  }
  
  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    this._emptyContent();
    this._updateStyle();
    
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div>
      <h2>Catatan Baru</h2>
      <form action="" method="POST">
        <p>
        <label for="title">Judul</label>
        <input type="text" name="title" id="title" required />
        </p>
        <p>
        <textarea name="body" id="body" cols="30" rows="10" required ></textarea>
        </p>
        <button type="submit">Kirim</button>
      </form>
    </div>
    `;
  }
}

customElements.define('add-notes-form', AddNotesForm);