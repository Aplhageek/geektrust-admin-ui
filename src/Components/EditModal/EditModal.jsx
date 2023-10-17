/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from './EditModal.module.css';

const EditModal = ({ userToEdit, onClose, onSave }) => {
    const [user, setUser] = useState({ ...userToEdit });

    const handleInputChnage = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleSaveClick = (user) => {
        if (!isValidUser(user)) return;
        onSave(user);
        onClose();
        alert("Saved");
    }

    const isValidUser = (user) => {
        if (user.name.length <= 2) {
            alert('Please enter a valid name');
            return false;
        } else if (!user.email.includes('@')) {
            alert('Please enter a valid email');
            return false;
        } else if (!['admin', 'member'].includes(user.role)) {
            alert('Role can only be admin or member');
            return false;
        } else {
            return true;
        }
    };

    return (
        <div className={styles.modal} >
            <div className={styles.editing_modal_container} >
                <div className={styles.input_wrapper}>
                    <h3 className={styles.modal_title} >Edit User details</h3>
                    <label >Name <input className={styles.inputs} type="text" name="name" id="name" value={user.name} onChange={handleInputChnage} /> </label>
                    <label >Email <input className={styles.inputs} type="text" name="email" id="email" value={user.email} onChange={handleInputChnage} /> </label>
                    <label >Role <input className={styles.inputs} type="text" name="role" id="role" value={user.role} onChange={handleInputChnage} /> </label>
                </div>
                <div className={styles.modal_buttons}>
                    <button className={styles.btn} onClick={() => handleSaveClick(user)} >Save</button>
                    <button className={styles.btn} onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
};

export default EditModal;