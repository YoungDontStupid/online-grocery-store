import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {food} = useContext(Context)
    const pageCount = Math.ceil(food.totalCount / food.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3 m-auto">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={food.page === page}
                    onClick={() => food.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;