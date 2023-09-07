import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global'
import { dark } from '../src/styles/themes/dark'

const withStateProviders = (storyFn:  () => React.ReactNode) => (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
)

export default  withStateProviders
