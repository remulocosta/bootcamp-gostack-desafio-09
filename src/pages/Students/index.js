import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateNext,
  MdNavigateBefore,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import swal from 'sweetalert';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Header,
  ContainerTable,
  ButtonAdd,
  ButtonPage,
  ButtonSearch,
  Footer,
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

  function handleEditStudent(student) {
    history.push(`/students/update/${student.id}`);
  }
  function handleDeleteStudent(student) {
    console.tron.log(student);
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
          handleDeleteStudent(student);
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
            <ButtonAdd type="button">
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
                  <button
                    type="button"
                    id="edit"
                    onClick={() => handleEditStudent(student)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    id="delete"
                    onClick={() => confirmDelete(student)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ContainerTable>
        <Footer>
          <div>
            <span>
              Total: {pagination.total}, página {pagination.page} de{' '}
              {pagination.pages}
            </span>
          </div>
          <aside>
            <ButtonPage
              type="button"
              disabled={!pagination.prevPage}
              onClick={() => setPage(page - 1)}
            >
              <MdNavigateBefore size={24} color="#FFF" />
            </ButtonPage>
            <ButtonPage
              type="button"
              disabled={!pagination.nextPage}
              onClick={() => setPage(page + 1)}
            >
              <MdNavigateNext size={24} color="#FFF" />
            </ButtonPage>
          </aside>
        </Footer>
      </Container>
    </>
  );
}
