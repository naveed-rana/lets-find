import React, { Component } from 'react';
import { StyleSheet,Image} from 'react-native';
import { View,Text,Content,Item,Input,Icon } from 'native-base';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
        <Content>
         <View style={styles.searchContainer}>

        <Item style={styles.itemStyle} >
          <View style={styles.searchInput}>
          <Input  placeholder='Search' />
          <Icon style={styles.camIcon} type="Entypo" name="camera"/>
          </View>
        </Item>

        <View style={styles.filterContainer}>
            <Image style={styles.filterImage} source={require('../../media/Filters.png')} />
         </View>

        </View>
      </Content>
  

    );
  }
}

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:'#05CE1D',
        paddingVertical: 20,
    },
    searchInput:{
        color:'#f5f5f5',
        backgroundColor:'#fff',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    camIcon:{
       marginTop:10
    },
    itemStyle:{
        borderColor: 'transparent' 
    },
    filterContainer:{
        marginLeft:15,
        marginTop:10,
        flexDirection:'row',
        flex:1
    },
    filterImage:{
     
    }
})