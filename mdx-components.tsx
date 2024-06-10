import type { MDXComponents } from 'mdx/types';
import React from 'react';

interface HeadingProps {
  id?: string;
  children: React.ReactNode;
}

const CustomH1: React.FC<HeadingProps> = ({ id, children, ...rest }) => {
  return (
    <h1 {...rest} id={id} className="inset-0 mb-4 p-0 text-4xl font-bold">
      {children}
    </h1>
  );
};

const CustomH2: React.FC<HeadingProps> = ({ id, children, ...rest }) => {
  return (
    <h2 {...rest} id={id} className="inset-0 mb-4 p-0 text-3xl font-bold">
      {children}
    </h2>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => <CustomH1 {...props}>{children}</CustomH1>,
    h2: ({ children, ...props }) => <CustomH2 {...props}>{children}</CustomH2>,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => (
      <pre {...props} className="border-1 rounded-lg border-border p-0" />
    ),
    ...components,
  };
}