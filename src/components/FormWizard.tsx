
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateScore, getEntrevistaStatus } from '@/utils/validations';

// Etapas de formulário
import DadosResponsavel from './wizard/DadosResponsavel';
import DadosAluno from './wizard/DadosAluno';
import HistoricoAcademico from './wizard/HistoricoAcademico';
import Desenvolvimento from './wizard/Desenvolvimento';
import Saude from './wizard/Saude';
import AvaliacaoIdentidade from './wizard/AvaliacaoIdentidade';
import Consentimento from './wizard/Consentimento';

const etapas = [
  "Dados do Responsável",
  "Dados do Aluno",
  "Histórico Acadêmico",
  "Desenvolvimento e Comportamento",
  "Saúde e Apoio",
  "Avaliação de Identidade",
  "Consentimento"
];

const FormWizard = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [formData, setFormData] = useState<any>({
    // Dados iniciais
    whatsapp: '+55 ',
    consentimento: false,
    entrevistaDesejada: ''
  });
  const [erros, setErros] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    // Verifica o tipo do input para tratá-lo adequadamente
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          [name]: files[0]
        });
        
        // Remove o erro ao selecionar um arquivo
        if (erros[name]) {
          const novosErros = { ...erros };
          delete novosErros[name];
          setErros(novosErros);
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Remove o erro quando o campo é preenchido
      if (erros[name] && value.trim()) {
        const novosErros = { ...erros };
        delete novosErros[name];
        setErros(novosErros);
      }
    }
  };
  
  const handleRadioChange = (nome: string, valor: string) => {
    setFormData({
      ...formData,
      [nome]: valor
    });
    
    // Limpa o erro desse campo
    if (erros[nome]) {
      const novosErros = { ...erros };
      delete novosErros[nome];
      setErros(novosErros);
    }
    
    // Lógica especial para exibir upload de boletim quando aluno é repetente
    if (nome === 'repetente' && valor === 'Sim') {
      console.log('Aluno repetente, habilitando upload de boletim');
    }
  };
  
  const validarEtapaAtual = (): boolean => {
    const novosErros: Record<string, string> = {};
    
    // Validação específica para cada etapa
    switch (etapaAtual) {
      case 0: // Dados do Responsável
        if (!formData.nomeResponsavel?.trim()) novosErros.nomeResponsavel = 'Nome do responsável é obrigatório';
        if (!formData.email?.trim()) novosErros.email = 'E-mail é obrigatório';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) novosErros.email = 'E-mail inválido';
        if (!formData.cpf?.trim()) novosErros.cpf = 'CPF é obrigatório';
        else if (formData.cpfInvalido) novosErros.cpf = 'CPF inválido';
        if (!formData.whatsapp?.trim() || formData.whatsapp === '+55 ') novosErros.whatsapp = 'WhatsApp é obrigatório';
        else if (formData.whatsapp.replace(/\D/g, '').length < 13) novosErros.whatsapp = 'WhatsApp inválido';
        break;
        
      case 1: // Dados do Aluno
        if (!formData.nomeAluno?.trim()) novosErros.nomeAluno = 'Nome do aluno é obrigatório';
        if (!formData.seriePretendida) novosErros.seriePretendida = 'Série pretendida é obrigatória';
        if (!formData.turnoPreferencia) novosErros.turnoPreferencia = 'Turno de preferência é obrigatório';
        if (!formData.escolaAtual?.trim()) novosErros.escolaAtual = 'Nome da escola atual é obrigatório';
        if (!formData.tipoEscola) novosErros.tipoEscola = 'Tipo de escola é obrigatório';
        if (!formData.dataNascimento) novosErros.dataNascimento = 'Data de nascimento é obrigatória';
        break;
        
      case 2: // Histórico Acadêmico
        if (!formData.repetente) novosErros.repetente = 'Esta informação é obrigatória';
        if (!formData.dificuldadeAprendizagem) novosErros.dificuldadeAprendizagem = 'Esta informação é obrigatória';
        if (!formData.atendimentoEducacional) novosErros.atendimentoEducacional = 'Esta informação é obrigatória';
        // Validar upload de boletim se for repetente
        if (formData.repetente === 'Sim' && !formData.boletimEscolar) {
          novosErros.boletimEscolar = 'O upload do boletim é obrigatório para alunos repetentes';
        }
        break;
        
      case 3: // Desenvolvimento e Comportamento
        if (!formData.dificuldadeAtencao) novosErros.dificuldadeAtencao = 'Esta informação é obrigatória';
        if (!formData.diagnosticoTranstorno) novosErros.diagnosticoTranstorno = 'Esta informação é obrigatória';
        if (!formData.dificuldadeSocializacao) novosErros.dificuldadeSocializacao = 'Esta informação é obrigatória';
        break;
        
      case 4: // Saúde e Apoio
        if (!formData.usoMedicacao) novosErros.usoMedicacao = 'Esta informação é obrigatória';
        if (!formData.laudoMedico) novosErros.laudoMedico = 'Esta informação é obrigatória';
        break;
        
      case 5: // Avaliação de Identidade
        // Só valida áudio se o aluno for do 6º ano em diante
        const seriesQueExigemAudio = ['6º ano', '7º ano', '8º ano', '9º ano', '1º Médio', '2º Médio', '3º Médio'];
        if (
          seriesQueExigemAudio.includes(formData.seriePretendida) && 
          !formData.audioHistoria
        ) {
          novosErros.audioHistoria = 'A gravação de áudio é obrigatória para alunos do 6º ano em diante';
        }
        break;
        
      case 6: // Consentimento
        if (!formData.entrevistaDesejada) novosErros.entrevistaDesejada = 'É necessário escolher uma opção';
        if (!formData.consentimento) novosErros.consentimento = 'Você precisa declarar que as informações são verdadeiras';
        break;
    }
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };
  
  const avancarEtapa = () => {
    const eValido = validarEtapaAtual();
    if (eValido) {
      if (etapaAtual < etapas.length - 1) {
        setEtapaAtual(etapaAtual + 1);
        window.scrollTo(0, 0);
      }
    } else {
      // Exibe um toast com mensagem de erro
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os erros antes de prosseguir.",
        variant: "destructive"
      });
    }
  };
  
  const voltarEtapa = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const enviarFormulario = async () => {
    const eValido = validarEtapaAtual();
    
    if (!eValido) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os erros antes de enviar.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Calcula a pontuação baseada nas respostas
      const score = calculateScore(formData);
      const { necessaria, sugerida } = getEntrevistaStatus(score);
      
      // Preparar os dados para envio
      const formDataToSend = new FormData();
      
      // Adiciona todos os campos do formulário
      Object.keys(formData).forEach(key => {
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else if (typeof formData[key] !== 'undefined' && formData[key] !== null) {
          formDataToSend.append(key, String(formData[key]));
        }
      });
      
      // Adiciona os campos de pontuação
      formDataToSend.append('score', String(score));
      formDataToSend.append('entrevista_necessaria', String(necessaria));
      formDataToSend.append('entrevista_sugerida', String(sugerida));
      
      // Envia para o webhook
      const response = await fetch('https://n8n.colegiozampieri.com/webhook/recebe-form', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Falha ao enviar os dados');
      }
      
      // Exibe mensagem de sucesso
      setShowSuccessMessage(true);
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar o formulário. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderizarEtapa = () => {
    switch (etapaAtual) {
      case 0:
        return (
          <DadosResponsavel 
            formData={formData} 
            erros={erros} 
            onChange={handleChange} 
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <DadosAluno 
            formData={formData} 
            erros={erros} 
            onChange={handleChange} 
            handleRadioChange={handleRadioChange}
          />
        );
      case 2:
        return (
          <HistoricoAcademico 
            formData={formData} 
            erros={erros} 
            onChange={handleChange} 
            handleRadioChange={handleRadioChange}
          />
        );
      case 3:
        return (
          <Desenvolvimento 
            formData={formData} 
            erros={erros}
            handleRadioChange={handleRadioChange}
          />
        );
      case 4:
        return (
          <Saude 
            formData={formData} 
            erros={erros}
            handleRadioChange={handleRadioChange}
          />
        );
      case 5:
        return (
          <AvaliacaoIdentidade 
            formData={formData} 
            erros={erros} 
            onChange={handleChange}
          />
        );
      case 6:
        return (
          <Consentimento 
            formData={formData} 
            erros={erros} 
            onChange={handleChange}
            handleRadioChange={handleRadioChange}
          />
        );
      default:
        return null;
    }
  };
  
  if (showSuccessMessage) {
    return (
      <Card className="wizard-container mx-auto my-8 bg-white shadow-lg">
        <CardContent className="pt-10 pb-10">
          <div className="text-center">
            <div className="bg-green-100 text-green-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Formulário enviado com sucesso!</h2>
            <p className="mb-6 text-gray-600">
              Obrigado por completar a pré-matrícula do Colégio Zampieri. Nossa equipe entrará em contato em breve.
            </p>
            <Button onClick={() => window.location.reload()} className="bg-primary hover:bg-blue-700">
              Preencher novo formulário
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="wizard-container mx-auto my-8 bg-white shadow-lg">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-2xl text-center font-medium">
          Pré-matrícula – Colégio Zampieri
        </CardTitle>
      </CardHeader>
      
      <div className="p-4 bg-blue-50">
        <div className="flex justify-between text-xs text-blue-700 mb-1">
          <span>Etapa {etapaAtual + 1} de {etapas.length}</span>
          <span>{Math.round(((etapaAtual + 1) / etapas.length) * 100)}%</span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full progress-bar" 
            style={{width: `${((etapaAtual + 1) / etapas.length) * 100}%`}}
          ></div>
        </div>
        <h2 className="font-medium text-blue-900 mt-2">{etapas[etapaAtual]}</h2>
      </div>
      
      <CardContent className="pt-6 form-section">
        <div className="slide-in">
          {renderizarEtapa()}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        {etapaAtual > 0 ? (
          <Button 
            variant="outline" 
            onClick={voltarEtapa}
            disabled={isSubmitting}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Voltar
          </Button>
        ) : (
          <div></div> // Espaço vazio para manter o layout com justify-between
        )}
        
        {etapaAtual < etapas.length - 1 ? (
          <Button 
            onClick={avancarEtapa} 
            className="bg-primary hover:bg-blue-700 flex items-center gap-1"
          >
            Avançar <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={enviarFormulario} 
            className="bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Finalizar e enviar"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FormWizard;
