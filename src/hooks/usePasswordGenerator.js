import { useState } from 'react'

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [icludeSymbols, setIcludeSymbols] = useState(false)
}
