function FormInput({ name, onChange, label, type, placeholder }) {
  return (
    <div className="mb-6 flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-neutral-50 font-semibold text-lg tracking-wide mb-1"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-purple-950 text-neutral-100 w-full border border-neutral-500 rounded-xl p-4 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition-all duration-200 placeholder:text-neutral-500 placeholder:italic shadow-sm"
      />
    </div>
  );
}

export default FormInput;
