import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { RootNavigation } from './src/navigation'
import ContextCollector from './src/contexts/context-collector'

/**
 * Hide all console.log in release build
 * @call Log.setEnvironmentRelease(); 
 */

AppRegistry.registerComponent(appName, () => {
  return (
    () => (
      <ContextCollector>
        <RootNavigation />
      </ContextCollector>
    )
  )
})