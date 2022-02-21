import "./Fruits.css";
import ModalPopup from "./Modal/ModalPopup";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const Fruits = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main-container">
      <img src={props.imageUrl} alt="" />
      <h1>{props.productName}</h1>
      <h3>{props.discountRate} </h3>
      <Button variant="primary" onClick={handleShow}>
        View more
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Actual Rate:{props.actualRate}</p>
          <p>ProductRating:{props.productRating}</p>
          <p>ProductID:{props.productId}</p>
          <p>Product Rating:{props.productRating}</p>
          <p>Maximum Quantity Allowed:{props.maxAllowedQuantity}</p>
          <p>Actual Rate:{props.actualRate}</p>
          <p>Item label:{props.avaliablity}</p>
          <p>Sold:{props.sold}</p>
          <p>Category:{props.productCategory}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Fruits;
