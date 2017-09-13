/**
 * Created by ZZH on 2017/8/13.
 * @Date: 2017/8/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 品质 tab页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList
} from 'react-native';
//导航栏
var QualityBar = require('./QualitySearchBar');
var QualityAdsViewPager = require('./QualityViewPager');
var Utils = require('../utils/Utils');
var Constants = require('../utils/Constants');
var QualityItemViewPager = require('./QualityItemViewPager');
var QualityItem = require('./QualityItem');
var IMGS = [
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];
var ViewPager = require('react-native-viewpager');
var QualityTabView = React.createClass({
    getInitialState: function () {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        var adb = [];
        let num = 0;
        for (let i in  IMGS) {
            adb.push(i);
            num++;
        }

        return {
            obj: dataSource.cloneWithPages(adb),
            qualityItem: [
                {appUrl: "", categoryName: '曹操送'},
                {appUrl: "", categoryName: '品质美食'},
                {appUrl: "", categoryName: '品优生鲜'},
                {appUrl: "", categoryName: '品牌商超'},
                {appUrl: "", categoryName: '小龙虾'},
                {appUrl: "", categoryName: '邀请好友'},
                {appUrl: "", categoryName: '签到'},
                {appUrl: "", categoryName: '领券中心'},

            ]
        };
    },

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <QualityBar initObj={{title: '济南'}}/>
                <QualityAdsViewPager initObj={{obj: this.state.obj}}
                                     style={styles.altBlock}/>
                <View style={styles.itemContainer}>
                    <View style={styles.hori}>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[0]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[1]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[2]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[3]}/>
                        </View>
                    </View>
                    <View style={styles.hori}>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[4]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[5]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[6]}/>
                        </View>
                        <View style={styles.items}>
                            <QualityItem initObj={this.state.qualityItem[7]}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    },
    componentDidMount: function () {
        //this.getQualityList();
    },
    getQualityList: function () {
        var param = "{\"latitude\":\"36.672103\",\"longitude\":\"116.910049\",\"cityId\":\"370100\",\"overType\":\"1\",\"version\":\"2.14.14\"}";
        var formData = new FormData();
        formData.append('data', param);
        var that = this;
        Utils.postRequest(Constants.QUALITY_LIST, formData, function (json) {
            if ('200' === json.result) {
                var ads = [];
                for (let i in  json.homeAdInfoList) {
                    ads.push(i.appImgpath);
                }

                var dataSource = new ViewPager.DataSource({
                    pageHasChanged: (p1, p2) => p1 !== p2,
                });
                //下面8个子选项，可能是左右滑动的ViewPager, 每个视图里面最多显示八个 , dddcccc
                that.setState({
                    obj: dataSource.cloneWithPages(ads),
                });
            } else {
                alert(json.error);
            }
        }, function (error) {
            alert(error);
        });
    }
});


var styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    altBlock: {
        flex: 1,
        height: 100,
        backgroundColor: '#ffc655'
    },
    itemContainer: {
        flex: 1,
    },
    hori: {
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    items: {
        height: 80,
        width:90,
        justifyContent:"center",
        alignItems:'center'
    }
});

module.exports = QualityTabView;