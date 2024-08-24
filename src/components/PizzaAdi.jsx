
const pizzalar = [{
  ad:"Position Absolute Acı Pizza",
  fiyat: "85.50 ₺",
  puan: "4.9",
  numara: "(200)",
  aciklama: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir."
}];


function PizzaAdi(props) {
    const {} = props;

    return (
      <section className="pizzalar">
        <h2 className="pizzaAd">{pizzalar[0].ad}</h2>
        <div>
            <p className="pizzaFiyat">{pizzalar[0].fiyat}</p>
            <span>{pizzalar[0].puan} </span>
            <span>{pizzalar[0].numara} </span>
            <p className="pizzaAciklama">{pizzalar[0].aciklama}</p>
        </div>
      </section>
      
    );
  }
  
  export default PizzaAdi;