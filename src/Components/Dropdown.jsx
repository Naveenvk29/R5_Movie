const Dropdown = ({ title, options, fn }) => {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <select
        defaultValue="0"
        onChange={fn}
        name="format"
        id="format"
        className="w-full bg-transparent font-semibold border border-zinc-600 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6556cd] shadow-lg hover:bg-[#27272A] transition-colors duration-200 ease-in-out cursor-pointer"
      >
        <option value="0" disabled className="bg-zinc-700 text-white">
          {title}
        </option>
        {options?.map((o, i) => (
          <option
            value={o}
            key={i}
            className="bg-zinc-800 text-white hover:bg-[#6556cd] hover:text-black"
          >
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
