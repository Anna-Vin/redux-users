import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from '../actions/user.actions';
import UpdatedUser from './UpdatedUsers.jsx';

const matchDispatchToProps = dispatch => {
  return {
    deleteUserAction: index => {
      dispatch(deleteUser(index))
    },
    updateUserAction: (name, surname, address, gender, index, image) => {
      const userInfo = {
        index,
        user: { name, surname, address, gender , image }
      }
      dispatch(updateUser(userInfo))
    }
  }
}


const UserCard = ({ name, surname, address, gender, index, deleteUserAction, updateUserAction, image, date }) => {
  
  const [isUpdate, setIsUpdate] = useState(false)

  const deleteHandler = () => {
    deleteUserAction(index)
  }

  return (
    <>
      {!isUpdate && (
        <div className="user card col-12 col-md-6 col-lg-4">
          <h4>{name}{' '}{surname}</h4>
          <img src={image} alt="user" className="user-preview"/>
          <p>{address}</p>
          <p>{gender}</p>
          <button  className="delete-button" onClick={deleteHandler}>&times;</button>
          <button className="btn btn-primary" onClick={() => setIsUpdate(!isUpdate)}>UPDATE</button>
        </div>
      )
      }
      {isUpdate && <UpdatedUser {...{name, surname, address, gender, index, updateUserAction, image, date, setIsUpdate}}/>}
      
    </>
  );
};

export default connect(null, matchDispatchToProps)(UserCard);