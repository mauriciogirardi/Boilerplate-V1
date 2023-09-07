import { styled } from 'styled-components'

export const ContainerExemplo = styled.main`
  background-color: ${({ theme }) => theme.colors['blue-900']};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1.5rem;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Description = styled.h2`
  font-weight: 400;
  font-size: 1rem;
`

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
