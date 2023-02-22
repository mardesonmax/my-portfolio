/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Header } from '~/components/Header';
import { GetStaticProps } from 'next';
import { SkillDTO } from '~/dtos/SkillDTO';

import Head from 'next/head';
import { Container } from './styles';
import { api } from '~/services/api';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contacts } from './components/Contacts';

interface Props {
  skills?: SkillDTO[];
}

export default function Home({ skills }: Props) {
  return (
    <Container>
      <Head>
        <title>Mardeson Pereira</title>
      </Head>

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
      revalidate: 60 * 1, // 1 min
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      revalidate: 60 * 1, // 1 min
    };
  }
};
