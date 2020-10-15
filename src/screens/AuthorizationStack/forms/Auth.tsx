import React from 'react'
import styled from 'styled-components/native'
import { Button, Divider, Input } from '../../../components/form-components'

import { AuthFormProps } from './types'

export const AuthForm: React.FC<AuthFormProps> = ({
  values,
  onValidPress,
  actions,
  props
}) => {

  const validation = async () => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  const _onValidPress = async () => {
    try {
      await validation()
      onValidPress()
    }
    catch(e) {
      
    }
  }

  return (
    <>
      <Divider />
      <Input 
        label='Login'
        value={values.login}
        placeholder='Enter your login...'
        onValueChange={actions.changeLogin}
      />
      <Input 
        label='Password'
        value={values.password}
        placeholder='Enter your password...'
        onValueChange={actions.changePassword}
        nativeProps={{
          secureTextEntry: true
        }}
      />
      <Divider />
      <Button 
        mode='solid-blue'
        title={`Log in as a ${props.accountType}`} 
        onPress={_onValidPress} 
      />
    </>
  )
}