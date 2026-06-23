import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Alert,
} from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function ConfirmMpin({ route, navigation }: any) {
  const originalMpin = route?.params?.originalMpin ?? '';

  const [confirmMpin, setConfirmMpin] = useState('');
  const [error, setError] = useState('');

  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    const value = text.replace(/[^0-9]/g, '');

    if (value.length <= 4) {
      setConfirmMpin(value);
      setError('');

      if (value.length === 4) {
        Keyboard.dismiss();
      }
    }
  };

  const saveMpin = async () => {
    if (confirmMpin.length !== 4) {
      setError('Enter 4 digit MPIN');
      return;
    }

    if (confirmMpin !== originalMpin) {
      setError('MPIN does not match');
      return;
    }

    try {
      await Keychain.setGenericPassword('mpin_user', confirmMpin);

      Alert.alert('Success', 'MPIN created successfully');

      console.log('MPIN Saved:', confirmMpin);

      navigation.replace('TabNavigation');
    } catch (error) {
      console.log(error);
      setError('Failed to save MPIN');
    }
  };

  const renderBox = (index: number) => {
    const filled = index < confirmMpin.length;

    const active =
      (confirmMpin.length < 4 && index === confirmMpin.length) ||
      (confirmMpin.length === 4 && index === 3);

    return (
      <TouchableOpacity
        key={index}
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={[styles.box, active && styles.activeBox]}
      >
        <Text style={styles.boxText}>{filled ? '•' : ''}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm MPIN</Text>

      <Text style={styles.subtitle}>Re-enter your 4 digit MPIN</Text>

      <View style={styles.pinContainer}>{[0, 1, 2, 3].map(renderBox)}</View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        ref={inputRef}
        value={confirmMpin}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={4}
        autoFocus
        caretHidden
        style={styles.hiddenInput}
      />

      <TouchableOpacity
        disabled={confirmMpin.length !== 4}
        style={[
          styles.button,
          confirmMpin.length !== 4 && styles.buttonDisabled,
        ]}
        onPress={saveMpin}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
    color: '#666',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 72,
    height: 72,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBox: {
    borderColor: '#0066FF',
    borderWidth: 2,
  },
  boxText: {
    fontSize: 28,
    fontWeight: '700',
  },
  errorText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#DC2626',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  button: {
    marginTop: 40,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
