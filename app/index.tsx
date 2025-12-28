import { useBackgroundMusic } from '@/hooks/use-audio';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text, YStack } from 'tamagui';

export default function StartScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { playMusic } = useBackgroundMusic();

  useEffect(() => {
    playMusic()
  }, [])

  return (
    <View style={styles.container}>
      {/* Full screen background image */}
      <Image
        source={require('@/assets/images/home-screen.jpg')}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
      />
      
      {/* Buttons at the bottom */}
      <YStack 
        flex={1} 
        justifyContent="flex-end" 
        padding="$4"
        paddingBottom={insets.bottom + 40}
      >
        <YStack gap="$3" width="100%" alignItems="center">
          <Button
            size="$5"
            width={280}
            backgroundColor="rgba(139, 69, 19, 0.9)"
            pressStyle={{ backgroundColor: 'rgba(160, 82, 45, 0.95)' }}
            borderWidth={3}
            borderColor="#2D1810"
            onPress={() => router.push('/game')}
          >
            <Text color="white" fontWeight="bold" fontSize={20} fontFamily="Jersey10">
              🍰 NOWA GRA
            </Text>
          </Button>
          
          <Button
            size="$5"
            width={280}
            backgroundColor="rgba(205, 133, 63, 0.9)"
            pressStyle={{ backgroundColor: 'rgba(139, 69, 19, 0.95)' }}
            borderWidth={3}
            borderColor="#2D1810"
            onPress={() => router.push('/game')}
          >
            <Text color="white" fontWeight="bold" fontSize={20} fontFamily="Jersey10">
              ▶️ KONTYNUUJ
            </Text>
          </Button>
        </YStack>
      </YStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});