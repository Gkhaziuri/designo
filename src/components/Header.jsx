import styled from 'styled-components'
import Logo from '../images/logo.svg'
import { HeaderContainer, LogoDiv, Nav, Ul } from './styled'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoDiv>
                <img alt="Logo" src={Logo} />  
                <Link to='/'> DESIGNO </Link>
            </LogoDiv>
            <Nav>
                <Ul>
                    <li>
                        <Link to='/about'>
                            OUR COMPANY
                        </Link>
                    </li>
                    <li>
                        <Link to='/locations'>
                            LOCATIONS
                        </Link>
                    </li>                
                    <li>
                        <Link to='/contact'>
                            CONTACT
                        </Link>
                    </li>
                </Ul>
            </Nav>
        </HeaderContainer>
    )
}

export default Header

