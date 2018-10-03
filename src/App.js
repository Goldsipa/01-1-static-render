import React from 'react';
import UserCard from './UserCard';

const userJson = require('./user.json');

const getUserInfo = () =>
  ({
    'Login': userJson.login,
    'Company': userJson.company,
    'Location': userJson.location,
    'Repositories': userJson.public_repos,
    'Followers': userJson.followers,
    'Following': userJson.following
  });

const Container = ({ children }) => (
  <div className="container">
    { children }
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="row">
          <UserCard 
            avatar_url = {userJson.avatar_url}
            name= {userJson.name}
            userInfo = {getUserInfo(userJson)}
          />
        </div>
      </Container>
    );
  }
}

export default App;
