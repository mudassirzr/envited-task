export default function Input(props) {
  const { type = "text", label, id, value, onChange, error, ...rest } = props;
  return (
    <div className="relative mb-3 pb-4">
      <label className="mb-2 font-semibold" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="block py-2 px-3 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type={type}
        onChange={type==='file'?(e)=>onChange({files: e.target.files[0], value: e.target.value}):(e)=>onChange(e.target.value)}
        value={type==='file'?value.value:value}
        {...rest}
      />
      {error && <span className="text-red-500 text-xs absolute bottom-0">{error}</span>}
    </div>
  );
}
