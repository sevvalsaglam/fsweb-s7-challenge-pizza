
function PizzaAdi(props) {
  const {pizza}=props;

    return (
      <>
      <section className="order">
          <h2 className="pizzaAd">{pizza.ad}</h2>
          <div>
            <p className="pizzaFiyat">{pizza.fiyat}</p>
            <span>{pizza.puan} </span>
            <span>{pizza.numara} </span>
            <p className="pizzaAciklama">{pizza.aciklama}</p>
          </div>
        </section>
      </>
      
    );
  }
  
  export default PizzaAdi;