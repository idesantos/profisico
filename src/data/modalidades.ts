import type { ImageMetadata } from 'astro';
import conteudo from './modalidades-conteudo.json';

import natacaoInfantil from '../assets/img/modalidades/natacao-infantil.jpg';
import natacaoAdulto from '../assets/img/modalidades/natacao-adulto.jpg';
import hidroginastica from '../assets/img/modalidades/hidroginastica.jpg';
import musculacao from '../assets/img/modalidades/musculacao.jpg';
import danca from '../assets/img/modalidades/danca.jpg';
import jump from '../assets/img/modalidades/jump.jpg';
import funcionalKids from '../assets/img/modalidades/funcional-kids.jpg';
import ginastica from '../assets/img/modalidades/ginastica.jpg';
import localizada from '../assets/img/modalidades/ginastica-localizada.jpg';
import ballet from '../assets/img/modalidades/ballet.jpg';
import lutas from '../assets/img/modalidades/lutas.jpg';

export type Categoria = 'agua' | 'academia' | 'kids';

type Conteudo = {
  titulo: string;
  descricao: string;
  beneficios: { lista?: string[]; texto?: string };
};

// Aulas que existem dentro de uma modalidade (as aulas coletivas da Ginástica, as artes marciais das Lutas).
// Sem foto própria no site antigo, a aula aparece só com o texto.
export type Aula = { id: string; nome: string; texto: string; imagem?: ImageMetadata };

export type Modalidade = Conteudo & {
  slug: string;
  nome: string;
  resumo: string;
  // Cada modalidade fica em uma categoria só, para não aparecer repetida no menu.
  categorias: [Categoria];
  imagem: ImageMetadata;
  diferenciais: string[];
  aulas?: Aula[];
};

// Só o que o site antigo da Pró-Físico afirma (páginas "Sobre" e das modalidades).
const DIF = {
  aguaKids: [
    'Metodologia Aquativa',
    'Piscina infantil separada da piscina dos adultos',
    'Número limitado de crianças por professor',
    'Avaliação periódica do nível das crianças',
    'Vestiário infantil',
  ],
  aguaAdulto: [
    'Piscinas aquecidas o ano inteiro',
    'Espaço da piscina com pé-direito alto',
    'Turmas de iniciação na piscina pequena',
    'Duchas aquecidas',
  ],
  academia: [
    'Atendimento personalizado, com poucos alunos por professor',
    'Sala de ginástica com diversas opções de aulas',
    'Instrutores qualificados',
    'Vestiários adultos com armários',
  ],
  kids: [
    'Aulas lúdicas, pensadas para as crianças',
    'Turmas por idade',
    'Vestiário infantil',
  ],
};

const meta: Omit<Modalidade, keyof Conteudo>[] = [
  {
    slug: 'natacao-bebe',
    nome: 'Natação Bebê',
    resumo: 'Adaptação ao meio líquido com acompanhante, para bebês de 6 a 48 meses.',
    categorias: ['agua'],
    // Sem foto de bebê no site antigo: usa a da natação infantil até a academia mandar uma.
    imagem: natacaoInfantil,
    diferenciais: DIF.aguaKids,
  },
  {
    slug: 'natacao-infantil',
    nome: 'Natação Infantil',
    resumo: 'Da adaptação ao meio líquido aos quatro estilos, com a Metodologia Aquativa.',
    categorias: ['agua'],
    imagem: natacaoInfantil,
    diferenciais: DIF.aguaKids,
  },
  {
    slug: 'natacao-adulto',
    nome: 'Natação Adulto',
    resumo: 'Da iniciação ao condicionamento: fortalece o corpo, ajuda a emagrecer e tira a mente da rotina.',
    categorias: ['agua'],
    imagem: natacaoAdulto,
    diferenciais: DIF.aguaAdulto,
  },
  {
    slug: 'hidroginastica',
    nome: 'Hidroginástica',
    resumo: 'Baixo impacto e até 500 calorias por hora. Para todas as idades.',
    categorias: ['agua'],
    imagem: hidroginastica,
    diferenciais: DIF.aguaAdulto,
  },
  {
    slug: 'musculacao',
    nome: 'Musculação',
    resumo: 'Treino personalizado, com poucos alunos por professor.',
    categorias: ['academia'],
    imagem: musculacao,
    diferenciais: DIF.academia,
  },
  {
    slug: 'ginastica-2',
    nome: 'Ginástica',
    resumo: 'Fit Dance, Cardio Mix, Circuito Funcional, GAP, Abdominal e Alongamento.',
    categorias: ['academia'],
    imagem: ginastica,
    diferenciais: DIF.academia,
    aulas: [
      {
        id: 'fit-dance',
        nome: 'Fit Dance',
        texto: 'Quem pratica se movimenta, dança e agita o corpo e a mente, elevando o bem-estar. A dança melhora a autoestima, faz bem ao coração, ajuda a combater a timidez e a fazer novos amigos.',
        imagem: danca,
      },
      {
        id: 'cardio-mix',
        nome: 'Cardio Mix',
        texto: 'Treino de condicionamento físico com exercícios intercalados de alta e baixa intensidade. Coração e pulmões trabalham mais, e o gasto pode chegar a 500 kcal por aula.',
        imagem: localizada,
      },
      {
        id: 'circuito',
        nome: 'Circuito Funcional',
        texto: 'Exercícios que treinam o corpo para os movimentos do dia a dia, como saltar, agachar, empurrar, puxar, correr e levantar. Ajuda a emagrecer, tonificar e melhorar o condicionamento.',
        imagem: jump,
      },
    ],
  },
  {
    slug: 'lutas',
    nome: 'Lutas',
    resumo: 'Kung Fu e Taekwondo para adultos, e Kung Fu Kids a partir de 5 anos.',
    categorias: ['academia'],
    imagem: lutas,
    diferenciais: DIF.academia,
    aulas: [
      {
        id: 'kung-fu',
        nome: 'Kung Fu',
        texto: 'Arte marcial milenar chinesa, desenvolvida pelos monges Shaolin, para a luta e a defesa pessoal e também para a saúde: respiração, fortalecimento do corpo, coordenação motora, alongamento e flexibilidade. Tem turma Kids, a partir de 5 anos.',
      },
      {
        id: 'taekwondo',
        nome: 'Taekwondo',
        texto: 'Arte marcial coreana e esporte olímpico, com aulas baseadas principalmente em chutes. É uma aula muito aeróbica e dinâmica, que trabalha velocidade, flexibilidade e alongamento e ajuda a desestressar.',
      },
    ],
  },
  {
    slug: 'funcional-kids',
    nome: 'Funcional Kids',
    resumo: 'Agachar, pular, correr: exercício lúdico para os pequenos.',
    categorias: ['kids'],
    imagem: funcionalKids,
    diferenciais: DIF.kids,
  },
  {
    slug: 'ballet',
    nome: 'Ballet e Jazz',
    resumo: 'Aulas aos sábados: ballet a partir de 4 anos e jazz a partir de 12.',
    categorias: ['kids'],
    imagem: ballet,
    diferenciais: DIF.kids,
  },
];

const textos = conteudo as Record<string, Conteudo>;

export const modalidades: Modalidade[] = meta.map((m) => ({ ...textos[m.slug], ...m }));

export const categoriaNome: Record<Categoria, string> = {
  agua: 'Na água',
  academia: 'Academia',
  kids: 'Kids',
};

