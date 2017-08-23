/**
 * Created by ZZH on 2017/8/22.
 * @Date: 2017/8/22
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description:
 */
import React, {Component} from 'react';

import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Image

} from 'react-native';

var MovieItem = React.createClass({
    render: function () {
        var movie = this.props.movie;
        //提取演员数组
        //

        var actors = [];

        for (var i in movie.casts) {
            actors.push(movie.casts[i].name);
        }
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}><Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: movie.images.medium}}/></View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer} numberOfLines={1}>
                        <Text>
                        名称：{movie.title}
                        </Text>
                    </View>

                    <View style={styles.textContainer} numberOfLines={1}>
                        <Text>
                            演员：{actors}
                        </Text>
                    </View>
                    <View style={styles.textContainer} numberOfLines={1}>
                        <Text>
                            评分：{movie.rating.average}
                        </Text>
                    </View>
                    <View style={styles.textContainer} numberOfLines={1}>
                        <Text>标签：{movie.year}</Text>
                    </View>
                    <View style={styles.textContainer} numberOfLines ={1}>
                        <Text></Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
});


var styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 80,
        height: 110
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15
    },
    textContent: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    }


});


module.exports = MovieItem;