import React, {type ReactNode} from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import DisqusComments from '@site/src/components/DisqusComments';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  return (
    <>
      <DocItem {...props} />
      {/* コメントセクションをドキュメントの最後に自動で追加 */}
      <div style={{ marginTop: '2rem' }}>
        <DisqusComments />
      </div>
    </>
  );
}
