page('*', init.ctx);
page('/', route.home, render.content);
page('/work', route.work, render.content);
page('/what-we-do', route.whatwedo, render.content);
page('/about-us', route.aboutus, render.content);
page('/jobs', route.jobs, render.content);
page('/labs', route.labs, render.content);
page('*', route.error, render.content);
page();
