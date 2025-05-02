
import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AvaliacaoIdentidadeProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AvaliacaoIdentidade: React.FC<AvaliacaoIdentidadeProps> = ({ formData, erros, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Avaliação de Identidade</h3>
      <Alert className="bg-green-50 border-green-200">
        <AlertDescription>
          Esta etapa não é necessária para o processo de pré-matrícula.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AvaliacaoIdentidade;
