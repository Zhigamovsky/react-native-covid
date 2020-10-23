import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { FadeInViewProps } from './types'

export const FadeInView: React.FC<FadeInViewProps> = ({
  style = {}, 
  children = null, 
  duration = 500, 
  state = {
    from: 0, 
    to: 1
  }
}) => {
  const [fadeAnim] = useState(new Animated.Value(state.from));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: state.to,
        duration: duration,
        useNativeDriver: true
      }
    ).start();
  }, [])

  return (
    <Animated.View                 
      style={{
        opacity: fadeAnim,
        width: '100%',
        ...style
      }}
    >
      {children}
    </Animated.View>
  );
}
