import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import swal from 'sweetalert';

import ActionSide from '~/components/ActionSide';
import Pagination from '~/components/Pagination';
import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Header,
  ContainerTable,
  ButtonAdd,
  ButtonSearch,
} from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadStudents() {
      try {
        const response = await api.get('students', {
          params: { page, q: name },
        });
        setStudents(response.data.docs);
        setPagination(response.data.pagination);
      } catch (err) {
        toast.error('Ocorreu um erro ao obter os alunos');
      }
    }

    loadStudents();
  }, [name, page]);

  async function handleDeleteStudent(id) {
    await api.delete(`/students/${id}`);
    return setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }

  function confirmDelete(student) {
    swal({
      text: `Deseja excluir o aluno: ${student.name} ?`,
      icon: 'warning',
      dangerMode: true,
      buttons: ['Não', 'Sim'],
    }).then(async willDelete => {
      if (willDelete) {
        try {
          handleDeleteStudent(student.id);
          toast.success('Aluno excluído com sucesso');
        } catch (error) {
          toast.error('Falha ao excluir, entre em contato com o suporte');
        }
      }
    });
  }

  return (
    <>
      <Container>
        <Header>
          <strong>Gerenciando alunos</strong>
          <aside>
            <ButtonAdd
              type="button"
              onClick={() => history.push(`students/register`)}
            >
              <MdAdd size={16} color="#FFF" />
              CADASTRAR
            </ButtonAdd>
            <ButtonSearch>
              <MdSearch size={16} color="#999" />
              <input
                type="text"
                placeholder="Buscar Aluno"
                onChange={e => setName(e.target.value)}
              />
            </ButtonSearch>
          </aside>
        </Header>
        <ContainerTable>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th className="all_center">IDADE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="name">{student.name}</td>
                <td className="email">{student.email}</td>
                <td className="age all_center">{student.age}</td>
                <td>
                  <ActionSide
                    handleEdit={() =>
                      history.push(`students/${student.id}/edit`)
                    }
                    confirmDelete={() => confirmDelete(student)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </ContainerTable>
        <Pagination pagination={pagination} setPage={setPage} />
      </Container>
    </>
  );
}
