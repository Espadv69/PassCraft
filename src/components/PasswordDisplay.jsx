const PasswordDisplay = ({ password }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password)
      alert('Password copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy password: ', err)
    }
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <span className="text-lg font-mono text-gray-700">
          {password || 'Generate a password'}
        </span>
        <button
          onClick={handleCopy}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          disabled={!password}
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default PasswordDisplay
