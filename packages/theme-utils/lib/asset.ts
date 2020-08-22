import { useContext } from 'react'
import { EssentialsContext } from './essentials'

export function useAsset (assetKey: string) {
  const { getAsset } = useContext(EssentialsContext)
  return getAsset(assetKey)
}
