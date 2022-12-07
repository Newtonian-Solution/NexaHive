import React, { useReducer } from 'react'

const initialState = {
    modal: false
}
const ModalContext = React.createContext(null);
const ModalReducer = function (state, action) {
    switch (action.type) {
        case 'SET-MODAL':
            return {
                ...state, modal:!state.modal
            }
        default:
           return state
    }
}
export const ModalProvider = function (props) {
    const [state, dispatch] = useReducer(ModalReducer, { ...initialState });
    function setModal() {
        dispatch({type: 'SET-MODAL'})
    }
    const action = { setModal }
    return (
        <ModalContext.Provider value={{value: state, ...action}}>
      {props.children}
        </ModalContext.Provider>
    )
}
export default ModalContext