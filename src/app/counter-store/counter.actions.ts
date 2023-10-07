import { Action, createAction, props } from "@ngrx/store";

export const INCREMENT: string = '[Counter] Increment';
export const DECREMENT: string = '[Counter] Decrement';
export const init = createAction(
    '[Counter] Init'
)
export const set = createAction(
    '[Counter] set',
    props<{value: number}>()
)
export const increment = createAction(
    INCREMENT,
    props<{value: number}>()
)

export const decrement = createAction(
    DECREMENT,
    props<{value: number}>()
)
/*
export const INCREMENT: string = '[Counter] Increment';

export class IncrementAction implements Action {
    readonly type: string = INCREMENT;

    constructor(public value: number) {}

}

export type CounterActions = IncrementAction;*/