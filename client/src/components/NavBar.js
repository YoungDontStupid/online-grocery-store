import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()
    return (
        <Navbar bg="danger" data-bs-theme="white">
            <Container className='m-auto'>
                {/* лого */}
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE} className='m-auto'>Didi</NavLink>
                {/* Вход либо авторизованного, либо не авторизованного юзера */}
                {user.isAuth ?
                    <Nav className="m-auto" style={{ color: 'black' }}>
                        <Button className="m-auto" variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>Панель управления</Button>
                        <Button variant="outline-light" className="ms-xl-3 m-auto" onClick={() => history.push(LOGIN_ROUTE)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="m-auto" style={{ color: 'black' }}>
                        <Button className='m-auto'variant='outline-light' onClick={() => user.setIsAuth(true)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;