import React from 'react';
import Link from 'next/link';

export const NextLink: React.FC<{ href: string; className: string }> = ({
  children,
  href,
  className,
}) => (
  <Link href={href}>
    <a className={`underline text-blue-500 ${className}`}>{children}</a>
  </Link>
);
