# Adonis fullstack VUE JS application
### Versions 
##### Adonis 4.1.0, Vue JS 2.X 

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Laravel Mix
10. SASS Compiler
11. .Vue File Compiler
12. Axios

## Setup

Manually clone the repo and then run

```bash
npm install
```


### Run Server & Auto Compile

First start the server

```bash
adonis serve --dev
```

Next open a second terminal and run

```bash
adonis assets --watch
```
### Important Notes

Axios `CSRF Protection` compatibility has not yet been setup. It is up to you to do this. 
