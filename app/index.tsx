import { useBackgroundMusic } from '@/hooks/use-audio';
import { LinearGradient } from '@tamagui/linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, YStack } from 'tamagui';

export default function StartScreen() {
  const router = useRouter();

  const { playMusic } = useBackgroundMusic();

  useEffect(() => {
    playMusic()
  }, [])


  return (
    <LinearGradient
      colors={['#FFF5E6', '#FFE4CC', '#FFDAB3']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1} alignItems="center" justifyContent="center" gap="$6" padding="$4">
          {/* Logo/Tytuł */}
          <Text fontSize={60}>🎂</Text>
          <Text 
            fontSize={42} 
            fontWeight="bold" 
            color="#8B4513"
            textAlign="center"
          >
            Tort Clicker
          </Text>
          <Text fontSize={18} color="#A0522D" textAlign="center">
            Zbuduj swoje cukiernicze imperium!
          </Text>

          {/* Przyciski */}
          <YStack gap="$3" width="100%" maxWidth={280} marginTop="$8">
            <Button
              size="$5"
              backgroundColor="#D2691E"
              pressStyle={{ backgroundColor: '#A0522D' }}
              onPress={() => router.push('/game')}
            >
              <Text color="white" fontWeight="bold" fontSize={18}>
                🍰 Nowa Gra
              </Text>
            </Button>
            
            <Button
              size="$5"
              backgroundColor="#CD853F"
              pressStyle={{ backgroundColor: '#8B4513' }}
              onPress={() => router.push('/game')}
            >
              <Text color="white" fontWeight="bold" fontSize={18}>
                ▶️ Kontynuuj
              </Text>
            </Button>
          </YStack>
        </YStack>
      </SafeAreaView>
    </LinearGradient>
  );
}