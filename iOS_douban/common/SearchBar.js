import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    AppRegistry,
    TouchableOpacity,
    TextInput
} from 'react-native';

var SearchBar = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <View style={styles.inputContent}>
                    <TextInput style={styles.input}/>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 44,
        marginTop: 10
    },
    inputContent: {
        flex: 1,
        marginLeft: 5
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC',
        paddingLeft: 5
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        borderRadius: 5,
        justifyContent: 'center',

    },
    search: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44
    }

});


module.exports = SearchBar;