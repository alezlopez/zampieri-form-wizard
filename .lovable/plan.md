

## Plano: Filtro de Vagas por Série e Turno

### Objetivo
Implementar um sistema de controle de vagas que mostre claramente quais combinações de série/turno estão disponíveis ou esgotadas, impedindo a seleção de opções sem vagas.

### Configuração de Vagas (baseado nas informações fornecidas)

| Série | Manhã | Tarde |
|-------|-------|-------|
| Pré | Disponível | Disponível |
| 1º ano | Esgotado | Disponível |
| 2º ano | Esgotado | Disponível |
| 3º ano | Esgotado | Disponível |
| 4º ano | Esgotado | Disponível |
| 5º ano | Disponível | Disponível |
| 6º ano | Esgotado | Esgotado |
| 7º ano | Esgotado | Disponível |
| 8º ano | Esgotado | Esgotado |
| 9º ano | Disponível | Disponível |
| 1º Médio | Esgotado | Esgotado |
| 2º Médio | Disponível | Disponível |
| 3º Médio | Disponível | Disponível |

### Comportamento do Formulário

1. **Seleção de Série**
   - Séries completamente esgotadas (6º ano, 8º ano, 1º Médio) aparecem desabilitadas com texto "(Vagas esgotadas)"
   - Séries com pelo menos um turno disponível podem ser selecionadas normalmente

2. **Seleção de Turno**
   - Após selecionar a série, os turnos esgotados ficam desabilitados
   - Mostra texto "(Esgotado)" ao lado do turno sem vagas
   - Se o usuário tinha selecionado um turno que fica esgotado ao mudar de série, limpa a seleção

3. **Feedback Visual**
   - Opções esgotadas em cinza com texto explicativo
   - Cursor não-permitido nas opções desabilitadas

---

### Detalhes Técnicos

**Arquivo:** `src/components/wizard/DadosAluno.tsx`

**Alterações:**

1. Criar estrutura de dados para controle de vagas:
```typescript
const vagasDisponiveis: Record<string, { manha: boolean; tarde: boolean }> = {
  "Pré": { manha: true, tarde: true },
  "1º ano": { manha: false, tarde: true },
  "2º ano": { manha: false, tarde: true },
  // ... demais séries
};
```

2. Função auxiliar para verificar disponibilidade:
```typescript
const serieTemVaga = (serie: string) => {
  const vagas = vagasDisponiveis[serie];
  return vagas?.manha || vagas?.tarde;
};

const turnoDisponivel = (serie: string, turno: string) => {
  const vagas = vagasDisponiveis[serie];
  if (!vagas) return true;
  return turno === "Manhã" ? vagas.manha : vagas.tarde;
};
```

3. Atualizar Select de séries para mostrar status e desabilitar esgotadas

4. Atualizar RadioGroup de turnos para desabilitar opções esgotadas

5. Adicionar efeito para limpar turno selecionado quando mudar de série e o turno não estiver disponível

---

### Resumo das Mudanças

| Arquivo | Alteração |
|---------|-----------|
| `src/components/wizard/DadosAluno.tsx` | Adicionar lógica de vagas, feedback visual e validação |

