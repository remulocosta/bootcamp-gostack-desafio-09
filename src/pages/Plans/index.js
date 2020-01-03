import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import swal from 'sweetalert';

import ActionSide from '~/components/ActionSide';
import Pagination from '~/components/Pagination';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

import {
  Container,
  Header,
  ContainerTable,
  ButtonAdd,
  ButtonSearch,
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

        const data = response.data.docs.map(plan => ({
          ...plan,
          durationFormatted:
            plan.duration < 2
              ? `${plan.duration} mês`
              : `${plan.duration} meses`,
          priceFormatted: formatPrice(plan.price),
        }));

        setPlans(data);
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
                <td className="duration all_center">
                  {plan.durationFormatted}
                </td>
                <td className="price all_center">{plan.priceFormatted}</td>
                <td>
                  <ActionSide
                    handleEdit={() => handleEditPlan(plan)}
                    confirmDelete={() => confirmDelete(plan)}
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
