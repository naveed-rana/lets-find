import React, { Component } from 'react';
import { Image, StatusBar, ScrollView , TouchableOpacity} from 'react-native';
import { View, Text, Content, Item, Input, Icon, Card, CardItem, Body, Container, Picker, Form, Button } from 'native-base';
import styles from './style';


export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            selectedStatus:'',
            selectedDisability:'',
            selectedGender:'',
            selectedAgeGroup:'',
            location:''
        };
    }
    onSubmit = () => {
        console.log("====================================");
        console.log(this.state.selectedStatus);
        console.log(this.state.selectedDisability);
        console.log(this.state.selectedGender);
        console.log(this.state.selectedAgeGroup);
        console.log(this.state.location);
        console.log("====================================");
      };
    onStatusChange(value: string) {
        this.setState({
            selectedStatus: value
        });
    }
    onDisabilityChange(value: string) {
        this.setState({
            selectedDisability: value
        });
    }
    onGenderChange(value: string) {
        this.setState({
            selectedGender: value
        });
    }
    onAgeGroupChange(value: string) {
        this.setState({
            selectedAgeGroup: value
        });
    }
    toggleFilter = () =>{
        const {show} = this.state;
        this.setState(preState => {
            return {
              show: !preState.show
            };
          });
    }
    render() {
        return (

            <Container>

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
                    <TouchableOpacity style={styles.filterContainer} onPress={this.toggleFilter}>
                        <Image source={require('../../media/Filters.png')} />
                    </TouchableOpacity>
                    {this.state.show ? 
                    <View style={styles.filtersContainer}>
                        <Form>
                            <View style={styles.selectBoxesContainer}>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" style={{ color: "#fff" }} />}
                                        style={{ width: "49%", color: "#fff" }}
                                        placeholderIconColor="#fff"
                                        selectedValue={this.state.selectedStatus}
                                        onValueChange={this.onStatusChange.bind(this)}
                                    >
                                        <Picker.Item label="Status" value="null_value" />
                                        <Picker.Item label="Missing" value="missing" />
                                        <Picker.Item label="Find" value="find" />
                                        <Picker.Item label="Found" value="found" />
                                    </Picker>
                                </Item>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        style={{ width: "49%", color: "#fff" }}
                                        placeholderIconColor="#fff"
                                        selectedValue={this.state.selectedDisability}
                                        onValueChange={this.onDisabilityChange.bind(this)}
                                    >
                                        <Picker.Item label="Disability" value="null_value" />
                                        <Picker.Item label="Yes" value="yes" />
                                        <Picker.Item label="No" value="no" />
                                    </Picker>
                                </Item>
                            </View>
                            <View style={styles.selectBoxesContainer}>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" style={{ color: "#fff" }} />}
                                        style={{ width: "49%", color: "#fff" }}
                                        placeholderIconColor="#fff"
                                        selectedValue={this.state.selectedGender}
                                        onValueChange={this.onGenderChange.bind(this)}
                                    >
                                        <Picker.Item label="Gender" value="null_value" />
                                        <Picker.Item label="Male" value="missing" />
                                        <Picker.Item label="Female" value="find" />
                                    </Picker>
                                </Item>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        style={{ width: "49%", color: "#fff" }}
                                        placeholderIconColor="#fff"
                                        selectedValue={this.state.selectedAgeGroup}
                                        onValueChange={this.onAgeGroupChange.bind(this)}
                                    >
                                        <Picker.Item label="Age Group" value="null_value" />
                                        <Picker.Item label="1-5" value="yes" />
                                        <Picker.Item label="5-6" value="no" />
                                    </Picker>
                                </Item>
                            </View>
                            <View>
                            <Item>
                                <Input placeholder='Location' style={{color:"#fff"}} placeholderTextColor="#fff" 
                                onChangeText={event => {
                                        this.setState({
                                        location: event
                                        });
                                    }}/>
                                <Icon active name='map-marked' type="FontAwesome5" style={{color:"#fff"}} />
                            </Item>
                            </View>
                        </Form>
                    </View>
                    : <View></View>
                    } 
                </View>
                <ScrollView>
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
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

                                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                                                <Icon style={{ marginLeft: -5 }} type="EvilIcons" name="location" />
                                                <Text style={{ fontSize: 13 }}>
                                                    Faisalabad
                                            </Text>

                                            </View>

                                            <View style={styles.cardHeader}>
                                                <Text style={styles.readMore}>
                                                    Read More
                                            </Text>
                                                <Icon
                                                    style={{ marginTop: -5 }}
                                                    type="Entypo"
                                                    name="dots-three-horizontal"
                                                />
                                            </View>

                                        </View>

                                    </View>
                                </Body>
                            </CardItem>

                        </Card>
                    </View>

                    {/* end card 2 */}
                </ScrollView>

                {/* end card 2 */}

            </Container>


        );
    }
}

