import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateNext,
  MdNavigateBefore,
} from 'react-icons/md';
// import { useDispatch } from 'react-redux';

import api from '../../services/api';
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
  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data.docs);
      setPagination(response.data.pagination);
    }

    loadStudents();
  }, []);

  function handleEditStudent(student) {
    console.tron.log(student);
  }
  function handleDeleteStudent(student) {
    console.tron.log(student);
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
              <input type="text" placeholder="Buscar Aluno" />
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
                    onClick={() => handleDeleteStudent(student)}
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
              Cadastros: {pagination.total} página {pagination.page} de{' '}
              {pagination.pages}
            </span>
          </div>
          <aside>
            <ButtonPage type="button">
              <MdNavigateBefore size={24} color="#FFF" />
            </ButtonPage>
            <ButtonPage type="button">
              <MdNavigateNext size={24} color="#FFF" />
            </ButtonPage>
          </aside>
        </Footer>
      </Container>
    </>
  );
}
