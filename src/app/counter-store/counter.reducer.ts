import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, INCREMENT, set,  } from "./counter.actions";
const initialState = 0

export const counterReducer = createReducer(
    initialState,
    on(increment,(state: number, action) => state + action.value),
    on(decrement,(state: number, action) => state - action.value),
    on(set, (state: number, action) => action.value)
)
/*
export function counterReducer(state = initialState, action: CounterActions | Action) {
    switch (action.type) {
        case INCREMENT:
           return state + (action as IncrementAction).value;
        default:
           return state
    }
}*/