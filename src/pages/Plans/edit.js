import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import ActionHeader from '~/components/ActionHeader';
import api from '~/services/api';
import history from '~/services/history';
import schema from '~/validators/student';

import { Container, Header } from './styles';

export default function StudentEdit({ match }) {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    async function getStudent() {
      try {
        setLoading(true);
        const response = await api.get(`students/${id}`);

        const initialData = response.data;

        setStudentData(initialData);
        return response;
      } catch (err) {
        return toast.error('Falha ao procurar os dados do aluno.');
      } finally {
        setLoading(false);
      }
    }

    getStudent();
  }, [id]);

  async function handleSubmit(data) {
    console.tron.log(data);

    try {
      await api.put(`students/${id}`, data);

      toast.success('Aluno atualizado com sucesso');

      return history.push('/students');
    } catch (err) {
      if (err.response.data) {
        return toast.error(err.response.data.messageContent);
      }
      return toast.error('Erro na atualização do aluno. Verifique os dados');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Edição de aluno</strong>
        <aside>
          <ActionHeader
            handlePost="studentForm"
            handleCancel={() => history.push('/students')}
          />
        </aside>
      </Header>
      {!loading ? (
        <Form
          id="studentForm"
          schema={schema.dados}
          onSubmit={handleSubmit}
          initialData={studentData}
        >
          <content>
            <label htmlFor="name">NOME COMPLETO</label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="Nome completo"
            />
            <label htmlFor="name">ENDEREÇO DE E-MAIL</label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="exemplo@email.com"
            />
            <div>
              <div>
                <label htmlFor="name">IDADE</label>
                <Input
                  name="age"
                  id="age"
                  placeholder="Informe a idade"
                  type="number"
                  step="1"
                />
              </div>
              <div>
                <label htmlFor="name">PESO (em kg)</label>
                <Input
                  name="weight"
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="Peso(em kg)"
                />
              </div>
              <div>
                <label htmlFor="name">ALTURA</label>
                <Input
                  name="height"
                  id="height"
                  type="number"
                  step="0.01"
                  placeholder="Informe a altura"
                />
              </div>
            </div>
          </content>
        </Form>
      ) : (
        !loading && <p> Carregando estudante... </p>
      )}
    </Container>
  );
}

StudentEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape(),
  }).isRequired,
};
