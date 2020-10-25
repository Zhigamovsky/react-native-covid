import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BottomSheet, ListItem } from 'react-native-elements'
import { Platform, StyleSheet } from 'react-native'

import { ListPickerProps, ListPickerValue } from './types'

import { Label } from '../styled-components'
import { COLORS, FLEX, FONT, SheetFONT } from '../../utils'

export const ListPicker: React.FC<ListPickerProps> = ({
  label = null,
  value = null,
  listValue = [],
  onPickValue = () => {},
  placeholder = ''
}) => {
  const [isVisibleSheet, toggleVisibleSheet] = useState<boolean>(false)
  const [sheetList, setSheetList] = useState<ListPickerValue[]>([])

  const VisibilityEvents = {
    show: () => toggleVisibleSheet(true),
    hide: () => toggleVisibleSheet(false)
  }

  const PickEvents = {
    pick: (element: ListPickerValue) => {
      VisibilityEvents.hide()
      onPickValue(element)
    }
  }

  const parseAndSetList = () => {
    const list: ListPickerValue[] = listValue.map(element => ({
      ...element,
      titleStyle: styles.itemTitle,
      containerStyle: styles.itemContainer,
      onPress: PickEvents.pick.bind(this, element)
    }))
    list.push({
      title: 'Cancel',
      slug: 'cancel',
      containerStyle: styles.cancelContainer,
      titleStyle: styles.cancelTitle,
      onPress: VisibilityEvents.hide
    })
    setSheetList(list)
  }

  const RenderEvents = {
    renderItem: (element: ListPickerValue) => (
      <ListItem key={element.slug} containerStyle={element.containerStyle} onPress={element.onPress}>
        <ListItem.Content>
          <ListItem.Title style={element.titleStyle}>{element.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ),
    renderIcon: () => (
      <Ionicons 
        name='caret-down' 
        size={22} 
        color='white' 
      />
    ),
    renderContent: () => (
      <>
        {
          value ? 
            (
              <SelectedContainer>
                <SelectedItem>{value.title}</SelectedItem>
              </SelectedContainer>
            ) : <Placeholder>{placeholder}</Placeholder>
        }
        { RenderEvents.renderIcon() }
      </>
    )
  }

  useEffect(() => {
    parseAndSetList()
  }, [listValue])

  return (
    <>
      { label && <Label>{label}</Label> }
      <TouchContainer
        onPress={VisibilityEvents.show}
      >
        { RenderEvents.renderContent() }
      </TouchContainer>
      <BottomSheet 
        isVisible={isVisibleSheet}
        modalProps={{}}
      >
        { isVisibleSheet && sheetList.map(RenderEvents.renderItem) }
        </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  itemTitle: SheetFONT('Bold', 15, COLORS.main),
  cancelContainer: {
    backgroundColor: COLORS.background
  },
  cancelTitle: SheetFONT('Bold', 15, COLORS.main)
})

const TouchContainer = styled.TouchableOpacity`
  background: ${COLORS.segments};
  border: 1px solid ${COLORS.elements};
  border-radius: 10px;
  height: 40px;
  ${FLEX('row', 'center', 'space-between')}
  padding: 10px;
`

const Placeholder = styled.Text`
  ${FONT('Bold', 15, 'white')}
`

const SelectedItem = styled.Text`
  ${FONT('Bold', 14, COLORS.elements)}
  ${Platform.OS === 'android' ? `margin-top: -5px;` : ''}
`

const SelectedContainer = styled.View`
  background: white;
  padding: 5px;
  margin-right: -15px;
  height: 25px;
  border-radius: 10px;
`