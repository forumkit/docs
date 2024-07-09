import Page from 'forumkit/common/components/Page';
import IndexPage from 'forumkit/common/components/IndexPage';
import listItems from 'forumkit/common/helpers/listItems';

export default class HelloWorld extends Page {
    oncreate(vnode) {
      super.oncreate(vnode);
  
      app.setTitle("你好世界");
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
            <h2>你好世界</h2>

            <p>以有趣的方式创建社区的</p>
        </article>
    );
  }


}
