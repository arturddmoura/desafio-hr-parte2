import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Navbar border-top="100px" bg="dark" variant="dark">
                <Container>
                    <Nav></Nav>
                    <Nav>
                        <Nav.Item className="ml-auto">
                            <Nav.Link href="https://github.com/arturddmoura/">
                                Desenvolvido por Artur Moura <br></br>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;
