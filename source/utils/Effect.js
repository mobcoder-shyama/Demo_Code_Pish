import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';


// debunce effect

export const useDebunceEffect = (effect, deps, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay)
        return () => clearTimeout(handler);
    }, [...deps || [], delay])
}


export const addIdentifier = (id) => {
    return Platform.OS === 'android'
        ? { accessible: true, accessibilityLabel: id, nativeID: id }
        : { testID: id, nativeID: id, accessible: true }
}
