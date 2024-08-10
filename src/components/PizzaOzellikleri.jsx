

function PizzaOzellikleri(props) {
  
    return (
        <>
      <section>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

        <div>
            <h3>Boyut Seç*</h3>
            <form>
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
            <h3>Hamur Seç*</h3>
            <select name="hamurKalinligi">
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
            </select>
        </div>
        

      </section>
      </>
    );
  }
  
  export default PizzaOzellikleri;