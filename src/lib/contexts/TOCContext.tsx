import { useReducer, useContext, createContext, Dispatch } from 'react';

type State = {
  tocId?: string;
};

type Action = { type: 'SET_TOC_ID'; payload: string };

type TOCDispatch = Dispatch<Action>;

const TOCStateContext = createContext<State | null>(null);
const TOCDispatchContext = createContext<TOCDispatch | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TOC_ID':
      return {
        ...state,
        tocId: action.payload || undefined,
      };
    default:
      throw new Error('Unhandled action');
  }
};

interface Props {
  children: React.ReactNode;
}

export const TOCProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    tocId: undefined,
  });

  return (
    <TOCStateContext.Provider value={state}>
      <TOCDispatchContext.Provider value={dispatch}>
        {children}
      </TOCDispatchContext.Provider>
    </TOCStateContext.Provider>
  );
};

export const useTOC = () => useContext(TOCStateContext);
export const useDispatchTOC = () => useContext(TOCDispatchContext);
