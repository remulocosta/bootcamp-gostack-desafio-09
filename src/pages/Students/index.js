import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import {
  Container,
  Header,
  ContainerTable,
  ButtonAdd,
  ButtonSearch,
} from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
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
              <tr>
                <td>
                  <span>{student.name}</span>
                </td>
                <td>
                  <span>{student.email}</span>
                </td>
                <td className="all_center">
                  <span>{student.name}</span>
                </td>
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
      </Container>
    </>
  );
}
