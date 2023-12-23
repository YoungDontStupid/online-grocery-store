import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';


const CategoryBar = observer(() => {
    const { food } = useContext(Context)
    return (

        <ListGroup  className='mt-3' >
            {food.categorys.map(category =>
                <ListGroup.Item variant="danger"
                    style={{cursor: 'pointer', color: 'black'}}
                    active={category.id === food.selectedCategory.id}
                    onClick={() => food.setSelectedCategory(category)}
                    //onClick=(() => food.openSelectedTypeCategory(category))
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;
