import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <h1>Mardeson Pereira</h1>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Habilidades</li>
            <li>Contatos</li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
