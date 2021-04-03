import React from 'react'
import { SearchSearchBoxProps } from '../../typescript/types'
import * as S from './styles'
import {Feather} from '@expo/vector-icons'

export default function SearchSearchBox({inputValue, dispatch, onPress}: SearchSearchBoxProps) {
    return (
        <S.SearchSearchBoxContainer>
            <S.SearchInput
                value={inputValue}
                onChangeText={(value) => dispatch(value)}
                placeholder="Ex: Ribeirão Preto, SP"
            />
            <S.SearchButton>
                <S.SearchIconButton onPress={onPress}>
                    <Feather
                        name="search"
                        size={22}
                        color="#fff"
                    />

                </S.SearchIconButton>
            </S.SearchButton>
        </S.SearchSearchBoxContainer>
    )
}