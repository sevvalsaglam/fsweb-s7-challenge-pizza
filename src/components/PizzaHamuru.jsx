
function pizzaHamuru(props) {
    //hamur seç ve boyut seç butonlarına fonksiyon ekle!!
    
      return (
          <>
        <section>
          <div className="pizzaHamuru">
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
    
    export default pizzaHamuru;