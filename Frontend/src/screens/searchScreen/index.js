import React, { Component } from 'react';
import { StyleSheet, Image, StatusBar } from 'react-native';
import { View, Text, Content, Item, Input, Icon, Card, CardItem, Body } from 'native-base';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <Content>

                <View>
                    <StatusBar
                        backgroundColor="#05CE1D"
                        barStyle="light-content"
                    />
                </View>

                <View style={styles.searchContainer}>

                    <Item style={styles.itemStyle} >
                        <View style={styles.searchInput}>
                            <Input placeholder='Search' />
                            <Icon style={styles.camIcon} type="Entypo" name="camera" />
                        </View>
                    </Item>

                    <View style={styles.filterContainer}>
                        <Image source={require('../../media/Filters.png')} />
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={styles.cardInnerContainer}>

                                    <View>
                                        <Image style={styles.filterImage} source={require('../../media/sham.jpg')} />
                                    </View>

                                    <View style={styles.textContainer}>
                                        <View style={styles.cardHeader}>
                                            <Text >
                                                Isra Adil
                                            </Text>

                                            <Text style={styles.statusText}>
                                                *Missing*
                                             </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.nameText}>
                                                Posted By Naveed
                                       </Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row',paddingTop:5}}>    

                                            <Icon style={{marginLeft:-5}} type="EvilIcons" name="location"/>    
                                            <Text style={{fontSize:13}}>
                                                Faisalabad
                                            </Text>

                                        </View>

                                        <View style={styles.cardHeader}>
                                            <Text style={styles.readMore}>
                                                Read More
                                            </Text>

                                            <Icon style={{ marginTop: -5 }} type="Feather" name="more-horizontal" />
                                        </View>

                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </View>




 {/* start card 2 */}

   <View style={styles.cardContainer}>
                    <Card>
                        <CardItem listItemPadding={0}>
                            <Body>
                                <View style={styles.cardInnerContainer}>
                                    <View>
                                        <Image style={styles.filterImage} source={require('../../media/sham.jpg')} />
                                    </View>

                                    <View style={styles.textContainer}>
                                        <View style={styles.cardHeader}>
                                            <Text >
                                                Isra Adil
                                            </Text>

                                            <Text style={styles.statusText}>
                                                *Missing*
                                             </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.nameText}>
                                                Posted By Naveed
                                       </Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row',paddingTop:5}}>    

                                            <Icon style={{marginLeft:-5}} type="EvilIcons" name="location"/>    
                                            <Text style={{fontSize:13}}>
                                                Faisalabad
                                            </Text>

                                        </View>

                                        <View style={styles.cardHeader}>
                                            <Text style={styles.readMore}>
                                                Read More
                                            </Text>

                                            <Icon style={{ marginTop: -5 }} type="Feather" name="more-horizontal" />
                                        </View>

                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </View>

 {/* end card 2 */}


 {/* start card 2 */}

   <View style={styles.cardContainer}>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={styles.cardInnerContainer}>

                                    <View>
                                        <Image style={styles.filterImage} source={require('../../media/sham.jpg')} />
                                    </View>

                                    <View style={styles.textContainer}>
                                        <View style={styles.cardHeader}>
                                            <Text >
                                                Isra Adil
                                            </Text>

                                            <Text style={styles.statusText}>
                                                *Missing*
                                             </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.nameText}>
                                                Posted By Naveed
                                       </Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row',paddingTop:5}}>    

                                            <Icon style={{marginLeft:-5}} type="EvilIcons" name="location"/>    
                                            <Text style={{fontSize:13}}>
                                                Faisalabad
                                            </Text>

                                        </View>

                                        <View style={styles.cardHeader}>
                                            <Text style={styles.readMore}>
                                                Read More
                                            </Text>

                                            <Icon style={{ marginTop: -5 }} type="Feather" name="more-horizontal" />
                                        </View>

                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </View>

 {/* end card 2 */}


 {/* start card 2 */}

   <View style={styles.cardContainer}>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={styles.cardInnerContainer}>

                                    <View>
                                        <Image style={styles.filterImage} source={require('../../media/sham.jpg')} />
                                    </View>

                                    <View style={styles.textContainer}>
                                        <View style={styles.cardHeader}>
                                            <Text >
                                                Isra Adil
                                            </Text>

                                            <Text style={styles.statusText}>
                                                *Missing*
                                             </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.nameText}>
                                                Posted By Naveed
                                       </Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row',paddingTop:5}}>    

                                            <Icon style={{marginLeft:-5}} type="EvilIcons" name="location"/>    
                                            <Text style={{fontSize:13}}>
                                                Faisalabad
                                            </Text>

                                        </View>

                                        <View style={styles.cardHeader}>
                                            <Text style={styles.readMore}>
                                                Read More
                                            </Text>

                                            <Icon style={{ marginTop: -5 }} type="Feather" name="more-horizontal" />
                                        </View>

                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </View>

 {/* end card 2 */}


            </Content>


        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#05CE1D',
        paddingTop: 20,
        paddingBottom: 10
    },
    searchInput: {
        color: '#f5f5f5',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    camIcon: {
        marginTop: 10
    },
    itemStyle: {
        borderColor: 'transparent'
    },
    filterContainer: {
        marginLeft: 15,
        marginTop: 10,
        flexDirection: 'row',
        flex: 1
    },
    filterImage: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    cardContainer: {
        marginHorizontal: 10
    },
    cardInnerContainer: {
        flexDirection: 'row',
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusText: {
        color: '#05CE1D',
    },
    nameText: {
        fontSize: 10
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    readMore: {
        color: '#0366d6',
        fontSize: 12,
        paddingTop: 2
    }
})