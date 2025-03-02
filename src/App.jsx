import PasswordDisplay from './components/PasswordDisplay'
import Slider from './components/Slider'
import Checkbox from './components/Checkbox'

import { usePasswordGenerator } from './hooks/usePasswordGenerator'

const App = () => {
  const {
    password,
    length,
    setLength,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    generatePassword,
  } = usePasswordGenerator()
}

export default App
