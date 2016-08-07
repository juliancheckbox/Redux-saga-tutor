import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux'; // Provider makes the state of available to the components, and connect binds your react component to your redux store
import {store} from './store';
import {bindActionCreators} from 'redux'; // Wraps action creator to the store dispatch function
import * as action from './action';


class UserProfile  extends Component {
    constructor(props) {
      super(props);
      this.handleUserDetail = this.handleUserDetail.bind(this);
    }

    componentDidMount() {
      this.props.getUserDetails('row123');
      console.log(this.props, 'great')
    }

    handleUserDetail(event) {
      event.preventDefault();
      if (this.username !== null) {
        this.props.getUserDetails(this.username.value);
        this.username.value = '';
      }
    }

    render() {
      const {user} = this.props;
      return (
        <div>
          <input
            type="text"
            ref={(ref) => this.username = ref}
          />
          <button onClick={this.handleUserDetail}>Search</button>
          <div>
            <p>Great are you Lord</p>

          </div>
        </div>
      )}

  }

const mapStateToProps = ({user}) => {
  console.log(user.user, 'mstp')
  return {
    user: user.user
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action, dispatch);
};

const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);


ReactDOM.render(<Provider store={store}>
  <UserProfilePage />
</Provider>, document.getElementById('root'));

