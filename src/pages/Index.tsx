
import FormWizard from "@/components/FormWizard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/f311d13f-56f6-4a2f-8ecc-a64bde1010f6.png" 
              alt="Colégio Zampieri" 
              className="h-24 md:h-32"
            />
          </div>
          <h1 className="text-3xl font-bold text-green-800">Colégio Zampieri</h1>
          <p className="text-gray-600 mt-2">Formulário de Pré-matrícula</p>
          
          <div className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-700 bg-white p-4 rounded-lg border border-green-100 shadow-sm">
            Este formulário tem como objetivo coletar informações detalhadas sobre o aluno(a) para dar início ao processo de matrícula.
            Através dessas informações, nossa equipe pedagógica poderá oferecer um atendimento mais humanizado e personalizado.
          </div>
        </div>
        
        <FormWizard />
      </div>
    </div>
  );
};

export default Index;
