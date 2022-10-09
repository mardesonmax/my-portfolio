import Image from 'next/image';
import { Featured } from '~/components/Featured';
import { SkillDTO } from '~/dtos/SkillDTO';
import { Container, Content } from './styled';

interface Props {
  skills: SkillDTO[];
}

export function Skills({ skills }: Props) {
  return (
    <Container id="skills">
      <Content>
        <Featured
          title="Habilidades"
          description="Aqui estão listadas algumas das minhas habilidades."
        />

        <div className="skills">
          {skills.map(skill => (
            <div className="skill" key={skill.id}>
              <div className="image">
                <Image
                  src={skill.image.uri}
                  width={skill.image.width}
                  height={skill.image.height}
                />
              </div>

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
}
