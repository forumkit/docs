import { extend } from 'forumkit/common/extend';
import HeaderPrimary from 'forumkit/site/components/HeaderPrimary';
import LinkButton from 'forumkit/common/components/LinkButton';

export default function () {
  extend(HeaderPrimary.prototype, 'items', (items) => {
    items.add(
      'docs',
      <LinkButton className="Topdocs Button Button--link" href={'/docs'}>
          {app.translator.trans('文档')}
      </LinkButton>,
      -1
    );
  });
}


