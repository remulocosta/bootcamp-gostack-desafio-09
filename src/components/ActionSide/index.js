import React from 'react';

import PropTypes from 'prop-types';

import { ActionsSide } from './styles';

export default function ActionSide({ handleEdit, confirmDelete, reply }) {
  return (
    <>
      <ActionsSide>
        {!reply ? (
          <>
            <button type="button" id="edit" onClick={() => handleEdit()}>
              editar
            </button>
            <button type="button" id="delete" onClick={() => confirmDelete()}>
              apagar
            </button>
          </>
        ) : (
          <button type="button" id="reply" onClick={() => reply()}>
            Responder
          </button>
        )}
      </ActionsSide>
    </>
  );
}

ActionSide.propTypes = {
  handleEdit: PropTypes.func,
  confirmDelete: PropTypes.func,
  reply: PropTypes.func,
};

ActionSide.defaultProps = {
  handleEdit: () => {},
  confirmDelete: () => {},
  reply: null,
};
