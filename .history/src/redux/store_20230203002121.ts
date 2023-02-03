import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { TypeOf } from 'zod'


export const store = configureStore({
    reducer: {}
})


export type RootState = ReturnType<TypeOf store>