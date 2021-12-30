import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid style={{ margin: '0 50px' }}>
                    <Navbar.Brand href="/">Cool App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">home page</Nav.Link>
                                <Nav.Link href="/about">about us</Nav.Link>
                                <Nav.Link href="/people">people</Nav.Link>
                                <Nav.Link href="/estatico">repositories</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </>
    );
}