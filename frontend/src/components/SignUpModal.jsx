import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik, Formik } from 'formik';
import { Link } from 'react-router-dom';

export default function SignUpModal({ showSignUp, setShowSignUp }) {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      email: '',
    },
    onSubmit: async (newValues) => {
      let res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValues)
      })
      const mira = await res.json();
      console.log(mira)
    },
  });

  const handleClose = () => setShowSignUp(false);
  const handleShow = () => setShowSignUp(true);

  return (
    <>
      <Modal
        show={showSignUp}
        onHide={handleClose}
        keyboard={false}
      >
        <form onSubmit={formik.handleSubmit}>

          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={formik.handleChange} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={formik.handleChange} value={formik.values.userName} name='userName' type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={formik.handleChange} value={formik.values.password} type="password" name='password' placeholder="Password" />
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
        </form>

        {/* </Form> */}
      </Modal>
    </>
  );
}

// render(<Example />);
