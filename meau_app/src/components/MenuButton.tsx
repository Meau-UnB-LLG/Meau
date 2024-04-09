import { Pressable } from "react-native";

import { Ionicons } from '@expo/vector-icons';

interface MenuButtonProps {
    onPress: () => void
}

export default function MenuButton( { onPress } : MenuButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name="menu" size={24} color="#88c9bf" />
        </Pressable>
    );
};