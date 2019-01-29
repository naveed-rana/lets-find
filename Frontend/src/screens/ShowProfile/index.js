import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar,ScrollView } from 'react-native';
import { Text, Content, Item, Input, Form, Icon, View, Button, CheckBox , Container} from 'native-base';
import styles from './style';
import {connect} from 'react-redux';

class ShowProfile extends Component {


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
        const {user} = this.props;

        return (
            <Container style={styles.wrapper}>
                <View>
                    <StatusBar
                        backgroundColor={appColor}
                        barStyle="light-content"
                    />
                </View>
                <View style={[styles.topcontent,{ backgroundColor: appColor}]}>
                    <Icon
                    onPress={() => this.props.navigation.goBack()}
                    type='Ionicons' name='ios-arrow-round-back' style={styles.topCross} />
                    <Text style={styles.topText}> @{user.name} </Text>
                    <Text style={styles.topsave}>  </Text>
                </View>
                <ScrollView>
                <Content style={styles.bodyContent}>
                    <View style={styles.profileHead}>
                        <Image source={require('../../media/show-profile.png')} style={styles.profileImage} />
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 2 </Text>
                            <Text style={styles.history}> Posts </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 1 </Text>
                            <Text style={styles.history}> Missing </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 1 </Text>
                            <Text style={styles.history}> Found </Text>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text h2>{user.name}</Text>

                    </View>


                    <Content style={styles.contactUs}>
                        <View style={styles.contactInfo}>
                            <Text h2>Phone Number:- </Text>
                            <Text style={{ color: appColor}}>{user.cell}</Text>
                        </View>

                        <View style={styles.contactInfo}>
                            <Text h2>Email Address:- </Text>
                            <Text  style={{ color: appColor}}>{user.email}</Text>
                        </View>

                        <View>
                            <Button full 
                            style={[styles.editBtn,{ backgroundColor:appColor,}]} 
                            onPress={() => this.props.navigation.navigate('ProfileEdit')}
                            >
                                <Text>Edit Profile</Text>
                            </Button>
                        </View>
                    </Content>

                </Content>
                </ScrollView>
            </Container>

        );
    }
}


const mapStateToProps = (state) =>{
  
    return {
      clr:state.colorReducer.color,
      user:state.userReducer.user,
    }
  }
  
  export default connect(mapStateToProps,null)(ShowProfile);