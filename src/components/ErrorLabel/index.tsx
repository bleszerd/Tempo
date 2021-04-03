import React from 'react'
import * as S from './styles'
import { ErrorLabelProps } from '../../typescript/types'

export default function ErrorLabel({ text }: ErrorLabelProps) {
    return (
        <S.ErrorLabelContainer>
            <S.ErrorText>{text}</S.ErrorText>
        </S.ErrorLabelContainer>
    )
}