class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  
  constructor() {
    super();
    
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }
  
  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        
        color: white;
        
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: black;
      }
      
      div {
        padding: 20px 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .app-name {
        margin: 0;
  
        font-size: 1.2rem;
      }
      
      button {
        background-color: white;
        border: none;
      }
      
      button:active {
        background-color: #bbb;
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
        <h1 class="app-name">Catatan</h1>
        <button id="showFormBtn" name="showFormBtn">Tambah Catatan</button>
      </div>
      
    `;
  }
}

customElements.define('app-bar', AppBar);