import React from 'react'
import styled from 'styled-components/native'
import NativeCheckbox from '@react-native-community/checkbox'
import { StyleSheet } from 'react-native'

import { CheckboxProps } from './types'

import { COLORS, FLEX } from '../../utils'
import { Label } from '../styled-components'

export const Checkbox: React.FC<CheckboxProps> = ({
  label = null,
  value,
  onValueChange
}) => (
  <Container>
    {label && <Label inlineStyle='width: 85%;'>{label}</Label>}
    <NativeCheckbox
      disabled={false}
      value={value}
      style={styles.checkbox}
      lineWidth={2}
      tintColors={{
        true: COLORS.elements,
        false: COLORS.main
      }}
      onTintColor={COLORS.elements}
      onCheckColor={COLORS.elements}
      onValueChange={onValueChange}
    />
  </Container>
)

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 25,
  }
})

const Container = styled.View`
  ${FLEX('row', 'center', 'space-between', 'wrap')}
  width: 100%;
`