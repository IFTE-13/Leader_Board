import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const Modals = (props) => {
    const g_name = props.name;
    const dec = props.dec;
    const d = props.d;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Link style={{ textDecoration: "none", color: "black" }} onClick={openModal}>MORE...</Link>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>{g_name}</h3>
                <hr />
                <p>{dec}</p>
                <p>DOWNLOADS: {d}</p>
                <a className="btn" onClick={closeModal}>Close</a>
            </Modal>
        </div>
    );
};

export default Modals;