import React from 'react'
import * as S from './styles'
import {Feather} from '@expo/vector-icons'

import { SearchBackButtonHeaderProps } from '../../typescript/types'

export default function SearchBackButtonHeader({onPress} : SearchBackButtonHeaderProps) {
    return (
        <S.SearchBackButtonHeaderContainer>
            {/* () => navigation.navigate('Home') */}
            <S.BackButton onPress={onPress}>
                <Feather
                    name="chevron-left"
                    size={32}
                    color="#000"
                />
                <S.ButtonText style={{ fontSize: 22 }}>Voltar</S.ButtonText>
            </S.BackButton>
        </S.SearchBackButtonHeaderContainer>
    )
}