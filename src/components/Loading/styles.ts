import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components'

export const LoadingContainer = styled(LinearGradient).attrs(({theme}) => ({
    colors: [theme.colors.lightBlue, theme.colors.white],

}))`
    flex: 1;
`