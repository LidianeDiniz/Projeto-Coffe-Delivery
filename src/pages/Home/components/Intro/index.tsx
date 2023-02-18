import {
  IntroContainer,
  IntroContent,
  Subtitle,
  ImageContainer,
  BenefitsContainer,
  IconsContainer,
} from './styles'
import introImg from '../../../../assets/intro-img.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <Subtitle>
              Com o Coffe Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </Subtitle>
          </section>

          <BenefitsContainer>
            <IconsContainer href="/" target={'_blank'}>
              <ShoppingCart color="#C47F17" size={22} weight="fill" />
              Compra simples e segura
            </IconsContainer>

            <IconsContainer href="/" target={'_blank'}>
              <Package color="#574F4D" size={22} weight="fill" />
              Embalagem mantém o café intacto
            </IconsContainer>

            <IconsContainer href="/" target={'_blank'}>
              <Timer color="#DBAC2C" size={22} weight="fill" />
              Entrega rápida e rastreada
            </IconsContainer>

            <IconsContainer href="/" target={'_blank'}>
              <Coffee color="#8047F8" size={22} weight="fill" />O café chega
              fresquinho até você
            </IconsContainer>
          </BenefitsContainer>
        </div>

        <ImageContainer src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
