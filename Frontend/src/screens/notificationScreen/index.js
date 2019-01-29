import React, { Component } from 'react';
import { StatusBar,ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon , View} from 'native-base';
import styles from './style';
import {connect} from 'react-redux';

class notificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
         appColor :'green'
        }
      }
   
   componentWillReceiveProps(newProp) {
       this.setState({
         appColor:newProp.clr
       });
     }
   
     componentDidMount() {
       this.setState({ appColor:this.props.clr });
     }

    render() {
        const {appColor} = this.state;
        return (
            <Container>
                <View>
                    <StatusBar
                        backgroundColor={appColor}
                        barStyle="light-content"
                    />
                </View>
                <View style={[styles.header,{backgroundColor:appColor}]}>
                    <Icon 
                     onPress={() => this.props.navigation.goBack()}
                    type="AntDesign" name="arrowleft" style={{ color: "#fff",  }} />
                    <Text style={{ color: "#fff",fontSize:22 }}>Notifications</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                <Content>
                    {/* <List>
                        <ListItem>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                       
                    </List> */}
                    
                    <Text style={{textAlign:'center',fontWeight:'bold',marginTop:10}}>No Notification yet!</Text>
                    
                </Content>
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
  
    return {
      clr:state.colorReducer.color
    }
  }
  
  export default connect(mapStateToProps,null)(notificationScreen);