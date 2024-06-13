import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.jsx'
import { Provider } from 'react-redux'
import store from './redux/configureStore.jsx'
import './index.css'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
