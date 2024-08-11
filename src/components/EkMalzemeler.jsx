const malzemeler =[{
    value:"Pepperoni",
    name: "Pepperoni"
},{
    value:"Sosis",
    name: "Sosis"
},{
    value:"Kanada Jambonu",
    name: "Kanada Jambonu"
},{
    value:"Tavuk Izgara",
    name: "Tavuk Izgara"
},{
    value:"Soğan",
    name: "Soğan"
},{
    value:"Domates",
    name: "Domates"
},{
    value:"Mısır",
    name: "Mısır"
},{
    value:"Sucuk",
    name: "Sucuk"
},{
    value:"Jalepeno",
    name: "Jalepeno"
},{
    value:"Sarımsak",
    name: "Sarımsak"
},{
    value:"Biber",
    name: "Biber"
},{
    value:"Salam",
    name: "Salam"
},{
    value:"Ananas",
    name: "Ananas"
},{
    value:"Kabak",
    name: "Kabak"
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
        <section>
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

        </section>
    </>
  
    );
  }
  
  export default EkMalzemeler;
  
