import React from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Button, Text} from 'react-native';

import {updateUsername, updatePassword} from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {username: '', password: ''}
  }

  handleUsername = username => {
    this.setState({username})
  }

  handlePassword = password => {
    this.setState({password})
  }

  handleSubmit = () => {
    this.props.updateUsername(this.state.username)
    this.props.updatePassword(this.state.password)
  }

  render() {
    console.log(this.props.username)
    return (
      <View>
          <TextInput
            placeholder="Hadi artık"
            onChangeText={this.handleUsername}
            value={this.state.username}
            />
          <TextInput
            placeholder="Password Gir"
            onChangeText={this.handlePassword}
            value={this.state.password}
            />
          <Button title="Submit" onPress={this.handleSubmit} />
          <Text>{this.props.username}</Text>
          <Text>{this.props.password}</Text>
      </View>
    );
  }
}

mapStateToProps = ({userResponse}) => {
  const {username, password} = userResponse;
  return ({username, password})
}

export default connect(mapStateToProps, {updateUsername, updatePassword})(Home);
