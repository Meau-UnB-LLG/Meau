import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoMarcavelQuadradoOpacoProps {
  label: string;
  onPress?: () => void;
  checked?: boolean;
}

export default function BotaoMarcavelQuadradoOpaco({ label, onPress, checked } : BotaoMarcavelQuadradoOpacoProps) {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View style={[styles.radioButtonOuter, checked && styles.radioButtonOuterSelected]}>
        {checked && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButtonOuter: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#757575',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5

  },
  radioButtonOuterSelected: {
    borderColor: 'blue', 
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue', 
  },
  radioButtonText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#757575',
    opacity: 0.5
  },
});
