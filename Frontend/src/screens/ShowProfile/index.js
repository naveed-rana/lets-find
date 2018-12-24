import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar } from 'react-native';
import { Text, Content, Item, Input, Form, Icon, View, Button, CheckBox } from 'native-base';
import styles from './style';

export default class ShowProfile extends Component {
    render() {
        return (
            <Content style={styles.wrapper}>
                <View>
                    <StatusBar
                        backgroundColor="#05CE1D"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.topcontent}>
                    <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.topCross} />
                    <Text style={styles.topText}> @abaid </Text>
                    <Text style={styles.topsave}> More </Text>
                </View>

                <Content style={styles.bodyContent}>
                    <View style={styles.profileHead}>
                        <Image source={require('../../media/show-profile.png')} style={styles.profileImage} />
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 131 </Text>
                            <Text style={styles.history}> Posts </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 213 </Text>
                            <Text style={styles.history}> Missing </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={styles.total}> 3,213 </Text>
                            <Text style={styles.history}> Found </Text>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text h2>Abaid Malik</Text>
                        <Text p style={styles.description_prag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>


                    <Content style={styles.contactUs}>
                        <View style={styles.contactInfo}>
                            <Text h2>Phone Number:- </Text>
                            <Text style={styles.contactInfo_detail}>+92 306 7134632</Text>
                        </View>

                        <View style={styles.contactInfo}>
                            <Text h2>Email Address:- </Text>
                            <Text style={styles.contactInfo_detail}>abaidmalik243@gmail.com</Text>
                        </View>
                        <View style={styles.contactInfo}>
                            <Text h2>Phone Number:- </Text>
                            <Text style={styles.contactInfo_detail}>+92 306 7134632</Text>
                        </View>
                        <View style={styles.contactInfo}>
                            <Text h2>Email Address:- </Text>
                            <Text style={styles.contactInfo_detail}>abaidmalik243@gmail.com</Text>
                        </View>

                        <View>
                            <Button full 
                            style={styles.editBtn} 
                            onPress={() => this.props.navigation.navigate('ProfileEdit')}
                            >
                                <Text>Edit Profile</Text>
                            </Button>
                        </View>
                    </Content>

                </Content>
            </Content>

        );
    }
}