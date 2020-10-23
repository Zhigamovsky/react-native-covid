import { Animated, EasingFunction, ViewStyle } from "react-native"

export interface FadeInViewProps {
  style?: ViewStyle, 
  duration?: number, 
  state?: {
    /**
     * Fade in from 0 to 1
     */
    from: number, 
    to: number 
  }
}

export interface ScaleInViewProps {
  timing?: number,
  onPress?: () => void
}


export interface AnimationEffect {
  (
    toValue: number, 
    value: Animated.Value, 
    duration?: number, 
    easing?: EasingFunction
  ): void
}

export interface ScaleInAnimationState {
  scale: Animated.Value,
  radius: Animated.Value,
  opacity: Animated.Value
}