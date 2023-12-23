import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FOOD_ROUTE } from '../utils/consts';

const FoodItem = observer(({ food }) => {
    const history = useHistory()
    return (
            < Col md = {2} className = 'mt-3' onClick={() => history.push(FOOD_ROUTE + '/' + food.id)}>
                <Card style={{ width: 150, cursor: 'pointer' }} border={'light'} className='br-20'>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + food.img}/>
                    <div className='mt-1 m-auto p-1'>
                        <div>{food.name}</div>
                        <div className="col-form-label-sm d-flex justify-content-center">
                            <strong>
                                {food.price + " руб "}
                            </strong>
                        </div>
                    </div>
                </Card>


        </Col >
    )
})
export default FoodItem
