import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const BackupScreen = () => {

    return (
        <View>
            
            <TouchableOpacity style={styles.backupStyle}>
                <Text>View Backup recording</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backupStyle}>
                <Text>clear backup recording</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    backupStyle: {

    }

});

export default BackupScreen;