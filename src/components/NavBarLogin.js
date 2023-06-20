import { useState } from 'react';
//import logo from '../assets/img/emwhat.png';
import { DivBarGridLogin, DivImg, LogoImg, DivLoginRight, DivLogin, DivLoginLeft, DivLoginLeftLinks, MenuMobile, DivUser, DivUserMob } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import { DivMenu, LiMenu, NavbarLink } from './NavBar-styled';


const NavBarLogin = () => {


    const [isActive, setIsActive] = useState(false);


    return (

        <DivBarGridLogin>

            <DivLoginLeft>
                <MenuMobile className='menumobile'>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }} icon={faBars} size="2xl" style={{ color: "#008973", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <NavbarLink
                            style={{
                            }}
                            to="/" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>HOME </LiMenu>
                        </NavbarLink>

                        <NavbarLink
                            style={{
                            }}
                            to="/locals" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>DATOS</LiMenu>
                        </NavbarLink>
                        
                        <br /><br />
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>

            <DivImg>
                {/* <LogoImg src={logo} alt="eMWcalc" /> */}
            </DivImg>

            <DivMenu id='menu'>
                <NavbarLink
                    style={{
                    }}
                    to="/">
                    HOME
                </NavbarLink>

                <NavbarLink
                    style={{
                    }}
                    to="/locals">
                    Datos
                </NavbarLink>
               
            </DivMenu >

            <DivLoginRight>
              
                
            </DivLoginRight>
            <br />
        </DivBarGridLogin >
    )
}
export default NavBarLogin;