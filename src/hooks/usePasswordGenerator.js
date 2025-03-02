import { useState } from 'react'

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const generatePassword = () => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+{}:"<>?[];,./`~'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let characters = letters
    if (includeNumbers) characters += numbers
    if (includeSymbols) characters += symbols

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      newPassword += characters[randomIndex]
    }

    setPassword(newPassword)
  }

  return {
    password,
    length,
    setLength,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    generatePassword,
  }
}
