{"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.live : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"kr-talk_item column column--3\">\n      <div class=\"kr-card\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? depth0.picture : depth0), depth0))
    + "\" class=\"kr-talk_speaker-photo\"/>\n\n        <a class=\"kr-talk_read-more\" href=\"./speakers/"
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\n          <h3 class=\"kr-talk_speaker-name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\n        </a>\n        <h2 class=\"kr-talk_title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n        \n        <p class=\"kr-talk_abstract\">\n            "
    + alias2(alias1((depth0 != null ? depth0.shortDesc : depth0), depth0))
    + "\n        </p>\n         <a class=\"kr-talk_read-more\" href=\"./speakers/"
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">Read more</a>\n         <a class=\"kr-btn kr-btn--twitter\" href=\"https://twitter.com/"
    + alias2(alias1((depth0 != null ? depth0.twitter : depth0), depth0))
    + "\" target=\"_blank\"><span>@"
    + alias2(alias1((depth0 != null ? depth0.twitter : depth0), depth0))
    + "</span></a>\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- build:class -->sub<!-- /build:class -->\n<!-- build:title -->Speakers - Kiwi Ruby<!-- /build:title -->\n\n<!-- build:header -->\n<header id=\"kr-header\" class=\"kr-header--sub-page\">\n  <h1 class=\"kr-logo kr-logo--sub-page\">\n    <span class=\"hidden\">Kiwi Ruby </span>\n    <a href=\"./\">\n      <img src=\"./img/kiwi-ruby-logo.svg?v=0.1\"/>\n    </a>\n  </h1>\n</header>\n<!-- /build:header -->\n\n<!-- build:content -->\n  <div class=\"row row--narrow row--small-column\">\n\n    <div class=\"column column--6\">\n      <div  class=\"kr-content_inner\">\n        <h2 class=\"kr-content_title u-mt-10\">We've got some great talks by some amazing speakers lined up</h2>\n        <p class=\"kr-content_para\">\n            We think you'll learn something from the Kiwi Ruby talks whether you've been writing Ruby for ten years or ten days.\n          </p>\n          <p class=\"kr-content_para\">\n            We'll be finding the complexity and wonder in the technology we use every day, exploring new technologies, and thinking about how to work with each other and ourselves more effectively. \n          </p>\n      </div>\n\n    </div>\n    <div class=\"column column--3\">\n  \n    </div>\n  </div>\n  <div class=\"kr-talks row row--narrow row--small-column u-mt-30\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"kr-talk_item column column--3\">\n        <div class=\"kr-card\">\n\n        <p class=\"kr-talk_abstract\">\n            More speakers to be announced soon.\n        </p>\n\n      </div>\n    </div>\n\n  </div>\n  <hr class=\"u-rule--ruby\">\n<!-- /build:content -->";
},"useData":true}