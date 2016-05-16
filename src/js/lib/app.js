page('*', init.ctx);
page('/', route.home);
page('/work', route.work);
page('/what-we-do', route.whatwedo);
page('/about-us', route.aboutus);
page('/jobs', route.jobs);
page('/labs', route.labs);
page('*', render.content);
page();
