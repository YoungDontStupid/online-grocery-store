import React from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      // выравнивание по центру экрана
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      {/* карта с рамкой */}
      <Card style={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш email...'
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш пароль...'
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <Button variant={"outline-dark"}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button >
            {isLogin ? <div className="mt-3">
              <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
            </div>
              :
              <div className="mt-3">
                <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
              </div>
            }
          </Row>

        </Form>
      </Card>

    </Container>
  );
}

export default Auth;
