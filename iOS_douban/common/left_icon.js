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

var Icon = React.createClass({
    render:function () {
        return (<View>
            <View style ={styles.go}></View>
        </View>)
    }
});



var styles = StyleSheet.create({
   go:{
       width:5,
       height:44,
       borderLeftWidth:2,
       borderBottomWidth:2,
       marginLeft:10,
       transform:[{rotate:'45deg'}] //将一个矩形框旋转45度
   }
});

module.exports = Icon;