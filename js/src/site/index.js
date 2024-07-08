import app from 'forumkit/site/app';
import HelloWorld from './components/HelloWorld';

app.initializers.add('docs', function(app) {

  app.routes.HelloWorld = { path: '/helloworld', component: HelloWorld };

});
