import { render, screen } from '../../../utils/wrapRender'
import { Exemplo } from '../Exemplo'

describe('<Exemplo/>', () => {
  it('should render correctly', () => {
    const { container } = render(<Exemplo />)

    expect(
      screen.getByRole('heading', { name: /Boilerplate V1/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Exemplo />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092B;' })
  })
})
