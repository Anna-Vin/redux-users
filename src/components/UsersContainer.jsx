import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';

const mapStateToProps = store => {
  return {
    users: store.users
  };
};

const Users = ({ users }) => {

  const [sortedUsers, sortUsers] = useState(users);
  const [currentSort, setCurrentSort] = useState(0);

  useEffect(() => {
    onSelect();
    // eslint-disable-next-line
  }, [users]);

  const onSelect = e => {
    let sorted = [...users];
    let sort = currentSort;

    if (e !== undefined) {
      setCurrentSort(e.target.value);
      sort = e.target.value
    }

    switch (sort) {
      case '1':
        // eslint-disable-next-line
        sorted.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
          if (a.date === b.date) return 0;
        });
        sortUsers(sorted);
        break;
      case '2':
        // eslint-disable-next-line
        sorted.sort((a, b) => {
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;
          if (a.date === b.date) return 0;
        });
        sortUsers(sorted);
        break;
      default:
        sortUsers(users);
        break;
    }
  };

  return (
      <div className="card col-12 col-md-6 col-lg-8">
        <div className="sorting">
          <h3>Sort by creation date</h3>
          <select className="custom-select" onChange={onSelect}>
            <option value="1">Old → New</option>
            <option value="2">New → Old</option>
          </select>
        </div>
        <div className="users">
          {sortedUsers.length ? sortedUsers.map((user, index) => {
            return <UserCard {...user} index={index} key={user.name + index} />;
          }) : null}
        </div>
      </div>
  );
};

export default connect(mapStateToProps, null)(Users);