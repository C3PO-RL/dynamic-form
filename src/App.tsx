import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { ThemeProvider } from '@mui/material'
import { CustomTheme } from './core/theme/theme'
import './App.css'
import AppRoutes from './core/routes/routes'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
