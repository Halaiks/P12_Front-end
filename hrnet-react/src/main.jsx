import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { store, persistor } from "./store/index.js"
import { PersistGate } from "redux-persist/integration/react" 
// Import des styles par défaut de react-datepicker
import "react-datepicker/dist/react-datepicker.css"
import './index.css'

// Point d'entrée de l'application : montage sur la racine #root
// StrictMode active les vérifications additionnelles de React en développement
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)