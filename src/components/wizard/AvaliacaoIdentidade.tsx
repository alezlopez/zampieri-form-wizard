
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AvaliacaoIdentidadeProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AvaliacaoIdentidade: React.FC<AvaliacaoIdentidadeProps> = ({ formData, erros, onChange }) => {
  // Verificar se o aluno é do 6º ano em diante
  const seriesQueExigemAudio = ['6º ano', '7º ano', '8º ano', '9º ano', '1º Médio', '2º Médio', '3º Médio'];
  const precisaAudio = seriesQueExigemAudio.includes(formData.seriePretendida);
  
  if (!precisaAudio) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Avaliação de Identidade</h3>
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription>
            Esta etapa não é necessária para alunos até o 5º ano do ensino fundamental.
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Avaliação de Identidade</h3>
      
      <div className="space-y-5">
        <div>
          <Label htmlFor="audioHistoria" className="text-sm font-medium">
            Para alunos do 6º ano em diante - Grave um áudio contando uma pequena história
          </Label>
          <p className="text-muted-foreground text-xs mt-1 mb-3">
            Peça ao aluno para contar uma história com começo, meio e fim. Pode ser uma história real de algo 
            que viveu ou algo inventado. A gravação deve ser feita com a própria voz do aluno.
          </p>
          <Input
            id="audioHistoria"
            name="audioHistoria"
            type="file"
            onChange={onChange}
            className={erros.audioHistoria ? "input-error" : ""}
            accept="audio/*"
          />
          {erros.audioHistoria && <p className="text-destructive text-xs mt-1">{erros.audioHistoria}</p>}
          <p className="text-xs text-muted-foreground mt-1">
            Formato de áudio. Tamanho máximo: 10MB. Duração máxima: 2 minutos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvaliacaoIdentidade;
