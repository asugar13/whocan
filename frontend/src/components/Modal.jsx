import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function LoginModal({ setShowSignUp }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createAccount = () => {
    setShowSignUp(true);
    setShow(false);
  }

  return (
    <>
      <Button id='login-button' variant="primary" onClick={handleShow}>
        Login / Register
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Member Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <a href='mielda'>Forgot password?</a>
            <Button id="login-modal-button" variant="primary" type="submit">
              Login
      </Button>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <p id="not-a-member">Not a member yet?</p>
          {/* <Link onClick={handleClose} id='link' to="/signup"> */}

          <Button onClick={() => createAccount()} id="login-modal-button" variant="primary" type="submit">
            Create account
          </Button>
          {/* </Link> */}

          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);