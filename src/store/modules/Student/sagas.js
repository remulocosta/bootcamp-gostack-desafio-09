import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

export default all([takeLatest('@student/UPDATE_STUDENT_REQUEST', () => {})]);
