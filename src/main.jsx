// StrictMode is a helper: it shows extra warnings while we develop.
import { StrictMode } from 'react';
// createRoot connects React to the page.
import { createRoot } from 'react-dom/client';
// Import our main component (the top of the app).
import App from './App.jsx';
 
// 1) find the empty div with id="root" in index.html
// 2) createRoot(...) tells React: "you control this div"
// 3) render(...) draws our App inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* our App component, written like an HTML tag */}
  </StrictMode>,
);
