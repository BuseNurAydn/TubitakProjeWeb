import { Container} from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

//NAVİGATİON COMPONENTİ
const Navigation = () => {
    return(
    <Navbar bg="success" data-bs-theme="dark" style={{ marginTop: '10px' }}>
        <Container>
            <Navbar.Brand>React</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Hasta Bilgileri</Nav.Link>
                <Nav.Link as={Link} to="/bilgiGirisi">Bilgi Girişi</Nav.Link>
                <Nav.Link href="#pricing">Üye Giriş</Nav.Link>
                <Nav.Link href="#pricing">Üye Ol</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

   )
}
export default Navigation;