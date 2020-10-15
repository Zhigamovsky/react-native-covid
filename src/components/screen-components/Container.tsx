import React from 'react'
import styled from 'styled-components/native'

import { ContainerPageProps } from './types'
import { FLEX, COLORS } from '../../utils'
import Header from './Header'
import AvoidingKeyboard from './AvoidingKeyboard'

const Container: React.FC<ContainerPageProps> = ({
  scrollable = 'none',
  background = COLORS.background,
  children,
  containerStyle = {},
  scrollviewStyle = {},
  containerScrollviewStyle = {},
  headerProps = null,
  avoidingProps = {}
}) => (
  <>
    { headerProps && <Header {...headerProps} /> }
    <SafeView 
      background={background} 
      style={containerStyle}
      headerExist={!!headerProps}
    >
    {
      scrollable === 'scrollview' ? (
        <SafeScrollView
          style={scrollviewStyle}
          contentContainerStyle={containerScrollviewStyle}
        >
          {children}
        </SafeScrollView>
      ) : scrollable === 'avoiding' ? (
        <AvoidingKeyboard {...avoidingProps}>
          {children}
        </AvoidingKeyboard>
      ) : children
    }
    </SafeView>
  </>
)

const SafeView = styled.SafeAreaView<{
  background: string,
  headerExist: boolean
}>`
  flex: 1;
  ${FLEX('column', 'center', 'flex-start')}
  ${({background}) => `background-color: ${background};`}
  ${({headerExist}) => headerExist ? `
    border: 0px solid ${COLORS.secondary};
    border-top-width: 2px;
  ` : `
    
  `}
`

const SafeScrollView = styled.ScrollView`
  width: 100%;
`

export default Container;