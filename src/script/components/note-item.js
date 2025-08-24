
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'body', 'created-at', 'archived'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Tidak ada Judul';
    const body = this.getAttribute('body') || 'Tidak ada Isi';
    const createdAt = this.getAttribute('created-at') || '';
    const archived = this.getAttribute('archived') === 'true';
    
    this.shadowRoot.innerHTML = `
      <style>
        .note-item {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .note-title {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
        }
        .note-content {
          margin-top: 5px;
          color: #666;
        }
        small {
          color: #999;
        }
      </style>
      <div class="note-item">
        <h3 class="note-title">${title}</h3>
        <p class="note-content">${body}</p>
        <small>Created at: ${new Date(createdAt).toLocaleString()}</small>
        <br>
        <small>Archived: ${archived}</small>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);