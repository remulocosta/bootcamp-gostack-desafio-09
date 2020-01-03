import * as Yup from 'yup';

export default {
  dados: Yup.object().shape({
    name: Yup.string()
      .required('O nome é obrigatório')
      .min(5, 'O nome deve ter pelo menos 5 caracteres'),

    email: Yup.string()
      .email('Insira um email válido')
      .required('E-mail é um campo obrigatório'),

    age: Yup.number()
      .required('A idade é obrigatória')
      // .integer('Digite um valor válido para a idade')
      .positive('Idade deve ser um número positivo')
      .min(1, 'A idade mínima é 12')
      .max(150, 'A idade máxima é 150')
      .typeError('Digite um valor válido para a idade'),

    height: Yup.number()
      .required('A altura é obrigatória')
      .min(1, 'A altura deve ser maior ou igual a 1')
      .typeError('Digite um valor válido para altura'),

    weight: Yup.number()
      .required('O peso é obrigatório')
      .min(1, 'O peso deve ser maior ou igual a 1')
      .typeError('Digite um valor válido para peso'),
  }),
};
