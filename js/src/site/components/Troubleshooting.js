
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
                <h2>故障排除</h2>
    
                <p>如果 Forumkit 未按预期安装或工作，您应该做的第一件事是再次检查您的环境是否满足系统要求。</p>
                <p>如果您缺少 Forumkit 需要运行的内容，则需要先进行补救。</p>
                <p>如果您没有找到任何有用的信息，那么就可以进行排查故障了。</p>

                <h3>激活调试模式</h3>
                <blockquote>
                    这些调试工具非常有用，但可能会公开不应公开的信息。 如果您在暂存或开发环境中，这些步骤很好，但如果您不知道自己在做什么，请在生产环境中跳过此步骤。
                </blockquote>
                <p>在继续操作之前，您应该启用 Forumkit 的调试工具。只需使用文本编辑器打开config.php,将<b>debug</b>值更改为<b>true</b>，然后保存文件即可。这将导致 Forumkit 显示详细的错误消息，让您深入了解出了什么问题。</p>

                <h3>常见修复</h3>
                <p>许多问题可以通过以下方法解决：</p>
                <ul>
                    <li>清除浏览器缓存</li>
                    <li>使用 <code>php forumkit cache:clear</code> 清除后端缓存。</li>
                    <li>确保您的数据库已使用 <code>php forumkit migrate</code> 进行更新。</li>
                    <li>确保管理仪表板中的电子邮件配置正确无误：在注册、重置密码、更改电子邮件和发送通知时，无效的电子邮件配置将导致错误。</li>
                    <li>一个潜在的罪魁祸首可能是自定义页眉、自定义页脚或自定义 LESS。如果您的问题出在前端,请尝试通过管理仪表板的“外观”页面暂时删除这些问题。</li>
                </ul>
                <p>您还需要查看 php forumkit info 信息的输出，以确保没有任何重大问题。</p>

                <h3>重现问题</h3>
                <p>尝试使问题再次发生。当它发生时，请仔细注意您正在做什么。它是每次发生，还是只是偶尔发生？尝试更改您认为可能会影响问题的设置或您做事的顺序。它是否在某些条件下发生，但在其他条件下不会发生？</p>
                <p>如果您最近添加或更新了扩展程序，则应暂时禁用它，看看这是否会使问题消失。确保所有扩展都用于你正在运行的 Forumkit 版本。过时的扩展可能会导致各种问题。</p>
                <p>在此过程中的某个地方，您可能会了解导致问题的原因，并找出解决问题的方法。但是，即使这没有发生，一旦您提交了错误报告，您也可能会遇到一些有价值的线索，这些线索将帮助我们弄清楚发生了什么。</p>

                <h3>收集信息</h3>
                <p>如果您看起来需要帮助解决问题，那么是时候认真对待收集数据了。在以下位置查找有关问题的错误消息或其他信息：</p>
                <ul>
                    <li>显示在实际页面上</li>
                    <li>显示在浏览器控制台中(Chrome:更多工具 - 开发者工具 - 控制台)</li>
                    <li>记录在服务器的错误日志中(例如/var/log/nginx/error.log)</li>
                    <li>记录在PHP-FPM的错误日志中(例如/var/log/php8.x-fpm.log)</li>
                    <li>由 Forumkit 录制 (storage/logs)</li>
                </ul>
                <p>将任何消息复制到文本文件中,并记下一些关于错误发生时间、当时在做什么等的注释。请务必包括您可能收集到的有关问题发生和不发生的情况的任何见解。尽可能多地添加有关服务器环境的信息:操作系统版本、Web 服务器版本、PHP 版本和处理程序等。</p>

                <h3>准备报告</h3>
                <p>一旦你收集了关于问题的所有信息，你就可以提交错误报告了。请按照报告错误中的说明进行操作。</p>
                <p>如果您在提交报告后发现有关该问题的新信息，请在原始帖子的底部添加该信息。即使您自己解决了问题，也最好提交报告，因为其他用户也可能从您的解决方案中受益。如果您找到了该问题的临时解决方法，请务必也提及。</p>
                
            </article>
        );
      }


}
