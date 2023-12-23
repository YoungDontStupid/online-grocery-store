import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


    return (
        <Navbar bg="danger" data-bs-theme="white">
            <Container className=' d-flex justify-content-center align-items-center'>
                {/* лого */}
                <Nav className="" style={{ color: 'black' }}>
                    <Button variant="outline-light" onClick={() => history.push(SHOP_ROUTE)} className="m-lg-2">Didi</Button>
                </Nav>
                {/* Вход либо авторизованного, либо не авторизованного юзера */}
                {user.isAuth ?
                    <Nav className="" style={{ color: 'black' }}>
                        <Button className="" variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>Панель управления</Button>
                        <Button variant="outline-light" className="ms-xl-2 m-auto" onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="" style={{ color: 'black' }}>
                        <Button className=''variant='outline-light' onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;