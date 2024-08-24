import styled from "styled-components";

const H1= styled.h1`
color: #ffffff;
font-family: "Londrina Solid";
font-size: 54px;
`
const Span= styled.span`
color: #FAF7F2;
font-family: Barlow;
font-size: 16px;
`
const P=styled.p `
color: #FFFFFF;
font-family: Barlow;
font-size: 16px;
font-weight:bold;
`


function Header(props) {
    const {} = props;
 
    return (
      <header className="">
        <H1>Teknolojik Yemekler</H1>
        <div>
        <Span>Anasayfa-</Span>
        <P>Sipariş Oluştur</P>
        </div>
      </header>
    );
  }
  
  export default Header;