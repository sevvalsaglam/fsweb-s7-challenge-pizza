
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Home() {

    
        const history = useHistory();

        const handleClick = ()=> {
            history.push("/OrderPizza");
        };

        const Button =styled.button`
            background-color: #FDC913;
            width: 194px;
            height: 56px;
            padding: 1.31px 40.8px 2.69px 53.05px;
            gap: 0px;
            border-radius: 25px ;
            opacity: 0px;
            border: none;
            text-align:center;
            font-size:18px;
            font-family: Barlow;
    
        `;
        

 
    return (
        <>

        <Button onClick={handleClick}>ACIKTIM</Button>
        
        </>
    );
  }
  
  export default Home;