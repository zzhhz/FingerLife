/**
 * Created by ZZH on 2017/8/13.
 * @Date: 2017/8/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 订单列表页面
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var OrderTabView = React.createClass({

    render: function () {
        return (<View style={styles.container}>
            <Text>这是一订单列表页面</Text>
        </View>);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }

});

module.exports = OrderTabView;