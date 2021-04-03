import styled from "styled-components/native"

export const SearchSearchBoxContainer = styled.View`
    align-items: center;
    flex-direction: row;
    background-color: ${({theme}) => `${theme.colors.white}`};
    width: 90%;
    height: 50px;
    border-radius: 8px;
`

export const SearchInput = styled.TextInput`
    width: 85%;
    height: 50px;
    background-color: ${({theme}) => `${theme.colors.white}`};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-horizontal: 7px;
    align-items: center;
    justify-content: center;
`

export const SearchButton = styled.View`
    width: 15%;
`

export const SearchIconButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => `${theme.colors.lightBlue}`};
    height: 50px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`