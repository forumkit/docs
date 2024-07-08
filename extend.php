<?php

use Forumkit\Extend;

return [
    (new Extend\Frontend('site'))
        ->js(__DIR__.'/js/dist/site.js')
        ->css(__DIR__.'/less/site.less')
        ->route('/helloworld', 'helloworld'),

];