import React from 'react';
import {
    StatusBar,
    View,
    TabBarIOS,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';

var Icon = require('../../resources/img/ic_gray_back.png')

var Header = React.createClass({
    render: function () {

        //获取实例 backName,barTitle
        var headerContent = this.props.initObj;


        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress ={this._pop}>
                    <Icon/>
                    <Text style={styles.left_text}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title}
                    numberOfLines={1}>
                        {headerContent.barTitle}
                    </Text>
                </View>
            </View>
        );
    }
    ,
    _pop:function () {
        this.props.navigator.pop();
    }
});


var styles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: '#3497ff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left_text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 18,
        width: 200
    },
    title_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 18,
        width: 200
    }

});

module.exports = Header;