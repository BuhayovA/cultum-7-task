import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const KindLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/people/[id]' as={`/species/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { KindLink };
