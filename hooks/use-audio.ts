import { AudioModule, useAudioPlayer } from 'expo-audio';
import { useEffect } from 'react';

const backgroundMusic = require('@/assets/audio/background-1.mp3');

export function useBackgroundMusic() {
    const player = useAudioPlayer(backgroundMusic);

        // Konfiguracja audio dla iOS - graj w silent mode
        useEffect(() => {
            AudioModule.setAudioModeAsync({
                playsInSilentMode: true,  // 🔑 Kluczowe dla iOS
            });
        }, []);
    

    const playMusic = () => {
        player.loop = true;
        player.volume = 0.5;
        player.play();
    };

    const pauseMusic = () => {
        player.pause();
    };

    const toggleMusic = () => {
        if (player.playing) {
            player.pause();
        } else {
            player.play();
        }
    };

    return { playMusic, pauseMusic, toggleMusic, isPlaying: player.playing };
}