import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/UPDATE_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_STUDENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@astudent/UPDATE_STUDENT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
