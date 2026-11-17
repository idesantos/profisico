// Grades de turmas por modalidade, transcritas das imagens da página "Horários" do site
// antigo da Pró-Físico (artes de abril/2024). Confirmar com a academia se continuam valendo.
// `dias` usa 0 = domingo … 6 = sábado.

export type Turno = 'Manhã' | 'Tarde' | 'Noite';
export type Aula = { hora: string; dias?: number[]; diasTexto?: string; turma?: string };
export type Grade = {
  id: string;
  titulo: string;
  publico?: string;
  modalidades: string[]; // slugs das páginas de modalidade que mostram esta grade
  aulas?: Aula[];
  faixa?: { texto: string; dias: number[]; inicio: string; fim: string }[];
  observacoes?: string[];
};

const SEG_SEX = [1, 2, 3, 4, 5];
// Turnos: manhã até 12:30, tarde até 17:00, noite a partir de 17:45.
const turno = (h: string): Turno => (h <= '12:30' ? 'Manhã' : h <= '17:00' ? 'Tarde' : 'Noite');

const NOMES = ['dom', '2ª', '3ª', '4ª', '5ª', '6ª', 'sábado'];
// [1,3,5] → "2ª, 4ª e 6ª"; [1,2,3,4,5] → "2ª a 6ª"; [6] → "sábado".
function diasTexto(dias: number[]) {
  const d = [...dias].sort();
  if (d.join() === '1,2,3,4,5') return '2ª a 6ª';
  if (d.join() === '1,2,3,4,5,6') return '2ª a sábado';
  const n = d.map((x) => NOMES[x]);
  return n.length === 1 ? n[0] : `${n.slice(0, -1).join(', ')} e ${n.at(-1)}`;
}
// Monta as linhas da tabela já em ordem de horário.
const linhas = (itens: [string, number[], string?][]): Aula[] =>
  itens
    .map(([hora, dias, turma]) => ({ hora, dias, diasTexto: diasTexto(dias), ...(turma && { turma }) }))
    .sort((a, b) => a.hora.localeCompare(b.hora));

const GRANDE = 'Piscina grande';
const PEQUENA = 'Piscina pequena';

