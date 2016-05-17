
(function () {
  // private api

  var cache = {};

  function get (url, cb) {
    if (cache[url]) return cb(cache[url]);
    $.ajax({
      url: url,
      success: function(data) {
        cache[url] = data;
        cb(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      },
      dataType: 'text'
    });
  }

  // public api

  window.init = {
    ctx: function (ctx, next) {
      ctx.data = {};
      ctx.partials = {};
      next();
    }
  };

  window.route = {
    home: function (ctx, next) {
      get('/views/home.html', function (html) {
        ctx.data.index = 0;
        ctx.partials.content = html;
        next();
      });
    },
    work: function (ctx, next) {
      get('/views/work.html', function (html) {
        ctx.data.index = 1;
        ctx.partials.content = html;
        next();
      });
    },
    whatwedo: function (ctx, next) {
      get('/views/what-we-do.html', function (html) {
        ctx.data.index = 2;
        ctx.partials.content = html;
        next();
      });
    },
    aboutus: function (ctx, next) {
      get('/views/about-us.html', function (html) {
        ctx.data.index = 3;
        ctx.partials.content = html;
        next();
      });
    },
    jobs: function (ctx, next) {
      get('/views/jobs.html', function (html) {
        ctx.data.index = 4;
        ctx.partials.content = html;
        next();
      });
    },
    labs: function (ctx, next) {
      get('/views/labs.html', function (html) {
        ctx.data.index = 5;
        ctx.partials.content = html;
        next();
      });
    },
    error: function (ctx, next) {
      get('/views/error.html', function (html) {
        ctx.data.index = 5;
        ctx.partials.content = html;
        next();
      });
    }
  };

  window.render = {
    content: function (ctx, next) {
      get('/views/content.html', function (html) {
        var template = Hogan.compile(html),
          content = template.render(ctx.data, ctx.partials);
        //
        $('#content').empty().append(content);
        changeActive(ctx.data.index);
        if (typeof done === 'function') done(ctx.data.index);
      });
    }
  };

  window.done = null;
}());
