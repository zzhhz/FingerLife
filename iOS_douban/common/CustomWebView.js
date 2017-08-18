import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    AppRegistry,
    TouchableOpacity,
    TextInput,
    Navigator,
    WebView
} from 'react-native';


var Header = require('./header');
var CustomWebView = React.createClass({
    render: function () {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Header navigator={this.props.navigator}
                        initObj={{
                            backName: this.props.backName,
                            barTitle: this.props.barTitle
                        }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -44, bottom: -120}}
                    source={{url: this.props.url}}
                />
            </View>
        );
    }
});

module.exports = CustomWebView;