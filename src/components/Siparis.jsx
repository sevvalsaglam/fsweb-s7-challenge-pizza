import { useState } from "react";

function Siparis(props) {
    
    function handleClick() {
        const [sayi,setSayi]=useState(1);
    }
  
    return (
        <>
        <section>
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
            <button class="quantity-minus" >
                <i class="fa fa-minus"
                onClick={handleClick}></i>
            </button>
            <input class="quantity-input" type="text" value="1" readonly />
            <button class="quantity-plus" >
                <i class="fa fa-plus"
                onClick={handleClick}></i>
            </button>
        </div>
        <button type="button" class="btn-primary">SİPARİŞ VER</button>
    </div>
    </section>
    </>
    );
  }
  
  export default Siparis;
  