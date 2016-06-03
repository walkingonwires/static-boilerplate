this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"title",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"description",{"name":"content","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"keywords",{"name":"content","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"styles",{"name":"content","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"body",{"name":"content","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"scripts",{"name":"content","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <title>Index Page</title>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <meta name=\"description\" content=\"This is the index page\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <meta name=\"keywords\" content=\"transmogrify, xmog\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <h1>This is the homepage</h1>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["app"]["templates"]["layout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <title>Default Title</title>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <meta name=\"description\" content=\"description goes here\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <meta name=\"keywords\" content=\"keywords go here\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\">\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"title",{"name":"block","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"description",{"name":"block","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"keywords",{"name":"block","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <meta name=\"author\" content=\"Transmogrify\">\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"format-detection\" content=\"telephone=no\">\n\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n    "
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"styles",{"name":"block","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    <link rel=\"icon\" type=\"image/ico\" href=\"/static/images/icons/favicon.ico\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon.png\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-57x57.png\" sizes=\"57x57\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-72x72.png\" sizes=\"72x72\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-76x76.png\" sizes=\"76x76\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-114x114.png\" sizes=\"114x114\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-120x120.png\" sizes=\"120x120\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-144x144.png\" sizes=\"144x144\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-152x152.png\" sizes=\"152x152\">\n    <link rel=\"apple-touch-icon\" href=\"/images/icons/apple-touch-icon-180x180.png\" sizes=\"180x180\">\n</head>\n\n<body>\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"body",{"name":"block","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n<script src=\"/js/vendor/jquery-2.1.4.min.js\"></script>\n<script src=\"/js/vendor/jquery.transit.min.js\"></script>\n<script src=\"/js/vendor/fastClick.js\"></script>\n<script src=\"/js/lib/main.js\"></script>\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"scripts",{"name":"block","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</body>\n</html>\n";
},"useData":true});