import React from 'react';
import { THEMES } from '../Posts/constants'
export const ThemeContext = React.createContext({ theme: THEMES.dark || THEMES.light, handleLightTheme: () => { }, handleDarkTheme: () => { } })