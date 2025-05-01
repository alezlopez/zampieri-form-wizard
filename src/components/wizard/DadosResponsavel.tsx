
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCpf, formatWhatsApp, validateCpf } from '@/utils/validations';

interface DadosResponsavelProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const DadosResponsavel: React.FC<DadosResponsavelProps> = ({ formData, erros, onChange, setFormData }) => {
  
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpfFormatado = formatCpf(e.target.value);
    
    // Atualiza no formulário
    e.target.value = cpfFormatado;
    onChange(e);
    
    // Valida CPF quando tiver 14 caracteres (incluindo pontos e hífen)
    if (cpfFormatado.length === 14) {
      const cpfValido = validateCpf(cpfFormatado);
      setFormData({
        ...formData,
        cpf: cpfFormatado,
        cpfInvalido: !cpfValido
      });
    } else {
      setFormData({
        ...formData,
        cpf: cpfFormatado,
        cpfInvalido: false
      });
    }
  };
  
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const whatsappFormatado = formatWhatsApp(e.target.value);
    e.target.value = whatsappFormatado;
    onChange(e);
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Informações do Responsável</h3>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="nomeResponsavel" className="text-sm font-medium">
            Nome completo do responsável
          </Label>
          <Input
            id="nomeResponsavel"
            name="nomeResponsavel"
            value={formData.nomeResponsavel || ''}
            onChange={onChange}
            className={erros.nomeResponsavel ? "input-error" : ""}
            placeholder="Digite o nome completo"
          />
          {erros.nomeResponsavel && <p className="text-destructive text-xs mt-1">{erros.nomeResponsavel}</p>}
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            E-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={onChange}
            className={erros.email ? "input-error" : ""}
            placeholder="Digite seu e-mail"
          />
          {erros.email && <p className="text-destructive text-xs mt-1">{erros.email}</p>}
        </div>
        
        <div>
          <Label htmlFor="cpf" className="text-sm font-medium">
            CPF
          </Label>
          <Input
            id="cpf"
            name="cpf"
            value={formData.cpf || ''}
            onChange={handleCpfChange}
            className={erros.cpf || formData.cpfInvalido ? "input-error" : ""}
            placeholder="000.000.000-00"
            maxLength={14}
          />
          {formData.cpfInvalido && !erros.cpf && (
            <p className="text-destructive text-xs mt-1">CPF inválido</p>
          )}
          {erros.cpf && <p className="text-destructive text-xs mt-1">{erros.cpf}</p>}
        </div>
        
        <div>
          <Label htmlFor="whatsapp" className="text-sm font-medium">
            Número de WhatsApp
          </Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp || '+55 '}
            onChange={handleWhatsAppChange}
            className={erros.whatsapp ? "input-error" : ""}
            placeholder="+55 (00) 00000-0000"
          />
          {erros.whatsapp && <p className="text-destructive text-xs mt-1">{erros.whatsapp}</p>}
        </div>
      </div>
    </div>
  );
};

export default DadosResponsavel;
