import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik, Formik } from 'formik';
import { Link } from 'react-router-dom';

export default function LoginModal({ showSignUp, setShowSignUp }) {
  // const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClose = () => setShowSignUp(false);
  const handleShow = () => setShowSignUp(true);
  console.log('mira')
  console.log(showSignUp)
  return (
    <>
      {console.log(showSignUp)}
      <Modal
        show={showSignUp}
        onHide={handleClose}
        keyboard={false}
      >

        <Form action="http://localhost:3002/signup" method="POST">
          {/* <form onSubmit={formik.handleSubmit}> */}

          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nickname</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Submit
      </Button> */}

          </Modal.Body>
          <Modal.Footer>
            {/* <p id="not-a-member">Not a member yet?</p> */}
            {/* <Link onClick={handleClose} id='link' to="/signup"> */}

            <Button id="login-modal-button" variant="primary" type="submit">
              Create account
            </Button>
            {/* </Link> */}

            {/* <Button variant="secondary" onClick={handleClose}>
            Close
    </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button> */}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

// render(<Example />);
