import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native'
import styled from 'styled-components/native'

import { Divider } from '../../components/form-components'
import { InfiniteLoader, RefreshLoader } from '../../components/loaders-components'
import { Container} from '../../components/screen-components'
import { FadeInView, ScaleInView } from '../../components/animation-components'
import { Tree } from '../../config'
import { $DSPatientsList } from '../../config/datasets/datasets.debug-patients-list'
import { ELoaders } from '../../config/enums/enum.loaders'
import { PatientEntity } from '../../types/entities/patient'
import { DoctorGeneralScreenProps } from '../../types/navigation'
import { IndicatorEvents } from '../../types/utils/loaders'
import { FONT, Log } from '../../utils'
import { PatientItem } from './components'
import { PaggerState } from './types'

const LIMIT: number = 7

const Screen: React.FC<DoctorGeneralScreenProps> = ({
  navigation
}) => {
  const [isEndReachedMomentum, toggleEndReachedMomentum] = useState<boolean>(true)
  const [isPTR, togglePTR] = useState<boolean>(false)
  const [isISL, toggleISL] = useState<boolean>(false)
  const [isBLI, toggleBLI] = useState<boolean>(false)

  const Indicators: IndicatorEvents = {
    [ELoaders.PTR]: {
      slug: ELoaders.PTR,
      show: () => togglePTR(true),
      hide: () => togglePTR(false)
    },
    [ELoaders.BLI]: {
      slug: ELoaders.BLI,
      show: () => toggleBLI(true),
      hide: () => toggleBLI(false)
    },
    [ELoaders.ISL]: {
      slug: ELoaders.ISL,
      show: () => toggleISL(true),
      hide: () => toggleISL(false)
    },
  }

  const [patientList, setPatientList] = useState<PatientEntity[]>([])
  const [pagger, changePagger] = useState<PaggerState>({
    page: 1,
    isEnd: false
  })


  const Queries = {
    getInitialPatients: () => {
      Queries.forceGetPatients(ELoaders.BLI)
    },
    getRefreshedPatients: () => {
      Queries.forceGetPatients(ELoaders.PTR)
    },
    getAdditionalPatients: () => {
      if(!isEndReachedMomentum) {
        Queries.forceGetPatients(ELoaders.ISL, pagger.page + 1)
        toggleEndReachedMomentum(true);
      }
    },
    async getPatientsQuery (page: number, limit = LIMIT) {
      return new Promise<Array<PatientEntity>>((resolve, reject) => {
        const resolver = () => resolve($DSPatientsList.slice(page * limit, page * limit + limit))
        setTimeout(resolver, 1000)
      })
    },
    async forceGetPatients(indicator: ELoaders, nextPage?: number) {
      if(nextPage && pagger.isEnd) return
      changePagger({
        page: nextPage || 1,
        isEnd: false
      })
      try {
        Indicators[indicator].show();
        let data = await Queries.getPatientsQuery(nextPage ? nextPage - 1 : 0)
        changePagger({
          page: nextPage || 1,
          isEnd: !(data.length === LIMIT)
        });
        setPatientList(nextPage ? [...patientList, ...data] : data);
      }
      catch(e) {}
      finally {
        Indicators[indicator].hide();
      }
    },
  }

  const PressEvents = {
    openPatient: (patientData: PatientEntity) => {
      Log.event('onPress():', patientData)
    }
  }

  const RenderEvents = {
    renderListEmpty: () => {
      if(isBLI) {
        return (
          <FadeInView key='top-loader'>
            <InfiniteLoader />
          </FadeInView>
        )
      }
      else if(!patientList.length){
        return (
          <FadeInView key='empty-message'>
            <Message>Your patient list is empty</Message>
          </FadeInView>
        )
      }
      else return null
    },
    renderPatientItem: (data: ListRenderItemInfo<PatientEntity>) => (
      <ScaleInView key={data.item._id} onPress={() => PressEvents.openPatient(data.item)}>
        <PatientItem
          patientData={data.item}
          onPress={() => {}}
          index={data.index}
        />
      </ScaleInView>
    ),
    renderDivider: () => <Divider height={10} />,
    renderInfinityLoader: () => (
      (isISL && (
        <FadeInView key='bottom-loader'>
          <InfiniteLoader />
        </FadeInView>
      )) || null
    )
  }
  
  useEffect(() => {
    Queries.getInitialPatients()
  }, [])

  return (
    <Container
      headerProps={{
        title: Tree.D__GeneralBranch.GeneralFetus.title,
        enableMenuButton: true,
        navigation
      }}
      containerStyle={styles.container}
    >
      <FlatList 
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        refreshControl={
          <RefreshLoader 
            refreshing={isPTR}
            onRefresh={Queries.getRefreshedPatients}
          />
        }
        data={patientList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderEvents.renderPatientItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={RenderEvents.renderDivider}
        ListEmptyComponent={RenderEvents.renderListEmpty}
        ListFooterComponent={RenderEvents.renderInfinityLoader}
        onMomentumScrollBegin={() => toggleEndReachedMomentum(false)}
        onEndReached={Queries.getAdditionalPatients}
        onEndReachedThreshold={1}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  flatlistContainer: {
    justifyContent: 'center',
    paddingBottom: 25,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: '5%',
  },
  flatlist: {
    // backgroundColor: 'lightgrey',
    paddingTop: 15,
    flex: 1
  }
})

const Message = styled.Text`
  text-align: center;
  ${FONT('Bold', 15)}
`

export default Screen