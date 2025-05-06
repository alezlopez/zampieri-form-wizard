
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ConsentimentoProps {
  formData: any;
  erros: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioChange: (nome: string, valor: string) => void;
}

const ConsentimentoTermos = () => (
  <ScrollArea className="h-[400px] pr-4">
    <div className="text-sm">
      <h4 className="font-bold text-base mb-3">POLÍTICA DE PRIVACIDADE</h4>
      <p className="mb-3">Este site é mantido e operado por ESCOLINHA DE EDUCAÇÃO INFANTIL PINGO DE OURO LTDA, CNPJ nº 55.704.506/0001-73</p>
      <p className="mb-3">Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</p>
      <p className="mb-3">Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:</p>
      <ul className="list-disc pl-5 mb-3">
        <li>Quem deve utilizar nosso site</li>
        <li>Quais dados coletamos e o que fazemos com eles;</li>
        <li>Seus direitos em relação aos seus dados pessoais; e</li>
        <li>Como entrar em contato conosco.</li>
      </ul>
      
      <h5 className="font-semibold mt-4 mb-2">1. Dados que coletamos e motivos da coleta</h5>
      <p className="mb-3">Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo com o disposto nesta seção.</p>
      <p className="font-semibold mb-1">1. Dados pessoais coletados</p>
      <p className="mb-2">Nós coletamos os seguintes dados pessoais de nossos usuários:</p>
      <ol className="list-[lower-alpha] pl-6 mb-3">
        <li>endereço IP;</li>
        <li>login, quando aplicado;</li>
        <li>ações efetuadas no Portal;</li>
        <li>ferramentas, funcionalidades e conteúdos acessados;</li>
        <li>datas e horários de cada ação e de acesso ao Portal;</li>
        <li>informações sobre o dispositivo utilizado, como versão de sistema operacional, navegador, e demais dados possíveis de serem coletados para garantir a prova de autoria e as obrigações resultantes das ações realizadas no ambiente;</li>
        <li>Session ID, quando disponível; ID de máquina, número de PIN e toda e qualquer informação necessária para a sua adequada identificação e autenticação.</li>
      </ol>
      <p className="mb-3">Além disso, usamos cookies, quando você visita nosso portal, para armazenar suas preferências pessoais quando navega na Internet. Todos os registros feitos poderão ser utilizados pelo Colégio, ou por quem de direito o representar, para o cumprimento das obrigações acordadas, para resguardar direitos, na hipótese de defesa em atos antiéticos, ilícitos ou contrários aos Termos de Uso cometidos pelo usuário ou por terceiro, ou ainda de alterações indevidas em seus sistemas e cadastros, ou ações que possam colocar em risco o Portal. O Colégio compromete-se a colaborar com as autoridades. Outras tecnologias poderão ser utilizadas para a obtenção de dados de navegação. No entanto, respeitarão sempre os termos desta política e as suas opções a respeito de sua coleta e armazenamento, de acordo com as leis em vigor. O Colégio se exime de qualquer responsabilidade sobre a veracidade das informações prestadas, o tipo de dados armazenados que sejam fornecidos por seus usuários, bem como sobre conteúdos inseridos pelo próprio usuário ou por terceiro.</p>
      
      <p className="mb-2">A coleta destes dados ocorre nos seguintes momentos:</p>
      <p className="mb-3">Seus dados são obtidos quando VOCÊ insere as suas informações voluntariamente no Portal, via cadastro, bem como na interação com as ferramentas existentes de coleta de dados de navegação, frequência de acesso ou quando VOCÊ realiza contato direto por meio dos canais disponíveis via Portal.</p>
      
      <p className="mb-2">Estes dados são coletados com as seguintes finalidades:</p>
      <ol className="list-[lower-alpha] pl-6 mb-3">
        <li>identificá-lo e autenticá-lo no seu acesso ao Portal;</li>
        <li>responder às eventuais dúvidas e solicitações;</li>
        <li>cumprir ordem legal ou judicial;</li>
        <li>constituir, defender ou exercer regularmente direitos em âmbito judicial ou administrativo;</li>
        <li>garantir a sua segurança e a dos administradores;</li>
        <li>manter atualizados os cadastros dos seus dados e dos dados dos administradores para fins de contato por telefone fixo, celular, correio eletrônico, SMS, mala direta, redes sociais ou por outros meios de comunicação existentes ou que se inventem no futuro;</li>
        <li>promover os serviços do Colégio Zampieri, bem como de nossos parceiros, e informar sobre novidades, funcionalidades, conteúdos, notícias e demais informações relevantes para a manutenção do nosso relacionamento com VOCÊ;</li>
        <li>gerar análises e estudos educacionais e sociais, sejam estatísticos ou identificáveis, com base no seu comportamento de navegação no Portal;</li>
        <li>prestar informações aos órgãos reguladores e aos responsáveis legais de nossos alunos;</li>
        <li>aperfeiçoar o uso e a experiência interativa durante a sua navegação no Portal.</li>
        <li>alimentar o banco de dados do Colégio Zampieri com a base de dados formada por meio da coleta de dados no Portal é de propriedade e responsabilidade do Colégio Zampieri e não será compartilhada, vendida, cedida, transferida, informada ou alugada a terceiros.</li>
      </ol>
      
      <p className="font-semibold mb-1">2. Dados sensíveis</p>
      <p className="mb-3">Não serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles definidos nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, não haverá coleta de dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</p>

      <p className="font-semibold mb-1">3. Dados de crianças e adolescentes</p>
      <p className="mb-2">Nós coletamos os seguintes dados de crianças e adolescentes:</p>
      <ol className="list-[lower-alpha] pl-6 mb-3">
        <li>endereço IP;</li>
        <li>login, quando aplicado;</li>
        <li>ações efetuadas no Portal;</li>
        <li>ferramentas, funcionalidades e conteúdos acessados;</li>
        <li>datas e horários de cada ação e de acesso ao Portal;</li>
        <li>informações sobre o dispositivo utilizado, como versão de sistema operacional, navegador, e demais dados possíveis de serem coletados para garantir a prova de autoria e as obrigações resultantes das ações realizadas no ambiente;</li>
        <li>Session ID, quando disponível; ID de máquina, número de PIN e toda e qualquer informação necessária para a sua adequada identificação e autenticação.</li>
      </ol>
      
      <p className="mb-2">A coleta de dados de crianças e adolescentes acontece nos seguintes momentos:</p>
      <p className="mb-3">Seus dados são obtidos quando VOCÊ insere as suas informações voluntariamente no Portal, via cadastro, bem como na interação com as ferramentas existentes de coleta de dados de navegação, frequência de acesso ou quando VOCÊ realiza contato direto por meio dos canais disponíveis via Portal.</p>
      
      <p className="mb-2">Os dados de crianças e de adolescentes que coletamos são utilizados exclusivamente com as seguintes finalidades:</p>
      <ol className="list-[lower-alpha] pl-6 mb-3">
        <li>identificá-lo e autenticá-lo no seu acesso ao Portal;</li>
        <li>responder às eventuais dúvidas e solicitações;</li>
        <li>cumprir ordem legal ou judicial;</li>
        <li>constituir, defender ou exercer regularmente direitos em âmbito judicial ou administrativo;</li>
        <li>garantir a sua segurança e a dos administradores;</li>
        <li>manter atualizados os cadastros dos seus dados e dos dados dos administradores para fins de contato por telefone fixo, celular, correio eletrônico, SMS, mala direta, redes sociais ou por outros meios de comunicação existentes ou que se inventem no futuro;</li>
        <li>promover os serviços do Colégio Zampieri, bem como de nossos parceiros, e informar sobre novidades, funcionalidades, conteúdos, notícias e demais informações relevantes para a manutenção do nosso relacionamento com VOCÊ;</li>
        <li>gerar análises e estudos educacionais e sociais, sejam estatísticos ou identificáveis, com base no seu comportamento de navegação no Portal;</li>
        <li>prestar informações aos órgãos reguladores e aos responsáveis legais de nossos alunos;</li>
        <li>aperfeiçoar o uso e a experiência interativa durante a sua navegação no Portal.</li>
        <li>alimentar o banco de dados do Colégio Zampieri com a base de dados formada por meio da coleta de dados no Portal é de propriedade e responsabilidade do Colégio Zampieri e não será compartilhada, vendida, cedida, transferida, informada ou alugada a terceiros.</li>
      </ol>
      
      <p className="mb-3">O tratamento de dados de crianças e adolescentes é realizado com base no melhor interesse da criança ou do adolescente.</p>
      
      <p className="font-semibold mb-1">4. Cookies</p>
      <p className="mb-3">Cookies são pequenos arquivos de texto baixados automaticamente em seu dispositivo quando você acessa e navega por um site. Eles servem, basicamente, para seja possível identificar dispositivos, atividades e preferências de usuários.</p>
      <p className="mb-3">Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do site.</p>
      
      <p className="font-semibold mb-1">a. Cookies do site</p>
      <p className="mb-3">Os cookies do site são aqueles enviados ao computador ou dispositivo do usuário e administrador exclusivamente pelo site.</p>
      <p className="mb-3">As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado.</p>
      
      <p className="font-semibold mb-1">b. Gestão de cookies</p>
      <p className="mb-3">O usuário poderá se opor ao registro de cookies pelo site, bastando que desative esta opção no seu próprio navegador. Mais informações sobre como fazer isso em alguns dos principais navegadores utilizados hoje podem ser acessadas a partir dos seguintes links:</p>
      
      <p>Internet Explorer:<br/>
      <a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" className="text-blue-600">https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies</a></p>
      
      <p>Safari:<br/>
      <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" className="text-blue-600">https://support.apple.com/pt-br/guide/safari/sfri11471/mac</a></p>
      
      <p>Google Chrome:<br/>
      <a href="https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt" target="_blank" className="text-blue-600">https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt</a></p>
      
      <p>Mozila Firefox:<br/>
      <a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" target="_blank" className="text-blue-600">https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam</a></p>
      
      <p className="mb-3">Opera:<br/>
      <a href="https://www.opera.com/help/tutorials/security/privacy/" target="_blank" className="text-blue-600">https://www.opera.com/help/tutorials/security/privacy/</a></p>
      
      <p className="mb-3">A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e funcionalidades do site, comprometendo seu correto e esperado funcionamento. Outra consequência possível é remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.</p>

      <p className="font-semibold mb-1">5. Coleta de dados não previstos expressamente</p>
      <p className="mb-3">Eventualmente, outros tipos de dados não previstos expressamente nesta Política de Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que a coleta seja permitida com fundamento em outra base legal prevista em lei.</p>
      <p className="mb-3">Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes serão informadas aos usuários do site.</p>
      
      <h5 className="font-semibold mt-4 mb-2">2. Compartilhamento de dados pessoais com terceiros</h5>
      <p className="mb-3">Nós compartilhamos alguns dos dados pessoais mencionados nesta seção com terceiros.</p>
      <p className="mb-3">Os dados compartilhados são os seguintes:</p>
      <p className="mb-3">O Colégio Zampieri não compartilha com terceiros, sem autorização expressa, dados sensíveis, como dados de saúde e frequência de seus alunos, exceto com os seus responsáveis legais. Informações que não permitem a identificação pessoal, especialmente dados navegacionais, poderão ser compartilhadas com terceiros para a emissão de relatórios. Caso quaisquer informações pessoais sejam processadas por empresas terceirizadas, deverão ser respeitadas as regras estipuladas nessa Política. Os dados obtidos somente poderão ser acessados por profissionais devidamente autorizados pelo Colégio, respeitando os princípios de proporcionalidade e necessidade, relevância para os objetivos do Colégio, bem como o compromisso de confidencialidade e preservação da privacidade dos dados pessoais.</p>
      <p className="mb-3">Estes dados são compartilhados pelas seguintes razões e para as seguintes finalidades:</p>
      <p className="mb-3">Informações que não permitem a identificação pessoal, especialmente dados navegacionais, poderão ser compartilhadas com terceiros para a emissão de relatórios e para fins comerciais e de estudo pelo Colégio. Caso quaisquer informações pessoais sejam processadas por empresas terceirizadas, deverão ser respeitadas as regras estipuladas nessa Política. Os dados obtidos somente poderão ser acessados por profissionais devidamente autorizados pelo Colégio, respeitando os princípios de proporcionalidade e necessidade, relevância para os objetivos do Colégio, bem como o compromisso de confidencialidade e preservação da privacidade dos dados pessoais</p>
      <p className="mb-3">Além das situações aqui informadas, é possível que compartilhemos dados com terceiros para cumprir alguma determinação legal ou regulatória, ou, ainda, para cumprir alguma ordem expedida por autoridade pública.</p>
      <p className="mb-3">Em qualquer caso, o compartilhamento de dados pessoais observará todas as leis e regras aplicáveis, buscando sempre garantir a segurança dos dados de nosso usuários, observados os padrões técnicos empregados no mercado.</p>
      
      <h5 className="font-semibold mt-4 mb-2">3. Por quanto tempo seus dados pessoais serão armazenados</h5>
      <p className="mb-3">Os dados pessoais coletados pelo site são armazenados e utilizados por período de tempo que corresponda ao necessário para atingir as finalidades elencadas neste documento e que considere os direitos de seus titulares, os direitos do controlador do site e as disposições legais ou regulatórias aplicáveis.</p>
      <p className="mb-3">Uma vez expirados os períodos de armazenamento dos dados pessoais, eles são removidos de nossas bases de dados ou anonimizados, salvo nos casos em que houver a possibilidade ou a necessidade de armazenamento em virtude de disposição legal ou regulatória.</p>
      
      <h5 className="font-semibold mt-4 mb-2">4. Bases legais para o tratamento de dados pessoais</h5>
      <p className="mb-3">Cada operação de tratamento de dados pessoais precisa ter um fundamento jurídico, ou seja, uma base legal, que nada mais é que uma justificativa que a autorize, prevista na Lei Geral de Proteção de Dados Pessoais.</p>
      <p className="mb-3">Todas as Nossas atividades de tratamento de dados pessoais possuem uma base legal que as fundamenta, dentre as permitidas pela legislação. Mais informações sobre as bases legais que utilizamos para operações de tratamento de dados pessoais específicas podem ser obtidas a partir de nossos canais de contato, informados ao final desta Política.</p>
      
      <h5 className="font-semibold mt-4 mb-2">5. Direitos do usuário</h5>
      <p className="mb-3">O usuário do site possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais:</p>
      <ul className="list-disc pl-5 mb-3">
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na lei;</li>
        <li>portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</li>
        <li>eliminação dos dados pessoais tratados com o consentimento do titular, exceto nos casos previstos em lei;</li>
        <li>informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
        <li>informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
        <li>revogação do consentimento.</li>
      </ul>
      <p className="mb-3">É importante destacar que, nos termos da LGPD, não existe um direito de eliminação de dados tratados com fundamento em bases legais distintas do consentimento, a menos que os dados sejam desnecessários, excessivos ou tratados em desconformidade com o previsto na lei.</p>
      
      <p className="font-semibold mb-1">1. Como o titular pode exercer seus direitos</p>
      <p className="mb-3">Para garantir que o usuário que pretende exercer seus direitos é, de fato, o titular dos dados pessoais objeto da requisição, poderemos solicitar documentos ou outras informações que possam auxiliar em sua correta identificação, a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente será feito, porém, se for absolutamente necessário, e o requerente receberá todas as informações relacionadas.</p>
      
      <h5 className="font-semibold mt-4 mb-2">6. Medidas de segurança no tratamento de dados pessoais</h5>
      <p className="mb-3">Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, extravio ou alteração desses dados.</p>
      <p className="mb-3">As medidas que utilizamos levam em consideração a natureza dos dados, o contexto e a finalidade do tratamento, os riscos que uma eventual violação geraria para os direitos e liberdades do usuário, e os padrões atualmente empregados no mercado por empresas semelhantes à nossa.</p>
      <p className="mb-3">Entre as medidas de segurança adotadas por nós, destacamos as seguintes:</p>
      <p className="mb-3">Armazenamento de dados criptografados</p>
      <p className="mb-3">Ainda que adote tudo o que está ao seu alcance para evitar incidentes de segurança, é possível que ocorra algum problema motivado exclusivamente por um terceiro - como em caso de ataques de hackers ou crackers ou, ainda, em caso de culpa exclusiva do usuário, que ocorre, por exemplo, quando ele mesmo transfere seus dados a terceiro. Assim, embora sejamos, em geral, responsáveis pelos dados pessoais que tratamos, nos eximimos de responsabilidade caso ocorra uma situação excepcional como essas, sobre as quais não temos nenhum tipo de controle.</p>
      <p className="mb-3">De qualquer forma, caso ocorra qualquer tipo de incidente de segurança que possa gerar risco ou dano relevante para qualquer de nossos usuários, comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados acerca do ocorrido, em conformidade com o disposto na Lei Geral de Proteção de Dados.</p>
      
      <h5 className="font-semibold mt-4 mb-2">7. Reclamação a uma autoridade de controle</h5>
      <p className="mb-3">Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os titulares de dados pessoais que se sentirem, de qualquer forma, lesados, podem apresentar reclamação à Autoridade Nacional de Proteção de Dados.</p>
      
      <h5 className="font-semibold mt-4 mb-2">8. Alterações nesta política</h5>
      <p className="mb-3">A presente versão desta Política de Privacidade foi atualizada pela última vez em: 06/10/2021.</p>
      <p className="mb-3">Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adaptá-las às eventuais alterações feitas em nosso site, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.</p>
      <p className="mb-3">Sempre que houver uma modificação, nossos usuários serão notificados acerca da mudança.</p>
      
      <h5 className="font-semibold mt-4 mb-2">9. Como entrar em contato conosco</h5>
      <p className="mb-3">Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato com nosso Encarregado de Proteção de Dados Pessoais, por algum dos canais mencionados abaixo:</p>
      <p>E-mail: financeiro@colegiozampieri.com.br</p>
      <p>Responsável: Alexandre Zampieri Lopez</p>
      <p>Telefone: 11 5560-0601</p>
      <p>Endereço Postal: R. dos Acarapevas, 80 - Bairro, Bal S Francisco, São Paulo/SP, CEP: 04473-160.</p>
    </div>
  </ScrollArea>
);

const Consentimento: React.FC<ConsentimentoProps> = ({ formData, erros, onChange, handleRadioChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Consentimento</h3>
      
      <div className="space-y-5">
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
        
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="politicaPrivacidade" 
            checked={formData.politicaPrivacidade || false}
            onCheckedChange={(checked) => {
              handleRadioChange("politicaPrivacidade", checked ? "true" : "false");
            }}
            className={erros.politicaPrivacidade ? "border-destructive" : ""}
          />
          <div className="space-y-1 leading-none">
            <div className="flex items-center space-x-1">
              <Label htmlFor="politicaPrivacidade" className="text-sm font-medium">
                Li e concordo com a
              </Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="h-auto p-0 text-sm font-medium text-blue-600">
                    Política de Privacidade
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Política de Privacidade</DialogTitle>
                  </DialogHeader>
                  <ConsentimentoTermos />
                </DialogContent>
              </Dialog>
            </div>
            {erros.politicaPrivacidade && <p className="text-destructive text-xs">{erros.politicaPrivacidade}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consentimento;
