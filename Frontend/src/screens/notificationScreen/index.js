import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon , View} from 'native-base';
import styles from './style';
export default class notificationScreen extends Component {
    render() {
        return (
            <Container>
                <View>
                    <StatusBar
                        backgroundColor="#05CE1D"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.header}>
                    <Icon 
                     onPress={() => this.props.navigation.navigate('Home')}
                    type="AntDesign" name="arrowleft" style={{ color: "#fff",  }} />
                    <Text style={{ color: "#fff" }}>Notifications</Text>
                    <Text></Text>
                </View>
                <Content>
                    <List>
                        <ListItem>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}