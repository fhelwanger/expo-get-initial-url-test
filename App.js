import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Linking } from 'expo';

export default class App extends React.Component {
  state = {
    initialUrl: '',
    source: ''
  };

  async componentDidMount() {
    Linking.addEventListener('url', async ({ url }) => {
      this.setState({
        initialUrl: url,
        source: 'url event'
      });
    });

    const initialUrl = await Linking.getInitialURL();

    this.setState({
      initialUrl,
      source: 'getInitialURL'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Initial URL: {this.state.initialUrl}</Text>
        <Text>Obtained from: {this.state.source}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
