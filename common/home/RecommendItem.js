/**
 * Created by ZZH on 2017/08/29.
 * @Date: 2017/08/29 上午11:42
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 首页面 -> 搜索栏
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

var Colors = require('../utils/Colors');
var Utils = require('../utils/Utils');
var RecommendItem = React.createClass({

    render: function () {
        var recommend = this.props.recommend;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source ={{uri: Utils.getUrl(recommend.img_url_original)}}/>
                <View style={styles.descContainer}>
                    <View>
                        <Text style={styles.descText} numberOfLines={2}>{recommend.title}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{recommend.create_time}</Text>
                        <Image style={styles.eyeImage}/>
                        <Text style={styles.readText}>{recommend.read_amount}</Text>
                    </View>
                </View>
            </View>
        );
    },
    componentDidMount: function () {
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 200,
        flex: 1,
        backgroundColor:Colors.Pink
    },
    descText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.Black,
    },
    timeText: {
        fontSize: 12,
        color: Colors.Black
    },
    readText: {
        fontSize: 12,
        color: Colors.Black
    },
    eyeImage: {
        width: 18,
        height: 18
    },
    descContainer: {
        flex:1,
        marginLeft:15,
        marginRight:15,
        paddingTop:5,
        paddingBottom:5
    },
    timeContainer: {
        justifyContent: 'space-between',
        flexDirection:'row',
    }

});

module.exports = RecommendItem;