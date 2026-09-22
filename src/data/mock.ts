export const mockUser = {
  id: 1,
  email: "carlos.souza@empresa.com",
  funcionarioId: 1,
  ativo: true,
  criadoEm: "2026-01-10T08:00:00.000Z",
};

export const mockFuncionario = {
  id: 1,
  nome: "Carlos Souza",
  matricula: "F001",
  cargo: "Analista de Qualidade",
  setor: "Qualidade",
};

export const mockDashboard = {
  quantidadeFuncionarios: 48,
  quantidadeUsuarios: 23,
  quantidadeTreinamentos: 17,
  quantidadeInstrutores: 9,
  quantidadeCertificados: 134,
};

export const mockTreinamentos = [
  { id: 1, titulo: "NR-35 – Trabalho em Altura", descricao: "Treinamento obrigatório conforme Norma Regulamentadora 35", cargaHoraria: 8, status: "concluido", dataInicio: "2026-03-10T08:00:00.000Z", dataFim: "2026-03-10T17:00:00.000Z" },
  { id: 2, titulo: "NR-10 – Segurança em Inst. Elétricas", descricao: "Treinamento conforme NR-10 para equipes de manutenção elétrica", cargaHoraria: 16, status: "em_andamento", dataInicio: "2026-09-01T08:00:00.000Z", dataFim: "2026-09-02T17:00:00.000Z" },
  { id: 3, titulo: "Primeiros Socorros", descricao: "Capacitação em técnicas básicas de primeiros socorros", cargaHoraria: 4, status: "pendente", dataInicio: "2026-10-05T08:00:00.000Z", dataFim: "2026-10-05T12:00:00.000Z" },
  { id: 4, titulo: "NR-12 – Segurança em Máquinas", descricao: "Treinamento de operadores de máquinas e equipamentos industriais", cargaHoraria: 12, status: "pendente", dataInicio: "2026-10-20T08:00:00.000Z", dataFim: "2026-10-21T17:00:00.000Z" },
  { id: 5, titulo: "LGPD – Proteção de Dados", descricao: "Conscientização sobre Lei Geral de Proteção de Dados Pessoais", cargaHoraria: 2, status: "concluido", dataInicio: "2026-02-14T14:00:00.000Z", dataFim: "2026-02-14T16:00:00.000Z" },
  { id: 6, titulo: "Combate a Incêndio", descricao: "Uso de equipamentos de combate a incêndio e rotas de fuga", cargaHoraria: 6, status: "cancelado", dataInicio: "2026-08-15T08:00:00.000Z", dataFim: "2026-08-15T14:00:00.000Z" },
  { id: 7, titulo: "NR-6 – Equipamentos de Proteção", descricao: "Uso correto de EPIs conforme NR-6", cargaHoraria: 4, status: "em_andamento", dataInicio: "2026-09-12T08:00:00.000Z", dataFim: "2026-09-12T12:00:00.000Z" },
];

export const mockFuncionarios = [
  { id: 1, nome: "Carlos Souza", matricula: "F001", cargo: "Analista de Qualidade", setor: "Qualidade" },
  { id: 2, nome: "Maria Oliveira", matricula: "F002", cargo: "Técnico de Segurança", setor: "Operações" },
  { id: 3, nome: "João Ferreira", matricula: "F003", cargo: "Operador de Máquinas", setor: "Produção" },
  { id: 4, nome: "Ana Lima", matricula: "F004", cargo: "Engenheira de Produção", setor: "Produção" },
  { id: 5, nome: "Pedro Mendes", matricula: "F005", cargo: "Supervisor de Manutenção", setor: "Manutenção" },
  { id: 6, nome: "Fernanda Costa", matricula: "F006", cargo: "Analista de RH", setor: "Recursos Humanos" },
  { id: 7, nome: "Ricardo Alves", matricula: "F007", cargo: "Eletricista Industrial", setor: "Manutenção" },
  { id: 8, nome: "Juliana Pinto", matricula: "F008", cargo: "Técnica de Segurança", setor: "Segurança" },
];

export const mockInstrutores = [
  { id: 1, nome: "Marcos Oliveira", especialidade: "Segurança do Trabalho", registro: "CREA-SP-123456", email: "marcos.oliveira@empresa.com", interno: true },
  { id: 2, nome: "Beatriz Santos", especialidade: "Primeiros Socorros", registro: "CFM-98765", email: "beatriz.santos@externo.com", interno: false },
  { id: 3, nome: "Hélio Rodrigues", especialidade: "Segurança Elétrica", registro: "CREA-SP-654321", email: "helio.rodrigues@empresa.com", interno: true },
  { id: 4, nome: "Carla Mendes", especialidade: "LGPD e Compliance", registro: "OAB-SP-112233", email: "carla.mendes@externo.com", interno: false },
];

