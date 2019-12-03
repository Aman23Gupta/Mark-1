import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = () => {
    //if don't know, TouchableOpacity work as button
    return (
        <View>
            <FontAwesome name="user-circle-o" style={styles.iconStyle} />

            <TouchableOpacity style={styles.emailStyle}>
                <Text>Sign in with Email</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleStyle}>
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.facebookStyle}>
                <Text>Sign in with Facebook</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 100,
        alignSelf: 'center',
    },
    emailStyle: {
        
    },
    googleStyle: {

    },
    facebookStyle: {

    }

});

export default SignInScreen;