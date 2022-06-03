import './style.css'

document.querySelector('#app').innerHTML = `"I 💚 Alpine JS!"
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

import Alpine from 'alpinejs';
import {LoveCounter} from './love-counter';
window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);
Alpine.start()


