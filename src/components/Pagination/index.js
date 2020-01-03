import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import PropTypes from 'prop-types';

import { ButtonPage, Footer } from './styles';

export default function Pagination({ pagination, setPage }) {
  const { total, page, pages, prevPage, nextPage } = pagination;

  return (
    <>
      <Footer>
        <div>
          <span>
            Total: {total}, página {page} de {pages}
          </span>
        </div>
        <aside>
          <ButtonPage
            type="button"
            disabled={!prevPage}
            onClick={() => setPage(page - 1)}
          >
            <MdNavigateBefore size={24} color="#FFF" />
          </ButtonPage>
          <ButtonPage
            type="button"
            disabled={!nextPage}
            onClick={() => setPage(page + 1)}
          >
            <MdNavigateNext size={24} color="#FFF" />
          </ButtonPage>
        </aside>
      </Footer>
    </>
  );
}

Pagination.defaultProps = {
  pagination: null,
  setPage: () => {},
};

Pagination.protoTypes = {
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setPage: PropTypes.func,
};
