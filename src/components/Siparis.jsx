function Siparis(props) {
    const { searchText, handleSearch } = props;

    
  
    return (
        <>
     <div>
        <h3>Sipariş Notu</h3>
        <label for="w3review"></label>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
            </textarea>
    </div>
    <div>
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler</p>-fiyat
        <p>Toplam</p>-fiyat
    </div>
    <div>
        <div>
            <button class="quantity-minus">
                <i class="fa fa-minus"></i>
            </button>
            <input class="quantity-input" type="text" value="1" readonly />
            <button class="quantity-plus">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <button type="button" class="btn btn-primary btn-lg">SİPARİŞ VER</button>
    </div>
    </>
    );
  }
  
  export default Siparis;
  