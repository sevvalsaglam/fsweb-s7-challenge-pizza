const pizzalar = [{
  ad:"Position Absolute Acı Pizza",
  fiyat: "85.50 ₺",
  puan: "4.9",
  numara: "(200)"
}]


function PizzaAdi(props) {
    const {} = props;
  
    return (
      <section className="pizzaAdi">
        <h2>{pizzalar[0].ad}</h2>
        <div>
            <p>{pizzalar[0].fiyat}</p>
            <span>{pizzalar[0].puan} </span>
            <span>{pizzalar[0].numara} </span>
        </div>
      </section>
    );
  }
  
  export default PizzaAdi;