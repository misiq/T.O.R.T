import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { TamaguiProvider } from 'tamagui';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { useEffect } from "react";
import { tamaguiConfig } from '../tamagui.config';

import { useFonts } from 'expo-font';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    'Jersey10': require('@/assets/fonts/Jersey10-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Don't render until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
           <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="game" />
           </Stack>


    </TamaguiProvider>
  );
}
