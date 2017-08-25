/**
 * Created by ZZH on 2017/8/12.
 * @Date: 2017/8/12
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 个人中心页面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var MineTabView = React.createClass({

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Text>这是一个个人中心页面</Text>
                <View style ={styles.headerContainer}>
                    <Image source ={require('../../resources/img/main/mine/default_other.9.png')}/>
                    <View>
                        <Text>用户名</Text>
                        <Text>等级</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>100</Text>
                        <Text>成长值</Text>
                    </View>
                    <View/>
                    <View>
                        <Text>100</Text>
                        <Text>积分商城 ></Text>
                    </View>
                    <View/>
                    <View>
                        <Text>100</Text>
                        <Text>总返利</Text>
                    </View>
                </View>

            </ScrollView>);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    headerContainer:{
        backgroundColor:'#c9151e',
        flex: 1,
        justifyContent:'center'
    }

});

module.exports = MineTabView;
