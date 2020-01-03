import React from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import PropTypes from 'prop-types';

import { BackBotton, PostBotton } from './styles';

export default function ActionHeader({ handlePost, handleCancel }) {
  return (
    <>
      <BackBotton
        type="button"
        onClick={() => {
          handleCancel();
        }}
      >
        <MdKeyboardArrowLeft color="#fff" size={20} />
        <span>VOLTAR</span>
      </BackBotton>
      <PostBotton type="submit" form={handlePost}>
        <MdDone color="#fff" size={20} />
        <span>SALVAR</span>
      </PostBotton>
    </>
  );
}

/* <SecondaryButton
type="button"
onClick={() => {
history.push('/students');
}}
>
<MdKeyboardArrowLeft color="#fff" size={20} />
<span>BACK</span>
</SecondaryButton>
*/
ActionHeader.defaultProps = {
  handlePost: '',
  handleCancel: () => {},
};

ActionHeader.propTypes = {
  handlePost: PropTypes.string,
  handleCancel: PropTypes.func,
};
