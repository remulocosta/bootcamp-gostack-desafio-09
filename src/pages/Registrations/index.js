import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateNext,
  MdNavigateBefore,
  MdCheckCircle,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import br from 'date-fns/locale/pt-BR';
import swal from 'sweetalert';

import api from '~/services/api';

import {
  Container,
  Header,
  ContainerTable,
  ButtonAdd,
  ButtonPage,
  ButtonSearch,
  Footer,
} from './styles';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [student, setStudent] = useState('');

  useEffect(() => {
    async function loadRegistrations() {
      try {
        const response = await api.get('registrations', {
          params: { page, q: student },
        });

        const data = response.data.docs.map(regist => ({
          ...regist,
          startDateFormatted: format(
            parseISO(regist.start_date),
            "d 'de' MMMM 'de' Y",
            {
              locale: br,
            }
          ),
          endDateFormatted: format(
            parseISO(regist.end_date),
            "d 'de' MMMM 'de' Y",
            {
              locale: br,
            }
          ),
        }));

        setRegistrations(data);
        setPagination(response.data.pagination);
      } catch (err) {
        toast.error('Ocorreu um erro ao obter as matrículas');
      }
    }

    loadRegistrations();
  }, [page, student]);

  function handleEditRegistration(registration) {
    console.tron.log(registration);
  }
  function handleDeleteRegistration(registration) {
    console.tron.log(registration);
  }

  function confirmDelete(registration) {
    swal({
      text: `Deseja excluir a matricula de: ${registration.student.name} ?`,
      icon: 'warning',
      dangerMode: true,
      buttons: ['Não', 'Sim'],
    }).then(async willDelete => {
      if (willDelete) {
        try {
          handleDeleteRegistration(registration);
          toast.success('Plano excluído com sucesso');
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
          <strong>Gerenciando matrículas</strong>
          <aside>
            <ButtonAdd type="button">
              <MdAdd size={16} color="#FFF" />
              CADASTRAR
            </ButtonAdd>
            <ButtonSearch>
              <MdSearch size={16} color="#999" />
              <input
                type="text"
                placeholder="Buscar Matrícula"
                onChange={e => setStudent(e.target.value)}
              />
            </ButtonSearch>
          </aside>
        </Header>
        <ContainerTable>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th className="all_center">PLANO</th>
              <th className="all_center">INÍCIO</th>
              <th className="all_center">TÉRMINO</th>
              <th className="all_center">ATIVA</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td className="student">{registration.student.name}</td>
                <td className="plan all_center">{registration.plan.title}</td>
                <td className="start all_center">
                  {registration.startDateFormatted}
                </td>
                <td className="end all_center">
                  {registration.endDateFormatted}
                </td>
                <td className="active all_center">
                  {registration.active ? (
                    <MdCheckCircle size={23} color="#42cb59" />
                  ) : (
                    <MdCheckCircle size={23} color="#c4c4c4" />
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    id="edit"
                    onClick={() => handleEditRegistration(registration)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    id="delete"
                    onClick={() => confirmDelete(registration)}
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
