import { Container } from './styles';

interface Props {
  title: string;
  description: string;
}

export function Featured({ title, description }: Props) {
  return (
    <Container>
      <h2 data-aos="fade-right">{title}</h2>
      <span data-aos="fade-up">{description}</span>
    </Container>
  );
}
