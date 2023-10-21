import { Form, Link } from 'react-router-dom'
import { LogoDiv, Nav, Ul } from './styled'
import { FooterBox, UpperFooter } from '../components/styled'


const Footer = () => {
    return (
        <FooterBox>
            <UpperFooter>

            </UpperFooter>
        </FooterBox>
    )
}

export default Footer

const FooterBox = styled.div`
    margin: 0 auto;
`
const UpperFooter = styled.div`
    margin: 0 auto;
`
