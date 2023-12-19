import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Button, Card, CardBody, Col, Container, Image, Offcanvas, OffcanvasHeader, Row } from "react-bootstrap";

// const TypeBar = observer(() => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <Button variant="primary" onClick={handleShow} className="me-2">
//             кнопка
//         </Button>
//                 <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 Some text as placeholder. In real life you can have the elements you
//                 have chosen. Like, text, images, lists, etc.
//               </Offcanvas.Body>
      
//     );
// });


// export default TypeBar;


// // const TypeBar = observer(() => {
// //     const { food } = useContext(Context)
// //     return (
// //         <Row className="d-flex">
// //             <Col className="d-flex sm-5 mb-5 mb-sm-5">
// //                 {food.types.map(type =>
// //                 <Card
// //                      style={{ cursor: 'pointer' }}
// //                      key={type.id}
// //                      className="m-auto"
// //                      onClick={() => food.setSelectedType(type)}
// //                      border={type.id === food.selectedType.id ? 'dark' : 'light'}
// //                 >
// //                     <CardBody >
// //                         {type.name}
// //                     </CardBody>
// //                 </Card>
// //                 )}
// //             </Col>
// //         </Row>
// //     )
// // })


// // const TypeBar = observer(() => {
// //     const { food } = useContext(Context)

// //     return (
// //         <Row className="d-flex">      
// //              {food.types.map(type =>
// //                 <Card
// //                     style={{ cursor: 'pointer' }}
// //                     key={type.id}
// //                     className="p-3"
// //                     onClick={() => food.setSelectedType(type)}
// //                     border={type.id === food.selectedType.id ? 'danger' : 'light'}
// //                 >
// //                     {type.name}
// //                 </Card>
// //             )}
// //         </Row>
// //     );
// // });
