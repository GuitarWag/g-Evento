import moment from 'moment';
// @ts-ignore
// import translate from 'translate';
// import { values } from 'lodash';
// import { translateApiKey } from '../firebaseConfig';

export const i18nptBR = {
  G_EVENTO: {
    key: 'gEvento',
    message: 'gEvento',
  },
  G_EVENTO_DESCRIPTION: {
    key: 'gEvento.description',
    message: 'gEvento é uma ferramenta de gestão de eventos em equipe',
  },
  LOGOUT: {
    key: 'button.logout',
    message: 'Logout',
  },
  TITLE: {
    key: 'table.title',
    message: 'Título',
  },
  STATUS: {
    key: 'table.status',
    message: 'Status',
  },
  MUSICIANS: {
    key: 'table.musicians',
    message: 'Músicos',
  },
  MUSICIANS_STATUS: {
    key: 'table.musiciansStatus',
    message: 'A equipe de músicos está completa?',
  },
  DATE: {
    key: 'table.date',
    message: 'Data',
  },
  DESCRIPTION: {
    key: 'description',
    message: 'Descrição',
  },
  VALUE: {
    key: 'table.value',
    message: 'Valor',
  },
  NEW_VALUE: {
    key: 'table.newValue',
    message: 'Novo valor',
  },
  MONETARY_SIGN: {
    key: 'table.monetarySign',
    message: 'R$',
  },
  PAID: {
    key: 'table.paid',
    message: 'Pago',
  },
  EDIT: {
    key: 'table.edit',
    message: 'Editar',
  },
  DELETE: {
    key: 'table.delete',
    message: 'Excluir',
  },
  TOTAL: {
    key: 'table.total',
    message: 'Total',
  },
  VALIDATION_MIN_CHAR: {
    key: 'validation.minChar',
    message: 'Pelo menos 3 caracteres né?!',
  },
  VALIDATION_MAX_CHAR: {
    key: 'validation.minChar',
    message: 'Muuuuuuito longo!',
  },
  VALIDATION_REQUIRED: {
    key: 'validation.required',
    message: 'Esse campo é obrigatório!',
  },
  VALIDATION_INVALID_FORMAT: {
    key: 'validation.invalidFormat',
    message: 'Tem algo errado aí!',
  },
  VALIDATION_MUST_BE_POSITIVE: {
    key: 'validation.mustBePositive',
    message: 'Valor deve ser positivo',
  },
  CREATE: {
    key: 'button.create',
    message: 'Criar!',
  },
  NEXT: {
    key: 'button.next',
    message: 'Próximo',
  },
  CANCEL: {
    key: 'button.cancel',
    message: 'Cancelar',
  },
  BACK: {
    key: 'button.back',
    message: 'Voltar',
  },
  CREATE_THE_FIRST: {
    key: 'button.create',
    message: 'Criar a primeira!',
  },
  EMPTY_PANEL_MESSAGE: {
    key: 'emptyPanel.message',
    message: 'Você não possui eventos',
  },
  TYPE: {
    key: 'type',
    message: 'Tipo',
  },
  EXPENSE: {
    key: 'expense',
    message: 'Despesa',
  },
  REVENUE: {
    key: 'revenue',
    message: 'Receita',
  },
  EXPENSES: {
    key: 'expenses',
    message: 'Despesas',
  },
  REVENUES: {
    key: 'revenues',
    message: 'Receitas',
  },
  RELATIVE_TO: {
    key: 'relativeTo',
    message: 'Relativo à ',
  },
  ADD_NEW_REVENUE: {
    key: 'addNewRevenue',
    message: 'Nova receita',
  },
  ADD_NEW_EXPENSE: {
    key: 'addNewExpense',
    message: 'Nova despesa',
  },
  SEE_ON_GITHUB: {
    key: 'seeOnGitHub',
    message: 'Ver no Github',
  },
  COPYRIGHT: {
    key: 'copyriht',
    message: `Wagner Silva © ${moment().format('YYYY')}`,
  },
  PAY: {
    key: 'pay',
    message: 'Pagar',
  },
  ADD_NEW_EVENT: {
    key: 'addNewEvent',
    message: 'Adicionar um novo evento',
  },
  LOGIN_WITH_GOOGLE: {
    key: 'loginWithGoogle',
    message: 'Login com Google',
  },
  TYPE_AND_FORMATION: {
    key: 'typeAndFormation',
    message: 'Tipo e formação para o evento',
  },
  NAME_AND_DATE: {
    key: 'nameAndDate',
    message: 'Título e data do evento',
  },
  MUSICIANS_AND_STATUS: {
    key: 'musiciansAndStatus',
    message: 'Músicos e situação da equipe',
  },
};

// const run = () => {
//   values(i18nptBR).map(async value =>
//     console.log(
//       await translate(value.message, {
//         from: 'pt',
//         to: 'es',
//         key: translateApiKey,
//       }),
//     ),
//   );
// };
// run();

export const I18N = {
  ptBR: i18nptBR,
  enUS: i18nptBR,
  esES: i18nptBR,
};

export default i18nptBR;
