import React from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';
function Header() {
  const [burgerStatus,setBurgerStatus]=React.useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
        <a href="/#">
          <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            {cars && cars.map((car,index)=>(
              <a href='/#'>{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="/#">Shop</a>
            <a href='/#'>Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            {cars && cars.map((car,index)=>(
              <li><a href='/#'>{car}</a></li>
            ))}
            <li><a href='/#'>Existing Inventory</a></li>
            <li><a href='/#'>Used Inventory</a></li>
            <li><a href='/#'>Trade IN</a></li>
            <li><a href='/#'>CyberTruck</a></li>
            <li><a href='/#'>Roadster</a></li>
            <li><a href='/#'>Model S Plaid</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
  min-height: 60px;
  position:fixed;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
    a{
      font-weight: 600;
      padding:0 10px;
      text-transform:uppercase;
    }

    @media(max-width:768px){
      display:None;
    }
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight: 600;
  margin-right:10px;
  text-transform:uppercase;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;

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
  transform: ${props => props.show?'translate(0)':'translate(100%)'};
  transition: transform 0.5s ;
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
      font-weight:600;
    }

  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`