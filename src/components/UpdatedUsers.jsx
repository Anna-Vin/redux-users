import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user.actions';
import ReactFileReader from 'react-file-reader';



const matchDispatchToProps = dispatch => {
  return {
    updateUserAction: (name, surname, address, gender, index, image, date) => {
      const userInfo = {
        index,
        user: { name, surname, address, gender, image, date }
      }
      dispatch(updateUser(userInfo))
    }
  }
}


const UpdatedUser = (props) => {

  const { name, surname, address, gender, index, updateUserAction, image, setIsUpdate, date } = props;
  const [nameState, setName] = useState(name);
  const [surnameState, setSurname] = useState(surname);
  const [addressState, setAddress] = useState(address);
  const [genderState, setGender] = useState(gender);
  const [imageState, setImage] = useState(image);

  let handleFiles = files => {
    setImage(files.base64)
    
  }

  const genderHandler = value => {
    setGender(value);
  }

  const UpdateUserHandler = () => {
    updateUserAction(nameState, surnameState, addressState, genderState, index, imageState, date );
    setIsUpdate(false)

  }

  return (
    <div className="form-wrapper card col-12 col-md-5">
      <div className="textfield">
        <img src={imageState} alt="user" className="user-preview" />
        <ReactFileReader base64={true} handleFiles={handleFiles}>
          <button className='btn btn-secondary'>UPDATE IMAGE</button>
        </ReactFileReader>
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter name"
          value={nameState}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter surname"
          value={surnameState}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="textfield">
        <input
          type="text"
          placeholder="Enter address"
          value={addressState}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="textfield">
        <div className="users__gender">
          <label htmlFor="genderMale2">Male</label>
          <input
            name="gender2"
            type="radio"
            id="genderMale2"
            value="Male"
            checked={genderState === 'Male'}
            onChange={(e) => genderHandler(e.target.value)}
          />
          <label htmlFor="genderFemale2">Female</label>
          <input
            name="gender2"
            type="radio"
            id="genderFemale2"
            value="Female"
            checked={genderState === 'Female'}
            onChange={(e) => genderHandler(e.target.value)}
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={UpdateUserHandler}
      >
        SAVE CHANGES
      </button>
    </div>
  );
};


export default connect(null, matchDispatchToProps)(UpdatedUser);