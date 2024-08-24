const malzemeler =[{
    value:"Pepperoni",
    label: "Pepperoni"
},{
    value:"Sosis",
    label: "Sosis"
},{
    value:"Kanada Jambonu",
    label: "Kanada Jambonu"
},{
    value:"Tavuk Izgara",
    label: "Tavuk Izgara"
},{
    value:"Soğan",
    label: "Soğan"
},{
    value:"Domates",
    label: "Domates"
},{
    value:"Mısır",
    label: "Mısır"
},{
    value:"Sucuk",
    label: "Sucuk"
},{
    value:"Jalepeno",
    label: "Jalepeno"
},{
    value:"Sarımsak",
    label: "Sarımsak"
},{
    value:"Biber",
    label: "Biber"
},{
    value:"Salam",
    label: "Salam"
},{
    value:"Ananas",
    label: "Ananas"
},{
    value:"Kabak",
    label: "Kabak"
}]


function EkMalzemeler({  
    changeFn,
    isChecked,
    fieldName,
    value,
    label}) {
  //ekstra malzemeler için objelerden oluşan bir array yapılacak ve map methoduyla malzemeler checkboxa eklenecek.
    return (
    <>
        <section className="pizzaSecimi">
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
           
            
            {malzemeler.map((malzeme)=>(
                <label className="ekMalzemeler">
                <input
                type="checkbox"
                onChange={changeFn}
                checked={isChecked}
                name={fieldName}
                value={value}
                label={label}
                />
                {malzeme.label}
            </label>

            ))}

        </section>
    </>
  
    );
  }
  
  export default EkMalzemeler;
  
