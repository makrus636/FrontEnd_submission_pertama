
class NoteList extends HTMLElement {

  _style = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  static get observedAttributes() {
    return ['notes-data'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'notes-data') {
      this.renderNotes();
    }
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
      margin-block: 1rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 14px;
      row-gap: 22px;
    }
    @media screen and (max-width: 576px) {
      :host {
      grid-template-columns: 1fr;
      }
    }
    `;
  }

  renderNotes() {
    this._updateStyle();
    this.shadowRoot.appendChild(this._style);
    this.shadowRoot.innerHTML += '';

    const notesData = JSON.parse(this.getAttribute('notes-data') || '[]');

    notesData.forEach(note => {
      const noteItemElement = document.createElement('note-item');
      
      noteItemElement.setAttribute('title', note.title);
      noteItemElement.setAttribute('body', note.body);
      noteItemElement.setAttribute('created-at', note.createdAt);
      noteItemElement.setAttribute('archived', note.archived);
      
      this.shadowRoot.appendChild(noteItemElement);
    });
  }
}

customElements.define('note-list', NoteList);