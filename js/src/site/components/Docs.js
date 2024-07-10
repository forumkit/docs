
import Page from 'forumkit/common/components/Page';
import IndexPage from 'forumkit/common/components/IndexPage';
import listItems from 'forumkit/common/helpers/listItems';

export default class Docs extends Page {
    oncreate(vnode) {
        super.oncreate(vnode);
        app.setTitle("文档");
        app.setTitleCount(0);
    }
  
    view() {
        return (
            <div className="DocsBox">
                <div className="container">
                    <div className="DocsPage">

                        <div className="DocsLeft">
                            <ul>{listItems(IndexPage.prototype.CustomItems().toArray())}</ul>
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
                <h2>开始</h2>
    
                <p>想法，无论大小，总是从人开始。</p>
                <h3>我们提供什么</h3>
                <ul>
                    <li><b>论坛：</b> 讨论广泛的技术主题，从 Web 开发和移动应用程序开发到机器学习和人工智能。</li>
                    <li><b>问与答：</b> 从社区中的其他程序员和专家那里获得帮助。</li>
                    <li><code>composer require forumkit/docs *@dev</code></li>
                    <li><code>composer remove forumkit/docs</code></li>
                </ul>
            </article>
        );
      }


}
