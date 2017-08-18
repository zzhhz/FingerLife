/**


 */
import React from 'react';
import {
    StatusBar,
    View,
    TabBarIOS,
    Text

} from 'react-native';

var BookList = require('./book/book_list');
var Navigation = require('./common/navigation');

var MainPageView = React.createClass({

    getInitialState: function () {
        return {selectedTab: '图书'};
    },

    render: function () {
        return (<TabBarIOS>
            <TabBarIOS.Item
                title="图书"
                selected={this.state.selectedTab === "图书"}
                onPress={() => {
                    this.setState({
                        selectedTab: '图书'
                    })
                }}

                icon={require('../resources/img/main/tab/ic_recommend_select.png')}
            >
                <Navigation component={BookList}/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="电影"
                selected={this.state.selectedTab === "电影"}
                onPress={() => {
                    this.setState({
                        selectedTab: '电影'
                    })
                }}

                icon={require('../resources/img/main/tab/ic_quality.png')}

            >
                <View style={{backgroundColor: 'red'}}>
                    <Text>手动阀大是大非
                    </Text>
                </View>
            </TabBarIOS.Item>
        </TabBarIOS>);
    }
});


module.exports = MainPageView;



