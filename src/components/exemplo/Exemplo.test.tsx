import { render, screen } from '@testing-library/react'
import { Exemplo } from './Exemplo'

describe('<Exemplo/>', () => {
  it('should render correctly', () => {
    const { container } = render(<Exemplo />)

    expect(
      screen.getByRole('heading', { name: /Mauricio/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
