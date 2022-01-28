import { ActionCreatorWithPreparedPayload } from "@reduxjs/toolkit";
import { RequestActionsType } from "./createApiRequestActions";

export type RequestActionsTypeWithPayload<Payload> = {
  [K in keyof RequestActionsType]: RequestActionsType[K] extends RequestActionsType["success"]
    ? ActionCreatorWithPreparedPayload<
        any[],
        { data: Payload },
        RequestActionsType[K]["type"]
      >
    : RequestActionsType[K];
};
