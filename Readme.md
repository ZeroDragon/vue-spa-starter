VUE SPA STARTER
===============

Vue spa starer is a set of tools to help you start a new SPA using:

 - Vue
 - Vuex
 - Vue-router
 - Vue Single File Components
 - Sass in Vue files
 - Pug in Vue files
 - ES10 in Vue files
 - BrowserSync (for develop)
 - Webpack

### Optional Stuff
This repo uses a Makefile and byobu to help you have an easier developer vision of the repo. You can install byobu with homebrew, Makefile support is built in with apple developer tools.

### Usage
**Initial setup**  
Just type `make bootstrap` to install al npm dependencies.  
Make sure you create a `.env` in root file with all your environmental variables. Minimal setup required is:
```
ENVIRONMENT=dev
PORT=3000
BSPORT=3117
```
This will tell the dev server to be mounted on port 3000, set `env` to `dev` and the BrowserSync server to be mounted on port 3117

if you need to ade more env variables, you must add them to `src/dev/config` and to the `.env` file.

Also if you need environmental variables on runtime, you must add them to the webpack file at the end

**Start dev server**  
Dev server is made of two instances, one express server and one browsersync server. To ease this startup, there is a Make command that starts a byobu session with both servers started. To create this server just type `make start`

**Stop dev server**  
If you used `make start` to start your dev server, you can type `make stop` to finish it.

**Start express server**  
If case of you don't want to use the autmatic setup or don't want to use browsersync, you can start only express server alone typing `make dev.server`

**Start browsersync server**  
You can also start browsersync server alone typing `make dev.browsersync`

**Building distributions**  
When ready to publish, you can type `make build` to build all compiled and bundled files to `/dist`. That distribution does not require any specific server and can be mounted with nginx or apache. **IMPORTANT** you might need to update the `.env` file for production

**Testing build**  
After creating a distribution, you can mount a localhost server that serves files from `./dist` just by typing `make stage`

