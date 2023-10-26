import { StyleSheet } from 'react-native';
import colors from './colors';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground,
        alignItems: 'center',
    },
});

export default GlobalStyles;