import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    searchWrapper: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    searchHeader: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingLeft: 10,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 0.5,
    },
    inputWrapper: {
        paddingHorizontal: 10,
        borderColor: '#e6e6e6',
        borderWidth: 0.5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginRight: 6,
        tintColor: '#b2b2b2'
    },
    searchInput: {
        lineHeight: 20,
        flex: 1,
        paddingVertical: 4
    },
    delInput: {
        width: 15,
        height: 15,
        justifyContent: 'center'
    },
    delIcon: {
        width: '100%'
    },
    cancleBtn: {
        height: 30,
        paddingHorizontal: 10
    },
    cancle: {
        marginTop: 3,
        lineHeight: 30,
        fontSize: 16,
        color: '#f03d37'
    },
    wrapper: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        flex: 1
    }
})