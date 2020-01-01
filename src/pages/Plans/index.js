import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateNext,
  MdNavigateBefore,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import swal from 'sweetalert';

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

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await api.get('plans', {
          params: { page, q: title },
        });

        setPlans(response.data.docs);
        setPagination(response.data.pagination);
      } catch (err) {
        toast.error('Ocorreu um erro ao obter os planos');
      }
    }

    loadPlans();
  }, [title, page]);

  function handleEditPlan(plan) {
    console.tron.log(plan);
  }
  function handleDeletePlan(plan) {
    console.tron.log(plan);
  }

  function confirmDelete(plan) {
    swal({
      text: `Deseja excluir o Plano: ${plan.title} ?`,
      icon: 'warning',
      dangerMode: true,
      buttons: ['Não', 'Sim'],
    }).then(async willDelete => {
      if (willDelete) {
        try {
          handleDeletePlan(plans);
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
          <strong>Gerenciando planos</strong>
          <aside>
            <ButtonAdd type="button">
              <MdAdd size={16} color="#FFF" />
              CADASTRAR
            </ButtonAdd>
            <ButtonSearch>
              <MdSearch size={16} color="#999" />
              <input
                type="text"
                placeholder="Buscar Plano"
                onChange={e => setTitle(e.target.value)}
              />
            </ButtonSearch>
          </aside>
        </Header>
        <ContainerTable>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th className="all_center">DURAÇÃO</th>
              <th className="all_center">VALOR p/ MÊS</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td className="title">{plan.title}</td>
                <td className="duration all_center">{plan.duration}</td>
                <td className="price all_center">{plan.price}</td>
                <td>
                  <button
                    type="button"
                    id="edit"
                    onClick={() => handleEditPlan(plan)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    id="delete"
                    onClick={() => confirmDelete(plan)}
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
