
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SaudeProps {
  formData: any;
  erros: Record<string, string>;
  handleRadioChange: (nome: string, valor: string) => void;
}

const Saude: React.FC<SaudeProps> = ({ formData, erros, handleRadioChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Saúde e Apoio</h3>
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-medium">Uso contínuo de medicação?</Label>
          <RadioGroup 
            value={formData.usoMedicacao || ""} 
            onValueChange={(value) => handleRadioChange("usoMedicacao", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Sim" id="medicacao-sim" />
              <Label htmlFor="medicacao-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Não" id="medicacao-nao" />
              <Label htmlFor="medicacao-nao">Não</Label>
            </div>
          </RadioGroup>
          {erros.usoMedicacao && <p className="text-destructive text-xs mt-1">{erros.usoMedicacao}</p>}
        </div>
      </div>
    </div>
  );
};

export default Saude;
