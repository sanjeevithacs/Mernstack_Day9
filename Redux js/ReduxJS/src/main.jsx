                                               //20.01.25
import { createRoot } from 'react-dom/client';                          
import store from "../public/reduxStore/store.js"
import App from "./App.jsx"
import { Provider } from 'react-redux'  

createRoot(document.getElementById('root')).render(
<Provider store={store}>    {/* store - attribute  |  {store} - exported store value */}
    <App/>
</Provider>
    )
