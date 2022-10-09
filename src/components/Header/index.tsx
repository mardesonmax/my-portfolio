import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Link href="/home">
          <div className="logo">
            <h1>Mardeson Pereira</h1>
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#contacts">Contatos</a>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
