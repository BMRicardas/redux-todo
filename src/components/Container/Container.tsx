import { ReactNode } from 'react';

import './Container.scss';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};
