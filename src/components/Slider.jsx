const Slider = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password Length: {value}
        <input
          type="range"
          min="6"
          max="32"
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </label>
    </div>
  )
}

export default Slider
