

export default class Testing extends Component {
  state = {
    
  };

  handleTextChange = (newText) => this.setState({ value: newText });

  render() {
    return (
      <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
        <StatusBar hidden />
        <FloatingLabelInput
          label="Email"
          value={this.state.value}
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}
