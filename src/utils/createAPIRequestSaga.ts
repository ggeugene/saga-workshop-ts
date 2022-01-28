import { takeLatest, put, call } from "redux-saga/effects";
import dataApi from "../api/dataApi";
import { RequestActionsType } from "./createApiRequestActions";
import { RequestActionsTypeWithPayload } from "./interfaces";

type initActionType = ReturnType<RequestActionsType["init"]>;

function createApiRequestWorker<Response>(
  actions: RequestActionsTypeWithPayload<Response>
) {
  return function* worker({ payload }: initActionType) {
    const { start, success, error } = actions;
    yield put(start());

    try {
      const response: { data: Response } = yield call(dataApi.get, "/", {
        params: payload,
      });
      yield put(
        success({
          data: response.data,
        })
      );
    } catch (e) {
      yield put(error(e));
    }
  };
}

export default function createApiRequestWatcher<Response>(
  actions: RequestActionsTypeWithPayload<Response>
) {
  const { init } = actions;
  return function* watcher() {
    yield takeLatest(init, createApiRequestWorker<Response>(actions));
  };
}
