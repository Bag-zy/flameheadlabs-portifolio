'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

interface MdxContentProps {
  code: string;
}

export function MdxContent({ code }: MdxContentProps) {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent />;
}
