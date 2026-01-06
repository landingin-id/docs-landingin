import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes } from 'react';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  const Button = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { className, ...rest } = props;
    const base =
      'inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500';
    return (
      <a
        {...rest}
        className={className ? `${base} ${className}` : base}
      />
    );
  };

  return {
    ...defaultMdxComponents,
    Button,
    ...components,
  };
}
