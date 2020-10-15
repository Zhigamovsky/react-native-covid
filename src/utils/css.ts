import { Dimensions, ScaledSize } from 'react-native';
export const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);
export const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);

type TDimenstions = {
  screen: ScaledSize,
  window: ScaledSize
}
export const DIMENSIONS: TDimenstions = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window')
}

export const FontFamily: string = 'Comfortaa'

export type FontVariants = 
  'Bold' |
  'Light' | 
  'Medium' |  
  'Regular' |
  'SemiBold' 
; 

export interface FontConstructor<T> {
  (
    type?: FontVariants,
    size?: number,
    color?: string
  ): T
}

export const FONT: FontConstructor<string> = (type = 'Regular', size = 20, color = '#000000') => {
  return `
    font-family: '${FontFamily}-${type}';
    font-size: ${size}px;
    color: ${color};
  `;
}

export const SheetFONT: FontConstructor<object> = (type = 'Regular', fontSize = 20, color = '#000000') => {
  return {
    fontFamily: `${FontFamily}-${type}`,
    fontSize,
    color
  }
}

export type FlexDirectionVariants = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexAlignVariants = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
export type FlexJustifyVariants = 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end';
export type FlexWrapVariants = 'wrap' | 'nowrap';

export interface FlexConstructor<T> {
  (
    direction?: FlexDirectionVariants,
    align?: FlexAlignVariants,
    justify?: FlexJustifyVariants,
    wrap?: FlexWrapVariants
  ): T
}

export const FLEX: FlexConstructor<string> = (direction = 'row', align = 'center', justify = 'center', wrap = 'nowrap') => {
  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `;
}

export const SheetFLEX: FlexConstructor<object> = (flexDirection = 'row', alignItems = 'center', justifyContent = 'center', flexWrap = 'nowrap') => {
  return {
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap
  }
}

interface ResponsibleOnePartyAction {
  ( 
    pxTo: number 
  ): boolean
}
interface ResponsibleMultiPartyAction {
  ( 
    pxFrom: number,
    pxTo: number
  ): boolean
}
type DeviceSelector = boolean;

const _oneParty: ResponsibleOnePartyAction = pxTo => (Math.round(Dimensions.get('window').width) <= pxTo);
const _multiParty: ResponsibleMultiPartyAction = (from, to) => {
  let height = Math.round(Dimensions.get('screen').height);
  return ((height <= to) && (height >= from))
}
export const isDeviceS: DeviceSelector = (_oneParty(360) && _multiParty(0, 664)) || _oneParty(320) ? true : false;
export const isDeviceM: DeviceSelector = _multiParty(667, 736) ? true : false;

type DeviceSizeProps = {
  s: boolean,
  m: boolean,
  select: DeviceSizeSelectProps
}

interface DeviceSizeSelectProps {
  (size: {
    s?: any,
    m?: any,
    _default?: any
  }): any
}

export const isDeviceSize: DeviceSizeProps = {
  s: isDeviceS,
  m: isDeviceM,
  select: ({
    s = null, m = null, _default = null
  }) => {
    if(isDeviceS && s) return s;
    else if(isDeviceM && m) return m;
    else return _default
  }
}

export const COLORS = {
  main: '#353535',//'#4fab9e',//'#4fab9e',
  mainFont: '#FFFFFF',
  secondary: '#353535',//'#a84c60',
  secondaryFont: '#FFFFFF',
  thirdparty: '#353535',//'#edf2fb',
  thirdpartyFont: '#FFFFFF',
  fourthparty: '#4c53a8',
  fifthparty: '#723d46',
  statusbar: '#999999',
  background: '#d1eeff',
  segments: '#42aaff',
  elements: '#0071cc'
}

//   main: '#0071cc',
//   secondary: '#85caff',
//   background: '#d1eeff',
//   statusbar: '#42aaff'