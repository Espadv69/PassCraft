import { useState } from 'react'

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [icludeSymbols, setIcludeSymbols] = useState(false)

  const generatePassword = () => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+{}:"<>?[];,./`~'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
}
