import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo"/>
      </a>
      <MenuContainer>
        {cars && cars.map((car, index)=>(
            <a key={index} href="https://tesla-clone-qop.netlify.app">{car}</a>
        ))}
      </MenuContainer>
      <RightMenu>
        <a href="https://tesla-clone-qop.netlify.app">Shop</a>
        <a href="https://tesla-clone-qop.netlify.app">Tesla Account</a>
        <Menu onClick={()=>setBurgerStatus(true)} style={{cursor:"pointer"}}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <Close onClick={()=>setBurgerStatus(false)} style={{cursor:"pointer"}}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
            <li key={index}><a href="https://tesla-clone-qop.netlify.app">{car}</a></li>
        ))}
        <li><a href="https://tesla-clone-qop.netlify.app">Existing Inventory</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Used Inventory</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Trade-In</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Cybertruck</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Roadster</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Semi</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Charging</a></li>
        <li><a href="https://tesla-clone-qop.netlify.app">Power</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height : 60px;
  position: fixed;
  top:0;
  left:0;
  right:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 20px;
  z-index:1;

`
const MenuContainer = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media (max-width:768px){
    display:none;
  }

`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
}
` 

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-alight:start;
  transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ease;
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
      font-weight:600;
    }

  }
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`

