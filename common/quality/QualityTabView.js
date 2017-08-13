/**
 * Created by ZZH on 2017/8/13.
 * @Date: 2017/8/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 品质 tab页面
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var QualityTabView = React.createClass({

    render: function () {
        return (<View style={styles.container}>
            <Text>这是一品质商城页面</Text>
        </View>);
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    }

});

module.exports = QualityTabView;