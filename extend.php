<?php

use Forumkit\Extend;

return [
    (new Extend\Frontend('site'))
        ->js(__DIR__.'/js/dist/site.js')
        ->css(__DIR__.'/less/site.less')
        ->route('/docs', 'docs')
        ->route('/docs/troubleshooting', 'troubleshooting')
        ->route('/docs/helloworld', 'helloworld'),

];