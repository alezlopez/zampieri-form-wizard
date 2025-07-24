
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface DesenvolvimentoProps {
  formData: any;
  erros: Record<string, string>;
  handleRadioChange: (nome: string, valor: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Desenvolvimento: React.FC<DesenvolvimentoProps> = ({ formData, erros, handleRadioChange, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Desenvolvimento e Comportamento</h3>
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-medium">Apresenta dificuldade de atenção?</Label>
          <RadioGroup 
            value={formData.dificuldadeAtencao || ""} 
            onValueChange={(value) => handleRadioChange("dificuldadeAtencao", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="atencao-sim" />
              <Label htmlFor="atencao-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="atencao-nao" />
              <Label htmlFor="atencao-nao">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Às vezes" id="atencao-as-vezes" />
              <Label htmlFor="atencao-as-vezes">Às vezes</Label>
            </div>
          </RadioGroup>
          {erros.dificuldadeAtencao && <p className="text-destructive text-xs mt-1">{erros.dificuldadeAtencao}</p>}
        </div>
        
        <div>
          <Label className="text-sm font-medium">
            Há diagnóstico ou suspeita de transtornos (TDAH, TEA, Dislexia, etc.)?
          </Label>
          <RadioGroup 
            value={formData.diagnosticoTranstorno || ""} 
            onValueChange={(value) => handleRadioChange("diagnosticoTranstorno", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim (diagnosticado)" id="transtorno-sim" />
              <Label htmlFor="transtorno-sim">Sim (diagnosticado)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim (em avaliação)" id="transtorno-avaliacao" />
              <Label htmlFor="transtorno-avaliacao">Sim (em avaliação)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="transtorno-nao" />
              <Label htmlFor="transtorno-nao">Não</Label>
            </div>
          </RadioGroup>
          {erros.diagnosticoTranstorno && <p className="text-destructive text-xs mt-1">{erros.diagnosticoTranstorno}</p>}
        </div>
        
        {formData.diagnosticoTranstorno === 'Sim (diagnosticado)' && (
          <div>
            <Label htmlFor="laudoMedico" className="text-sm font-medium">
              Upload do laudo médico
            </Label>
            <Input
              id="laudoMedico"
              name="laudoMedico"
              type="file"
              onChange={onChange}
              className={`mt-1 ${erros.laudoMedicoArquivo ? "input-error" : ""}`}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            {erros.laudoMedicoArquivo && <p className="text-destructive text-xs mt-1">{erros.laudoMedicoArquivo}</p>}
            <p className="text-xs text-muted-foreground mt-1">
              Formatos aceitos: PDF, JPG, JPEG, PNG. Tamanho máximo: 10MB.
            </p>
          </div>
        )}
        
        {formData.diagnosticoTranstorno === 'Sim (em avaliação)' && (
          <div>
            <Label htmlFor="laudoMedico" className="text-sm font-medium">
              Upload do relatório de avaliação
            </Label>
            <Input
              id="laudoMedico"
              name="laudoMedico"
              type="file"
              onChange={onChange}
              className={`mt-1 ${erros.laudoMedico ? "input-error" : ""}`}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            {erros.laudoMedico && <p className="text-destructive text-xs mt-1">{erros.laudoMedico}</p>}
            <p className="text-xs text-muted-foreground mt-1">
              Formatos aceitos: PDF, JPG, JPEG, PNG. Tamanho máximo: 10MB.
            </p>
          </div>
        )}
        
        <div>
          <Label className="text-sm font-medium">Dificuldade de socialização?</Label>
          <RadioGroup 
            value={formData.dificuldadeSocializacao || ""} 
            onValueChange={(value) => handleRadioChange("dificuldadeSocializacao", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="socializacao-sim" />
              <Label htmlFor="socializacao-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="socializacao-nao" />
              <Label htmlFor="socializacao-nao">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Em algumas situações" id="socializacao-algumas" />
              <Label htmlFor="socializacao-algumas">Em algumas situações</Label>
            </div>
          </RadioGroup>
          {erros.dificuldadeSocializacao && <p className="text-destructive text-xs mt-1">{erros.dificuldadeSocializacao}</p>}
        </div>
      </div>
    </div>
  );
};

export default Desenvolvimento;
