import { Header } from '~/components/Header';
import { Container } from './styles';
import { GetServerSideProps } from 'next';
import { api } from '~/services/api';
import { SkillDTO } from '~/dtos/SkillDTO';
import { Banner } from '~/components/home/Banner';
import { Skills } from '~/components/home/Skills';
import { Contacts } from '~/components/home/Contacts';

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
  try {
    const { data } = await api.get('/skill');
    return {
      props: {
        skills: data,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
