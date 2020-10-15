import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, TextInput } from 'react-native'

import { TextInputProps } from './types'
import { Label } from '../styled-components'
import { COLORS, SheetFLEX, SheetFONT } from '../../utils'

export const Input: React.FC<TextInputProps> = ({
  label = null,
  value,
  onValueChange,
  placeholder,
  nativeProps = {}
}) => {
  return (
    <>
      { label && <Label>{label}</Label>}
      <TextInput 
        {...{ value, placeholder }}
        {...nativeProps}
        onChangeText={onValueChange}
        style={[styles.text, styles.container]}
        placeholderTextColor={COLORS.statusbar}
      />
    </>
  )
}

export const styles = StyleSheet.create({
  text: SheetFONT('Regular', 15),
  container: {
    backgroundColor: 'white',
    margin: 0,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 10,
    borderColor: COLORS.segments,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5
  }
})