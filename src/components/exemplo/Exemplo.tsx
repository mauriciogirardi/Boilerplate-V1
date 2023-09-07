import * as S from './Exemplo.styles'

export function Exemplo({
  title = 'Boilerplate V1',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) {
  return (
    <S.ContainerExemplo>
      <S.Title>
        <S.Logo
          src="/img/icon-192.png"
          alt="Image of an atom and boilerplate version 1"
        />
        {title}
      </S.Title>
      <S.Description>{description}</S.Description>

      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Image of a man sitting in front of a computer"
      />
    </S.ContainerExemplo>
  )
}
