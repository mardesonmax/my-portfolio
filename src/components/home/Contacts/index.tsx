import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from 'phosphor-react';
import { Featured } from '~/components/Featured';
import { Container, Content } from './styles';

export function Contacts() {
  return (
    <Container id="contacts">
      <Content>
        <Featured
          title="Contatos"
          description="Aqui estão listados algumas formas para entrar em contato comigo."
        />

        <div className="contacts">
          <div className="contact">
            <div className="icon">
              <MapPin weight="bold" />
            </div>

            <span>Fortaleza - CE</span>
          </div>

          <div className="contact">
            <a href="mailto:mardesondev@gmail.com">
              <div className="icon">
                <Envelope weight="bold" />
              </div>

              <span>mardesondev@gmail.com</span>
            </a>
          </div>

          <div className="contact">
            <a
              href="https://api.whatsapp.com/send?phone=5585988532761&text=Ol%C3%A1%2C%20Mardeson%20Pereira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <WhatsappLogo weight="bold" />
              </div>

              <span>WhatsApp</span>
            </a>
          </div>

          <div className="contact">
            <a
              href="https://www.linkedin.com/in/mardeson-pereira-6a1369208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <LinkedinLogo weight="bold" />
              </div>

              <span>Linkedin</span>
            </a>
          </div>

          <div className="contact">
            <a
              href="https://github.com/mardesonmax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <GithubLogo weight="bold" />
              </div>

              <span>Github</span>
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}
