import React, {type ReactNode} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import DisqusComments from '@site/src/components/DisqusComments';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogPostItem {...props} />
      {/* コメントセクションをドキュメントの最後に自動で追加 */}
      <div style={{ marginTop: '2rem' }}>
        <DisqusComments />
      </div>
    </>
  );
}
