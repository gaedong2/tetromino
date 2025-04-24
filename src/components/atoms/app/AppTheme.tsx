import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useDarkMode } from '../../particles/hooks/useDarkMode';

export const AppTheme: FC<PropsWithChildren> = ({ children }) => {
    const { isDarkMode } = useDarkMode(); // useDarkMode가 상태를 반환한다고 가정

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
