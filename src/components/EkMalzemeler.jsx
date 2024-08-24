function EkMalzemeler(props) {
    const { 
        type,
        changeMaterial,
        checked,
        name,
        value,
        label} = props;
    return (
    <label className="ekMalzemeler">
    <input
    type={type}
    onChange={changeMaterial}
    checked={checked}
    name={name}
    value={value}
    />
    {label}
    </label>
    );
  }
  
  export default EkMalzemeler;
