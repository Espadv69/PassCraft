const PasswordDisplay = ({ password }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password)
      alert('Password copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy password: ', err)
    }
  }
}

export default PasswordDisplay
