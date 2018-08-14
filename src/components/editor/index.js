import marked from 'marked';

class Editor {
  constructor(content, el) {
    this.content = marked(content);
    this.el = el;
    this.values = {};
    this.content = this.content.replace(
      new RegExp('{{(.*?)}}', 'gis'),
      '<span data-code="$1">$1</span>'
    );
    this.el.innerHTML = this.content;
    this.initDOM();
  }

  initDOM() {
    const els = this.el.querySelectorAll('[data-code]');
    for (const el of els) {
      el.className = 'editable';

      const split = el.getAttribute('data-code').split('|');
      const code = split[0];
      el.setAttribute('data-code', code);
      split.shift();

      const options = {};
      for (let i = 0; i < split.length; i++) {
        const opt = split[i].split(':');
        if (opt[0]) {
          options[opt[0]] = opt[1] || true;
        }
      }

      const span = document.createElement('span');
      span.innerHTML = code.replace('\n', '<br>');
      span.setAttribute('contenteditable', true);

      el.innerHTML = '';
      el.appendChild(span);

      if (!this.values[code]) {
        this.values[code] = {
          value: code,
          els: [],
          options: {}
        };
      }
      this.values[code].els.push(el);
      this.values.options = Object.assign(this.values[code].options, options);
      if (this.values[code].options.type) {
        span.setAttribute('type', this.values[code].options.type);
      }

      span.addEventListener('focus', () => {
        setTimeout(() => {
          document.execCommand('selectAll', false, null);
        }, 40);
      });
      span.addEventListener('input', (inputCode => {
        return event => {
          this.handleChange(inputCode, event.target.innerHTML);
        };
      })(code));
    }
  }

  handleChange(code, value) {
    if (this.values[code].value !== value) {
      this.values[code].value = value;
      this.valueUpdated(code);
    }
  }

  valueUpdated(code) {
    let edited = false;
    if (
      this.values[code].value !== code
      && this.values[code].value.replace(/&nbsp;/g, '').trim().length > 0
    ) {
      edited = true;
    }
    for (const el of this.values[code].els) {
      if (edited && ` ${el.className} `.indexOf(' editable--edited ') === -1) {
        el.className += ' editable--edited';
      } else if (!edited && ` ${el.className} `.indexOf(' editable--edited ') >= 0) {
        el.className = ` ${el.className} `.replace(' editable--edited ', ' ').replace(/\s\s+/g, ' ');
      }

      const span = el.querySelector('span');
      if (span) {
        if (span.innerHTML !== this.values[code].value) {
          span.innerHTML = this.values[code].value;
        }
      }
    }
  }
}

export default Editor;
