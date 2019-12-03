import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const ModeScreen = () => {
    const [ison1,setIson1] = useState(false);
    const [ison2, setIson2] = useState(false);

    return (
      <View>

        <ToggleSwitch
          isOn={ison1}
          onColor="green"
          offColor="red"
          label="Vibration mode"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={() => {
            if (ison1 == false) setIson1(true);
            else setIson1(false);
          }}
        />

        <ToggleSwitch
          isOn={ison2}
          onColor="green"
          offColor="red"
          label="Scream Mode"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={() => {
            if (ison2 == false) setIson2(true);
            else setIson2(false);
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({

});

export default ModeScreen;