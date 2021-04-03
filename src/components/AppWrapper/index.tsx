import React from 'react'
import { AppWrapperProps } from '../../typescript/types'
import * as S from './styles'

export function AppWrapper({children}: AppWrapperProps){
    return (
        <S.AppWrapperContainer>
            {children}
        </S.AppWrapperContainer>
    )
}

export function SearchWrapper({children}: AppWrapperProps){
    return (
        <S.SearchPageWrapperContainer>
            {children}
        </S.SearchPageWrapperContainer>
    )
}