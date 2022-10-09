import { Banner } from './components/Banner';
import { Header } from '~/components/Header';
import { Container } from './styles';
import { Skills } from './components/Skills';
import { GetServerSideProps } from 'next';
import { api } from '~/services/api';
import { SkillDTO } from '~/dtos/SkillDTO';
import { Contacts } from './components/Contacts';

interface Props {
  skills: SkillDTO[];
}

export default function Home({ skills }: Props) {
  return (
    <Container>
      <Header />

      <Banner />

      <Skills skills={skills} />

      <Contacts />

      <footer>
        <span>
          Desenvolvido com <span>❤</span> por <strong>Mardeson Pereira</strong>
        </span>
      </footer>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/skill');
  return {
    props: {
      skills: data,
    },
  };
};
