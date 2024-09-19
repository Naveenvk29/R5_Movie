const Dropdown = ({ title, options, fn }) => {
  return (
    <div className="">
      <select
        defaultValue="0"
        onChange={fn}
        name="format"
        id="format"
        className="text-black"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options?.map((o, i) => (
          <option value={o} key={i}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
