import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {GifExpertAppDef} from './GifExpertAppDef.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertAppDef />
  </StrictMode>



);
