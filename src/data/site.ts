// Dados institucionais — fonte única. Tudo que aparece em mais de uma página mora aqui.
// Fonte: site antigo da Pró-Físico (profisico.com.br), novembro de 2026.

export const site = {
  nome: 'Academia Pró-Físico',
  nomeCurto: 'Pró-Físico',
  desde: 1991,
  slogan: 'Uma academia para toda a família',
  descricao:
    'A Pró-Físico atua no ramo esportivo desde 1991, atendendo ao público de todas as idades, com profissionais qualificados e atendimento personalizado. Nossas piscinas são aquecidas o ano inteiro e em ambiente amplo, garantindo conforto para os nossos alunos.',
  cnpj: '03.862.852/0001-86',
  endereco: {
    rua: 'Rua Turvânia, 184',
    bairro: 'Jaraguá',
    cidade: 'São Paulo',
    uf: 'SP',
    // CEP da Rua Turvânia nos Correios (ViaCEP); o site antigo não informa.
    cep: '05181-200',
  },
  // O mesmo número atende telefone e WhatsApp (é o que aparece nas grades de horário do site antigo).
  telefone: { exibicao: '(11) 3943-3727', link: 'tel:+551139433727' },
  whatsapp: { exibicao: '(11) 3943-3727', numero: '551139433727' },
  // O site antigo não informa e-mail; com o campo vazio, os blocos de e-mail somem.
  email: '',
  instagram: 'https://www.instagram.com/academiaprofisico_/',
  facebook: 'https://www.facebook.com/ProFisicoJaragua/',
  mapsRota:
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Turv%C3%A2nia,+184+-+Jaragu%C3%A1,+S%C3%A3o+Paulo+-+SP,+05181-200',
  mapsEmbed:
    'https://maps.google.com/maps?q=Rua%20Turv%C3%A2nia%2C%20184%20-%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP&t=m&z=16&output=embed&iwloc=near',
};

// Funcionamento conforme o rodapé do site antigo. Dia da semana (0 = domingo) → [abre, fecha] em minutos.
export const funcionamento = {
  linhas: [
    { dias: 'Segunda a Sexta', horario: '06:30 às 21:30' },
    // Aos sábados a musculação fecha às 13:00 (aparece na grade da Musculação).
    { dias: 'Sábado', horario: '08:00 às 14:00' },
    { dias: 'Domingo', horario: 'Fechado' },
  ],
  porDia: {
    0: null,
    1: [390, 1290],
    2: [390, 1290],
    3: [390, 1290],
    4: [390, 1290],
    5: [390, 1290],
    6: [480, 840],
  } as Record<number, [number, number] | null>,
};

// Todos os botões de WhatsApp abrem com a mesma frase (padrão do Ide desde 17/11/2026).
// Só o formulário do contato acrescenta o que a pessoa preencheu, depois da frase.
export const MSG_WHATSAPP = 'Vim do site e gostaria de saber mais';

export function whatsappLink(detalhes?: string) {
  const texto = detalhes ? `${MSG_WHATSAPP}\n\n${detalhes}` : MSG_WHATSAPP;
  return `https://api.whatsapp.com/send?phone=${site.whatsapp.numero}&text=${encodeURIComponent(texto)}`;
}

// Diferenciais da página "Sobre" do site antigo.
export const diferenciaisAcademia = [
  'Know-how de mais de 30 anos no mercado',
  'Espaço da piscina com pé-direito alto, proporcionando amplitude e conforto',
  'Duas piscinas, uma para adultos e outra para crianças',
  'Piscinas aquecidas o ano inteiro',
  'Poucos alunos por professor na musculação',
  'Vestiário infantil',
  'Vestiários adultos com armários',
  'Duchas aquecidas',
];

export const sobre = {
  titulo: 'Uma academia para toda a família!',
  paragrafos: [
    'A Pró-Físico atua no ramo esportivo desde 1991, atendendo ao público de todas as idades, com profissionais qualificados e atendimento personalizado. Nossas piscinas são aquecidas o ano inteiro e em ambiente amplo, garantindo conforto para os nossos alunos. Temos vestiários masculino, feminino e infantil.',
    'Nossa sala de musculação é pensada para atendimento personalizado: trabalhamos com poucos alunos por professor. Também temos uma sala de ginástica com diversas opções de aulas, além de lutas, ballet e jazz.',
  ],
  missao:
    'Oferecer o que há de melhor na prática e aprendizagem de esportes aquáticos, ou apenas para relaxamento e diversão.',
  valores: [
    'Atendimento de qualidade',
    'Pontualidade',
    'Ambiente agradável e familiar',
    'Respeito aos alunos e atendimento humanizado',
  ],
};

// Planos da página "Planos" do site antigo (sem preços).
export const planos = [
  { nome: 'Adulto piscina', destaque: 'Pode tudo', publico: 'Adulto' },
  { nome: 'Adulto musculação e ginástica', destaque: 'Academia completa', publico: 'Adulto' },
  { nome: 'Natação infantil', destaque: '2x na semana', publico: 'Infantil' },
  { nome: 'Natação bebê', destaque: 'Horários livres', publico: 'Bebê' },
];