export const mockCertificados = [
  { id: 1, treinamentoParticipantesId: 1, numero: "CERT-2026-0001", dataEmissao: "2026-03-11T08:00:00.000Z", dataValidade: "2027-03-11T08:00:00.000Z", status: "valido", funcionario: "Carlos Souza", treinamento: "NR-35 – Trabalho em Altura" },
  { id: 2, treinamentoParticipantesId: 2, numero: "CERT-2026-0002", dataEmissao: "2026-03-11T08:00:00.000Z", dataValidade: "2027-03-11T08:00:00.000Z", status: "valido", funcionario: "Maria Oliveira", treinamento: "NR-35 – Trabalho em Altura" },
  { id: 3, treinamentoParticipantesId: 5, numero: "CERT-2026-0003", dataEmissao: "2026-02-14T16:00:00.000Z", dataValidade: "2025-02-14T16:00:00.000Z", status: "expirado", funcionario: "João Ferreira", treinamento: "LGPD – Proteção de Dados" },
  { id: 4, treinamentoParticipantesId: 6, numero: "CERT-2026-0004", dataEmissao: "2026-02-14T16:00:00.000Z", dataValidade: "2027-02-14T16:00:00.000Z", status: "valido", funcionario: "Ana Lima", treinamento: "LGPD – Proteção de Dados" },
  { id: 5, treinamentoParticipantesId: 7, numero: "CERT-2026-0005", dataEmissao: "2026-03-11T08:00:00.000Z", dataValidade: "2027-03-11T08:00:00.000Z", status: "cancelado", funcionario: "Pedro Mendes", treinamento: "NR-35 – Trabalho em Altura" },
];

export const mockParticipantes = [
  { id: 1, treinamentoId: 1, funcionarioId: 1, status: "aprovado", inscritoEm: "2026-03-01T09:00:00.000Z", nome: "Carlos Souza" },
  { id: 2, treinamentoId: 1, funcionarioId: 2, status: "aprovado", inscritoEm: "2026-03-01T09:00:00.000Z", nome: "Maria Oliveira" },
  { id: 3, treinamentoId: 1, funcionarioId: 3, status: "reprovado", inscritoEm: "2026-03-01T09:00:00.000Z", nome: "João Ferreira" },
  { id: 4, treinamentoId: 2, funcionarioId: 4, status: "pendente", inscritoEm: "2026-08-20T10:00:00.000Z", nome: "Ana Lima" },
  { id: 5, treinamentoId: 2, funcionarioId: 7, status: "pendente", inscritoEm: "2026-08-20T10:00:00.000Z", nome: "Ricardo Alves" },
];

export const mockEvidencias = [
  { id: 1, treinamentoId: 1, tipo: "foto", descricao: "Foto do participante durante prática em altura", arquivo: "evidencia_nr35_01.jpg", registradoEm: "2026-03-10T14:00:00.000Z" },
  { id: 2, treinamentoId: 1, tipo: "documento", descricao: "Lista de presença assinada", arquivo: "lista_presenca_nr35.pdf", registradoEm: "2026-03-10T17:00:00.000Z" },
  { id: 3, treinamentoId: 2, tipo: "video", descricao: "Vídeo de avaliação prática elétrica", arquivo: "avaliacao_nr10.mp4", registradoEm: "2026-09-01T15:00:00.000Z" },
];

export const mockAuditorias = [
  { id: 1, entidade: "certificados", entidadeId: 1, acao: "criacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Certificado CERT-2026-0001 emitido para Carlos Souza (NR-35)", realizadoEm: "2026-03-11T08:01:00.000Z" },
  { id: 2, entidade: "treinamentos", entidadeId: 2, acao: "atualizacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Status atualizado para em_andamento", realizadoEm: "2026-09-01T07:55:00.000Z" },
  { id: 3, entidade: "treinamentoParticipantes", entidadeId: 4, acao: "criacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Ana Lima inscrita no treinamento NR-10", realizadoEm: "2026-08-20T10:05:00.000Z" },
  { id: 4, entidade: "funcionarios", entidadeId: 8, acao: "criacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Funcionário Juliana Pinto cadastrado (F008)", realizadoEm: "2026-08-01T09:30:00.000Z" },
  { id: 5, entidade: "treinamentos", entidadeId: 6, acao: "atualizacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Treinamento Combate a Incêndio cancelado", realizadoEm: "2026-08-14T16:00:00.000Z" },
  { id: 6, entidade: "usuarios", entidadeId: 2, acao: "criacao", usuarioId: 1, usuario: "Carlos Souza", detalhe: "Novo usuário criado: novo@empresa.com", realizadoEm: "2026-07-20T11:00:00.000Z" },
];

export const mockUsuarios = [
  { id: 1, email: "carlos.souza@empresa.com", funcionarioId: 1, ativo: true, criadoEm: "2026-01-10T08:00:00.000Z", nome: "Carlos Souza", perfil: "Administrador" },
  { id: 2, email: "maria.oliveira@empresa.com", funcionarioId: 2, ativo: true, criadoEm: "2026-01-15T08:00:00.000Z", nome: "Maria Oliveira", perfil: "Operador" },
  { id: 3, email: "joao.ferreira@empresa.com", funcionarioId: 3, ativo: false, criadoEm: "2026-02-01T08:00:00.000Z", nome: "João Ferreira", perfil: "Operador" },
];

export const mockPerfis = [
  { id: 1, nome: "Administrador", descricao: "Acesso total ao sistema", permissoes: 18 },
  { id: 2, nome: "Operador", descricao: "Acesso de leitura e inscrição em treinamentos", permissoes: 6 },
  { id: 3, nome: "Instrutor", descricao: "Gerência de treinamentos e evidências", permissoes: 9 },
];
