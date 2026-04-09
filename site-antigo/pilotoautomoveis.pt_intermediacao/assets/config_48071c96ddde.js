/*--------------------------------------------------------------------------------------------

MODELO 4b: Black
Data: 2024-04-02

---------------------------------------------------------------------------------------------*/
//CONFIGURAÇÃO
var sandbox = 0; // no caso de estar ativo, apresenta a informação da base de dados de testes
var SandboxViaturas = false; // apresenta as viaturas de outro stand para servir como exemplo
var PreloadingSite = 1; // ativar o pre-loading no site
var RedesSociaisRight = 1; // apresenta as redes socias lado direito
var fotosporviatura = 5; // número de fotos em cada viatura ao deslizar o rato
var ShowTestemunhos = true; // apresenta os testemunhos do site e do google
var ShowOficina = false; // apresenta a página oficina
var ShowGaleriaClientes = false; // apresenta uma galeria de clientes

//--------------Texto --------------------------------------------------------------
const Nosligamostitulo = "Nós Ligamos Consigo";

const DestaquesTitulo = "Viaturas em destaque";
const DestaquesSubTitulo = "Viaturas em destaque selecionadas para si";
const VerstockTitulo = "Ver todo stock";

const PesquisaTitulo = "Pesquisa de Viaturas";

const UltimasTitulo = "Novidades Mais Recentes";
const UltimasSubTitulo = "Não perca as viaturas acabadas de chegar!";

const SegmentosTitulo = "Selecione Por Segmento";
const SegmentosSubTitulo = "Segmentos disponíveis!";

const ServicosTitulo = "Serviços que disponibilizamos";
const ServicosSubTitulo = "Saiba tudo o que podemos fazer por si!";

const GaleriaClientesTitulo = "Galeria clientes";
const GaleriaClientesSubTitulo = "Apresentamos alguns dos nossos clientes!";
const GaleriaClientesvermais = "Ver Todos";
//--------------Config Site--------------------------------------------------------------
const CofigOpcoes = {
  ordenacao: 0, // define qual a ordenação das viaturas na página viaturas
  porpagina: 12, // total de viaturas por cada página
  ultimasporpagina: 6, // total de viaturas por cada página
  ultimasporlinha: 3, // total de viaturas por cada linha
  vendidasultimas: 1, // apresenta as vendidas em último
  limitedestaques:9, // número máximo de destaques
  ordenacaoultimas: 0, // ordenação das últimas viaturas na Home page
//  ShowSegmentos: false, // não apresenta a seleção de viaturas através do segmento
//  PaginaPesquisa: "resultado-pesquisa", // apresenta o resultado da pesquisa de viaturas numa página diferente do habitual
//  CompramosEmailObrigatorio: true, // coloca o campo email obrigatório no formulário de compramos
//  showphonetopo: 1, // apresenta o número de telemóvel no topo do site
};

/*tipos de ordenação:
0 - mais recentes para as mais antigas
1 - Marca AZ
2 - Marca ZA
3 - Preço mais baixo
4 - Preço mais alto
5 - Mais novos por Ano
6 - Mais antigos por Ano
7 - Menos Km
8 - Mais Km
9 - Aleatório
10 - manual

*/
//--------------OPÇÕES SEGMENTOS V4-------------------------------------------------------------
const SegmentosOpcoes = {
  pathImages: "",
  pathresultado: "/viaturas/segmento/",
  elemento: ".segmentos-result"
};
//--------------OPÇOES FINANCIAMENTO V4--------------------------------------------------------------
const FinConfig = {
  Documentos: false, // apresenta no início da página os documentos necessários para financiamento
  Email: "" // se definido envia o formulário para o email
};
//--------------OPÇÕES WIDGET COMPRAMOS V4--------------------------------------------------------------
const CompConfig = {
  TextoInicio: true, // apresenta no início da página o texto de informação
};
//--------------OPÇÕES WIDGET OFICINA--------------------------------------------------------------
const OficinaConfig = {
pathImages:	"",
};
//--------------OPÇÕES WIDGET TESTEMUNHOS--------------------------------------------------------------
const RultimosOpcoes = {
  MaxCarateres: 200,
  LimitWords: true,
  Porpagina:10,
};
const ReviewsOpcoes = {
  MaxCarateres: 200,
  LimitWords: true,
  Porpagina: 12,
  PorLinha:4
};
//--------------OPÇÕES WIDGET GALERIA CLIENTES--------------------------------------------------------------
const GalClUltimosOpcoes = {
  Porpagina:10,
};
const GalClOpcoes = {
  Porpagina: 4,
  PorLinha:4
};
//--------------OPÇÕES WIDGET MENU MOBILE V4--------------------------------------------------------------
const MenuMobileOpcoes = {
  Logotipo: "/template/images/logotipo-mobile.webp"
};
//--------------OPÇÕES GERAIS DO SITE V4--------------------------------------------------------------
const BFestasOpcoes = {
  pathImages: "", // define qual a ordenação das viaturas
};
$(function() {
//apresenta o preloading
if(PreloadingSite==1){Preloading();}
//--------------WIDGET ATALHOS LADO DIREITO DA TELA V4--------------------------------------------------------------
//apresenta os atalhos para as redes sociais do lado direito da tela
if(RedesSociaisRight==1){
const AtalhosConfig = {
  Dir: "", // se não colocar diretoria, assume por defeito (https://omeustand.pt/websites/resources/widgets/atalhosright/01/images/)
  Mobile: false, // apresenta as redes sociais do lado direito no mobile
  WhatsappBottom: true, // apresenta o whatsapp e o messenger no fundo do site na versão mobile
  facebook:false,
  instagram:false,
  youtube:false,
  tiktok:false
};
AtalhosRightTela(AtalhosConfig);
}

});
