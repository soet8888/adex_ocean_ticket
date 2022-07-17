/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoadingIndicator() {
    return (
        <View
            style={[
                { flex: 1, },
                { alignItems: 'center', justifyContent: 'center' },
            ]}>
            <ActivityIndicator size="large" color={'gray'} />
        </View>
    );

}
