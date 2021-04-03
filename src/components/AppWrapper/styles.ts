import styled from "styled-components/native";

export const AppWrapperContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => `${theme.colors.concrete}`};
    padding-top: 5%;
`

export const SearchPageWrapperContainer = styled.SafeAreaView`
    flex: 1;
    padding-top: 10%;
    background-color: ${({theme}) => `${theme.colors.concrete}`};
    align-items: center;
`
