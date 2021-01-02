import { useReducer, useContext, createContext, Dispatch } from 'react';

type State = {
  sideMenu: boolean;
};

type Action = { type: 'OPEN_SIDE_MENU' } | { type: 'CLOSE_SIDE_MENU' };

type SideMenuDispatch = Dispatch<Action>;

const SideMenuStateContext = createContext<State | null>(null);
const SideMenuDispatchContext = createContext<SideMenuDispatch | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SIDE_MENU':
      return {
        ...state,
        sideMenu: true,
      };

    case 'CLOSE_SIDE_MENU':
      return {
        ...state,
        sideMenu: false,
      };
    default:
      throw new Error('Unhandled action');
  }
};

interface Props {
  children: React.ReactNode;
}

export const SideMenuProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    sideMenu: false,
  });

  return (
    <SideMenuStateContext.Provider value={state}>
      <SideMenuDispatchContext.Provider value={dispatch}>
        {children}
      </SideMenuDispatchContext.Provider>
    </SideMenuStateContext.Provider>
  );
};

export const useSideMenu = () => useContext(SideMenuStateContext);
export const useDispatchSideMenu = () => useContext(SideMenuDispatchContext);
