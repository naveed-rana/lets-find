import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#05CE1D',
        paddingTop: 20,
        paddingBottom: 10,
        height:120,
        borderBottomWidth:1,
        borderColor:"grey"
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