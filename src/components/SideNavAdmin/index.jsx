import { SignOut } from "@phosphor-icons/react"
import Logo from '../../assets/Logo.svg'
import { useUser} from '../../hooks/UserContext'
import { Container, NavLink, NavLinkContainer, Footer } from "./styles"
import { navLinks } from "../../components/SideNavAdmin/navLinks" 
import { useResolvedPath } from "react-router-dom"

export function SideNavAdmin(){
    const {logout} = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo DevBurger"/>
            <NavLinkContainer>
                {navLinks.map( link => (
                    <NavLink key={link.id} to={link.path} $isAcitive={pathname === link.path}>
                        {link.icon}
                        <span>{link.label}</span>                        
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOut/>
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}