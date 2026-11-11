import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css';
import './index.css';
import App from './App.jsx';

// Com JS ligado, os blocos .rev… começam escondidos e entram ao rolar
// (cdi-motion.css). Sem JS, ficam visíveis.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
