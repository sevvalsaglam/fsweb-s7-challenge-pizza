
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PizzaAdi from "../components/PizzaAdi";
import { useHistory } from "react-router-dom";
import axios from "axios";
import EkMalzemeler from "../components/EkMalzemeler";




function OrderPizza() {


    // FormData başlangıç değerleri
    const initialFormValues= {boyut:"", hamurKalinligi:"", ekMalzemeler:[], adSoyad:"", siparisNotu:"", adet:"", toplamFiyat:""}

    // Hook'lar
    const[formData,setFormData]=useState(initialFormValues);
    const[errors,setErrors]=useState({boyut:"", hamurKalinligi:"", ekMalzemeler:[], adSoyad:"", siparisNotu:"", adet:"", toplamFiyat:""});
    const[isValid,setIsValid]=useState(false);
    const history = useHistory;


    // Helper function'lar
    const handleChange = (event)=> {
        console.log("change",event.target)
        let {value, name, checked, type }=event.target;
        
        setFormData({...formData,[name]:value});

        value = type === "checkbox" ? checked:value;
        let newValue;
        if(event.target.type === "checkbox"){
            const oldValues = formData[event.target.name];
            console.log("oldValues",oldValues)
            if(oldValues.includes(event.target.value)){
                newValue = oldValues.filter((v) => v !== event.target.value);
            }else{
                newValue = [...oldValues, event.target.value];
            }
        }else {
            newValue = event.target.value;
        }

            if(name === "boyut"){
                if(value!== "küçük" || value !== "orta" || value !== "büyük"){
                    setErrors({...errors, boyut:"Boyut seçiniz!"})
                }else{
                    setErrors({...errors,boyut:""})
                };
            }
            if(name === "hamurKalinligi"){
                if(value !== "İnce" || value !== "Orta" || value !== "Kalın"){
                    setErrors({...errors, hamurKalinligi:"Hamur kalınlığını seçiniz!"})
                }else{
                    setErrors({...errors,hamurKalinligi:""});
                }
            }
            if(name === "ekMalzemeler"){
                if(formData.ekMalzemeler.length <4 || formData.ekMalzemeler.length>10){
                    setErrors({...errors,ekMalzemeler:"En az 4, en fazla 10 adet malzeme seçmelisiniz!"})
                }else{
                    setErrors({...errors,ekMalzemeler:""});
                }
            }
            if(name === "adSoyad"){
                if(formData.adSoyad.length >=3){
                    setErrors({...errors,adSoyad:""})
                }else {
                    setErrors({...errors,adSoyad:"Ad Soyad giriniz!"});
                }
            }


            
            
    };


    const handleSubmit = (event)=> {
        console.log("event",event)
        event.preventDefault();
        axios.post("https://reqres.in/api/pizza".formData)
        .then((response)=>{
            console.log(response.data);
            setFormData(initialFormValues);
            history.push("/Success");
        })
        .catch((error)=>{
            console.log(error.message);
            setFormData(errors);
        })
    }


        // Pizza bilgileri objesinden oluşan array
        const [pizza,setPizza]=useState({
            ad:"Position Absolute Acı Pizza",
            fiyat: "85.50 ₺",
            puan: "4.9",
            numara: "(200)",
            aciklama: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir."
        });

        // Pizza malzemeleri objesinden oluşan array
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
        }];


        // Sayaç fonksiyonu
        const [adet, setAdet] = useState(1);
            const artirici = () => {
                setAdet(adet + 1);
            };
            const azaltici = () => {
                setAdet(adet - 1);
            if (adet<=1){
                setAdet(1);
            }
            };
            
            const [ekFiyat,setEkFiyat]=useState(0);
            // ekFiyat ---> setEkFiyat((formData.ekMalzemeler.length)*5);
            const [toplamFiyat,setToplamFiyat]=useState(pizza.fiyat);
            // toplamFiyat --->  setToplamFiyat((ekFiyat+ pizza.fiyat)*adet);


    return (
        
        <>
        <div id="root" onSubmit={handleSubmit} >
            <Header></Header>
            <PizzaAdi pizza={pizza}></PizzaAdi>

        
            <section className="pizzaBoyutu">
                <form>
                    <h3>Boyut Seç<span>*</span></h3>
                    <label>
                    <input 
                    type="radio"
                    name="boyut"
                    value="küçük"
                    onChange={handleChange}
                    checked={formData.boyut === "küçük"}
                    />Küçük
                    </label>
                    
                    <label>
                    <input 
                    type="radio"
                    name="boyut"
                    value="orta"
                    onChange={handleChange}
                    checked={formData.boyut === "orta"}
                    />Orta
                    </label>
                    
                    <label>
                    <input 
                    type="radio"
                    name="boyut"
                    value="büyük"
                    onChange={handleChange}
                    checked={formData.boyut === "büyük"}
                    />Büyük
                    </label>
                </form>
            </section>


            <section className="hamurKalinligi">
            <div className="order pizzaHamuru">
                <h3>Hamur Seç <span>*</span></h3>
                <label htmlFor="hamurKalinligi"></label>
                <select id="hamurKalinligi" name="hamurKalinligi" value={formData.hamurKalinligi} onChange={handleChange}>
                    <option value="" disabled selected >Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                </select>
            </div>
            </section>


            <section className="pizzaSecimi">
                <h3>Ek Malzemeler</h3>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {malzemeler.map((malzeme)=>(
                        
                        <EkMalzemeler
                            type="checkbox"
                            changeMaterial={handleChange}
                            checked={formData.ekMalzemeler.includes(malzeme.value)}
                            name="ekMalzemeler"
                            value={malzeme.value}
                            label={malzeme.label}
                            key={malzeme.value}
                        />

                    ))}
            </section>

            <div className="adSoyad">
                <h3>Ad Soyad <span>*</span></h3>
                <label htmlFor="adSoyad"><input
                    id="adSoyad" 
                    name="adSoyad" 
                    type="text"
                    placeholder="Ad Soyad giriniz"
                    value={formData.adSoyad}
                    onChange={handleChange}>
                </input>
                </label>
            </div>

            <div className="siparisNotu">
                <h3>Sipariş Notu</h3>
                <label htmlFor="textArea">
                <textarea 
                    id="textArea" 
                    name="siparisNotu" 
                    type="text"
                    rows="4" 
                    cols="50"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={formData.siparisNotu}
                    onChange={handleChange}>
                </textarea>
                </label>
            </div>


            <div className="siparisToplami">
                <h3>Sipariş Toplamı</h3>
                <p>Seçimler</p><span>{ekFiyat}</span>
                <p>Toplam</p><span name="toplamFiyat">{toplamFiyat}</span>
            </div>

            
            <div className="sayac">
                <button className="quantity-minus" >
                    <i className="fa fa-minus"
                    onClick={azaltici}>-</i>
                </button>
                <input className="quantity-input" type="text" value={adet} name="adet" onChange={handleChange}/>
                <button className="quantity-plus" >
                    <i className="fa fa-plus"
                    onClick={artirici}>+</i>
                </button>
            </div>

            <button type="submit" className="btn-primary">SİPARİŞ VER</button>
        </div> 
        </>
    );
  }
  
  export default OrderPizza;