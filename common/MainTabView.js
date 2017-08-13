/**
 * Created by ZZH on 2017/8/12.
 * @Date: 2017/8/12
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 这个页面是IOS程序使用的，Android需要另写一个
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

var HomeTabView = require("./home/HomeTabView");
var QualityTabView = require("./quality/QualityTabView");
var OrderTabView = require("./order/OrderTabView");
var MineTabView = require("./mine/MineTabView");

var MainTabView = React.createClass({
    getInitialState:function () {
        return {
            tab: "推荐使用"
        };
    },

    select: function (tabName) {
      this.setState({
          tab:tabName
      });
    },

    render: function () {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="推荐使用"
                    onPress={this.select.bind(this, "推荐使用")}
                    selected={this.state.tab === "推荐使用"}
                    icon={ require('../resources/img/main/tab/ic_recommend.png') }>
                    <HomeTabView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="品质商城"
                    onPress={this.select.bind(this, "品质商城")}
                    selected={this.state.tab ==="品质商城"}
                    icon={ require('../resources/img/main/tab/ic_quality.png') }>
                    <QualityTabView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="订单"
                    onPress={this.select.bind(this, "订单")}
                    selected={this.state.tab ==="订单"}
                    icon={ require('../resources/img/main/tab/ic_order.png') }>
                    <OrderTabView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    onPress={this.select.bind(this, "我的")}
                    selected={this.state.tab ==="我的"}
                    icon={ require('../resources/img/main/tab/ic_mine.png') }>
                    <MineTabView/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

module.exports = MainTabView;

