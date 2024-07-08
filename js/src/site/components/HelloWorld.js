
import Page from 'forumkit/common/components/Page';

export default class HelloWorld extends Page {
    oncreate(vnode) {
      super.oncreate(vnode);
  
      app.setTitle("你好世界");
      app.setTitleCount(0);
    }
  
    view() {
        return m(".IndexPage", [

            m(
              ".container",
              m(".IndexPageContainer", [
      
                m(
                  ".IndexPage-results.centerber",
                  m("div.ContentPages", this.content()),
                ),
      
              ])
            ),
          ]);
    }
  
  content() {

    return (
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="iconcontainer">
              <div class="fontico"><i class="fas fa-info-circle"></i></div>
              <div class="icocont">
                <div class="titolo1">现代论坛</div>
              </div>
            </div>
          </header>
          <div class="Pages-container">
            <div class="Post-body"><p>想法，无论大小，总是从人开始。</p>

              <h2>我们提供什么</h2>
              <ul>
                <li><b>论坛：</b> 讨论广泛的技术主题，从 Web 开发和移动应用程序开发到机器学习和人工智能。</li>
                <li><b>问与答：</b> 从社区中的其他程序员和专家那里获得帮助。</li>
                <li><code>composer require forumkit/docs *@dev</code></li>
                <li><code>composer remove forumkit/docs *@dev</code></li>
              </ul>


              </div>
          </div>
        </div>
    );
  }


}
