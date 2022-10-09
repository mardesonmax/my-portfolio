import Image from 'next/image';
import { Container, Content } from './styles';

export function Banner() {
  return (
    <Container id="banner">
      <Content>
        <div className="user-text">
          <h1>
            Pense menos, <br />
            Crie mais.
          </h1>

          <span>
            Olá, sou desenvolvedor de software, trabalho na criação de
            aplicativos, <br />
            web-sites e back-end utilizando uma das melhores tecnologias o
            JavaScrip.
          </span>
        </div>

        <div className="user-image">
          <Image src="/assets/images/user-image.png" width="380" height="380" />
        </div>
      </Content>
    </Container>
  );
}
