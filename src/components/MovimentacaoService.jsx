import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
});

export const cadastrarMovimentacao = async (dados) => {
  try {
    const response = await api.post('/Movimentacao/cadastrar', dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar plano de contas:', error);
  }
};

export const visualizarMovimentacao = async () => {
  try {
    const response = await api.get('/Movimentacao/visualizar');
    console.log("Visualização carregada")
    return response.data;
  } catch (error) {
    console.error('Erro ao visualizar planos de contas:', error);
  }
};

export const visualizarPlanoConta = async (id) => {
  try {
    const response = await api.get(`/Movimentacao/visualizar/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao visualizar plano de contas:', error);
  }
};

export const atualizarPlanoConta = async (id, dados) => {
  try {
    const response = await api.put(`/Movimentacao/atualizar/${id}`, dados);
    console.log("Atualização Realizada com sucesso")
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar plano de contas:', error);
  }
};

export const deletarPlanoConta = async (id) => {
  try {
    const response = await api.delete(`/Movimentacao/deletar/${id}`);
    console.log("Parabens, você conseguiu deletar :))")
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar plano de contas:', error);
  }
};
