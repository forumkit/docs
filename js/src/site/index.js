import app from 'forumkit/site/app';

import Topbar from "./Topbar";
import Leftbar from "./Leftbar";

import Docs from './components/Docs';
import Troubleshooting from './components/Troubleshooting';
import HelloWorld from './components/HelloWorld';

app.initializers.add('docs', (app) => {

  app.routes.Docs = { path: '/docs', component: Docs };
  app.routes.Troubleshooting = { path: '/docs/troubleshooting', component: Troubleshooting };
  app.routes.HelloWorld = { path: '/docs/helloworld', component: HelloWorld };

  Topbar();
  Leftbar();
});
