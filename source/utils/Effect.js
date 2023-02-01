import React, { useState, useEffect, useRef } from 'react';


// debunce effect

export const useDebunceEffect = (effect, deps, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay)
        return () => clearTimeout(handler);
    }, [...deps || [], delay])
}
