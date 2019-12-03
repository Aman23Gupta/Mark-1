import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CounterScreen = () => {

    return (
        <View>
            <Text>Scream Detected</Text>
            <Text>Sending Signal in</Text>

            <View style={styles.view}></View>

            <TouchableOpacity style={styles.cancelStyle}>
                <Text>Cancel</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    cancelStyle: {
        
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }


});

export default CounterScreen;