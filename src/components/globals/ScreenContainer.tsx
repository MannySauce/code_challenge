import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ScreenContainer({ children }: PropsWithChildren<{}>) {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { marginTop: safeAreaInsets.top, marginBottom: safeAreaInsets.bottom }]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})