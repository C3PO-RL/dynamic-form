import { combineReducers } from '@reduxjs/toolkit'
import formSlice from '../slices/formSlice/formSlice'

export const rootReducer = combineReducers({ formSlice })
