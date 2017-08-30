/**
 * Created by ZZH on 2017/08/30.
 * @Date: 2017/08/30 下午1:58
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 品质商城，附近 地址 搜索 导航栏
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

var QualitySearchBar = React.createClass({
    render: function () {
        var obj = this.props.initObj;

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.left_image} source={require('../../resources/img/main/quality/ic_near.png')}/>
                    <Text style={styles.left_text}>附近</Text>
                </View>
                <View style={styles.center}>
                    <Text>{obj.title}</Text>
                </View>
                <View style={styles.right}>
                    <Image style ={styles.right_image} source={require('../../resources/img/main/home/ic_search.png')}/>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    left: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left_image: {
        width: 20,
        height: 25,
        marginLeft: 10
    },
    left_text: {
        fontSize: 12,
        marginLeft: 3
    },
    center: {
        height: 40,
        flex: 1,
        marginRight: 15,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    right: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },
    right_image: {
        width: 22,
        height: 22,
    },

});

module.exports = QualitySearchBar;