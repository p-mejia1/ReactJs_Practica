import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import { ConfigProvider } from 'antd'; 
import esEs from 'antd/locale/es_ES.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider locale={esEs}>
      <App />
    </ConfigProvider>
  </StrictMode>,  // eslint-disable-line react/jsx-wrap-multilines
)

