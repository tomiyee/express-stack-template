import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import { FC, LazyExoticComponent, Suspense } from 'react';

import styled from '@emotion/styled';

/** Wraps a Lazy Loaded component with a Suspense component */
const Loadable = (
  Component: LazyExoticComponent<FC>,
): ((props: LinearProgressProps) => JSX.Element) => {
  const SuspensedLoadable = (props: LinearProgressProps) => (
    <Suspense fallback={<Loader {...props} />}>
      <Component />
    </Suspense>
  );
  return SuspensedLoadable;
};
export default Loadable;

/**
 * Renders a linear, indefinitely loading progress bar. Used mostly in
 * lazy loading components to put in the suspense.
 */
const Loader: React.FC = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});
