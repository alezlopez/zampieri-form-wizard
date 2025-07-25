
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface HistoricoAcademicoProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioChange: (nome: string, valor: string) => void;
}

const HistoricoAcademico: React.FC<HistoricoAcademicoProps> = ({ formData, erros, onChange, handleRadioChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Histórico Acadêmico e Aprendizagem</h3>
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-medium">O aluno(a) já repetiu algum ano escolar?</Label>
          <RadioGroup 
            value={formData.repetente || ""} 
            onValueChange={(value) => handleRadioChange("repetente", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="repetente-sim" />
              <Label htmlFor="repetente-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="repetente-nao" />
              <Label htmlFor="repetente-nao">Não</Label>
            </div>
          </RadioGroup>
          {erros.repetente && <p className="text-destructive text-xs mt-1">{erros.repetente}</p>}
        </div>
        
        {formData.seriePretendida !== 'Pré' && (
          <div>
            <Label htmlFor="boletimEscolar" className="text-sm font-medium">
              Upload do boletim escolar
            </Label>
            <Input
              id="boletimEscolar"
              name="boletimEscolar"
              type="file"
              onChange={onChange}
              className={`mt-1 ${erros.boletimEscolar ? "input-error" : ""}`}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            {erros.boletimEscolar && <p className="text-destructive text-xs mt-1">{erros.boletimEscolar}</p>}
            <p className="text-xs text-muted-foreground mt-1">
              Formatos aceitos: PDF, JPG, JPEG, PNG. Tamanho máximo: 10MB.
            </p>
          </div>
        )}
        
        <div>
          <Label className="text-sm font-medium">
            Percebe alguma dificuldade em leitura, escrita ou matemática?
          </Label>
          <RadioGroup 
            value={formData.dificuldadeAprendizagem || ""} 
            onValueChange={(value) => handleRadioChange("dificuldadeAprendizagem", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="dificuldade-sim" />
              <Label htmlFor="dificuldade-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="dificuldade-nao" />
              <Label htmlFor="dificuldade-nao">Não</Label>
            </div>
          </RadioGroup>
          {erros.dificuldadeAprendizagem && <p className="text-destructive text-xs mt-1">{erros.dificuldadeAprendizagem}</p>}
        </div>
        
        <div>
          <Label className="text-sm font-medium">
            O aluno já recebeu algum tipo de atendimento educacional complementar?
          </Label>
          <RadioGroup 
            value={formData.atendimentoEducacional || ""} 
            onValueChange={(value) => handleRadioChange("atendimentoEducacional", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Reforço escolar" id="atendimento-reforco" />
              <Label htmlFor="atendimento-reforco">Reforço escolar</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Psicopedagógico" id="atendimento-psicopedagogico" />
              <Label htmlFor="atendimento-psicopedagogico">Psicopedagógico</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Fonoaudiólogo / Psicólogo" id="atendimento-fono" />
              <Label htmlFor="atendimento-fono">Fonoaudiólogo / Psicólogo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Nenhum" id="atendimento-nenhum" />
              <Label htmlFor="atendimento-nenhum">Nenhum</Label>
            </div>
          </RadioGroup>
          {erros.atendimentoEducacional && <p className="text-destructive text-xs mt-1">{erros.atendimentoEducacional}</p>}
        </div>
      </div>
    </div>
  );
};

export default HistoricoAcademico;
