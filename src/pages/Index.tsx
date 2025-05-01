
import FormWizard from "@/components/FormWizard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Colégio Zampieri</h1>
          <p className="text-gray-600 mt-2">Formulário de Pré-matrícula</p>
        </div>
        
        <FormWizard />
      </div>
    </div>
  );
};

export default Index;
