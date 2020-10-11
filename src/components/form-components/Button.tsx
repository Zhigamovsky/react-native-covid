import React from 'react'

import { Button as NativeButton } from 'react-native-elements'
import { SheetFONT } from '../../utils'
import { ButtonProps } from './types'
import { StyleSheet } from 'react-native'
import { ButtonDefaultValue, ButtonTypes } from './_static'

export const Button: React.FC<ButtonProps> = ({
  mode = 'outline-dark',
  title,
  nativeProps = {},
  onPress
}) => (
  <NativeButton
    { ...{ title, onPress }}
    type={ButtonTypes[mode].type}
    titleStyle={[styles.title, SheetFONT('Bold', 14, ButtonTypes[mode].fontColor)]}
    buttonStyle={[styles.button, {
      borderColor: ButtonTypes[mode].borderColor,
      backgroundColor: ButtonTypes[mode].backgroundColor
    }]}
    containerStyle={styles.container}
    {...nativeProps}
  />
)

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    textTransform: 'uppercase'
  },
  button: {
    height: ButtonDefaultValue.height,
    borderRadius: ButtonDefaultValue.radius,
    borderWidth: ButtonDefaultValue.borderWidth,
  }
})