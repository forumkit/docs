
import Page from 'forumkit/common/components/Page';
import IndexPage from 'forumkit/common/components/IndexPage';
import listItems from 'forumkit/common/helpers/listItems';

export default class Docs extends Page {
    oncreate(vnode) {
        super.oncreate(vnode);
        app.setTitle("故障排除");
    }
  
    view() {
        return (
            <div className="DocsBox">
                <div className="container">
                    <div className="DocsPage">

                        <div className="DocsLeft">
                            <ul>{listItems(IndexPage.prototype.LeftItems().toArray())}</ul>
                        </div>

                        <div className="DocsRight">
                            <div className="ContentResults">{this.content()}</div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
  
    content() {

        return (
            <article>
                <h2>故障排除</h2>
    
                <p>如果 Forumkit 未按预期安装或工作，您应该做的第一件事是再次检查您的环境是否满足系统要求。</p>
                <p>如果您缺少 Forumkit 需要运行的内容，则需要先进行补救。</p>
                    
            </article>
        );
      }


}
