import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyCreate = lazy(() => import('./CreateNFT'));

const CreateNFT = (props) => (
  <Loadable>
    <LazyCreate {...props} />
  </Loadable>
);

export default CreateNFT ;