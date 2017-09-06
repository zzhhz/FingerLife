/**
 * Created by ZZH on 2017/09/06.
 * @Date: 2017/09/06 下午5:04
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 首页面-> 搜索栏
 */


import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

var QualityItem = React.createClass({
    render: function () {
        var bean = this.props.qualityItem;
        return (<View style={styles.item2Block}>
            <View style={styles.itemBlock}>
                <Image style={styles.itemImage} source={{uri: bean.appUrl}}/>
                <Text>{bean.categoryName}</Text>
            </View>
        </View>)
    }
});

var styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    itemBlock: {
        width: 60,
        height: 70,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2
    },
    item2Block: {
        width: 60,
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red'
    },
    itemImage: {
        width: 50,
        height: 50,
    }

});

module.exports = QualityItem;