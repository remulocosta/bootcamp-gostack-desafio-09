import React from 'react';

import PropTypes from 'prop-types';

import { ActionsButtons } from './styles';

export default function ActionButton({ handleEdit, confirmDelete, reply }) {
  return (
    <>
      <ActionsButtons>
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
      </ActionsButtons>
    </>
  );
}

ActionButton.propTypes = {
  handleEdit: PropTypes.func,
  confirmDelete: PropTypes.func,
  reply: PropTypes.func,
};

ActionButton.defaultProps = {
  handleEdit: null,
  confirmDelete: null,
  reply: null,
};
