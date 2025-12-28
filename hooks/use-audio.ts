import { Audio } from 'expo-av';
import { useEffect, useRef } from "react";


export function useBackgroundMusic() {
    const soundRef = useRef<Audio.Sound | null>(null)

    useEffect(() => {
        Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,        // Gra nawet w trybie cichym
            staysActiveInBackground: false,    // Czy grać w tle
            shouldDuckAndroid: true,           // Ścisza inne aplikacje na Android
        });

        // Cleanup
        return () => {
            soundRef.current?.unloadAsync();
        };
    }, []);
    
    const playMusic = async () => {
        if(soundRef.current){
            await soundRef.current.playAsync()
            return
        }

        const {sound} = await Audio.Sound.createAsync(
            require('@/assets/audio/background-1.mp3'),
            {isLooping: true, 
                volume: 0.5
            }
        )

        soundRef.current = sound;
        await sound.playAsync();
    }


    return { playMusic };

}