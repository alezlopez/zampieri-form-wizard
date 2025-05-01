
// Validação de CPF
export const validateCpf = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais, o que não seria um CPF válido
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let digit1 = remainder === 10 || remainder === 11 ? 0 : remainder;

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let digit2 = remainder === 10 || remainder === 11 ? 0 : remainder;

  // Verifica se os dígitos verificadores estão corretos
  return parseInt(cpf.charAt(9)) === digit1 && parseInt(cpf.charAt(10)) === digit2;
};

// Formatar CPF para exibição
export const formatCpf = (value: string): string => {
  if (!value) return '';
  
  // Remove caracteres não numéricos
  const numericValue = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos
  const cpf = numericValue.slice(0, 11);
  
  // Aplica máscara
  if (cpf.length <= 3) {
    return cpf;
  } else if (cpf.length <= 6) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
  } else if (cpf.length <= 9) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
  } else {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
  }
};

// Formatar WhatsApp
export const formatWhatsApp = (value: string): string => {
  if (!value) return '+55 ';
  
  // Se não começar com +55, adiciona
  if (!value.startsWith('+55')) {
    value = '+55 ' + value.replace(/[^\d]/g, '');
  }
  
  // Remove caracteres não numéricos exceto o +
  const numericValue = value.replace(/[^\d+]/g, '');
  
  // Extrai o número sem o +55
  const phoneNumber = numericValue.replace(/^\+55/, '');
  
  // Limita a 11 dígitos (DDD + número)
  const limitedPhone = phoneNumber.slice(0, 11);
  
  // Aplica a máscara
  if (limitedPhone.length <= 2) {
    return `+55 ${limitedPhone}`;
  } else if (limitedPhone.length <= 7) {
    return `+55 (${limitedPhone.slice(0, 2)}) ${limitedPhone.slice(2)}`;
  } else {
    return `+55 (${limitedPhone.slice(0, 2)}) ${limitedPhone.slice(2, 7)}-${limitedPhone.slice(7)}`;
  }
};

// Calcular a pontuação com base nas respostas
export const calculateScore = (formData: any): number => {
  let score = 0;
  
  // Histórico Acadêmico
  if (formData.repetente === 'Sim') score += 2;
  
  if (formData.dificuldadeAprendizagem === 'Sim') score += 2;
  else if (formData.dificuldadeAprendizagem === 'Ainda não avaliado') score += 1;
  
  if (formData.atendimentoEducacional && 
     (formData.atendimentoEducacional === 'Reforço escolar' || 
      formData.atendimentoEducacional === 'Psicopedagógico' || 
      formData.atendimentoEducacional === 'Fonoaudiólogo / Psicólogo')) {
    score += 1;
  }
  
  // Cognitivo e Comportamental
  if (formData.dificuldadeAtencao === 'Sim') score += 2;
  else if (formData.dificuldadeAtencao === 'Às vezes') score += 1;
  
  if (formData.diagnosticoTranstorno === 'Sim (diagnosticado)') score += 3;
  else if (formData.diagnosticoTranstorno === 'Sim (em avaliação)') score += 2;
  else if (formData.diagnosticoTranstorno === 'Prefiro não responder') score += 1;
  
  if (formData.dificuldadeSocializacao === 'Sim') score += 2;
  else if (formData.dificuldadeSocializacao === 'Em algumas situações') score += 1;
  
  // Saúde e Apoio
  if (formData.usoMedicacao === 'Sim') score += 1;
  
  if (formData.laudoMedico === 'Sim') score += 3;
  else if (formData.laudoMedico === 'Em andamento') score += 2;
  
  return score;
};

export const getEntrevistaStatus = (score: number): { necessaria: boolean, sugerida: boolean } => {
  return {
    necessaria: score >= 7,
    sugerida: score >= 4 && score < 7,
  };
};
