import React, { useState } from 'react'
import styled from 'styled-components/native'
import NativeAccordion from 'react-native-collapsible/Accordion'

import { AccordionProps, AccordionRenderProps } from './types'

const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];

export const Accordion: React.FC<AccordionProps> = ({
  
}) => {
  const [activeSections, changeActiveSections] = useState<number[]>([])

//   const RenderEvents = {
//     _renderSectionTitle: (section: AccordionRenderProps ) => {
//         return (
//           <View style={styles.content}>
//             <Text>{section.content}</Text>
//           </View>
//         );
//       };
    
//       _renderHeader: (section: AccordionRenderProps) => {
//         return (
//           <View style={styles.header}>
//             <Text style={styles.headerText}>{section.title}</Text>
//           </View>
//         );
//       };
    
//       _renderContent: (section: AccordionRenderProps) => {
//         return (
//           <View style={styles.content}>
//             <Text>{section.content}</Text>
//           </View>
//         );
//       };
//   }

  return (
    <Container>
      {/* <NativeAccordion 
        sections={SECTIONS}
        activeSections={activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={changeActiveSections}
      /> */}
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
`