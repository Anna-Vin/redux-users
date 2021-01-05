import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/user.actions';
import ReactFileReader from 'react-file-reader';
import user from '../img/user.png';
import moment from 'moment';


const machDispatchToProps = dispatch => {
  return {
    addUser: (name, surname, address, gender, image, date) => {
      dispatch(addUser(name, surname, address, gender, image, date));
    }
  }
}

const Form = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState(user);
  const [date, setDate] = useState(+((moment().format('YYYYMDHHmmss'))));



  const genderHandler = value => {
    setGender(value);
  }


  let handleFiles = files => {
    setImage(files.base64)
  }

  const addUserHandler = () => {
    if (name && surname && address) {
      props.addUser(name, surname, address, gender, image, date);
      setName('');
      setSurname('');
      setAddress('');
      setGender('Male');
      setImage(user);
      setDate(+((moment().format('YYYYMDHHmmss'))))
    }
  }
  
  return (
    <div className="form-wrapper card col-12 col-md-5 col-lg-3">
      <div className="textfield">
      <img  src={image} alt="user" className="avatar" />
        <ReactFileReader  base64={true} handleFiles={handleFiles}>
          <button className='btn btn-secondary'>UPLOAD IMAGE</button>
        </ReactFileReader>
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="users__gender textfield">
        <label htmlFor="genderMale">Male</label>
        <input
          name="gender"
          type="radio"
          id="genderMale"
          value="Male"
          checked={true}
          onChange={(e) => genderHandler(e.target.value)}
        />
        <label htmlFor="genderFemale">Female</label>
        <input
          name="gender"
          type="radio"
          id="genderFemale"
          value="Female"
          onChange={(e) => genderHandler(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={addUserHandler}>
        ADD USER
      </button>
    </div>
  );
};

export default connect(null, machDispatchToProps)(Form);