import 'styled-components'
import { dark } from 'styles/themes/dark'

type DarkThemeProps = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeProps {}
}
