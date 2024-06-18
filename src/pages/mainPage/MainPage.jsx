import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions/actions'

function MainPage() {
    const dispatch = useDispatch()
    const preloader = useSelector(state => state.preloaderReducer.preloader)
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const regName = /^[a-zA-Z]+$/;

    const addUser = (event) => {
        event.preventDefault()
        if (user.email.trim() === '' && user.name.trim() === '' && user.username.trim() === '') {
            return alert('Заполните все поля!')
        }
        if (regName.test(!user.name)) {
            alert('Имя должно состоять только из букв')
        }

        dispatch(addUserAction(user))
    }

    return (
        <Container>
            {preloader ? <Spinner animation="border" />
                : <Form onSubmit={addUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder='name'
                                    name='name'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="username">
                                <Form.Control
                                    type="text"
                                    placeholder='username'
                                    name='username'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder='email'
                                    name='email'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button type='submit' variant='success' className='w-100'>
                                register user
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }
        </Container>
    )
}

export default MainPage;