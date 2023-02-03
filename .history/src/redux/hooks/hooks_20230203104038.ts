import { useDispatch, useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../store'


// instead of plain useDispatch and useSelector we will use this through out our application


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUSeSelectorHook<RootState>useSelector