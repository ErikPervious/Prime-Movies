import React from 'react';
import { BackButton, Name } from './styles';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export function ModalLink({link, title, closeModal}) {
  return(
    <>
      <BackButton activeOpacity={0.7} onPress={() => closeModal()}>
        <Feather name="x" size={35} color={colors.white} />
        <Name numberOfLines={1}>{title}</Name>
      </BackButton>
      <WebView
        source={{uri: link}}
      />
    </>
  )
}