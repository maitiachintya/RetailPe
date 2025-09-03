// GradientCard.tsx
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

interface GradientCardProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const GradientCard: React.FC<GradientCardProps> = ({ style, children }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#000', '#5b07a5d5', '#7000D2']}
            style={[styles.linearGradient, style]}
        >
            {children}
        </LinearGradient>
    );
};

export default GradientCard;

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 15,
        // justifyContent: "center",
        // alignItems: "center",
    },
});