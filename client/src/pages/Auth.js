/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { NavLink,useLocation, useHistory} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,  } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
        history.push(SHOP_ROUTE)

    } catch (e) {
        alert(e.response.data.message)
    }
}

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      {/* карта с рамкой */}
      <Card style={{ width: 750 }} className="p-5">
        <h2 className='m-auto' style={{color:"red"}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <Button variant={"outline-danger"} onClick={click}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button >
            {isLogin ? <div className="mt-3">
              <NavLink style={{color:"red"}} to={REGISTRATION_ROUTE}>Регистрация</NavLink>
            </div>
              :
              <div className="mt-3">
                <NavLink style={{color:"red"}} to={LOGIN_ROUTE}>Войти</NavLink>
              </div>
            }
          </Row>

        </Form>
      </Card>

    </Container>
  );
})

export default Auth;
