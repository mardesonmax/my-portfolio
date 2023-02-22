import Image from 'next/image';
import { Container, Content } from './styles';

export function Banner() {
  return (
    <Container id="banner">
      <Content>
        <div className="user-text">
          <h1 data-aos="fade-right">
            Pense menos, <br />
            Crie mais.
          </h1>

          <span data-aos="fade-up">
            Olá, sou desenvolvedor de software, trabalho na criação de
            aplicativos, <br />
            web-sites e back-end utilizando uma das melhores tecnologias o
            JavaScrip.
          </span>
        </div>

        <div className="user-image" data-aos="zoom-in">
          <Image
            alt=""
            src="/assets/images/user-image.png"
            width="380"
            height="380"
          />
        </div>
      </Content>
    </Container>
  );
}
