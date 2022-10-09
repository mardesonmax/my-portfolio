import { Container } from './styles';

interface Props {
  title: string;
  description: string;
}

export function Featured({ title, description }: Props) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{description}</span>
    </Container>
  );
}