export const grades: Grade[] = [
  {
    id: 'natacao-infantil',
    titulo: 'Natação infantil',
    modalidades: ['natacao-infantil'],
    aulas: linhas([
      ['08:45', [2, 4], PEQUENA],
      ['09:30', [2, 4], GRANDE],
      ['09:30', [1, 3, 5, 6], PEQUENA],
      ['10:15', [1, 3, 5], GRANDE],
      ['10:15', [1, 3, 5, 6], PEQUENA],
      ['11:00', [2, 4], PEQUENA],
      ['11:45', [6], GRANDE],
      ['11:45', [2, 4, 6], PEQUENA],
      ['12:30', [6], PEQUENA],
      ['14:00', [2, 4], GRANDE],
      ['14:45', SEG_SEX, PEQUENA],
      ['17:00', [2, 4], GRANDE],
      ['17:45', [1, 3, 5], GRANDE],
      ['17:45', SEG_SEX, PEQUENA],
      ['18:30', SEG_SEX, PEQUENA],
      ['19:15', [1, 3, 5], PEQUENA],
      ['20:00', [2, 4], GRANDE],
      ['20:00', [2, 4], PEQUENA],
    ]),
  },
  {
    id: 'bebes',
    titulo: 'Natação bebê',
    publico: '6 a 48 meses',
    modalidades: ['natacao-bebe'],
    aulas: linhas([
      ['09:30', [2, 4]],
      ['11:00', [1, 3, 5, 6]],
      ['15:30', [2, 4]],
    ]),
  },
  {
    id: 'natacao-adulto',
    titulo: 'Natação adulto',
    publico: 'piscina grande',
    modalidades: ['natacao-adulto'],
    aulas: linhas([
      ['06:30', SEG_SEX],
      ['07:15', SEG_SEX],
      ['08:00', [1, 3, 5, 6]],
      ['08:45', SEG_SEX],
      ['09:30', [6]],
      ['10:15', [2, 4, 6]],
      ['11:00', [2, 4]],
      ['15:30', SEG_SEX],
      ['16:15', [1, 3, 5]],
      ['17:00', [1, 3, 5]],
      ['17:45', [2, 4]],
      ['18:30', [1, 3, 5]],
      ['19:15', SEG_SEX],
      ['20:00', [1, 3, 5]],
      ['20:45', SEG_SEX],
    ]),
  },
  {
    id: 'iniciacao-adulto',
    titulo: 'Iniciação adulto',
    publico: 'piscina pequena',
    modalidades: ['natacao-adulto'],
    aulas: linhas([
      ['08:45', [1, 3, 5, 6]],
      ['10:15', [2, 4]],
      ['11:45', [1, 3, 5]],
      ['17:00', SEG_SEX],
      ['19:15', [2, 4]],
      ['20:00', [1, 3, 5]],
    ]),
  },
  {
    id: 'hidroginastica',
    titulo: 'Hidroginástica',
    modalidades: ['hidroginastica'],
    aulas: linhas([
      ['08:00', [2, 4]],
      ['08:45', [6]],
      ['09:30', [1, 3, 5]],
      ['14:00', [1, 3, 5]],
      ['16:15', [2, 4]],
      ['18:30', [2, 4]],
    ]),
  },
  {
    id: 'musculacao',
    titulo: 'Musculação',
    publico: 'horário livre',
    modalidades: ['musculacao'],
    faixa: [
      { texto: '2ª a 6ª', dias: SEG_SEX, inicio: '06:30', fim: '21:30' },
      { texto: 'Sábados', dias: [6], inicio: '08:00', fim: '13:00' },
    ],
  },
  {
    id: 'ginastica',
    titulo: 'Ginástica e dança',
    modalidades: ['ginastica-2'],
    aulas: linhas([
      ['07:00', [1], 'Fit Dance'],
      ['07:00', [3], 'Circuito'],
      ['07:00', [5], 'Abdominal'],
      ['07:30', [1], 'Cardio Mix'],
      ['07:30', [3], 'GAP'],
      ['07:30', [5], 'Fit Dance'],
      ['08:00', [1], 'Circuito'],
      ['08:00', [3, 5], 'Fit Dance'],
      ['08:30', [1, 5], 'Alongamento'],
      ['08:30', [3], 'Abdominal'],
      ['14:30', [2, 4], 'Fit Dance'],
      ['15:00', [2, 4], 'Circuito'],
      ['19:00', [1], 'Fit Dance'],
      ['19:00', [3], 'Circuito'],
      ['19:00', [5], 'Abdominal'],
      ['19:30', [1], 'Cardio Mix'],
      ['19:30', [3], 'GAP'],
      ['19:30', [5], 'Fit Dance'],
      ['20:00', [1], 'Circuito'],
      ['20:00', [3, 5], 'Fit Dance'],
      ['20:30', [1, 5], 'Alongamento'],
      ['20:30', [3], 'Abdominal'],
    ]),
  },
  {
    id: 'lutas',
    titulo: 'Lutas',
    modalidades: ['lutas'],
    aulas: linhas([
      ['07:00', [2, 4], 'Kung Fu'],
      ['08:00', [2, 4], 'Taekwondo'],
      ['08:00', [6], 'Kung Fu'],
      ['09:00', [6], 'Taekwondo'],
      ['18:00', [2], 'Kung Fu Kids (a partir de 5 anos)'],
      ['19:00', [2, 4], 'Kung Fu'],
      ['20:00', [2, 4], 'Taekwondo'],
    ]),
  },
  {
    id: 'funcional-kids',
    titulo: 'Funcional Kids',
    modalidades: ['funcional-kids'],
    aulas: linhas([
      ['10:30', [1, 3, 5]],
      ['15:30', [2, 4]],
    ]),
  },
  {
    id: 'ballet',
    titulo: 'Ballet e Jazz',
    modalidades: ['ballet'],
    aulas: linhas([
      ['10:00', [6], 'Jazz (a partir de 12 anos)'],
      ['11:00', [6], 'Ballet (a partir de 10 anos)'],
      ['12:15', [6], 'Ballet (a partir de 4 anos)'],
    ]),
  },
];

export const turnoDe = turno;
export const diasEfetivos = (a: Aula) => a.dias ?? SEG_SEX;
