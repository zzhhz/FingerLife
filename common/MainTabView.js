/**
 * Created by ZZH on 2017/8/12.
 * @Date: 2017/8/12
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 这个页面是IOS程序使用的，Android需要另写一个
 */
import React, {Component} from 'react';

import TabBar from 'react-native-xtabbar';
import {StyleSheet} from 'react-native';

var HomeTabView = require("./home/HomeTabView");
var QualityTabView = require("./quality/QualityTabView");
var OrderTabView = require("./order/OrderTabView");
var MineTabView = require("./mine/MineTabView");

var MainTabView = React.createClass({
    getInitialState: function () {
        return {
            tab: "推荐使用"
        };
    },

    select: function (tabName) {
        this.setState({
            tab: tabName
        });
    },

    render: function () {
        return (
            <TabBar>
                <TabBar.Item
                    title="推荐"
                    /*onPress={this.select.bind(this, "推荐使用")}
                    selected={this.state.tab === "推荐使用"}*/
                    selectedIcon={require('../resources/img/main/tab/ic_recommend_select.png')}
                    icon={require('../resources/img/main/tab/ic_recommend.png')}>
                    <HomeTabView/>
                </TabBar.Item>
                <TabBar.Item
                    title="品质"
                    /*onPress={this.select.bind(this, "品质商城")}
                    selected={this.state.tab === "品质商城"}*/
                    selectedIcon={require('../resources/img/main/tab/ic_quality.png')}
                    icon={require('../resources/img/main/tab/ic_quality_un.png')}>
                    <QualityTabView/>
                </TabBar.Item>
                <TabBar.Item
                    title="订单"
                    /*onPress={this.select.bind(this, "订单")}
                    selected={this.state.tab === "订单"}*/
                    selectedIcon={require('../resources/img/main/tab/ic_order_select.png')}
                    icon={require('../resources/img/main/tab/ic_order.png')}>
                    <OrderTabView/>
                </TabBar.Item>
                <TabBar.Item
                    title="我的"
                    /*onPress={this.select.bind(this, "我的")}
                    selected={this.state.tab === "我的"}*/
                    selectedIcon={require('../resources/img/main/tab/ic_mine_select.png')}
                    icon={require('../resources/img/main/tab/ic_mine.png')}>
                    <MineTabView/>
                </TabBar.Item>
            </TabBar>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    item: {
        fontSize: 10,
        borderColor: '#000000',
        borderWidth: 2,
    }
});

module.exports = MainTabView;

