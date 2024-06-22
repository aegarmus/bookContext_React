
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider
        options={{ clientId: import.meta.env.VITE_USER_ID_PAYPAL }}
        >
        <BrowserRouter>
          <App />
        </BrowserRouter>

  </PayPalScriptProvider>
  
    ,
)
