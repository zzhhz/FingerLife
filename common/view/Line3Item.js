import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Line3Item = React.createClass({

    render: function () {
        var line3Item = this.props.lineItem;
        return (
            <View style={styles.container}>
                {
                    line3Item.showRight ? <Image source={line3Item.rightIcon} style={styles.rightImage}/> :
                        <View/>
                }
                <Text style ={styles.centerText}>{line3Item.centerText}</Text>
                {
                    line3Item.showLeft ? <Image source={line3Item.leftIcon} style={styles.leftImage}/> :
                        <View/>
                }
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 40,
        justifyContent:'center',
        alignItems:'center'
    },
    rightImage: {
        height: 25,
        width:25,
        marginLeft:20,
    },
    centerText: {
        flex:1,
        flexDirection:'row',
        marginLeft:10,
    },
    leftImage: {
        height: 25,
        width:25,
        marginRight:20
    }
});


module.exports = Line3Item;
