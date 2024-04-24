import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { CartProvider } from './context/cart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <App></App>
        </CartProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)


