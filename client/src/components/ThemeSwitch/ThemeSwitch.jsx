import { useMemo } from 'react';

import { Switch, styled, useTheme } from '@mui/material';

const sunIcon = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
    <path fill="#FDB813" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/>
  </svg>`);

const moonIcon = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'>
    <path fill='#FFD700' d='M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z'/>
  </svg>`);

const getThemeColors = (mode) => ({
    thumbColor: mode === 'dark' ? '#333' : '#fff',
    trackColor: mode === 'dark' ? '#8796A5' : '#aab4be',
});

export const ThemeSwitch = (props) => {
    const theme = useTheme();
    const themeColors = useMemo(() => getThemeColors(theme.palette.mode), [theme.palette.mode]);

    const CustomSwitch = useMemo(() => styled(Switch)(() => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url("data:image/svg+xml;utf8,${moonIcon}")`,
                },
                '& + .MuiSwitch-track': {
                    backgroundColor: themeColors.trackColor,
                    opacity: 1,
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: themeColors.thumbColor,
            width: 32,
            height: 32,
            '&::before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url("data:image/svg+xml;utf8,${sunIcon}")`,
            },
        },
        '& .MuiSwitch-track': {
            borderRadius: 10,
            backgroundColor: themeColors.trackColor,
            opacity: 1,
        },
    })), [themeColors]);

    return <CustomSwitch {...props} />;
};
