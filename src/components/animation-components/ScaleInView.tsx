import React, { useState, useEffect} from 'react'
import { Animated, Easing, TouchableOpacity } from 'react-native'

import { AnimationEffect, ScaleInAnimationState, ScaleInViewProps } from './types'

export const ScaleInView: React.FC<ScaleInViewProps> = ({
  timing = 1000,
  onPress = null,
  children
}) => {
  const [animation] = useState<ScaleInAnimationState>({
    scale: new Animated.Value(.5),
    radius: new Animated.Value(100),
    opacity: new Animated.Value(0)
  })

  const startCustomAnimation: AnimationEffect = (
    toValue, value, 
    duration = timing, 
    easing = Easing.bounce
  ) => {
    Animated.timing(
      value, {
        toValue,
        duration,
        easing,
        useNativeDriver: true
      }
    ).start()
  }

  const AnimationEvents = {
    showAll: (delay?: number) => {
      // setTimeout(() => {
        startCustomAnimation(10, animation.radius)
        startCustomAnimation(1, animation.scale)
        startCustomAnimation(1, animation.opacity)
      // }, (delay || 0))
    },
    pressInRounde: () => {
      startCustomAnimation(30, animation.radius, timing / 3)
      startCustomAnimation(0.9, animation.scale, timing / 3)
    },
    pressOutRoude: () => {
      startCustomAnimation(10, animation.radius, timing / 5, Easing.elastic(0.5))
      startCustomAnimation(1, animation.scale, timing / 4, Easing.elastic(0.5))
    }
  }

  useEffect(() => {
    AnimationEvents.showAll()
  }, [])
  
  return (
    <Animated.View 
      style={{
        transform: [{
          scale: animation.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          })
        }],
      }}
    >
      {
        onPress ? (
          <TouchableOpacity
            onPressIn={AnimationEvents.pressInRounde}
            onPressOut={AnimationEvents.pressOutRoude}
            onPress={onPress}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        ) : children
      }
    </Animated.View>
  )
}

