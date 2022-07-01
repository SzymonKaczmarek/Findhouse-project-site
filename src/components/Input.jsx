export function Input({ id, label, type = 'text', ...props }) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-3 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        className="block w-full border border-gray-200 rounded-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
      />
    </div>
  )
}
