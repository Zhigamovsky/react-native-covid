import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import SegmentedControl from '@react-native-community/segmented-control'

import { SegmentsProps } from './types'
import { COLORS, SheetFONT } from '../../utils'
import { Label } from '../styled-components'

export const Segments: React.FC<SegmentsProps> = ({
  values,
  activeIndex,
  onChangeIndex,
  backgroundColor = 'transparent',//COLORS.background,
  label = null
}) => (
  <>
    { label && <Label>{label}</Label> }
    <SegmentedControl
      style={[segmentStyle, { backgroundColor }]}
      fontStyle={fontStyle}
      activeFontStyle={activeFontStyle}
      backgroundColor={backgroundColor}
      tintColor={COLORS.segments}
      values={values}
      selectedIndex={activeIndex}
      onChange={(event) => onChangeIndex(event.nativeEvent.selectedSegmentIndex)}
    />
  </>
)

const {
  activeFontStyle,
  fontStyle,
  segmentStyle
} = StyleSheet.create({
  activeFontStyle: SheetFONT('Bold', 16, COLORS.background),
  fontStyle: SheetFONT('Bold', 16, COLORS.segments),
  segmentStyle: {
    height: 40,
    width: '100%',
    backgroundColor: COLORS.background,
    padding: 0,
    margin: 0
  }
})