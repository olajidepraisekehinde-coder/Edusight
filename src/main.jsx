import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'
import App from './App.jsx'
import UserProvider from './Context/userContext'
import Theme from './themeContext/theme'

function Root() {
  return (
    <StrictMode>
      <Theme>
        <UserProvider>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}>
              <App />
            </motion.div>
          </AnimatePresence>
        </UserProvider>
      </Theme>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
