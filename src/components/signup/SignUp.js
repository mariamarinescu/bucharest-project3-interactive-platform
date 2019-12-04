import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles.css'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            errorEmailText: '',
            errorNameText: '',
            errorPasswordText: '',
            errorConfirmPasswordText: '',
            email: '',
            name: '',
            password: '',
            confPass: ''
        }
       
    }

    render() {
        return (
            <div >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Inregistrare</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    
                      
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }

}

export default SignUp;