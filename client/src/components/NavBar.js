import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {NavLink} from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                {/* лого */}
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Didi    </NavLink>
                {/* Вход либо авторизованного, либо не авторизованного юзера */}
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light">Админ панель</Button>
                        <Button variant="outline-light" className="ms-xl-3">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;