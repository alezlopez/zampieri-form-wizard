
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface ConsentimentoProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioChange: (nome: string, valor: string) => void;
}

const Consentimento: React.FC<ConsentimentoProps> = ({ formData, erros, onChange, handleRadioChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Consentimento</h3>
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-medium">
            Deseja agendar uma entrevista pedagógica com a escola?
          </Label>
          <RadioGroup 
            value={formData.entrevistaDesejada || ""} 
            onValueChange={(value) => handleRadioChange("entrevistaDesejada", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="entrevista-sim" />
              <Label htmlFor="entrevista-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="entrevista-nao" />
              <Label htmlFor="entrevista-nao">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="A escola pode decidir" id="entrevista-escola" />
              <Label htmlFor="entrevista-escola">A escola pode decidir</Label>
            </div>
          </RadioGroup>
          {erros.entrevistaDesejada && <p className="text-destructive text-xs mt-1">{erros.entrevistaDesejada}</p>}
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="consentimento" 
            checked={formData.consentimento || false}
            onCheckedChange={(checked) => {
              handleRadioChange("consentimento", checked ? "true" : "false");
            }}
            className={erros.consentimento ? "border-destructive" : ""}
          />
          <div className="space-y-1 leading-none">
            <Label htmlFor="consentimento" className="text-sm font-medium">
              Declaro que todas as informações fornecidas são verdadeiras e foram preenchidas de forma responsável.
            </Label>
            {erros.consentimento && <p className="text-destructive text-xs">{erros.consentimento}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consentimento;
