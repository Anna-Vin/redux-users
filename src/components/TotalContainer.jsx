import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    users: store.users,
  }
}

const Total = ({users}) => {

  return (
    <div className="total card">
      <h2>Total users count: {users.length}</h2>
    </div>
  )
}


export default connect(mapStateToProps, null)(Total);