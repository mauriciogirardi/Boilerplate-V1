import { render, screen } from '../../../utils/wrapRender'
import { Exemplo } from '../Exemplo'

describe('Component Exemplo', () => {
  it('should render correctly', () => {
    render(<Exemplo />)

    expect(
      screen.getByRole('heading', { name: /Exemplo/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
