import { configureStore, Store } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {}
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;                         

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: () => TypedUseSelectorHook<RootState> = useSelector();