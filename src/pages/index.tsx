/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Header } from '~/components/Header';
import { GetStaticProps } from 'next';
import { api } from '~/services/api';
import { SkillDTO } from '~/dtos/SkillDTO';
import { Banner } from '~/components/home/Banner';
import { Skills } from '~/components/home/Skills';
import { Contacts } from '~/components/home/Contacts';
import { Container } from '~/styles/home/styles';

interface Props {
  skills?: SkillDTO[];
}

export default function Home({ skills }: Props) {
  return (
    <Container>
      <Header />

      <Banner />

      {skills && <Skills skills={skills} />}

      <Contacts />

      <footer>
        <span>
          Desenvolvido com <span>❤</span> por <strong>Mardeson Pereira</strong>
        </span>
      </footer>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get('/skill');
    return {
      props: {
        skills: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
