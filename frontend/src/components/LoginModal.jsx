import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik, Formik } from 'formik';

export default function LoginModal({ setShowSignUp }) {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: async (newValues) => {

      let res = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValues)
      })
      const mira = await res.json();
      console.log(mira)
      setShow(true)
    },
  });

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
    setShow(true);
    console.log('i be running')
  }
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
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>

          <Modal.Header closeButton>
            <Modal.Title>Member Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
        </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={formik.handleChange} value={formik.values.password} name="password" type="password" placeholder="Password" />
              </Form.Group>

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
        </form>

      </Modal>
    </>
  );
}

// render(<Example />);