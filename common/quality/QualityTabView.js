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
    ScrollView
} from 'react-native';
//导航栏
var QualityBar = require('./QualitySearchBar');
var QualityAdsViewPager = require('./QualityViewPager');
var Utils = require('../utils/Utils');
var Constants = require('../utils/Constants');
var QualityItemViewPager = require('./QualityItemViewPager');

var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
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

        return {
            dataSource: dataSource,
            obj: [],
            qualityItem: []
        };
    },

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <QualityBar initObj={{title: '济南'}}/>
                <QualityAdsViewPager initObj={{ds: this.state.dataSource, obj: this.state.dataSource}}
                                     style={styles.altBlock}/>
                {<QualityItemViewPager initObj ={{ListBean:this.state.qualityItem}}
                                      style={styles.altBlock2}/>}
            </ScrollView>
        );
    },
    componentDidMount: function () {
        this.getQualityList();
    },
    getQualityList: function () {
        var param = "{\"latitude\":\"36.672103\",\"longitude\":\"116.910049\",\"cityId\":\"370100\",\"overType\":\"1\",\"version\":\"2.14.14\"}";
        var formData = new FormData();
        formData.append('data', param);
        var that = this;
        Utils.postRequest(Constants.QUALITY_LIST, formData, function (json) {
            if ('200' === json.result) {
                let ad = [];
                for (let i in  json.homeAdInfoList){
                    ad.push(i.appImgpath)
                }

                var dataSource = new ViewPager.DataSource({
                    pageHasChanged: (p1, p2) => p1 !== p2,
                });
                //下面8个子选项，可能是左右滑动的ViewPager, 每个视图里面最多显示八个 , dddcccc
                let tmpQualityItem = json.homeCategoryList;
                let cateory = [];
                if (tmpQualityItem.length > 8){
                    let len = tmpQualityItem.length / 8 +1;
                    //TODO 每8个 fen yi zu , fang dao shu zu li mian 
                    for (let i = 0;i<len;i++){

                        let start = i * 8 ;
                    }
                } else {
                    cateory.push({
                        key:0,
                        value:tmpQualityItem
                    })
                }




                that.setState({
                    obj: dataSource.cloneWithPages(json.homeAdInfoList),
                    dataSource:dataSource.cloneWithPages(json.homeAdInfoList)
                });
            } else {
                alert(json.error);
            }
        }, function (error) {
            alert(json.error);
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
    altBlock2: {
        flex: 1,
        height: 300,
        backgroundColor: '#8588ff'
    }

});

module.exports = QualityTabView;