import React from 'react';

// TODO UserComponent?
export default class UserPicture extends React.Component {

  getUserPicture(user) {
    // from swig.setFilter('picture', function(user)

    if (user.image && user.image != '/images/userpicture.png') {
      return user.image;
    } else {
      return '/images/userpicture.png';
    }
  }

  render() {
    const user = this.props.user;

    return (
      <img
        src={this.getUserPicture(user)}
        alt={user.username}
        className="picture picture-rounded"
        />
    );
  }
}

UserPicture.propTypes = {
  user: React.PropTypes.object.isRequired,
};

UserPicture.defaultProps = {
  user: {},
};
