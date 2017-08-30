/**
 * Created by ZZH on 2017/8/12.
 * @Date: 2017/8/12
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 个人中心页面，
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var LineItem = require('../view/Line3Item');
var Utils = require('../utils/Utils');
var Constants = require('../utils/Constants');

var MineTabView = React.createClass({

    getInitialState: function () {
        return {
            userInfo: {}
        };
    },

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.headerAvatar}
                           source={require('../../resources/img/main/mine/default_other.9.png')}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userText}>{this.state.userInfo.nickname}</Text>
                        <Text style={styles.userText}>{this.state.userInfo.gradeName}</Text>
                    </View>
                </View>
                <View style={styles.userLabelContainer}>

                    <View style={styles.userLabelTextContainer}>
                        <Text style={styles.userLabelTextTop}>100</Text>
                        <Text style={styles.userLabelTextBottom}>余额</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Text style={styles.userLabelTextTop}>100</Text>
                        <Text style={styles.userLabelTextBottom}>成长值</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Text style={styles.userLabelTextTop}>100</Text>
                        <Text style={styles.userLabelTextTop}>积分商城 ></Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Text style={styles.userLabelTextTop}>100</Text>
                        <Text style={styles.userLabelTextBottom}>总返利</Text>
                    </View>
                </View>
                <View style={styles.userSeparator}/>
                <LineItem
                    lineItem={{
                        showRight: false,
                        rightIcon: require('../../resources/img/main/tab/ic_mine.png'),
                        centerText: '我的资产',
                        showLeft: false,
                        leftIcon: require('../../resources/img/main/tab/ic_mine.png')
                    }}
                />
                <View style={styles.userLabelHorizontalLine}/>
                <View style={styles.userLabelContainer}>

                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_coupons.png')}/>
                        <Text style={styles.userItemTextBottom}>优惠券</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_rebate.png')}/>
                        <Text style={styles.userItemTextBottom}>我的返利</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_collect.png')}/>
                        <Text style={styles.userItemTextBottom}>我的收藏</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_comment.png')}/>
                        <Text style={styles.userItemTextBottom}>我的评价</Text>
                    </View>
                </View>
                <View style={styles.userSeparator}/>
                <LineItem
                    lineItem={{
                        showRight: false,
                        centerText: '更多服务',
                        showLeft: false,
                    }}
                />
                <View style={styles.userLabelHorizontalLine}/>
                <View style={styles.userLabelContainer}>

                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage} source={require('../../resources/img/main/mine/ic_love.png')}/>
                        <Text style={styles.userItemTextBottom}>爱心捐</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_open_store.png')}/>
                        <Text style={styles.userItemTextBottom}>我要开店</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_please.png')}/>
                        <Text style={styles.userItemTextBottom}>邀请有奖</Text>
                    </View>
                    <View style={styles.userLabelVerticalLine}/>
                    <View style={styles.userLabelTextContainer}>
                        <Image style={styles.userImage}
                               source={require('../../resources/img/main/mine/ic_address.png')}/>
                        <Text style={styles.userItemTextBottom}>收货地址</Text>
                    </View>
                </View>
                <View style={styles.userSeparator}/>
                <LineItem
                    lineItem={{
                        showRight: true,
                        rightIcon: require('../../resources/img/main/mine/ic_online.png'),
                        centerText: '在线客服',
                        showLeft: false,
                    }}
                />
                <View style={styles.userLabelHorizontalLine}/>
                <LineItem
                    lineItem={{
                        showRight: true,
                        rightIcon: require('../../resources/img/main/mine/ic_setting.png'),
                        centerText: '设置',
                        showLeft: false,
                    }}
                />
            </ScrollView>);
    },
    componentDidMount: function () {
        this.getUserDetail();
    },
    getUserDetail: function () {
        //var params =
        var that = this;
        var formData = new FormData();
        formData.append("userId", "ee95856487fc4063bb443234b8240a43");
        formData.append("overType", "1");
        var params = "{\'userId\':\'ee95856487fc4063bb443234b8240a43\',\'overType\':\'1\'}";

        formData.append("data", params);
        Utils.postRequest(Constants.USER_DETAIL, formData, function (json) {
            //alert(json.result);
            that.setState({
                userInfo: json.mine,
            });
        }, function (error) {
            alert(error);
        });

    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    headerContainer: {
        backgroundColor: '#c9151e',
        flex: 1,
        flexDirection: 'row'
    },
    headerAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 25
    },
    userInfo: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10
    },
    userText: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    userLabelContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },
    userLabelVerticalLine: {
        height: 35,
        width: 1,
        backgroundColor: '#f0f0f0'
    },
    userLabelTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userLabelTextTop: {
        color: '#c9151e'
    },
    userLabelTextBottom: {
        color: '#282828',
        marginTop: 2
    },
    //高度为10 分割线
    userSeparator: {
        backgroundColor: '#f0f0f0',
        height: 10,
        flex: 1,
    },
    userImage: {
        width: 22,
        height: 22,
    },
    userLabelHorizontalLine: {
        height: 1,
        backgroundColor: '#f0f0f0',
        flex: 1
    },

    userItemTextBottom: {
        color: '#282828',
        marginTop: 5
    },

});

module.exports = MineTabView;
