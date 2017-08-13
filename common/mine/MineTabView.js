/**
 * Created by ZZH on 2017/8/12.
 * @Date: 2017/8/12
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description:
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var MineTabView = React.createClass({

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Text>这是一个个人中心页面</Text>
            </ScrollView>);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }

});

module.exports = MineTabView;
