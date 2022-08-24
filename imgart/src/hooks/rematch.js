import { useDispatch, useStore, useSelector } from 'react-redux';
export function useRematchDispatch(selector = () => {}) {
  const dispatch = useDispatch();
  return selector(dispatch);
}

export function useSelect(mapSelectors) {
  return useSelector(mapSelectors);
}
