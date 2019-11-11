In our front-end there are a few ways we are able to test our application.

The first of which is page-side testing. On server startup each page is ran to make sure that it is able to successfully render as if a user would click on it. Secondly, any function that is on that page is able to be accessed by the xxx.test.js file. If any test on one of those fails it will cause an exception on build.

An example could be in our Calendar.js page. It has an associated Calendar.test.js. In this file is has tests associated with running a calendar. This includes creating and using buttons on the calendar widget, and obviously if the page can even render on startup.

For the backend, will be provided for each HTML call for each function. We are estimating a 80% test coverage.