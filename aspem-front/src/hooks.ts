import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Hook tipado para usar o dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook tipado para usar o selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
