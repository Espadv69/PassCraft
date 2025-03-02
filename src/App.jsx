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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">PassCraft</h1>
        <PasswordDisplay password={password} />
        <Slider value={length} onChange={(e) => setLength(e.target.value)} />
        <Checkbox
          label="Include Numbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <Checkbox
          label="Include Symbols"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
