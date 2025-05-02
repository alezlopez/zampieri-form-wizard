
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
  // Iniciamos com pontuação de 100
  let score = 100;
  
  // 🧠 Histórico e desempenho
  // Repetência
  if (formData.repetente === 'Sim') score -= 20;
  
  // Dificuldade de aprendizagem
  if (formData.dificuldadeAprendizagem === 'Sim') score -= 30;
  else if (formData.dificuldadeAprendizagem === 'Ainda não avaliado') score -= 10;
  
  // Reforço escolar ou acompanhamento
  if (formData.atendimentoEducacional && 
     (formData.atendimentoEducacional === 'Reforço escolar' || 
      formData.atendimentoEducacional === 'Psicopedagógico' || 
      formData.atendimentoEducacional === 'Fonoaudiólogo / Psicólogo')) {
    score -= 10;
  }
  
  // 📑 Tipo de escola atual
  if (formData.tipoEscola === 'Pública') score -= 10;
  
  // 🧾 Laudo, atendimento ou suspeita de NEE
  // Verificamos diagnóstico ou laudo
  const temDiagnosticoOuLaudo = 
    formData.diagnosticoTranstorno === 'Sim (diagnosticado)' || 
    formData.diagnosticoTranstorno === 'Sim (em avaliação)' || 
    formData.laudoMedico === 'Sim' || 
    formData.laudoMedico === 'Em andamento';
  
  if (temDiagnosticoOuLaudo) score -= 40;
  
  // 📱 Número de celular com formato válido e e-mail preenchido?
  const whatsappValido = formData.whatsapp && 
    formData.whatsapp.replace(/\D/g, '').length >= 13;
    
  const emailValido = formData.email && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  
  if (whatsappValido && emailValido) score += 5;
  
  return score;
};

export const getEntrevistaStatus = (score: number): { necessaria: boolean, sugerida: boolean } => {
  return {
    necessaria: score <= 59,
    sugerida: false, // Não é mais usado na nova classificação
  };
};

