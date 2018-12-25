import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar,ScrollView } from 'react-native';
import { Text, Content, Item, Input, Form, Icon, View, Button, Label , Textarea,Container} from 'native-base';
import styles from './style';

export default class SignUpScreen extends Component {
    render() {
        return (
            <Container style={styles.wrapper}>
                <View>
                    <StatusBar
                        backgroundColor="#05CE1D"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.topcontent}>
                    <Icon 
                    onPress={() => this.props.navigation.navigate('Profile')}
                    type='AntDesign' name='close' style={styles.topCross} />
                    <Text style={styles.topText}> Edit Profile </Text>
                    <Text style={styles.topsave}> Save </Text>
                </View>
            <ScrollView>
                <View style={styles.profileImageContainer}>
                    <Image source={require('../../media/Edit-profile-top-image.png')} />
                </View>
                {/* Form Wala Part starts */}
                <Form style={styles.formStyle}>
                    <View style={styles.flContainer}>
                        <Item stackedLabel style={styles.firstNameWrapper} regular>
                            <Label style={styles.label}>First Name:-</Label>
                            <Input style={styles.firsNameStyle} placeholder="Fayyaz" placeholderTextColor="#808080" />
                        </Item>
                        <Item stackedLabel style={styles.firstNameWrapper} regular>
                            <Label style={styles.label}>Last Name:-</Label>
                            <Input style={styles.firsNameStyle} placeholder="Ghulam Muhammad" placeholderTextColor="#808080" />
                        </Item>
                    </View>
                    <Item stackedLabel style={styles.phonenumberWrapper} regular>
                        <Label style={styles.label}>Phone Number:-</Label>
                        <Input style={styles.firsNameStyle} placeholder="+92 324 7636236" placeholderTextColor="#808080" />
                    </Item>
                    <Item stackedLabel style={styles.phonenumberWrapper} regular>
                        <Label style={styles.label}>Description:-</Label>
                        {/* <Input style={styles.firsNameStyle} placeholder="My Name Is Fayyaz . This is my detail" placeholderTextColor="#808080" /> */}
                        <Textarea rowSpan={5} placeholder="My Name is Fayyaz . This is my detail" style={styles.detailArea} />
                    </Item>
                    <Item stackedLabel style={styles.phonenumberWrapper} regular>
                        <Label style={styles.label}>Country:-</Label>
                        <Input style={styles.firsNameStyle} placeholder="Pakistan" placeholderTextColor="#808080" />
                    </Item>
                    <Button full regular style={{ marginVertical: 10,marginHorizontal: 2 , backgroundColor: '#05CE1D',borderRadius:4 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Save & Update</Text>
                    </Button>
                </Form>
                </ScrollView>
            </Container>

        );
    }
}