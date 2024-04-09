// App.tsx
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export let fonteCarregada = false; // Definindo a variável global

export function FontsLoad() {

    useEffect(() => {
        async function carregarFontes() {
            await Font.loadAsync({
                'Courgette-Regular': require('../assets/fonts/Courgette-Regular.ttf'),
            });
            fonteCarregada = true;
        }

        carregarFontes();
        console.log('Rodou fonts load');
    }, []);


    return null;
};
