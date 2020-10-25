import React from 'react'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { PatientQuestionnaireScreenProps } from '../../types/navigation'
import { QuestionnaireForm } from './forms/Questionnaire'
import { useQuestionnaireStore } from './storeHooks/useQuestionnaireStore'

const Screen: React.FC<PatientQuestionnaireScreenProps> = ({
  navigation
}) => {
  const [questionnaireStore, questionnaireActions, questionnaireProps] = useQuestionnaireStore(null)

  return (
    <Container
      headerProps={{
        title: Tree.P__QuestionnaireBranch.QuestionnaireFetus.title,
        enableMenuButton: true,
        navigation
      }}
      scrollable='avoiding'
      avoidingProps={{
        scrollviewProps: {
          style: { width: '90%' }
        }
      }}
    >
      <QuestionnaireForm
        values={questionnaireStore}
        actions={questionnaireActions}
        props={questionnaireProps}
        onValidPress={() => {}}
      />
    </Container>
  )
}

export default Screen