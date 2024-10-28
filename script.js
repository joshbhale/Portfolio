const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Start coding

class CssPropControl {
  constructor(element) {
    this.element = element
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName)
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val)
  }
}

const bodyCssProps = new CssPropControl(document.body)

let toggle = document.querySelector('#dark-mode-toggle')
toggle.addEventListener('click', () => { 
  let mode = toggle.checked ? 'dark' : 'light'
  bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
  bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
  bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
})
