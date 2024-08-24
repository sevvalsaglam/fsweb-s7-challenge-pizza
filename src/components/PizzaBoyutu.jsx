
function PizzaBoyutu(props) {
    const {} = props;
  
 
    return (
        <>
        <section>
            <h3>Boyut Seç*</h3>
            <form className="pizzaBoyutu">
                <label>
                <input 
                type="radio"
                name="boyut"
                value="küçük"
                />Küçük
                </label>
                
                <label>
                <input 
                type="radio"
                name="boyut"
                value="orta"
                />Orta
                </label>
                
                <label>
                <input 
                type="radio"
                name="boyut"
                value="büyük"
                />Büyük
                </label>
            </form>
            </section>
        </>
    );
  }
  
  export default PizzaBoyutu;