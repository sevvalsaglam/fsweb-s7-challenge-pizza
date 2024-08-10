
function EkMalzemeler({  
    changeFn,
    isChecked,
    fieldName,
    value,
    label}) {
  //ekstra malzemeler için objelerden oluşan bir array yapılacak ve map methoduyla malzemeler checkboxa eklenecek.
    return (
    <>
        <div>
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
           
            <label className="ekMalzemeler">
                <input
                type="checkbox"
                onChange={changeFn}
                checked={isChecked}
                name={fieldName}
                value={value}
                />{''}
                {label}
            </label>

        </div>
    </>
  
    );
  }
  
  export default EkMalzemeler;
  
