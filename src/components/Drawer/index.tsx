import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Option = {
  label: string;
  onPress: () => void;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  options: Option[];
};

export function Drawer({ isOpen, onClose, options }: Props) {
  return (
    <View style={[styles.container, isOpen ? styles.open : styles.closed]}>
      {options.map(option => (
        <TouchableOpacity
          key={option.label}
          onPress={() => {
            option.onPress();
            onClose();
          }}
        >
          <Text style={styles.option}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    right: 0,
    width: 120,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  open: {
    height: 160,
  },
  closed: {
    height: 0,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
