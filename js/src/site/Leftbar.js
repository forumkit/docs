import app from 'forumkit/site/app';
import { extend } from 'forumkit/common/extend';
import IndexPage from 'forumkit/common/components/IndexPage';
import LinkButton from 'forumkit/common/components/LinkButton';


export default function () {
    extend(IndexPage.prototype, 'LeftItems', (items) => {

      items.add(
        'docs',
        <LinkButton className="Links" href={'/docs'}>
          {app.translator.trans('开始')}
        </LinkButton>,
        -1
      );

      items.add(
        'troubleshooting',
        <LinkButton className="Links" href={'/docs/troubleshooting'}>
          {app.translator.trans('故障排除')}
        </LinkButton>,
        -2
      );

      items.add(
        'helloworld',
        <LinkButton className="Links" href={'/docs/helloworld'}>
          {app.translator.trans('你好世界')}
        </LinkButton>,
        -3
      );

    });
}