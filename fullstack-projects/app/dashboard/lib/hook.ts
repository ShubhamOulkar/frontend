// /app/lib/hooks.ts
import { useReducer } from 'react';

interface FormState {
  message: string;
  errors: Record<string, string[]>;
}

type Action =
  | { type: 'SET_FIELD_ERROR'; field: string; error: string }
  | { type: 'SET_MESSAGE'; message: string }
  | { type: 'RESET_ERRORS' };

// const formReducer = (state: FormState, action: Action): FormState => {
//   switch (action.type) {
//     case 'SET_FIELD_ERROR':
//       return {
//         ...state,
//         errors: {
//           ...state.errors,
//           [action.field]: [action.error],
//         },
//       };
//     case 'SET_MESSAGE':
//       return { ...state, message: action.message };
//     case 'RESET_ERRORS':
//       return { ...state, errors: {} };
//     default:
//       return state;
//   }
// };

export const useFormState = (formReducer: any, initialState: FormState) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return [state, dispatch] as const;
};
