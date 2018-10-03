import React from 'react';

const UserCard = ({ avatar_url, name, userInfo }) =>
  (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={avatar_url} alt="User avatar" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {Object.keys(userInfo).map((item, i) => (
            <p key={i}>{item}: {userInfo[item]}</p>
          ))}
        </div>
      </div>
    </div>
  );

export default UserCard;