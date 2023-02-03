import { useDispatch, useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { useAppDispatch } from '../../../.history/src/redux/store_20230203102530';


// instead of plain useDispatch and useSelector we will use this through out our application


export const useAppDispatch = 