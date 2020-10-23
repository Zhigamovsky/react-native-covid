import { ELoaders } from "../../config/enums/enum.loaders"

export type IndicatorEvents = {
  [indicator in ELoaders]: {
    slug: ELoaders,
    show: () => void,
    hide: () => void
  }
}