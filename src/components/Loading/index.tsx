import React from 'react'
import * as S from './styles'
import LottieView from 'lottie-react-native'

export default function Loading(){
    return (
        <S.LoadingContainer >
            <LottieView 
                source={require('../../assets/loading.json')}
                loop
                autoPlay
                speed={1.4}
            />
        </S.LoadingContainer>
    )
}