import React from 'react'
import userConfig from '../../data/user-config'
import { useColorMode } from '../../hooks'
import getAsset from '../../utils/get-asset'
import { Wrapper, LogoImage } from './logo.styled'

export default function Logo () {
  const logoImage = useColorMode({
    light: userConfig?.logo?.light,
    dark: userConfig?.logo?.dark
  }) as string

  return (
    <Wrapper>
      {logoImage ? (
        <LogoImage
          src={getAsset(logoImage)}
          alt={userConfig.name}
          title={userConfig.name}
        />
      ) : (
        userConfig.name || 'Your logo here'
      )}
    </Wrapper>
  )
}
