
import React, { useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface DadosAlunoProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleRadioChange: (nome: string, valor: string) => void;
}

// Configuração de vagas disponíveis por série e turno
const vagasDisponiveis: Record<string, { manha: boolean; tarde: boolean }> = {
  "Pré": { manha: true, tarde: true },
  "1º ano": { manha: false, tarde: true },
  "2º ano": { manha: false, tarde: true },
  "3º ano": { manha: false, tarde: true },
  "4º ano": { manha: false, tarde: true },
  "5º ano": { manha: true, tarde: true },
  "6º ano": { manha: false, tarde: false },
  "7º ano": { manha: false, tarde: true },
  "8º ano": { manha: false, tarde: false },
  "9º ano": { manha: true, tarde: true },
  "1º Médio": { manha: false, tarde: false },
  "2º Médio": { manha: true, tarde: true },
  "3º Médio": { manha: true, tarde: true },
};

// Verifica se a série tem pelo menos um turno disponível
const serieTemVaga = (serie: string): boolean => {
  const vagas = vagasDisponiveis[serie];
  return vagas?.manha || vagas?.tarde;
};

// Verifica se o turno está disponível para a série selecionada
const turnoDisponivel = (serie: string, turno: string): boolean => {
  const vagas = vagasDisponiveis[serie];
  if (!vagas) return true;
  return turno === "Manhã" ? vagas.manha : vagas.tarde;
};

const DadosAluno: React.FC<DadosAlunoProps> = ({ formData, erros, onChange, handleRadioChange }) => {
  const seriesDisponiveis = [
    "Pré", "1º ano", "2º ano", "3º ano", "4º ano", "5º ano",
    "6º ano", "7º ano", "8º ano", "9º ano",
    "1º Médio", "2º Médio", "3º Médio"
  ];

  // Limpa o turno se ele não estiver disponível para a série selecionada
  useEffect(() => {
    if (formData.seriePretendida && formData.turnoPreferencia) {
      if (!turnoDisponivel(formData.seriePretendida, formData.turnoPreferencia)) {
        handleRadioChange("turnoPreferencia", "");
      }
    }
  }, [formData.seriePretendida]);

  const formatarData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formattedDate = '';
    
    if (input.length <= 2) {
      formattedDate = input;
    } else if (input.length <= 4) {
      formattedDate = `${input.substring(0, 2)}/${input.substring(2)}`;
    } else if (input.length <= 8) {
      formattedDate = `${input.substring(0, 2)}/${input.substring(2, 4)}/${input.substring(4)}`;
    } else {
      formattedDate = `${input.substring(0, 2)}/${input.substring(2, 4)}/${input.substring(4, 8)}`;
    }
    
    e.target.value = formattedDate;
    onChange(e);
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Informações do Aluno</h3>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="nomeAluno" className="text-sm font-medium">
            Nome completo do aluno
          </Label>
          <Input
            id="nomeAluno"
            name="nomeAluno"
            value={formData.nomeAluno || ''}
            onChange={onChange}
            className={erros.nomeAluno ? "input-error" : ""}
            placeholder="Digite o nome completo"
          />
          {erros.nomeAluno && <p className="text-destructive text-xs mt-1">{erros.nomeAluno}</p>}
        </div>
        
        <div>
          <Label htmlFor="dataNascimento" className="text-sm font-medium">
            Data de nascimento
          </Label>
          <Input
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento || ''}
            onChange={formatarData}
            className={erros.dataNascimento ? "input-error" : ""}
            placeholder="DD/MM/AAAA"
            maxLength={10}
          />
          {erros.dataNascimento && <p className="text-destructive text-xs mt-1">{erros.dataNascimento}</p>}
        </div>
        
        <div>
          <Label htmlFor="seriePretendida" className="text-sm font-medium">
            Série pretendida
          </Label>
          <Select 
            name="seriePretendida" 
            value={formData.seriePretendida || ""} 
            onValueChange={(value) => handleRadioChange("seriePretendida", value)}
          >
            <SelectTrigger className={erros.seriePretendida ? "input-error" : ""}>
              <SelectValue placeholder="Selecione a série" />
            </SelectTrigger>
            <SelectContent>
              {seriesDisponiveis.map((serie) => (
                <SelectItem key={serie} value={serie}>
                  {serie}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {erros.seriePretendida && <p className="text-destructive text-xs mt-1">{erros.seriePretendida}</p>}
        </div>
        
        <div>
          <Label className="text-sm font-medium">Turno de preferência</Label>
          <RadioGroup 
            value={formData.turnoPreferencia || ""} 
            onValueChange={(value) => handleRadioChange("turnoPreferencia", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Manhã" id="turno-manha" />
              <Label htmlFor="turno-manha">Manhã</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Tarde" id="turno-tarde" />
              <Label htmlFor="turno-tarde">Tarde</Label>
            </div>
          </RadioGroup>
          {erros.turnoPreferencia && <p className="text-destructive text-xs mt-1">{erros.turnoPreferencia}</p>}
        </div>
        
        <div>
          <Label htmlFor="escolaAtual" className="text-sm font-medium">
            Nome da escola atual
          </Label>
          <Input
            id="escolaAtual"
            name="escolaAtual"
            value={formData.escolaAtual || ''}
            onChange={onChange}
            className={erros.escolaAtual ? "input-error" : ""}
            placeholder="Digite o nome da escola atual"
          />
          {erros.escolaAtual && <p className="text-destructive text-xs mt-1">{erros.escolaAtual}</p>}
        </div>
        
        <div>
          <Label className="text-sm font-medium">Tipo de escola</Label>
          <RadioGroup 
            value={formData.tipoEscola || ""} 
            onValueChange={(value) => handleRadioChange("tipoEscola", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Pública" id="escola-publica" />
              <Label htmlFor="escola-publica">Pública</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Privada" id="escola-privada" />
              <Label htmlFor="escola-privada">Privada</Label>
            </div>
          </RadioGroup>
          {erros.tipoEscola && <p className="text-destructive text-xs mt-1">{erros.tipoEscola}</p>}
        </div>
      </div>
    </div>
  );
};

export default DadosAluno;
