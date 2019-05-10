import React from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Button} from 'react-native';

import {updateUsername} from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {username: ''}
  }

  handleChange = username => {
    this.setState({username})
  }

  handleSubmit = () => {
    this.props.updateUsername(this.state.username)
  }

  render() {
    console.log(this.props.username)
    return (
      <View>
          <TextInput
            placeholder="Hadi artık"
            onChangeText={this.handleChange}
            value={this.state.username}
            />
          <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

mapStateToProps = ({userResponse}) => {
  const {username} = userResponse;
  return ({username})
}

export default connect(mapStateToProps, {updateUsername})(Home);
