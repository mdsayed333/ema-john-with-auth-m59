import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    // const location = useLocation();
console.log(user);
    const handleNameBlur = (event) =>{
        setName(event.target.value);
    }

    const handleAddressBlur = (event) =>{
        setAddress(event.target.value);
    }
    const handlePhoneBlur = (event) =>{
        setPhone(event.target.value);
    }
    
    const handleCreateUser = event =>{
        event.preventDefault();
        const Shipping = {name, email, address, phone};
    }
    return (
        <div>
            <h2>This is Shipment</h2>
            <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} type="email" name="email" readOnly/>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" required/>
          </div>

          <p style={{color: "orange"}}>{error} </p>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input onBlur={handlePhoneBlur} type="number" name="phone" required/>
          </div>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
        </div>
    );
};

export default Shipment;