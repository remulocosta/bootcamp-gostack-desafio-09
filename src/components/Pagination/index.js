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

Pagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pagination: PropTypes.any,
  setPage: PropTypes.func,
};

Pagination.defaultProps = {
  pagination: null,
  setPage: null,
};
