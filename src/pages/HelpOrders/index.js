import React, { useState, useEffect } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import br from 'date-fns/locale/pt-BR';

// import { useDispatch } from 'react-redux';

import Modal from '~/components/Modal';
import api from '~/services/api';

import {
  Container,
  Header,
  ContainerTable,
  ButtonPage,
  Footer,
} from './styles';

export default function HelpOrder() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [orderId, setOrderId] = useState(null);
  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        const response = await api.get('help-orders', { params: { page } });

        const data = response.data.docs.map(helpOrder => ({
          ...helpOrder,
          createdDateFormatted: format(
            parseISO(helpOrder.created_at),
            "d 'de' MMMM 'de' Y",
            {
              locale: br,
            }
          ),
        }));

        setHelpOrders(data);
        setPagination(response.data.pagination);
      } catch (err) {
        toast.error('Ocorreu um erro ao obter os pedidos de auxílio');
      }
    }

    loadHelpOrders();
  }, [page]);

  function handleReplyHelpOrder(helpOrder) {
    setOrderId(helpOrder.id);
    setVisible(true);
  }

  function handleOrderChange(id) {
    console.tron.log('ID: ', id);
    const updatedOrders = helpOrders.filter(Order => Order.id !== id);
    setHelpOrders(updatedOrders);
  }

  return (
    <>
      <Container>
        <Header>
          <strong>Pedidos de auxílio</strong>
          <aside />
        </Header>
        <ContainerTable>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>CRIADO EM</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {helpOrders.map(helpOrder => (
              <tr key={helpOrder.id}>
                <td className="student">{helpOrder.student.name}</td>
                <td className="createdAt">{helpOrder.createdDateFormatted}</td>
                <td>
                  <button
                    type="button"
                    id="reply"
                    onClick={() => handleReplyHelpOrder(helpOrder)}
                  >
                    Responder
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
      <Modal
        order_id={orderId}
        visible={visible}
        hide={() => setVisible(false)}
        handleOrderChange={handleOrderChange}
      />
    </>
  );
}
