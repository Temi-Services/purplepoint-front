# Projet Angular - Contenu complet

## Arborescence

```
./
.
â”œâ”€â”€ .editorconfig
â”œâ”€â”€ .gitignore
â”œâ”€â”€ .prettierrc
â”œâ”€â”€ .vscode
â”‚Â Â  â”œâ”€â”€ extensions.json
â”‚Â Â  â”œâ”€â”€ launch.json
â”‚Â Â  â”œâ”€â”€ mcp.json
â”‚Â Â  â””â”€â”€ tasks.json
â”œâ”€â”€ README.md
â”œâ”€â”€ angular.json
â”œâ”€â”€ export.sh
â”œâ”€â”€ package-lock.json
â”œâ”€â”€ package.json
â”œâ”€â”€ public
â”‚Â Â  â””â”€â”€ favicon.ico
â”œâ”€â”€ src
â”‚Â Â  â”œâ”€â”€ app
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.component.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.config.server.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.config.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.css
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.html
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.routes.server.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.routes.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.spec.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ app.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ core
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ auth
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ amplify.config.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ auth.guard.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ auth.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ role.guard.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ http
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ api.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ auth.interceptor.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ error.interceptor.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ models
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ appointment.model.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ call.model.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ campaign.model.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ medical-record.model.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ medication.model.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ roles.enum.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ user.model.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ features
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ admin
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ admin.routes.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ pages
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ campaign-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ campaign-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ campaign-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ campaign-list
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ campaign-list.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ campaign-list.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ dashboard
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ admin-dashboard.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ admin-dashboard.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ user-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ user-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ user-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ user-management
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ user-management.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ user-management.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ services
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ admin-user.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ campaign.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ auth
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ login
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ login.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ login.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ employee
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ employee.routes.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ pages
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ call-history
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ call-history.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ call-history.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ call-log-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ call-log-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ call-log-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ dashboard
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ employee-dashboard.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ employee-dashboard.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ services
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ call.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ offline-call.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medical
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medical.routes.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ pages
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ appointment-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ appointment-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ appointment-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medical-note-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medical-note-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ medical-note-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medication-form
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medication-form.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ medication-form.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ patient-detail
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”œâ”€â”€ patient-detail.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ patient-detail.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ patient-list
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ patient-list.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ patient-list.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ services
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ appointment.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ medical-record.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ medication.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ user.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ patient
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ components
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”œâ”€â”€ adherence-badge
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â””â”€â”€ adherence-badge.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”œâ”€â”€ appointment-card
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â”œâ”€â”€ appointment-card.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â””â”€â”€ appointment-card.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â””â”€â”€ medication-card
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â      â”œâ”€â”€ medication-card.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â      â””â”€â”€ medication-card.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ pages
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”œâ”€â”€ appointments
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â”œâ”€â”€ appointment-list.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â””â”€â”€ appointment-list.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”œâ”€â”€ dashboard
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â”œâ”€â”€ patient-dashboard.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â””â”€â”€ patient-dashboard.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”œâ”€â”€ medical-record
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â”œâ”€â”€ medical-record-view.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â”‚Â Â  â””â”€â”€ medical-record-view.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â  â””â”€â”€ medications
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â      â”œâ”€â”€ medication-list.component.html
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”‚Â Â      â””â”€â”€ medication-list.component.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â”œâ”€â”€ patient.routes.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â      â””â”€â”€ services
â”‚Â Â  â”‚Â Â  â”‚Â Â          â”œâ”€â”€ appointment.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â          â”œâ”€â”€ medical-record.service.ts
â”‚Â Â  â”‚Â Â  â”‚Â Â          â””â”€â”€ medication.service.ts
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ home
â”‚Â Â  â”‚Â Â  â”‚Â Â  â””â”€â”€ home.component.ts
â”‚Â Â  â”‚Â Â  â””â”€â”€ shared
â”‚Â Â  â”‚Â Â      â””â”€â”€ components
â”‚Â Â  â”‚Â Â          â”œâ”€â”€ navbar
â”‚Â Â  â”‚Â Â          â”‚Â Â  â”œâ”€â”€ navbar.component.html
â”‚Â Â  â”‚Â Â          â”‚Â Â  â””â”€â”€ navbar.component.ts
â”‚Â Â  â”‚Â Â          â””â”€â”€ not-found
â”‚Â Â  â”‚Â Â              â””â”€â”€ not-found.component.ts
â”‚Â Â  â”œâ”€â”€ environments
â”‚Â Â  â”‚Â Â  â”œâ”€â”€ environment.prod.ts
â”‚Â Â  â”‚Â Â  â””â”€â”€ environment.ts
â”‚Â Â  â”œâ”€â”€ index.html
â”‚Â Â  â”œâ”€â”€ main.server.ts
â”‚Â Â  â”œâ”€â”€ main.ts
â”‚Â Â  â”œâ”€â”€ server.ts
â”‚Â Â  â””â”€â”€ styles.css
â”œâ”€â”€ tailwind.config.js
â”œâ”€â”€ tsconfig.app.json
â”œâ”€â”€ tsconfig.json
â””â”€â”€ tsconfig.spec.json
```

## Contenu des fichiers

### `.editorconfig`

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

### `.gitignore`

```
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/mcp.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
__screenshots__/

# System files
.DS_Store
Thumbs.db
```

### `.prettierrc`

```
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

### `.vscode/extensions.json`

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=827846
  "recommendations": ["angular.ng-template"]
}
```

### `.vscode/launch.json`

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200/"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: test",
      "url": "http://localhost:9876/debug.html"
    }
  ]
}
```

### `.vscode/mcp.json`

```json
{
  // For more information, visit: https://angular.dev/ai/mcp
  "servers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

### `.vscode/tasks.json`

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?LinkId=733558
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "Changes detected"
          },
          "endsPattern": {
            "regexp": "bundle generation (complete|failed)"
          }
        }
      }
    },
    {
      "type": "npm",
      "script": "test",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "Changes detected"
          },
          "endsPattern": {
            "regexp": "bundle generation (complete|failed)"
          }
        }
      }
    }
  ]
}
```

### `README.md`

```markdown
# PurplepointFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
```

### `angular.json`

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm"
  },
  "newProjectRoot": "projects",
  "projects": {
    "purplepoint-front": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "server": "src/main.server.ts",
            "outputMode": "server",
            "security": {
              "allowedHosts": []
            },
            "ssr": {
              "entry": "src/server.ts"
            }
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "purplepoint-front:build:production"
            },
            "development": {
              "buildTarget": "purplepoint-front:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
```

### `export.sh`

```bash
#!/usr/bin/env bash

# Script d'export de projet Angular vers un fichier Markdown
# Exporte uniquement les fichiers que Git considÃ¨re comme non ignorÃ©s
# (mÃªme si certains fichiers ignorÃ©s ont Ã©tÃ© ajoutÃ©s par erreur Ã  l'index)

OUTPUT_FILE="${1:-frontend-project-content.md}"

# VÃ©rifier qu'on est dans un dÃ©pÃ´t Git
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Erreur : Ce script doit Ãªtre exÃ©cutÃ© dans un dÃ©pÃ´t Git." >&2
    exit 1
fi

# Se placer Ã  la racine du dÃ©pÃ´t
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT" || exit 1

echo "RÃ©cupÃ©ration des fichiers non ignorÃ©s (mÃªme s'ils sont suivis par erreur)..."

FILES=()

# 1. Fichiers suivis, mais on exclut ceux qui correspondent au .gitignore
while IFS= read -r -d '' file; do
    # git check-ignore --no-index teste si le chemin serait ignorÃ© s'il n'Ã©tait pas suivi
    if ! git check-ignore -q --no-index "$file"; then
        FILES+=("$file")
    fi
done < <(git ls-files --cached -z)

# 2. Fichiers non suivis et non ignorÃ©s (dÃ©jÃ  filtrÃ©s par git)
while IFS= read -r -d '' file; do
    FILES+=("$file")
done < <(git ls-files --others --exclude-standard -z)

# Trier la liste finale
IFS=$'\n' sorted=($(sort <<<"${FILES[*]}"))
unset IFS
FILES=("${sorted[@]}")

if [ ${#FILES[@]} -eq 0 ]; then
    echo "Aucun fichier non ignorÃ© trouvÃ©." >&2
    exit 1
fi

# Fonction de secours pour afficher l'arborescence si tree --fromfile n'est pas dispo
generate_tree() {
    local prev_parts=()
    for file in "${FILES[@]}"; do
        IFS='/' read -ra parts <<< "$file"
        local depth=${#parts[@]}
        local i=0
        while [ $i -lt ${#prev_parts[@]} ] && [ $i -lt $depth ] && [ "${parts[$i]}" = "${prev_parts[$i]}" ]; do
            ((i++))
        done
        for (( j=i; j<depth-1; j++ )); do
            printf "%*s%s/\n" $(( j*2 )) "" "${parts[$j]}"
        done
        printf "%*s%s\n" $(( (depth-1)*2 )) "" "${parts[$depth-1]}"
        prev_parts=("${parts[@]}")
    done
}

{
    echo "# Projet Angular - Contenu complet"
    echo ""
    echo "## Arborescence"
    echo ""
    echo '```'
    echo "./"

    if command -v tree &> /dev/null && tree --fromfile /dev/null &>/dev/null; then
        printf "%s\n" "${FILES[@]}" | tree --fromfile -a --noreport
    else
        generate_tree
    fi

    echo '```'
    echo ""
    echo "## Contenu des fichiers"
    echo ""

    for file in "${FILES[@]}"; do
        echo "### \`$file\`"
        echo ""

        ext="${file##*.}"
        case "$ext" in
            ts) lang="typescript" ;;
            html) lang="html" ;;
            css) lang="css" ;;
            scss) lang="scss" ;;
            less) lang="less" ;;
            js) lang="javascript" ;;
            json) lang="json" ;;
            md) lang="markdown" ;;
            yml|yaml) lang="yaml" ;;
            xml|svg) lang="xml" ;;
            sh) lang="bash" ;;
            py) lang="python" ;;
            java) lang="java" ;;
            rb) lang="ruby" ;;
            *) lang="" ;;
        esac

        echo '```'"${lang}"
        cat "$file"
        echo '```'
        echo ""
    done
} > "$OUTPUT_FILE"

echo "âœ… Fichier exportÃ© : $OUTPUT_FILE"
```

### `package-lock.json`

```json
{
  "name": "purplepoint-front",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "purplepoint-front",
      "version": "0.0.0",
      "dependencies": {
        "@angular/common": "^21.2.0",
        "@angular/compiler": "^21.2.0",
        "@angular/core": "^21.2.0",
        "@angular/forms": "^21.2.0",
        "@angular/platform-browser": "^21.2.0",
        "@angular/platform-server": "^21.2.0",
        "@angular/router": "^21.2.0",
        "@angular/ssr": "^21.2.7",
        "aws-amplify": "^6.16.4",
        "express": "^5.1.0",
        "rxjs": "~7.8.0",
        "tslib": "^2.3.0"
      },
      "devDependencies": {
        "@angular/build": "^21.2.7",
        "@angular/cli": "^21.2.7",
        "@angular/compiler-cli": "^21.2.0",
        "@types/express": "^5.0.1",
        "@types/node": "^20.17.19",
        "autoprefixer": "^10.5.0",
        "jsdom": "^28.0.0",
        "postcss": "^8.5.13",
        "prettier": "^3.8.1",
        "tailwindcss": "^3.4.19",
        "typescript": "~5.9.2",
        "vitest": "^4.0.8"
      }
    },
    "node_modules/@acemir/cssom": {
      "version": "0.9.31",
      "resolved": "https://registry.npmjs.org/@acemir/cssom/-/cssom-0.9.31.tgz",
      "integrity": "sha512-ZnR3GSaH+/vJ0YlHau21FjfLYjMpYVIzTD8M8vIEQvIGxeOXyXdzCI140rrCY862p/C/BbzWsjc1dgnM9mkoTA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@algolia/abtesting": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@algolia/abtesting/-/abtesting-1.14.1.tgz",
      "integrity": "sha512-Dkj0BgPiLAaim9sbQ97UKDFHJE/880wgStAM18U++NaJ/2Cws34J5731ovJifr6E3Pv4T2CqvMXf8qLCC417Ew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-abtesting": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-abtesting/-/client-abtesting-5.48.1.tgz",
      "integrity": "sha512-LV5qCJdj+/m9I+Aj91o+glYszrzd7CX6NgKaYdTOj4+tUYfbS62pwYgUfZprYNayhkQpVFcrW8x8ZlIHpS23Vw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-analytics": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-analytics/-/client-analytics-5.48.1.tgz",
      "integrity": "sha512-/AVoMqHhPm14CcHq7mwB+bUJbfCv+jrxlNvRjXAuO+TQa+V37N8k1b0ijaRBPdmSjULMd8KtJbQyUyabXOu6Kg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-common": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-common/-/client-common-5.48.1.tgz",
      "integrity": "sha512-VXO+qu2Ep6ota28ktvBm3sG53wUHS2n7bgLWmce5jTskdlCD0/JrV4tnBm1l7qpla1CeoQb8D7ShFhad+UoSOw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-insights": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-insights/-/client-insights-5.48.1.tgz",
      "integrity": "sha512-zl+Qyb0nLg+Y5YvKp1Ij+u9OaPaKg2/EPzTwKNiVyOHnQJlFxmXyUZL1EInczAZsEY8hVpPCLtNfhMhfxluXKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-personalization": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-personalization/-/client-personalization-5.48.1.tgz",
      "integrity": "sha512-r89Qf9Oo9mKWQXumRu/1LtvVJAmEDpn8mHZMc485pRfQUMAwSSrsnaw1tQ3sszqzEgAr1c7rw6fjBI+zrAXTOw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-query-suggestions": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-query-suggestions/-/client-query-suggestions-5.48.1.tgz",
      "integrity": "sha512-TPKNPKfghKG/bMSc7mQYD9HxHRUkBZA4q1PEmHgICaSeHQscGqL4wBrKkhfPlDV1uYBKW02pbFMUhsOt7p4ZpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/client-search": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/client-search/-/client-search-5.48.1.tgz",
      "integrity": "sha512-4Fu7dnzQyQmMFknYwTiN/HxPbH4DyxvQ1m+IxpPp5oslOgz8m6PG5qhiGbqJzH4HiT1I58ecDiCAC716UyVA8Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/ingestion": {
      "version": "1.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/ingestion/-/ingestion-1.48.1.tgz",
      "integrity": "sha512-/RFq3TqtXDUUawwic/A9xylA2P3LDMO8dNhphHAUOU51b1ZLHrmZ6YYJm3df1APz7xLY1aht6okCQf+/vmrV9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/monitoring": {
      "version": "1.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/monitoring/-/monitoring-1.48.1.tgz",
      "integrity": "sha512-Of0jTeAZRyRhC7XzDSjJef0aBkgRcvRAaw0ooYRlOw57APii7lZdq+layuNdeL72BRq1snaJhoMMwkmLIpJScw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/recommend": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/recommend/-/recommend-5.48.1.tgz",
      "integrity": "sha512-bE7JcpFXzxF5zHwj/vkl2eiCBvyR1zQ7aoUdO+GDXxGp0DGw7nI0p8Xj6u8VmRQ+RDuPcICFQcCwRIJT5tDJFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/requester-browser-xhr": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/requester-browser-xhr/-/requester-browser-xhr-5.48.1.tgz",
      "integrity": "sha512-MK3wZ2koLDnvH/AmqIF1EKbJlhRS5j74OZGkLpxI4rYvNi9Jn/C7vb5DytBnQ4KUWts7QsmbdwHkxY5txQHXVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/requester-fetch": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/requester-fetch/-/requester-fetch-5.48.1.tgz",
      "integrity": "sha512-2oDT43Y5HWRSIQMPQI4tA/W+TN/N2tjggZCUsqQV440kxzzoPGsvv9QP1GhQ4CoDa+yn6ygUsGp6Dr+a9sPPSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@algolia/requester-node-http": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/@algolia/requester-node-http/-/requester-node-http-5.48.1.tgz",
      "integrity": "sha512-xcaCqbhupVWhuBP1nwbk1XNvwrGljozutEiLx06mvqDf3o8cHyEgQSHS4fKJM+UAggaWVnnFW+Nne5aQ8SUJXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/client-common": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@angular-devkit/architect": {
      "version": "0.2102.9",
      "resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.2102.9.tgz",
      "integrity": "sha512-OlPEtd5pPZSFdkXEIyZ93jsfBrkvUrVPb3xs4z2WPRnBRk9jyey40eKnmql86KRHfdn4WjHpmde4NDgtDpZRxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "21.2.9",
        "rxjs": "7.8.2"
      },
      "bin": {
        "architect": "bin/cli.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@angular-devkit/core": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-21.2.9.tgz",
      "integrity": "sha512-04rdOGEzjLWFHlyAwqtuikginFeQ2jfXS5HqqKNP0VtG6Uu9NUDAEW5UDvXgqkEMfCDwGZbmg2iRHxp3AmAKVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "8.18.0",
        "ajv-formats": "3.0.1",
        "jsonc-parser": "3.3.1",
        "picomatch": "4.0.4",
        "rxjs": "7.8.2",
        "source-map": "0.7.6"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      },
      "peerDependencies": {
        "chokidar": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "chokidar": {
          "optional": true
        }
      }
    },
    "node_modules/@angular-devkit/schematics": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-21.2.9.tgz",
      "integrity": "sha512-Gyyuq2Vet70AMkbC+e0L6rjzjZWjSOyKTlOJvd99GjjyWQf6eezjd8IcF17ppKJsML6YUagO2I6AlWROq5yJmg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "21.2.9",
        "jsonc-parser": "3.3.1",
        "magic-string": "0.30.21",
        "ora": "9.3.0",
        "rxjs": "7.8.2"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@angular/build": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@angular/build/-/build-21.2.9.tgz",
      "integrity": "sha512-XYP5ALB56NWvcQisznmvQdVU6WJdUCAuCAEN2eDZNVd9X1IqRNfewQfFH6FyHo7SrK4GHDReqm6xWW6rs0+weQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ampproject/remapping": "2.3.0",
        "@angular-devkit/architect": "0.2102.9",
        "@babel/core": "7.29.0",
        "@babel/helper-annotate-as-pure": "7.27.3",
        "@babel/helper-split-export-declaration": "7.24.7",
        "@inquirer/confirm": "5.1.21",
        "@vitejs/plugin-basic-ssl": "2.1.4",
        "beasties": "0.4.1",
        "browserslist": "^4.26.0",
        "esbuild": "0.27.3",
        "https-proxy-agent": "7.0.6",
        "istanbul-lib-instrument": "6.0.3",
        "jsonc-parser": "3.3.1",
        "listr2": "9.0.5",
        "magic-string": "0.30.21",
        "mrmime": "2.0.1",
        "parse5-html-rewriting-stream": "8.0.0",
        "picomatch": "4.0.4",
        "piscina": "5.1.4",
        "rolldown": "1.0.0-rc.4",
        "sass": "1.97.3",
        "semver": "7.7.4",
        "source-map-support": "0.5.21",
        "tinyglobby": "0.2.15",
        "undici": "7.24.4",
        "vite": "7.3.2",
        "watchpack": "2.5.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      },
      "optionalDependencies": {
        "lmdb": "3.5.1"
      },
      "peerDependencies": {
        "@angular/compiler": "^21.0.0",
        "@angular/compiler-cli": "^21.0.0",
        "@angular/core": "^21.0.0",
        "@angular/localize": "^21.0.0",
        "@angular/platform-browser": "^21.0.0",
        "@angular/platform-server": "^21.0.0",
        "@angular/service-worker": "^21.0.0",
        "@angular/ssr": "^21.2.9",
        "karma": "^6.4.0",
        "less": "^4.2.0",
        "ng-packagr": "^21.0.0",
        "postcss": "^8.4.0",
        "tailwindcss": "^2.0.0 || ^3.0.0 || ^4.0.0",
        "tslib": "^2.3.0",
        "typescript": ">=5.9 <6.0",
        "vitest": "^4.0.8"
      },
      "peerDependenciesMeta": {
        "@angular/core": {
          "optional": true
        },
        "@angular/localize": {
          "optional": true
        },
        "@angular/platform-browser": {
          "optional": true
        },
        "@angular/platform-server": {
          "optional": true
        },
        "@angular/service-worker": {
          "optional": true
        },
        "@angular/ssr": {
          "optional": true
        },
        "karma": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "ng-packagr": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tailwindcss": {
          "optional": true
        },
        "vitest": {
          "optional": true
        }
      }
    },
    "node_modules/@angular/cli": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@angular/cli/-/cli-21.2.9.tgz",
      "integrity": "sha512-KldNb7vCEVOeyEUK57dguP3dTjYeikBmAohjAouu8JLtY8OOI+tf/TA31Gco/rxZ3nGqBwkvrqpD4rcDf5AhUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/architect": "0.2102.9",
        "@angular-devkit/core": "21.2.9",
        "@angular-devkit/schematics": "21.2.9",
        "@inquirer/prompts": "7.10.1",
        "@listr2/prompt-adapter-inquirer": "3.0.5",
        "@modelcontextprotocol/sdk": "1.26.0",
        "@schematics/angular": "21.2.9",
        "@yarnpkg/lockfile": "1.1.0",
        "algoliasearch": "5.48.1",
        "ini": "6.0.0",
        "jsonc-parser": "3.3.1",
        "listr2": "9.0.5",
        "npm-package-arg": "13.0.2",
        "pacote": "21.3.1",
        "parse5-html-rewriting-stream": "8.0.0",
        "semver": "7.7.4",
        "yargs": "18.0.0",
        "zod": "4.3.6"
      },
      "bin": {
        "ng": "bin/ng.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@angular/common": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/common/-/common-21.2.11.tgz",
      "integrity": "sha512-3Z3SABXpzM6fkX21WCRP6IwrjxNQVHM/3Fk2OXScExOAzpaOpS2bDgS4NB6rtCbmzKL/NFSp7ZPIZigfdqnWGw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/core": "21.2.11",
        "rxjs": "^6.5.3 || ^7.4.0"
      }
    },
    "node_modules/@angular/compiler": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-21.2.11.tgz",
      "integrity": "sha512-/KdE0kPQr24K/aNsdIDS2or555+8CrQxyRB5MxPKy3/8d6EvilEY/UN7pB7A5xgRQtUPMea08ZzLFJVp1qNbDA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@angular/compiler-cli": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-21.2.11.tgz",
      "integrity": "sha512-qp/LgptDYJvpEHVVdwBEtkcbybre/ftanu0qJMpH3mu5FC4HEEOChl+9m7UVrmL4jC1ZkoZcgtzsGKAQr8mw2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "7.29.0",
        "@jridgewell/sourcemap-codec": "^1.4.14",
        "chokidar": "^5.0.0",
        "convert-source-map": "^1.5.1",
        "reflect-metadata": "^0.2.0",
        "semver": "^7.0.0",
        "tslib": "^2.3.0",
        "yargs": "^18.0.0"
      },
      "bin": {
        "ng-xi18n": "bundles/src/bin/ng_xi18n.js",
        "ngc": "bundles/src/bin/ngc.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/compiler": "21.2.11",
        "typescript": ">=5.9 <6.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@angular/core": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/core/-/core-21.2.11.tgz",
      "integrity": "sha512-EULAfQ0m/I9hZJes74OFlrnfDWqlfV0esE0CkHehO5IEF9rd769+dfuGEAJAzrz+/6Q3PhS0bWDYiT68z1H8Ag==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/compiler": "21.2.11",
        "rxjs": "^6.5.3 || ^7.4.0",
        "zone.js": "~0.15.0 || ~0.16.0"
      },
      "peerDependenciesMeta": {
        "@angular/compiler": {
          "optional": true
        },
        "zone.js": {
          "optional": true
        }
      }
    },
    "node_modules/@angular/forms": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/forms/-/forms-21.2.11.tgz",
      "integrity": "sha512-F67V612wHxPXHrbp825VirYfGPKBUM8PvL9atN2Ku1fsdGSFPU3hTxu1HU8fKYLLBpKYVVuqFqzaU/qIpTXGYA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/common": "21.2.11",
        "@angular/core": "21.2.11",
        "@angular/platform-browser": "21.2.11",
        "rxjs": "^6.5.3 || ^7.4.0"
      }
    },
    "node_modules/@angular/platform-browser": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-21.2.11.tgz",
      "integrity": "sha512-Uz/KwGjSEvbE8J9kNSSetzxhBWjCXv9OuxH1w2WkW6jLNU3vgvzuKX7SXDyUys6KJv5TqkClJ9BLeU11QbmJdw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/animations": "21.2.11",
        "@angular/common": "21.2.11",
        "@angular/core": "21.2.11"
      },
      "peerDependenciesMeta": {
        "@angular/animations": {
          "optional": true
        }
      }
    },
    "node_modules/@angular/platform-server": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/platform-server/-/platform-server-21.2.11.tgz",
      "integrity": "sha512-EN8aKMQjacyzVoceytLxWYGPqk0VtfEkLyWSBMpVOxQ6uO5ozo6Iifr66syGLA3KsW5sO1zKHtAbNK2mLFwd2A==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0",
        "xhr2": "^0.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/common": "21.2.11",
        "@angular/compiler": "21.2.11",
        "@angular/core": "21.2.11",
        "@angular/platform-browser": "21.2.11",
        "rxjs": "^6.5.3 || ^7.4.0"
      }
    },
    "node_modules/@angular/router": {
      "version": "21.2.11",
      "resolved": "https://registry.npmjs.org/@angular/router/-/router-21.2.11.tgz",
      "integrity": "sha512-IB7/KuRDsxAjCOxYNccq2LdCTKuu59cx5MmOhrt+TarvkNE/xdlFkP7vtrCl44DJt0q7/tveWvsn5oqTw7rN7A==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@angular/common": "21.2.11",
        "@angular/core": "21.2.11",
        "@angular/platform-browser": "21.2.11",
        "rxjs": "^6.5.3 || ^7.4.0"
      }
    },
    "node_modules/@angular/ssr": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@angular/ssr/-/ssr-21.2.9.tgz",
      "integrity": "sha512-kNOCyk3l3fxC1x6KoIRpeVke4HHlnSjaPdK5b0DA2YBgVT02Kz+Bzn818b/a1HCCMFfPBUh3xb623mC5LSyvlw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "peerDependencies": {
        "@angular/common": "^21.0.0",
        "@angular/core": "^21.0.0",
        "@angular/platform-server": "^21.0.0",
        "@angular/router": "^21.0.0"
      },
      "peerDependenciesMeta": {
        "@angular/platform-server": {
          "optional": true
        }
      }
    },
    "node_modules/@asamuzakjp/css-color": {
      "version": "5.1.11",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/css-color/-/css-color-5.1.11.tgz",
      "integrity": "sha512-KVw6qIiCTUQhByfTd78h2yD1/00waTmm9uy/R7Ck/ctUyAPj+AEDLkQIdJW0T8+qGgj3j5bpNKK7Q3G+LedJWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/generational-cache": "^1.0.1",
        "@csstools/css-calc": "^3.2.0",
        "@csstools/css-color-parser": "^4.1.0",
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/dom-selector": {
      "version": "6.8.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/dom-selector/-/dom-selector-6.8.1.tgz",
      "integrity": "sha512-MvRz1nCqW0fsy8Qz4dnLIvhOlMzqDVBabZx6lH+YywFDdjXhMY37SmpV1XFX3JzG5GWHn63j6HX6QPr3lZXHvQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/nwsapi": "^2.3.9",
        "bidi-js": "^1.0.3",
        "css-tree": "^3.1.0",
        "is-potential-custom-element-name": "^1.0.1",
        "lru-cache": "^11.2.6"
      }
    },
    "node_modules/@asamuzakjp/dom-selector/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@asamuzakjp/generational-cache": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/generational-cache/-/generational-cache-1.0.1.tgz",
      "integrity": "sha512-wajfB8KqzMCN2KGNFdLkReeHncd0AslUSrvHVvvYWuU8ghncRJoA50kT3zP9MVL0+9g4/67H+cdvBskj9THPzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/nwsapi": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/nwsapi/-/nwsapi-2.3.9.tgz",
      "integrity": "sha512-n8GuYSrI9bF7FFZ/SjhwevlHc8xaVlb/7HmHelnc/PZXBD2ZR49NnN9sMMuDdEGPeeRQ5d0hqlSlEpgCX3Wl0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@aws-amplify/analytics": {
      "version": "7.0.94",
      "resolved": "https://registry.npmjs.org/@aws-amplify/analytics/-/analytics-7.0.94.tgz",
      "integrity": "sha512-HNBq12e+ZFY7EqqlK2sAX165Vp5M4bx40a26f8ej6bDolZG5kkn4cYmERQX8LaWp0iVpfNUWAWPEppwZiLMMcw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/client-firehose": "^3.1012.0",
        "@aws-sdk/client-kinesis": "^3.1012.0",
        "@aws-sdk/client-personalize-events": "^3.1012.0",
        "@smithy/util-utf8": "2.0.0",
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-amplify/api": {
      "version": "6.3.25",
      "resolved": "https://registry.npmjs.org/@aws-amplify/api/-/api-6.3.25.tgz",
      "integrity": "sha512-AT5/JJz5ojUIb0fZu4kjNIJLbQRHwgW0AlwX/BA7ziL9Ph51IN6eA4+Zov3nNCsuA8bb4P+napNUxWmGNCcodQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-amplify/api-graphql": "4.8.6",
        "@aws-amplify/api-rest": "4.6.4",
        "@aws-amplify/data-schema": "^1.7.0",
        "rxjs": "^7.8.1",
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-amplify/api-graphql": {
      "version": "4.8.6",
      "resolved": "https://registry.npmjs.org/@aws-amplify/api-graphql/-/api-graphql-4.8.6.tgz",
      "integrity": "sha512-m4sT2rKkQBP8fBTtLcsOD3J1FcLd+XByRSwAaeYq11BuM5Zj21DlCbyfUgoQLAv76FbyHG0RCxMCh1qQEKt1aQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-amplify/api-rest": "4.6.4",
        "@aws-amplify/core": "6.16.2",
        "@aws-amplify/data-schema": "^1.7.0",
        "@aws-sdk/types": "^3.973.6",
        "graphql": "15.8.0",
        "rxjs": "^7.8.1",
        "tslib": "^2.5.0",
        "uuid": "^11.0.0"
      }
    },
    "node_modules/@aws-amplify/api-rest": {
      "version": "4.6.4",
      "resolved": "https://registry.npmjs.org/@aws-amplify/api-rest/-/api-rest-4.6.4.tgz",
      "integrity": "sha512-/gGTP2/vWKma6ApVG56y9/1qh2/i4hDp37sm1zRSM0EMNdKr5RIgHbQ0W1l1gaJHRmPXb2lqUDfj9ZYFQATjQg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-amplify/auth": {
      "version": "6.19.1",
      "resolved": "https://registry.npmjs.org/@aws-amplify/auth/-/auth-6.19.1.tgz",
      "integrity": "sha512-N6bqBUEly/xUiho0X5oGhLEDlQTWsj1i0FquDYsyuav5e9HHQBLNgG1zmpq28lyxtDaUREi/IDx+CD10EpcPcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-js": "5.2.0",
        "@smithy/types": "^3.3.0",
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.1.0",
        "@aws-amplify/react-native": "^1.1.10"
      },
      "peerDependenciesMeta": {
        "@aws-amplify/react-native": {
          "optional": true
        }
      }
    },
    "node_modules/@aws-amplify/core": {
      "version": "6.16.2",
      "resolved": "https://registry.npmjs.org/@aws-amplify/core/-/core-6.16.2.tgz",
      "integrity": "sha512-tH4WddhIJQPGhdOlQJJrPbHF0HWnQO43ivyMVK9iauPFtWmmI4wZn1NiTjV1YDbrOWyJvbcE20WpugP2CB96hA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/types": "^3.973.6",
        "@smithy/util-hex-encoding": "2.0.0",
        "@types/uuid": "^9.0.0",
        "js-cookie": "^3.0.5",
        "rxjs": "^7.8.1",
        "tslib": "^2.5.0",
        "uuid": "^11.0.0"
      }
    },
    "node_modules/@aws-amplify/data-schema": {
      "version": "1.25.5",
      "resolved": "https://registry.npmjs.org/@aws-amplify/data-schema/-/data-schema-1.25.5.tgz",
      "integrity": "sha512-8mb6nIAwCsA1Y29wY7nhGu10Q7a6etP7U5ydJEKipeI0Lxb9E9z1t7miL40mYw4hxTfUZUAGlfDqwrdBtFTt6g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-amplify/data-schema-types": "*",
        "@smithy/util-base64": "^3.0.0",
        "@types/aws-lambda": "^8.10.134",
        "@types/json-schema": "^7.0.15",
        "rxjs": "^7.8.1"
      }
    },
    "node_modules/@aws-amplify/data-schema-types": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@aws-amplify/data-schema-types/-/data-schema-types-1.2.1.tgz",
      "integrity": "sha512-SuYVcy9Hg8Ox9P0QCXEPwqHxX5zVPgVo2YvNBOm5TpkZr4UK6ir3USame7dELZsk5/9f6KoP70QAYhTvp/j1Og==",
      "license": "Apache-2.0",
      "dependencies": {
        "graphql": "15.8.0",
        "rxjs": "^7.8.1"
      }
    },
    "node_modules/@aws-amplify/datastore": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/@aws-amplify/datastore/-/datastore-5.1.6.tgz",
      "integrity": "sha512-/VwMSqIjFDSyd6kaTMc9jyndJPRq7AmpOsctNmoAkggYCA88TDS7Z4aGv+myDUUVktoBHmC8HIlGLi1w7af5Tw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-amplify/api": "6.3.25",
        "@aws-amplify/api-graphql": "4.8.6",
        "buffer": "4.9.2",
        "idb": "5.0.6",
        "immer": "9.0.6",
        "rxjs": "^7.8.1",
        "ulid": "^2.3.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-amplify/notifications": {
      "version": "2.0.94",
      "resolved": "https://registry.npmjs.org/@aws-amplify/notifications/-/notifications-2.0.94.tgz",
      "integrity": "sha512-SFROWgXVWRoaO4vKXoQV/rDIS3gb7+LQT2W6HSpLsuVuNgHjvR1fUnOeGiZq0x3FhSJnHi9nlqZLtgQZ1aUYkQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.6",
        "lodash": "^4.18.1",
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-amplify/storage": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/@aws-amplify/storage/-/storage-6.14.0.tgz",
      "integrity": "sha512-RLsqPwwat9beGh7yc6jSiiQc6x6odwk7OTBjxVynZI6VDXVy4AhdGNZiElMByr49+nnLGACsGGTfQy7LEK+A0g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.6",
        "@smithy/md5-js": "2.0.7",
        "buffer": "4.9.2",
        "crc-32": "1.2.2",
        "fast-xml-parser": "^5.5.7",
        "tslib": "^2.5.0"
      },
      "peerDependencies": {
        "@aws-amplify/core": "^6.16.2"
      }
    },
    "node_modules/@aws-crypto/crc32": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/crc32/-/crc32-5.2.0.tgz",
      "integrity": "sha512-nLbCWqQNgUiwwtFsen1AdzAtvuLRsQS8rYgMuxCrdKf9kOssamGLuPwyTY9wyYblNr9+1XM8v6zoDTPPSIeANg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/util": "^5.2.0",
        "@aws-sdk/types": "^3.222.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@aws-crypto/sha256-browser": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-browser/-/sha256-browser-5.2.0.tgz",
      "integrity": "sha512-AXfN/lGotSQwu6HNcEsIASo7kWXZ5HYWvfOmSNKDsEqC4OashTp8alTmaz+F7TC2L083SFv5RdB+qU3Vs1kZqw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-js": "^5.2.0",
        "@aws-crypto/supports-web-crypto": "^5.2.0",
        "@aws-crypto/util": "^5.2.0",
        "@aws-sdk/types": "^3.222.0",
        "@aws-sdk/util-locate-window": "^3.0.0",
        "@smithy/util-utf8": "^2.0.0",
        "tslib": "^2.6.2"
      }
    },
    "node_modules/@aws-crypto/sha256-js": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-js/-/sha256-js-5.2.0.tgz",
      "integrity": "sha512-FFQQyu7edu4ufvIZ+OadFpHHOt+eSTBaYaki44c+akjg7qZg9oOQeLlk77F6tSYqjDAFClrHJk9tMf0HdVyOvA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/util": "^5.2.0",
        "@aws-sdk/types": "^3.222.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@aws-crypto/supports-web-crypto": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/supports-web-crypto/-/supports-web-crypto-5.2.0.tgz",
      "integrity": "sha512-iAvUotm021kM33eCdNfwIN//F77/IADDSs58i+MDaOqFrVjZo9bAal0NK7HurRuWLLpF1iLX7gbWrjHjeo+YFg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      }
    },
    "node_modules/@aws-crypto/util": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/util/-/util-5.2.0.tgz",
      "integrity": "sha512-4RkU9EsI6ZpBve5fseQlGNUWKMa1RLPQ1dnjnQoe07ldfIzcsGb5hC5W0Dm7u423KWzawlrpbjXBrXCEv9zazQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.222.0",
        "@smithy/util-utf8": "^2.0.0",
        "tslib": "^2.6.2"
      }
    },
    "node_modules/@aws-sdk/client-firehose": {
      "version": "3.1041.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-firehose/-/client-firehose-3.1041.0.tgz",
      "integrity": "sha512-LhLuQGCRo6y4i+n5YPugpr/5W4ERySY6Ddg9b2uf6hjbwr/iZrY+5cgioqHVS9T0WivDBKpJed5go2yvZcOgmw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/credential-provider-node": "^3.972.39",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.38",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.24",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-retry": "^4.5.7",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.49",
        "@smithy/util-defaults-mode-node": "^4.2.54",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/client-firehose/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-firehose/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-firehose/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-kinesis": {
      "version": "3.1041.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-kinesis/-/client-kinesis-3.1041.0.tgz",
      "integrity": "sha512-FxBNTRbsqhltzU5r5k9/Df5xK4be73+3grhy9yFIsNItIL6J4QP8u/YDoYx0S6og6nRjhLNcU2jGK0UVqX/qzw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/credential-provider-node": "^3.972.39",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.38",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.24",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/eventstream-serde-browser": "^4.2.14",
        "@smithy/eventstream-serde-config-resolver": "^4.3.14",
        "@smithy/eventstream-serde-node": "^4.2.14",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-retry": "^4.5.7",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.49",
        "@smithy/util-defaults-mode-node": "^4.2.54",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/util-utf8": "^4.2.2",
        "@smithy/util-waiter": "^4.3.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/client-kinesis/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-kinesis/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-kinesis/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-personalize-events": {
      "version": "3.1041.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-personalize-events/-/client-personalize-events-3.1041.0.tgz",
      "integrity": "sha512-3taxczXaJLxAMUwQYeXvYm5ZcyLee50GD6qXlnh2cwwh9ErX0mi2H83e3uD1awNfvG8ulAM/E94Px77ubsMjsw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/credential-provider-node": "^3.972.39",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.38",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.24",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-retry": "^4.5.7",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.49",
        "@smithy/util-defaults-mode-node": "^4.2.54",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/client-personalize-events/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-personalize-events/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/client-personalize-events/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/core": {
      "version": "3.974.8",
      "resolved": "https://registry.npmjs.org/@aws-sdk/core/-/core-3.974.8.tgz",
      "integrity": "sha512-njR2qoG6ZuB0kvAS2FyICsFZJ6gmCcf2X/7JcD14sUvGDm26wiZ5BrA6LOiUxKFEF+IVe7kdroxyE00YlkiYsw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/xml-builder": "^3.972.22",
        "@smithy/core": "^3.23.17",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/signature-v4": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/core/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/core/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/core/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-env": {
      "version": "3.972.34",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-env/-/credential-provider-env-3.972.34.tgz",
      "integrity": "sha512-XT0jtf8Fw9JE6ppsQeoNnZRiG+jqRixMT1v1ZR17G60UvVdsQmTG8nbEyHuEPfMxDXEhfdARaM/XiEhca4lGHQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-env/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-http": {
      "version": "3.972.36",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-http/-/credential-provider-http-3.972.36.tgz",
      "integrity": "sha512-DPoGWfy7J7RKxvbf5kOKIGQkD2ek3dbKgzKIGrnLuvZBz5myU+Im/H6pmc14QcnFbqHMqxvtWSgRDSJW3qXLQg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/util-stream": "^4.5.25",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-ini": {
      "version": "3.972.38",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-ini/-/credential-provider-ini-3.972.38.tgz",
      "integrity": "sha512-oDzUBu2MGJFgoar05sPMCwSrhw44ASyccrHzj66vO69OZqi7I6hZZxXfuPLC8OCzW7C+sU+bI73XHij41yekgQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/credential-provider-env": "^3.972.34",
        "@aws-sdk/credential-provider-http": "^3.972.36",
        "@aws-sdk/credential-provider-login": "^3.972.38",
        "@aws-sdk/credential-provider-process": "^3.972.34",
        "@aws-sdk/credential-provider-sso": "^3.972.38",
        "@aws-sdk/credential-provider-web-identity": "^3.972.38",
        "@aws-sdk/nested-clients": "^3.997.6",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/credential-provider-imds": "^4.2.14",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-ini/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-login": {
      "version": "3.972.38",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-login/-/credential-provider-login-3.972.38.tgz",
      "integrity": "sha512-g1NosS8qe4OF++G2UFCM5ovSkgipC7YYor5KCWatG0UoMSO5YFj9C8muePlyVmOBV/WTI16Jo3/s1NUo/o1Bww==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/nested-clients": "^3.997.6",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-login/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-node": {
      "version": "3.972.39",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-node/-/credential-provider-node-3.972.39.tgz",
      "integrity": "sha512-HEswDQyxUtadoZ/bJsPPENHg7R0Lzym5LuMksJeHvqhCOpP+rtkDLKI4/ZChH4w3cf5kG8n6bZuI8PzajoiqMg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/credential-provider-env": "^3.972.34",
        "@aws-sdk/credential-provider-http": "^3.972.36",
        "@aws-sdk/credential-provider-ini": "^3.972.38",
        "@aws-sdk/credential-provider-process": "^3.972.34",
        "@aws-sdk/credential-provider-sso": "^3.972.38",
        "@aws-sdk/credential-provider-web-identity": "^3.972.38",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/credential-provider-imds": "^4.2.14",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-node/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-process": {
      "version": "3.972.34",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-process/-/credential-provider-process-3.972.34.tgz",
      "integrity": "sha512-T3IFs4EVmVi1dVN5RciFnklCANSzvrQd/VuHY9ThHSQmYkTogjcGkoJEr+oNUPQZnso52183088NqysMPji1/Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-process/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-sso": {
      "version": "3.972.38",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-sso/-/credential-provider-sso-3.972.38.tgz",
      "integrity": "sha512-5ZxG+t0+3Q3QPh8KEjX6syskhgNf7I0MN7oGioTf6Lm1NTjfP7sIcYGNsthXC2qR8vcD3edNZwCr2ovfSSWuRA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/nested-clients": "^3.997.6",
        "@aws-sdk/token-providers": "3.1041.0",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-sso/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-web-identity": {
      "version": "3.972.38",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-web-identity/-/credential-provider-web-identity-3.972.38.tgz",
      "integrity": "sha512-lYHFF30DGI20jZcYX8cm6Ns0V7f1dDN6g/MBDLTyD/5iw+bXs3yBr2iAiHDkx4RFU5JgsnZvCHYKiRVPRdmOgw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/nested-clients": "^3.997.6",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-web-identity/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-host-header": {
      "version": "3.972.10",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-host-header/-/middleware-host-header-3.972.10.tgz",
      "integrity": "sha512-IJSsIMeVQ8MMCPbuh1AbltkFhLBLXn7aejzfX5YKT/VLDHn++Dcz8886tXckE+wQssyPUhaXrJhdakO2VilRhg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-host-header/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-logger": {
      "version": "3.972.10",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-logger/-/middleware-logger-3.972.10.tgz",
      "integrity": "sha512-OOuGvvz1Dm20SjZo5oEBePFqxt5nf8AwkNDSyUHvD9/bfNASmstcYxFAHUowy4n6Io7mWUZ04JURZwSBvyQanQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-logger/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-recursion-detection": {
      "version": "3.972.11",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-recursion-detection/-/middleware-recursion-detection-3.972.11.tgz",
      "integrity": "sha512-+zz6f79Kj9V5qFK2P+D8Ehjnw4AhphAlCAsPjUqEcInA9umtSSKMrHbSagEeOIsDNuvVrH98bjRHcyQukTrhaQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@aws/lambda-invoke-store": "^0.2.2",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-recursion-detection/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-sdk-s3": {
      "version": "3.972.37",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-sdk-s3/-/middleware-sdk-s3-3.972.37.tgz",
      "integrity": "sha512-Km7M+i8DrLArVzrid1gfxeGhYHBd3uxvE77g0s5a52zPSVosxzQBnJ0gwWb6NIp/DOk8gsBMhi7V+cpJG0ndTA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-arn-parser": "^3.972.3",
        "@smithy/core": "^3.23.17",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/signature-v4": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/util-config-provider": "^4.2.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-stream": "^4.5.25",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-sdk-s3/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-sdk-s3/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-user-agent": {
      "version": "3.972.38",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-user-agent/-/middleware-user-agent-3.972.38.tgz",
      "integrity": "sha512-iz+B29TXcAZsJpwB+AwG/TTGA5l/VnmMZ2UxtiySOZjI6gCdmviXPwdgzcmuazMy16rXoPY4mYCGe7zdNKfx5A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@smithy/core": "^3.23.17",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-retry": "^4.3.6",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-user-agent/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/nested-clients": {
      "version": "3.997.6",
      "resolved": "https://registry.npmjs.org/@aws-sdk/nested-clients/-/nested-clients-3.997.6.tgz",
      "integrity": "sha512-WBDnqatJl+kGObpfmfSxqnXeYTu3Me8wx8WCtvoxX3pfWrrTv8I4WTMSSs7PZqcRcVh8WeUKMgGFjMG+52SR1w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.38",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/signature-v4-multi-region": "^3.996.25",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.24",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-retry": "^4.5.7",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.49",
        "@smithy/util-defaults-mode-node": "^4.2.54",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/nested-clients/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/nested-clients/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/nested-clients/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/region-config-resolver": {
      "version": "3.972.13",
      "resolved": "https://registry.npmjs.org/@aws-sdk/region-config-resolver/-/region-config-resolver-3.972.13.tgz",
      "integrity": "sha512-CvJ2ZIjK/jVD/lbOpowBVElJyC1YxLTIJ13yM0AEo0t2v7swOzGjSA6lJGH+DwZXQhcjUjoYwc8bVYCX5MDr1A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/region-config-resolver/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/signature-v4-multi-region": {
      "version": "3.996.25",
      "resolved": "https://registry.npmjs.org/@aws-sdk/signature-v4-multi-region/-/signature-v4-multi-region-3.996.25.tgz",
      "integrity": "sha512-+CMIt3e1VzlklAECmG+DtP1sV8iKq25FuA0OKpnJ4KA0kxUtd7CgClY7/RU6VzJBQwbN4EJ9Ue6plvqx1qGadw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/middleware-sdk-s3": "^3.972.37",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/signature-v4": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/signature-v4-multi-region/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/token-providers": {
      "version": "3.1041.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/token-providers/-/token-providers-3.1041.0.tgz",
      "integrity": "sha512-Th7kPI6YPtvJUcdznooXJMy+9rQWjmEF81LxaJssngBzuysK4a/x+l8kjm1zb7nYsUPbndnBdUnwng/3PLvtGw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/core": "^3.974.8",
        "@aws-sdk/nested-clients": "^3.997.6",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/token-providers/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/types": {
      "version": "3.973.8",
      "resolved": "https://registry.npmjs.org/@aws-sdk/types/-/types-3.973.8.tgz",
      "integrity": "sha512-gjlAdtHMbtR9X5iIhVUvbVcy55KnznpC6bkDUWW9z915bi0ckdUr5cjf16Kp6xq0bP5HBD2xzgbL9F9Quv5vUw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/types/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/util-arn-parser": {
      "version": "3.972.3",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-arn-parser/-/util-arn-parser-3.972.3.tgz",
      "integrity": "sha512-HzSD8PMFrvgi2Kserxuff5VitNq2sgf3w9qxmskKDiDTThWfVteJxuCS9JXiPIPtmCrp+7N9asfIaVhBFORllA==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/util-endpoints": {
      "version": "3.996.8",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-endpoints/-/util-endpoints-3.996.8.tgz",
      "integrity": "sha512-oOZHcRDihk5iEe5V25NVWg45b3qEA8OpHWVdU/XQh8Zj4heVPAJqWvMphQnU7LkufmUo10EpvFPZuQMiFLJK3g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-endpoints": "^3.4.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/util-endpoints/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/util-locate-window": {
      "version": "3.965.5",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-locate-window/-/util-locate-window-3.965.5.tgz",
      "integrity": "sha512-WhlJNNINQB+9qtLtZJcpQdgZw3SCDCpXdUJP7cToGwHbCWCnRckGlc6Bx/OhWwIYFNAn+FIydY8SZ0QmVu3xTQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/util-user-agent-browser": {
      "version": "3.972.10",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-browser/-/util-user-agent-browser-3.972.10.tgz",
      "integrity": "sha512-FAzqXvfEssGdSIz8ejatan0bOdx1qefBWKF/gWmVBXIP1HkS7v/wjjaqrAGGKvyihrXTXW00/2/1nTJtxpXz7g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/types": "^3.973.8",
        "@smithy/types": "^4.14.1",
        "bowser": "^2.11.0",
        "tslib": "^2.6.2"
      }
    },
    "node_modules/@aws-sdk/util-user-agent-browser/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/util-user-agent-node": {
      "version": "3.973.24",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-node/-/util-user-agent-node-3.973.24.tgz",
      "integrity": "sha512-ZWwlkjcIp7cEL8ZfTpTAPNkwx25p7xol0xlKoWVVf22+nsjwmLcHYtTPjIV1cSpmB/b6DaK4cb1fSkvCXHgRdw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-sdk/middleware-user-agent": "^3.972.38",
        "@aws-sdk/types": "^3.973.8",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-config-provider": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "aws-crt": ">=1.0.0"
      },
      "peerDependenciesMeta": {
        "aws-crt": {
          "optional": true
        }
      }
    },
    "node_modules/@aws-sdk/util-user-agent-node/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws-sdk/xml-builder": {
      "version": "3.972.22",
      "resolved": "https://registry.npmjs.org/@aws-sdk/xml-builder/-/xml-builder-3.972.22.tgz",
      "integrity": "sha512-PMYKKtJd70IsSG0yHrdAbxBr+ZWBKLvzFZfD3/urxgf6hXVMzuU5M+3MJ5G67RpOmLBu1fAUN65SbWuKUCOlAA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@nodable/entities": "2.1.0",
        "@smithy/types": "^4.14.1",
        "fast-xml-parser": "5.7.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@aws-sdk/xml-builder/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@aws/lambda-invoke-store": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@aws/lambda-invoke-store/-/lambda-invoke-store-0.2.4.tgz",
      "integrity": "sha512-iY8yvjE0y651BixKNPgmv1WrQc+GZ142sb0z4gYnChDDY2YqI4P/jsSopBWrKfAt7LOJAkOXt7rC/hms+WclQQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.28.5",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.3",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.3.tgz",
      "integrity": "sha512-LIVqM46zQWZhj17qA8wb4nW/ixr2y1Nw+r1etiAWgRM6U1IqP+LNhL1yg440jYZR72jCWcWbLWzIosH+uP1fqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-module-transforms": "^7.28.6",
        "@babel/helpers": "^7.28.6",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/traverse": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@babel/core/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.1",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.27.3.tgz",
      "integrity": "sha512-fXSwMQqitTGeHLBC08Eq5yXz2m37E4pJX1qAU1+2cNedz/ifv/bVXft90VeSav5nFO61EcNgwr0aJxbyPaWBPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",
      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.6.tgz",
      "integrity": "sha512-67oXFAYr2cDLDVGLXTEABjdBJZ6drElUSI7WKp70NrpyISso3plG9SAGEF6y7zbha/wOzUByWWTJvEDVNIUGcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.28.6",
        "@babel/helper-validator-identifier": "^7.28.5",
        "@babel/traverse": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.24.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.24.7.tgz",
      "integrity": "sha512-oy5V7pD+UvfkEATUKvIjvIAH/xCzfsFVw7ygW2SI6NClZzquT+mwdTfgfdbUiceh6iQO0CHtCPsyze/MZ2YbAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.24.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.2.tgz",
      "integrity": "sha512-HoGuUs4sCZNezVEKdVcwqmZN8GoHirLUcLaYVNBK2J0DadGtdcqgr3BCbvH8+XUo4NGjNl3VOtSjEKNzqfFgKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.3.tgz",
      "integrity": "sha512-b3ctpQwp+PROvU/cttc4OYl4MzfJUWy6FZg+PMXfzmt/+39iHVF0sDfqay8TQM3JA2EUOyKcFZt75jWriQijsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
      "integrity": "sha512-YA6Ma2KsCdGb+WC6UpBVFJGXL58MDA6oyONbjyF/+5sBgxY/dwkhLogbMT2GXXyU84/IhRw/2D1Os1B/giz+BQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.28.6",
        "@babel/parser": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.0.tgz",
      "integrity": "sha512-4HPiQr0X7+waHfyXPZpWPfWL/J7dcN1mx9gL6WdQVMbPnF3+ZhSMs8tCxN7oHddJE9fhNE7+lxdnlyemKfJRuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.0.tgz",
      "integrity": "sha512-LwdZHpScM4Qz8Xw2iKSzS+cfglZzJGvofQICy7W7v4caru4EaAmyUuO6BGrbyQ2mYV11W0U8j5mBhd14dd3B0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@bramus/specificity": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/@bramus/specificity/-/specificity-2.4.2.tgz",
      "integrity": "sha512-ctxtJ/eA+t+6q2++vj5j7FYX3nRu311q1wfYH3xjlLOsczhlhxAg2FWNUXhpGvAw3BWo1xBcvOV6/YLc2r5FJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "css-tree": "^3.0.0"
      },
      "bin": {
        "specificity": "bin/cli.js"
      }
    },
    "node_modules/@csstools/color-helpers": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@csstools/color-helpers/-/color-helpers-6.0.2.tgz",
      "integrity": "sha512-LMGQLS9EuADloEFkcTBR3BwV/CGHV7zyDxVRtVDTwdI2Ca4it0CCVTT9wCkxSgokjE5Ho41hEPgb8OEUwoXr6Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@csstools/css-calc": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-calc/-/css-calc-3.2.0.tgz",
      "integrity": "sha512-bR9e6o2BDB12jzN/gIbjHa5wLJ4UjD1CB9pM7ehlc0ddk6EBz+yYS1EV2MF55/HUxrHcB/hehAyt5vhsA3hx7w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-color-parser": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-color-parser/-/css-color-parser-4.1.0.tgz",
      "integrity": "sha512-U0KhLYmy2GVj6q4T3WaAe6NPuFYCPQoE3b0dRGxejWDgcPp8TP7S5rVdM5ZrFaqu4N67X8YaPBw14dQSYx3IyQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@csstools/color-helpers": "^6.0.2",
        "@csstools/css-calc": "^3.2.0"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-parser-algorithms": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-parser-algorithms/-/css-parser-algorithms-4.0.0.tgz",
      "integrity": "sha512-+B87qS7fIG3L5h3qwJ/IFbjoVoOe/bpOdh9hAjXbvx0o8ImEmUsGXN0inFOnk2ChCFgqkkGFQ+TpM5rbhkKe4w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-syntax-patches-for-csstree": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@csstools/css-syntax-patches-for-csstree/-/css-syntax-patches-for-csstree-1.1.3.tgz",
      "integrity": "sha512-SH60bMfrRCJF3morcdk57WklujF4Jr/EsQUzqkarfHXEFcAR1gg7fS/chAE922Sehgzc1/+Tz5H3Ypa1HiEKrg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "peerDependencies": {
        "css-tree": "^3.2.1"
      },
      "peerDependenciesMeta": {
        "css-tree": {
          "optional": true
        }
      }
    },
    "node_modules/@csstools/css-tokenizer": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-tokenizer/-/css-tokenizer-4.0.0.tgz",
      "integrity": "sha512-QxULHAm7cNu72w97JUNCBFODFaXpbDg+dP8b/oWFAZ2MTRppA3U00Y2L1HqaS4J6yBqxwa/Y3nMBaxVKbB/NsA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.3.tgz",
      "integrity": "sha512-9fJMTNFTWZMh5qwrBItuziu834eOCUcEqymSH7pY+zoMVEZg3gcPuBNxH1EvfVYe9h0x/Ptw8KBzv7qxb7l8dg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.3.tgz",
      "integrity": "sha512-i5D1hPY7GIQmXlXhs2w8AWHhenb00+GxjxRncS2ZM7YNVGNfaMxgzSGuO8o8SJzRc/oZwU2bcScvVERk03QhzA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.3.tgz",
      "integrity": "sha512-YdghPYUmj/FX2SYKJ0OZxf+iaKgMsKHVPF1MAq/P8WirnSpCStzKJFjOjzsW0QQ7oIAiccHdcqjbHmJxRb/dmg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.3.tgz",
      "integrity": "sha512-IN/0BNTkHtk8lkOM8JWAYFg4ORxBkZQf9zXiEOfERX/CzxW3Vg1ewAhU7QSWQpVIzTW+b8Xy+lGzdYXV6UZObQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.3.tgz",
      "integrity": "sha512-Re491k7ByTVRy0t3EKWajdLIr0gz2kKKfzafkth4Q8A5n1xTHrkqZgLLjFEHVD+AXdUGgQMq+Godfq45mGpCKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.3.tgz",
      "integrity": "sha512-vHk/hA7/1AckjGzRqi6wbo+jaShzRowYip6rt6q7VYEDX4LEy1pZfDpdxCBnGtl+A5zq8iXDcyuxwtv3hNtHFg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.3.tgz",
      "integrity": "sha512-ipTYM2fjt3kQAYOvo6vcxJx3nBYAzPjgTCk7QEgZG8AUO3ydUhvelmhrbOheMnGOlaSFUoHXB6un+A7q4ygY9w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.3.tgz",
      "integrity": "sha512-dDk0X87T7mI6U3K9VjWtHOXqwAMJBNN2r7bejDsc+j03SEjtD9HrOl8gVFByeM0aJksoUuUVU9TBaZa2rgj0oA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.3.tgz",
      "integrity": "sha512-s6nPv2QkSupJwLYyfS+gwdirm0ukyTFNl3KTgZEAiJDd+iHZcbTPPcWCcRYH+WlNbwChgH2QkE9NSlNrMT8Gfw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.3.tgz",
      "integrity": "sha512-sZOuFz/xWnZ4KH3YfFrKCf1WyPZHakVzTiqji3WDc0BCl2kBwiJLCXpzLzUBLgmp4veFZdvN5ChW4Eq/8Fc2Fg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.3.tgz",
      "integrity": "sha512-yGlQYjdxtLdh0a3jHjuwOrxQjOZYD/C9PfdbgJJF3TIZWnm/tMd/RcNiLngiu4iwcBAOezdnSLAwQDPqTmtTYg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.3.tgz",
      "integrity": "sha512-WO60Sn8ly3gtzhyjATDgieJNet/KqsDlX5nRC5Y3oTFcS1l0KWba+SEa9Ja1GfDqSF1z6hif/SkpQJbL63cgOA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.3.tgz",
      "integrity": "sha512-APsymYA6sGcZ4pD6k+UxbDjOFSvPWyZhjaiPyl/f79xKxwTnrn5QUnXR5prvetuaSMsb4jgeHewIDCIWljrSxw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.3.tgz",
      "integrity": "sha512-eizBnTeBefojtDb9nSh4vvVQ3V9Qf9Df01PfawPcRzJH4gFSgrObw+LveUyDoKU3kxi5+9RJTCWlj4FjYXVPEA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.3.tgz",
      "integrity": "sha512-3Emwh0r5wmfm3ssTWRQSyVhbOHvqegUDRd0WhmXKX2mkHJe1SFCMJhagUleMq+Uci34wLSipf8Lagt4LlpRFWQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.3.tgz",
      "integrity": "sha512-pBHUx9LzXWBc7MFIEEL0yD/ZVtNgLytvx60gES28GcWMqil8ElCYR4kvbV2BDqsHOvVDRrOxGySBM9Fcv744hw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.3.tgz",
      "integrity": "sha512-Czi8yzXUWIQYAtL/2y6vogER8pvcsOsk5cpwL4Gk5nJqH5UZiVByIY8Eorm5R13gq+DQKYg0+JyQoytLQas4dA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.3.tgz",
      "integrity": "sha512-sDpk0RgmTCR/5HguIZa9n9u+HVKf40fbEUt+iTzSnCaGvY9kFP0YKBWZtJaraonFnqef5SlJ8/TiPAxzyS+UoA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.3.tgz",
      "integrity": "sha512-P14lFKJl/DdaE00LItAukUdZO5iqNH7+PjoBm+fLQjtxfcfFE20Xf5CrLsmZdq5LFFZzb5JMZ9grUwvtVYzjiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.3.tgz",
      "integrity": "sha512-AIcMP77AvirGbRl/UZFTq5hjXK+2wC7qFRGoHSDrZ5v5b8DK/GYpXW3CPRL53NkvDqb9D+alBiC/dV0Fb7eJcw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.3.tgz",
      "integrity": "sha512-DnW2sRrBzA+YnE70LKqnM3P+z8vehfJWHXECbwBmH/CU51z6FiqTQTHFenPlHmo3a8UgpLyH3PT+87OViOh1AQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.3.tgz",
      "integrity": "sha512-NinAEgr/etERPTsZJ7aEZQvvg/A6IsZG/LgZy+81wON2huV7SrK3e63dU0XhyZP4RKGyTm7aOgmQk0bGp0fy2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.3.tgz",
      "integrity": "sha512-PanZ+nEz+eWoBJ8/f8HKxTTD172SKwdXebZ0ndd953gt1HRBbhMsaNqjTyYLGLPdoWHy4zLU7bDVJztF5f3BHA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.3.tgz",
      "integrity": "sha512-B2t59lWWYrbRDw/tjiWOuzSsFh1Y/E95ofKz7rIVYSQkUYBjfSgf6oeYPNWHToFRr2zx52JKApIcAS/D5TUBnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.3.tgz",
      "integrity": "sha512-QLKSFeXNS8+tHW7tZpMtjlNb7HKau0QDpwm49u0vUp9y1WOF+PEzkU84y9GqYaAVW8aH8f3GcBck26jh54cX4Q==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.3.tgz",
      "integrity": "sha512-4uJGhsxuptu3OcpVAzli+/gWusVGwZZHTlS63hh++ehExkVT8SgiEf7/uC/PclrPPkLhZqGgCTjd0VWLo6xMqA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@exodus/bytes": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/@exodus/bytes/-/bytes-1.15.0.tgz",
      "integrity": "sha512-UY0nlA+feH81UGSHv92sLEPLCeZFjXOuHhrIo0HQydScuQc8s0A7kL/UdgwgDq8g8ilksmuoF35YVTNphV2aBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@noble/hashes": "^1.8.0 || ^2.0.0"
      },
      "peerDependenciesMeta": {
        "@noble/hashes": {
          "optional": true
        }
      }
    },
    "node_modules/@gar/promise-retry": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@gar/promise-retry/-/promise-retry-1.0.3.tgz",
      "integrity": "sha512-GmzA9ckNokPypTg10pgpeHNQe7ph+iIKKmhKu3Ob9ANkswreCx7R3cKmY781K8QK3AqVL3xVh9A42JvIAbkkSA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@harperfast/extended-iterable": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@harperfast/extended-iterable/-/extended-iterable-1.0.3.tgz",
      "integrity": "sha512-sSAYhQca3rDWtQUHSAPeO7axFIUJOI6hn1gjRC5APVE1a90tuyT8f5WIgRsFhhWA7htNkju2veB9eWL6YHi/Lw==",
      "dev": true,
      "license": "Apache-2.0",
      "optional": true
    },
    "node_modules/@hono/node-server": {
      "version": "1.19.14",
      "resolved": "https://registry.npmjs.org/@hono/node-server/-/node-server-1.19.14.tgz",
      "integrity": "sha512-GwtvgtXxnWsucXvbQXkRgqksiH2Qed37H9xHZocE5sA3N8O8O8/8FA3uclQXxXVzc9XBZuEOMK7+r02FmSpHtw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.14.1"
      },
      "peerDependencies": {
        "hono": "^4"
      }
    },
    "node_modules/@inquirer/ansi": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@inquirer/ansi/-/ansi-1.0.2.tgz",
      "integrity": "sha512-S8qNSZiYzFd0wAcyG5AXCvUHC5Sr7xpZ9wZ2py9XR88jUz8wooStVx5M6dRzczbBWjic9NP7+rY0Xi7qqK/aMQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/checkbox": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/checkbox/-/checkbox-4.3.2.tgz",
      "integrity": "sha512-VXukHf0RR1doGe6Sm4F0Em7SWYLTHSsbGfJdS9Ja2bX5/D5uwVOEjr07cncLROdBvmnvCATYEWlHqYmXv2IlQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/confirm": {
      "version": "5.1.21",
      "resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-5.1.21.tgz",
      "integrity": "sha512-KR8edRkIsUayMXV+o3Gv+q4jlhENF9nMYUZs9PA2HzrXeHI8M5uDag70U7RJn9yyiMZSbtF5/UexBtAVtZGSbQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/core": {
      "version": "10.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/core/-/core-10.3.2.tgz",
      "integrity": "sha512-43RTuEbfP8MbKzedNqBrlhhNKVwoK//vUFNW3Q3vZ88BLcrs4kYpGg+B2mm5p2K/HfygoCxuKwJJiv8PbGmE0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "cli-width": "^4.1.0",
        "mute-stream": "^2.0.0",
        "signal-exit": "^4.1.0",
        "wrap-ansi": "^6.2.0",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/editor": {
      "version": "4.2.23",
      "resolved": "https://registry.npmjs.org/@inquirer/editor/-/editor-4.2.23.tgz",
      "integrity": "sha512-aLSROkEwirotxZ1pBaP8tugXRFCxW94gwrQLxXfrZsKkfjOYC1aRvAZuhpJOb5cu4IBTJdsCigUlf2iCOu4ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/external-editor": "^1.0.3",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/expand": {
      "version": "4.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/expand/-/expand-4.0.23.tgz",
      "integrity": "sha512-nRzdOyFYnpeYTTR2qFwEVmIWypzdAx/sIkCMeTNTcflFOovfqUk+HcFhQQVBftAh9gmGrpFj6QcGEqrDMDOiew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/external-editor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@inquirer/external-editor/-/external-editor-1.0.3.tgz",
      "integrity": "sha512-RWbSrDiYmO4LbejWY7ttpxczuwQyZLBUyygsA9Nsv95hpzUWwnNTVQmAq3xuh7vNwCp07UTmE5i11XAEExx4RA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chardet": "^2.1.1",
        "iconv-lite": "^0.7.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/figures": {
      "version": "1.0.15",
      "resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-1.0.15.tgz",
      "integrity": "sha512-t2IEY+unGHOzAaVM5Xx6DEWKeXlDDcNPeDyUpsRc6CUhBfU3VQOEl+Vssh7VNp1dR8MdUJBWhuObjXCsVpjN5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/input": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@inquirer/input/-/input-4.3.1.tgz",
      "integrity": "sha512-kN0pAM4yPrLjJ1XJBjDxyfDduXOuQHrBB8aLDMueuwUGn+vNpF7Gq7TvyVxx8u4SHlFFj4trmj+a2cbpG4Jn1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/number": {
      "version": "3.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/number/-/number-3.0.23.tgz",
      "integrity": "sha512-5Smv0OK7K0KUzUfYUXDXQc9jrf8OHo4ktlEayFlelCjwMXz0299Y8OrI+lj7i4gCBY15UObk76q0QtxjzFcFcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/password": {
      "version": "4.0.23",
      "resolved": "https://registry.npmjs.org/@inquirer/password/-/password-4.0.23.tgz",
      "integrity": "sha512-zREJHjhT5vJBMZX/IUbyI9zVtVfOLiTO66MrF/3GFZYZ7T4YILW5MSkEYHceSii/KtRk+4i3RE7E1CUXA2jHcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/prompts": {
      "version": "7.10.1",
      "resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-7.10.1.tgz",
      "integrity": "sha512-Dx/y9bCQcXLI5ooQ5KyvA4FTgeo2jYj/7plWfV5Ak5wDPKQZgudKez2ixyfz7tKXzcJciTxqLeK7R9HItwiByg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/checkbox": "^4.3.2",
        "@inquirer/confirm": "^5.1.21",
        "@inquirer/editor": "^4.2.23",
        "@inquirer/expand": "^4.0.23",
        "@inquirer/input": "^4.3.1",
        "@inquirer/number": "^3.0.23",
        "@inquirer/password": "^4.0.23",
        "@inquirer/rawlist": "^4.1.11",
        "@inquirer/search": "^3.2.2",
        "@inquirer/select": "^4.4.2"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/rawlist": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/@inquirer/rawlist/-/rawlist-4.1.11.tgz",
      "integrity": "sha512-+LLQB8XGr3I5LZN/GuAHo+GpDJegQwuPARLChlMICNdwW7OwV2izlCSCxN6cqpL0sMXmbKbFcItJgdQq5EBXTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/search": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@inquirer/search/-/search-3.2.2.tgz",
      "integrity": "sha512-p2bvRfENXCZdWF/U2BXvnSI9h+tuA8iNqtUKb9UWbmLYCRQxd8WkvwWvYn+3NgYaNwdUkHytJMGG4MMLucI1kA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/select": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/@inquirer/select/-/select-4.4.2.tgz",
      "integrity": "sha512-l4xMuJo55MAe+N7Qr4rX90vypFwCajSakx59qe/tMaC1aEHWLyw68wF4o0A4SLAY4E0nd+Vt+EyskeDIqu1M6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.2",
        "@inquirer/core": "^10.3.2",
        "@inquirer/figures": "^1.0.15",
        "@inquirer/type": "^3.0.10",
        "yoctocolors-cjs": "^2.1.3"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/type": {
      "version": "3.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/type/-/type-3.0.10.tgz",
      "integrity": "sha512-BvziSRxfz5Ov8ch0z/n3oijRSEcEsHnhggm4xFZe93DHcUCTlutlq9Ox4SVENAfcRD22UQq7T/atg9Wr3k09eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@isaacs/fs-minipass": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/fs-minipass/-/fs-minipass-4.0.1.tgz",
      "integrity": "sha512-wgm9Ehl2jpeqP3zw/7mo3kRHFp5MEDhqAdwy1fTGkHAwnkGOVsgpvQhL8B5n1qlb01jV3n/bI0ZfZp5lWA1k4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.4"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@istanbuljs/schema": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.6.tgz",
      "integrity": "sha512-+Sg6GCR/wy1oSmQDFq4LQDAhm3ETKnorxN+y5nbLULOR3P0c14f2Wurzj3/xqPXtasLFfHd5iRFQ7AJt4KH2cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@listr2/prompt-adapter-inquirer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@listr2/prompt-adapter-inquirer/-/prompt-adapter-inquirer-3.0.5.tgz",
      "integrity": "sha512-WELs+hj6xcilkloBXYf9XXK8tYEnKsgLj01Xl5ONUJpKjmT5hGVUzNUS5tooUxs7pGMrw+jFD/41WpqW4V3LDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/type": "^3.0.8"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@inquirer/prompts": ">= 3 < 8",
        "listr2": "9.0.5"
      }
    },
    "node_modules/@lmdb/lmdb-darwin-arm64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-arm64/-/lmdb-darwin-arm64-3.5.1.tgz",
      "integrity": "sha512-tpfN4kKrrMpQ+If1l8bhmoNkECJi0iOu6AEdrTJvWVC+32sLxTARX5Rsu579mPImRP9YFWfWgeRQ5oav7zApQQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@lmdb/lmdb-darwin-x64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-darwin-x64/-/lmdb-darwin-x64-3.5.1.tgz",
      "integrity": "sha512-+a2tTfc3rmWhLAolFUWRgJtpSuu+Fw/yjn4rF406NMxhfjbMuiOUTDRvRlMFV+DzyjkwnokisskHbCWkS3Ly5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@lmdb/lmdb-linux-arm": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm/-/lmdb-linux-arm-3.5.1.tgz",
      "integrity": "sha512-0EgcE6reYr8InjD7V37EgXcYrloqpxVPINy3ig1MwDSbl6LF/vXTYRH9OE1Ti1D8YZnB35ZH9aTcdfSb5lql2A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@lmdb/lmdb-linux-arm64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-arm64/-/lmdb-linux-arm64-3.5.1.tgz",
      "integrity": "sha512-aoERa5B6ywXdyFeYGQ1gbQpkMkDbEo45qVoXE5QpIRavqjnyPwjOulMkmkypkmsbJ5z4Wi0TBztON8agCTG0Vg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@lmdb/lmdb-linux-x64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-linux-x64/-/lmdb-linux-x64-3.5.1.tgz",
      "integrity": "sha512-SqNDY1+vpji7bh0sFH5wlWyFTOzjbDOl0/kB5RLLYDAFyd/uw3n7wyrmas3rYPpAW7z18lMOi1yKlTPv967E3g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@lmdb/lmdb-win32-arm64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-win32-arm64/-/lmdb-win32-arm64-3.5.1.tgz",
      "integrity": "sha512-50v0O1Lt37cwrmR9vWZK5hRW0Aw+KEmxJJ75fge/zIYdvNKB/0bSMSVR5Uc2OV9JhosIUyklOmrEvavwNJ8D6w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@lmdb/lmdb-win32-x64": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/@lmdb/lmdb-win32-x64/-/lmdb-win32-x64-3.5.1.tgz",
      "integrity": "sha512-qwosvPyl+zpUlp3gRb7UcJ3H8S28XHCzkv0Y0EgQToXjQP91ZD67EHSCDmaLjtKhe+GVIW5om1KUpzVLA0l6pg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@modelcontextprotocol/sdk": {
      "version": "1.26.0",
      "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.26.0.tgz",
      "integrity": "sha512-Y5RmPncpiDtTXDbLKswIJzTqu2hyBKxTNsgKqKclDbhIgg1wgtf1fRuvxgTnRfcnxtvvgbIEcqUOzZrJ6iSReg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@hono/node-server": "^1.19.9",
        "ajv": "^8.17.1",
        "ajv-formats": "^3.0.1",
        "content-type": "^1.0.5",
        "cors": "^2.8.5",
        "cross-spawn": "^7.0.5",
        "eventsource": "^3.0.2",
        "eventsource-parser": "^3.0.0",
        "express": "^5.2.1",
        "express-rate-limit": "^8.2.1",
        "hono": "^4.11.4",
        "jose": "^6.1.3",
        "json-schema-typed": "^8.0.2",
        "pkce-challenge": "^5.0.0",
        "raw-body": "^3.0.0",
        "zod": "^3.25 || ^4.0",
        "zod-to-json-schema": "^3.25.1"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@cfworker/json-schema": "^4.1.1",
        "zod": "^3.25 || ^4.0"
      },
      "peerDependenciesMeta": {
        "@cfworker/json-schema": {
          "optional": true
        },
        "zod": {
          "optional": false
        }
      }
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-darwin-arm64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-arm64/-/msgpackr-extract-darwin-arm64-3.0.3.tgz",
      "integrity": "sha512-QZHtlVgbAdy2zAqNA9Gu1UpIuI8Xvsd1v8ic6B2pZmeFnFcMWiPLfWXh7TVw4eGEZ/C9TH281KwhVoeQUKbyjw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-darwin-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-x64/-/msgpackr-extract-darwin-x64-3.0.3.tgz",
      "integrity": "sha512-mdzd3AVzYKuUmiWOQ8GNhl64/IoFGol569zNRdkLReh6LRLHOXxU4U8eq0JwaD8iFHdVGqSy4IjFL4reoWCDFw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-arm": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm/-/msgpackr-extract-linux-arm-3.0.3.tgz",
      "integrity": "sha512-fg0uy/dG/nZEXfYilKoRe7yALaNmHoYeIoJuJ7KJ+YyU2bvY8vPv27f7UKhGRpY6euFYqEVhxCFZgAUNQBM3nw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-arm64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm64/-/msgpackr-extract-linux-arm64-3.0.3.tgz",
      "integrity": "sha512-YxQL+ax0XqBJDZiKimS2XQaf+2wDGVa1enVRGzEvLLVFeqa5kx2bWbtcSXgsxjQB7nRqqIGFIcLteF/sHeVtQg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-x64/-/msgpackr-extract-linux-x64-3.0.3.tgz",
      "integrity": "sha512-cvwNfbP07pKUfq1uH+S6KJ7dT9K8WOE4ZiAcsrSes+UY55E/0jLYc+vq+DO7jlmqRb5zAggExKm0H7O/CBaesg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-win32-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-win32-x64/-/msgpackr-extract-win32-x64-3.0.3.tgz",
      "integrity": "sha512-x0fWaQtYp4E6sktbsdAqnehxDgEc/VwM7uLsRCYWaiGu0ykYdZPiS8zCWdnjHwyiumousxfBm4SO31eXqwEZhQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@napi-rs/nice": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice/-/nice-1.1.1.tgz",
      "integrity": "sha512-xJIPs+bYuc9ASBl+cvGsKbGrJmS6fAKaSZCnT0lhahT5rhA2VVy9/EcIgd2JhtEuFOJNx7UHNn/qiTPTY4nrQw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 10"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "optionalDependencies": {
        "@napi-rs/nice-android-arm-eabi": "1.1.1",
        "@napi-rs/nice-android-arm64": "1.1.1",
        "@napi-rs/nice-darwin-arm64": "1.1.1",
        "@napi-rs/nice-darwin-x64": "1.1.1",
        "@napi-rs/nice-freebsd-x64": "1.1.1",
        "@napi-rs/nice-linux-arm-gnueabihf": "1.1.1",
        "@napi-rs/nice-linux-arm64-gnu": "1.1.1",
        "@napi-rs/nice-linux-arm64-musl": "1.1.1",
        "@napi-rs/nice-linux-ppc64-gnu": "1.1.1",
        "@napi-rs/nice-linux-riscv64-gnu": "1.1.1",
        "@napi-rs/nice-linux-s390x-gnu": "1.1.1",
        "@napi-rs/nice-linux-x64-gnu": "1.1.1",
        "@napi-rs/nice-linux-x64-musl": "1.1.1",
        "@napi-rs/nice-openharmony-arm64": "1.1.1",
        "@napi-rs/nice-win32-arm64-msvc": "1.1.1",
        "@napi-rs/nice-win32-ia32-msvc": "1.1.1",
        "@napi-rs/nice-win32-x64-msvc": "1.1.1"
      }
    },
    "node_modules/@napi-rs/nice-android-arm-eabi": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm-eabi/-/nice-android-arm-eabi-1.1.1.tgz",
      "integrity": "sha512-kjirL3N6TnRPv5iuHw36wnucNqXAO46dzK9oPb0wj076R5Xm8PfUVA9nAFB5ZNMmfJQJVKACAPd/Z2KYMppthw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-android-arm64": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-android-arm64/-/nice-android-arm64-1.1.1.tgz",
      "integrity": "sha512-blG0i7dXgbInN5urONoUCNf+DUEAavRffrO7fZSeoRMJc5qD+BJeNcpr54msPF6qfDD6kzs9AQJogZvT2KD5nw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-darwin-arm64": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-arm64/-/nice-darwin-arm64-1.1.1.tgz",
      "integrity": "sha512-s/E7w45NaLqTGuOjC2p96pct4jRfo61xb9bU1unM/MJ/RFkKlJyJDx7OJI/O0ll/hrfpqKopuAFDV8yo0hfT7A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-darwin-x64": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-darwin-x64/-/nice-darwin-x64-1.1.1.tgz",
      "integrity": "sha512-dGoEBnVpsdcC+oHHmW1LRK5eiyzLwdgNQq3BmZIav+9/5WTZwBYX7r5ZkQC07Nxd3KHOCkgbHSh4wPkH1N1LiQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-freebsd-x64": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-freebsd-x64/-/nice-freebsd-x64-1.1.1.tgz",
      "integrity": "sha512-kHv4kEHAylMYmlNwcQcDtXjklYp4FCf0b05E+0h6nDHsZ+F0bDe04U/tXNOqrx5CmIAth4vwfkjjUmp4c4JktQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm-gnueabihf": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm-gnueabihf/-/nice-linux-arm-gnueabihf-1.1.1.tgz",
      "integrity": "sha512-E1t7K0efyKXZDoZg1LzCOLxgolxV58HCkaEkEvIYQx12ht2pa8hoBo+4OB3qh7e+QiBlp1SRf+voWUZFxyhyqg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm64-gnu": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-gnu/-/nice-linux-arm64-gnu-1.1.1.tgz",
      "integrity": "sha512-CIKLA12DTIZlmTaaKhQP88R3Xao+gyJxNWEn04wZwC2wmRapNnxCUZkVwggInMJvtVElA+D4ZzOU5sX4jV+SmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-arm64-musl": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-arm64-musl/-/nice-linux-arm64-musl-1.1.1.tgz",
      "integrity": "sha512-+2Rzdb3nTIYZ0YJF43qf2twhqOCkiSrHx2Pg6DJaCPYhhaxbLcdlV8hCRMHghQ+EtZQWGNcS2xF4KxBhSGeutg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-ppc64-gnu": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-ppc64-gnu/-/nice-linux-ppc64-gnu-1.1.1.tgz",
      "integrity": "sha512-4FS8oc0GeHpwvv4tKciKkw3Y4jKsL7FRhaOeiPei0X9T4Jd619wHNe4xCLmN2EMgZoeGg+Q7GY7BsvwKpL22Tg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-riscv64-gnu": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-riscv64-gnu/-/nice-linux-riscv64-gnu-1.1.1.tgz",
      "integrity": "sha512-HU0nw9uD4FO/oGCCk409tCi5IzIZpH2agE6nN4fqpwVlCn5BOq0MS1dXGjXaG17JaAvrlpV5ZeyZwSon10XOXw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-s390x-gnu": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-s390x-gnu/-/nice-linux-s390x-gnu-1.1.1.tgz",
      "integrity": "sha512-2YqKJWWl24EwrX0DzCQgPLKQBxYDdBxOHot1KWEq7aY2uYeX+Uvtv4I8xFVVygJDgf6/92h9N3Y43WPx8+PAgQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-x64-gnu": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-gnu/-/nice-linux-x64-gnu-1.1.1.tgz",
      "integrity": "sha512-/gaNz3R92t+dcrfCw/96pDopcmec7oCcAQ3l/M+Zxr82KT4DljD37CpgrnXV+pJC263JkW572pdbP3hP+KjcIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-linux-x64-musl": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-linux-x64-musl/-/nice-linux-x64-musl-1.1.1.tgz",
      "integrity": "sha512-xScCGnyj/oppsNPMnevsBe3pvNaoK7FGvMjT35riz9YdhB2WtTG47ZlbxtOLpjeO9SqqQ2J2igCmz6IJOD5JYw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-openharmony-arm64": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-openharmony-arm64/-/nice-openharmony-arm64-1.1.1.tgz",
      "integrity": "sha512-6uJPRVwVCLDeoOaNyeiW0gp2kFIM4r7PL2MczdZQHkFi9gVlgm+Vn+V6nTWRcu856mJ2WjYJiumEajfSm7arPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-arm64-msvc": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-arm64-msvc/-/nice-win32-arm64-msvc-1.1.1.tgz",
      "integrity": "sha512-uoTb4eAvM5B2aj/z8j+Nv8OttPf2m+HVx3UjA5jcFxASvNhQriyCQF1OB1lHL43ZhW+VwZlgvjmP5qF3+59atA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-ia32-msvc": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-ia32-msvc/-/nice-win32-ia32-msvc-1.1.1.tgz",
      "integrity": "sha512-CNQqlQT9MwuCsg1Vd/oKXiuH+TcsSPJmlAFc5frFyX/KkOh0UpBLEj7aoY656d5UKZQMQFP7vJNa1DNUNORvug==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/nice-win32-x64-msvc": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/nice-win32-x64-msvc/-/nice-win32-x64-msvc-1.1.1.tgz",
      "integrity": "sha512-vB+4G/jBQCAh0jelMTY3+kgFy00Hlx2f2/1zjMoH821IbplbWZOkLiTYXQkygNTzQJTq5cvwBDgn2ppHD+bglQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.4.tgz",
      "integrity": "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.1"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@nodable/entities": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@nodable/entities/-/entities-2.1.0.tgz",
      "integrity": "sha512-nyT7T3nbMyBI/lvr6L5TyWbFJAI9FTgVRakNoBqCD+PmID8DzFrrNdLLtHMwMszOtqZa8PAOV24ZqDnQrhQINA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodable"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@npmcli/agent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@npmcli/agent/-/agent-4.0.0.tgz",
      "integrity": "sha512-kAQTcEN9E8ERLVg5AsGwLNoFb+oEG6engbqAU2P43gD4JEIkNGMHdVQ096FsOAAYpZPB0RSt0zgInKIAS1l5QA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "agent-base": "^7.1.0",
        "http-proxy-agent": "^7.0.0",
        "https-proxy-agent": "^7.0.1",
        "lru-cache": "^11.2.1",
        "socks-proxy-agent": "^8.0.3"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/agent/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@npmcli/fs": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-5.0.0.tgz",
      "integrity": "sha512-7OsC1gNORBEawOa5+j2pXN9vsicaIOH5cPXxoR6fJOmH6/EXpJB2CajXOu1fPRFun2m1lktEFX11+P89hqO/og==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "semver": "^7.3.5"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/git": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@npmcli/git/-/git-7.0.2.tgz",
      "integrity": "sha512-oeolHDjExNAJAnlYP2qzNjMX/Xi9bmu78C9dIGr4xjobrSKbuMYCph8lTzn4vnW3NjIqVmw/f8BCfouqyJXlRg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@gar/promise-retry": "^1.0.0",
        "@npmcli/promise-spawn": "^9.0.0",
        "ini": "^6.0.0",
        "lru-cache": "^11.2.1",
        "npm-pick-manifest": "^11.0.1",
        "proc-log": "^6.0.0",
        "semver": "^7.3.5",
        "which": "^6.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/git/node_modules/isexe": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-4.0.0.tgz",
      "integrity": "sha512-FFUtZMpoZ8RqHS3XeXEmHWLA4thH+ZxCv2lOiPIn1Xc7CxrqhWzNSDzD+/chS/zbYezmiwWLdQC09JdQKmthOw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@npmcli/git/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@npmcli/git/node_modules/which": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/which/-/which-6.0.1.tgz",
      "integrity": "sha512-oGLe46MIrCRqX7ytPUf66EAYvdeMIZYn3WaocqqKZAxrBpkqHfL/qvTyJ/bTk5+AqHCjXmrv3CEWgy368zhRUg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^4.0.0"
      },
      "bin": {
        "node-which": "bin/which.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/installed-package-contents": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-4.0.0.tgz",
      "integrity": "sha512-yNyAdkBxB72gtZ4GrwXCM0ZUedo9nIbOMKfGjt6Cu6DXf0p8y1PViZAKDC8q8kv/fufx0WTjRBdSlyrvnP7hmA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "npm-bundled": "^5.0.0",
        "npm-normalize-package-bin": "^5.0.0"
      },
      "bin": {
        "installed-package-contents": "bin/index.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/node-gyp": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-5.0.0.tgz",
      "integrity": "sha512-uuG5HZFXLfyFKqg8QypsmgLQW7smiRjVc45bqD/ofZZcR/uxEjgQU8qDPv0s9TEeMUiAAU/GC5bR6++UdTirIQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/package-json": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/@npmcli/package-json/-/package-json-7.0.5.tgz",
      "integrity": "sha512-iVuTlG3ORq2iaVa1IWUxAO/jIp77tUKBhoMjuzYW2kL4MLN1bi/ofqkZ7D7OOwh8coAx1/S2ge0rMdGv8sLSOQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@npmcli/git": "^7.0.0",
        "glob": "^13.0.0",
        "hosted-git-info": "^9.0.0",
        "json-parse-even-better-errors": "^5.0.0",
        "proc-log": "^6.0.0",
        "semver": "^7.5.3",
        "spdx-expression-parse": "^4.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/promise-spawn": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-9.0.1.tgz",
      "integrity": "sha512-OLUaoqBuyxeTqUvjA3FZFiXUfYC1alp3Sa99gW3EUDz3tZ3CbXDdcZ7qWKBzicrJleIgucoWamWH1saAmH/l2Q==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "which": "^6.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/promise-spawn/node_modules/isexe": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-4.0.0.tgz",
      "integrity": "sha512-FFUtZMpoZ8RqHS3XeXEmHWLA4thH+ZxCv2lOiPIn1Xc7CxrqhWzNSDzD+/chS/zbYezmiwWLdQC09JdQKmthOw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@npmcli/promise-spawn/node_modules/which": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/which/-/which-6.0.1.tgz",
      "integrity": "sha512-oGLe46MIrCRqX7ytPUf66EAYvdeMIZYn3WaocqqKZAxrBpkqHfL/qvTyJ/bTk5+AqHCjXmrv3CEWgy368zhRUg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^4.0.0"
      },
      "bin": {
        "node-which": "bin/which.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/redact": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@npmcli/redact/-/redact-4.0.0.tgz",
      "integrity": "sha512-gOBg5YHMfZy+TfHArfVogwgfBeQnKbbGo3pSUyK/gSI0AVu+pEiDVcKlQb0D8Mg1LNRZILZ6XG8I5dJ4KuAd9Q==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@npmcli/run-script": {
      "version": "10.0.4",
      "resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-10.0.4.tgz",
      "integrity": "sha512-mGUWr1uMnf0le2TwfOZY4SFxZGXGfm4Jtay/nwAa2FLNAKXUoUwaGwBMNH36UHPtinWfTSJ3nqFQr0091CxVGg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@npmcli/node-gyp": "^5.0.0",
        "@npmcli/package-json": "^7.0.0",
        "@npmcli/promise-spawn": "^9.0.0",
        "node-gyp": "^12.1.0",
        "proc-log": "^6.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.113.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.113.0.tgz",
      "integrity": "sha512-Tp3XmgxwNQ9pEN9vxgJBAqdRamHibi76iowQ38O2I4PMpcvNRQNVsU2n1x1nv9yh0XoTrGFzf7cZSGxmixxrhA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@parcel/watcher": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.5.6.tgz",
      "integrity": "sha512-tmmZ3lQxAe/k/+rNnXQRawJ4NjxO2hqiOLTHvWchtGZULp4RyFeh6aU4XdOYBFe2KE1oShQTv4AblOs2iOrNnQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "detect-libc": "^2.0.3",
        "is-glob": "^4.0.3",
        "node-addon-api": "^7.0.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "@parcel/watcher-android-arm64": "2.5.6",
        "@parcel/watcher-darwin-arm64": "2.5.6",
        "@parcel/watcher-darwin-x64": "2.5.6",
        "@parcel/watcher-freebsd-x64": "2.5.6",
        "@parcel/watcher-linux-arm-glibc": "2.5.6",
        "@parcel/watcher-linux-arm-musl": "2.5.6",
        "@parcel/watcher-linux-arm64-glibc": "2.5.6",
        "@parcel/watcher-linux-arm64-musl": "2.5.6",
        "@parcel/watcher-linux-x64-glibc": "2.5.6",
        "@parcel/watcher-linux-x64-musl": "2.5.6",
        "@parcel/watcher-win32-arm64": "2.5.6",
        "@parcel/watcher-win32-ia32": "2.5.6",
        "@parcel/watcher-win32-x64": "2.5.6"
      }
    },
    "node_modules/@parcel/watcher-android-arm64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.5.6.tgz",
      "integrity": "sha512-YQxSS34tPF/6ZG7r/Ih9xy+kP/WwediEUsqmtf0cuCV5TPPKw/PQHRhueUo6JdeFJaqV3pyjm0GdYjZotbRt/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-darwin-arm64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.5.6.tgz",
      "integrity": "sha512-Z2ZdrnwyXvvvdtRHLmM4knydIdU9adO3D4n/0cVipF3rRiwP+3/sfzpAwA/qKFL6i1ModaabkU7IbpeMBgiVEA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-darwin-x64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.5.6.tgz",
      "integrity": "sha512-HgvOf3W9dhithcwOWX9uDZyn1lW9R+7tPZ4sug+NGrGIo4Rk1hAXLEbcH1TQSqxts0NYXXlOWqVpvS1SFS4fRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-freebsd-x64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.5.6.tgz",
      "integrity": "sha512-vJVi8yd/qzJxEKHkeemh7w3YAn6RJCtYlE4HPMoVnCpIXEzSrxErBW5SJBgKLbXU3WdIpkjBTeUNtyBVn8TRng==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm-glibc": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.5.6.tgz",
      "integrity": "sha512-9JiYfB6h6BgV50CCfasfLf/uvOcJskMSwcdH1PHH9rvS1IrNy8zad6IUVPVUfmXr+u+Km9IxcfMLzgdOudz9EQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm-musl": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-musl/-/watcher-linux-arm-musl-2.5.6.tgz",
      "integrity": "sha512-Ve3gUCG57nuUUSyjBq/MAM0CzArtuIOxsBdQ+ftz6ho8n7s1i9E1Nmk/xmP323r2YL0SONs1EuwqBp2u1k5fxg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm64-glibc": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.5.6.tgz",
      "integrity": "sha512-f2g/DT3NhGPdBmMWYoxixqYr3v/UXcmLOYy16Bx0TM20Tchduwr4EaCbmxh1321TABqPGDpS8D/ggOTaljijOA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm64-musl": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.5.6.tgz",
      "integrity": "sha512-qb6naMDGlbCwdhLj6hgoVKJl2odL34z2sqkC7Z6kzir8b5W65WYDpLB6R06KabvZdgoHI/zxke4b3zR0wAbDTA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-x64-glibc": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.5.6.tgz",
      "integrity": "sha512-kbT5wvNQlx7NaGjzPFu8nVIW1rWqV780O7ZtkjuWaPUgpv2NMFpjYERVi0UYj1msZNyCzGlaCWEtzc+exjMGbQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-x64-musl": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.5.6.tgz",
      "integrity": "sha512-1JRFeC+h7RdXwldHzTsmdtYR/Ku8SylLgTU/reMuqdVD7CtLwf0VR1FqeprZ0eHQkO0vqsbvFLXUmYm/uNKJBg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-win32-arm64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.5.6.tgz",
      "integrity": "sha512-3ukyebjc6eGlw9yRt678DxVF7rjXatWiHvTXqphZLvo7aC5NdEgFufVwjFfY51ijYEWpXbqF5jtrK275z52D4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-win32-ia32": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-win32-ia32/-/watcher-win32-ia32-2.5.6.tgz",
      "integrity": "sha512-k35yLp1ZMwwee3Ez/pxBi5cf4AoBKYXj00CZ80jUz5h8prpiaQsiRPKQMxoLstNuqe2vR4RNPEAEcjEFzhEz/g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-win32-x64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.5.6.tgz",
      "integrity": "sha512-hbQlYcCq5dlAX9Qx+kFb0FHue6vbjlf0FrNzSKdYK2APUf7tGfGxQCk2ihEREmbR6ZMc0MVAD5RIX/41gpUzTw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher/node_modules/node-addon-api": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
      "integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
      "dev": true,
      "license": "MIT",
      "optional": true
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.0-rc.4.tgz",
      "integrity": "sha512-vRq9f4NzvbdZavhQbjkJBx7rRebDKYR9zHfO/Wg486+I7bSecdUapzCm5cyXoK+LHokTxgSq7A5baAXUZkIz0w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.0-rc.4.tgz",
      "integrity": "sha512-kFgEvkWLqt3YCgKB5re9RlIrx9bRsvyVUnaTakEpOPuLGzLpLapYxE9BufJNvPg8GjT6mB1alN4yN1NjzoeM8Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.0-rc.4.tgz",
      "integrity": "sha512-JXmaOJGsL/+rsmMfutcDjxWM2fTaVgCHGoXS7nE8Z3c9NAYjGqHvXrAhMUZvMpHS/k7Mg+X7n/MVKb7NYWKKww==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.0-rc.4.tgz",
      "integrity": "sha512-ep3Catd6sPnHTM0P4hNEvIv5arnDvk01PfyJIJ+J3wVCG1eEaPo09tvFqdtcaTrkwQy0VWR24uz+cb4IsK53Qw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.0-rc.4.tgz",
      "integrity": "sha512-LwA5ayKIpnsgXJEwWc3h8wPiS33NMIHd9BhsV92T8VetVAbGe2qXlJwNVDGHN5cOQ22R9uYvbrQir2AB+ntT2w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.0-rc.4.tgz",
      "integrity": "sha512-AC1WsGdlV1MtGay/OQ4J9T7GRadVnpYRzTcygV1hKnypbYN20Yh4t6O1Sa2qRBMqv1etulUknqXjc3CTIsBu6A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.0-rc.4.tgz",
      "integrity": "sha512-lU+6rgXXViO61B4EudxtVMXSOfiZONR29Sys5VGSetUY7X8mg9FCKIIjcPPj8xNDeYzKl+H8F/qSKOBVFJChCQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.0-rc.4.tgz",
      "integrity": "sha512-DZaN1f0PGp/bSvKhtw50pPsnln4T13ycDq1FrDWRiHmWt1JeW+UtYg9touPFf8yt993p8tS2QjybpzKNTxYEwg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.0-rc.4.tgz",
      "integrity": "sha512-RnGxwZLN7fhMMAItnD6dZ7lvy+TI7ba+2V54UF4dhaWa/p8I/ys1E73KO6HmPmgz92ZkfD8TXS1IMV8+uhbR9g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.0-rc.4.tgz",
      "integrity": "sha512-6lcI79+X8klGiGd8yHuTgQRjuuJYNggmEml+RsyN596P23l/zf9FVmJ7K0KVKkFAeYEdg0iMUKyIxiV5vebDNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.0-rc.4.tgz",
      "integrity": "sha512-wz7ohsKCAIWy91blZ/1FlpPdqrsm1xpcEOQVveWoL6+aSPKL4VUcoYmmzuLTssyZxRpEwzuIxL/GDsvpjaBtOw==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^1.1.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.0-rc.4.tgz",
      "integrity": "sha512-cfiMrfuWCIgsFmcVG0IPuO6qTRHvF7NuG3wngX1RZzc6dU8FuBFb+J3MIR5WrdTNozlumfgL4cvz+R4ozBCvsQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.0-rc.4.tgz",
      "integrity": "sha512-p6UeR9y7ht82AH57qwGuFYn69S6CZ7LLKdCKy/8T3zS9VTrJei2/CGsTUV45Da4Z9Rbhc7G4gyWQ/Ioamqn09g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.4.tgz",
      "integrity": "sha512-1BrrmTu0TWfOP1riA8uakjFc9bpIUGzVKETsOtzY39pPga8zELGDl8eu1Dx7/gjM5CAz14UknsUMpBO8L+YntQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.60.2.tgz",
      "integrity": "sha512-dnlp69efPPg6Uaw2dVqzWRfAWRnYVb1XJ8CyyhIbZeaq4CA5/mLeZ1IEt9QqQxmbdvagjLIm2ZL8BxXv5lH4Yw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.60.2.tgz",
      "integrity": "sha512-OqZTwDRDchGRHHm/hwLOL7uVPB9aUvI0am/eQuWMNyFHf5PSEQmyEeYYheA0EPPKUO/l0uigCp+iaTjoLjVoHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.60.2.tgz",
      "integrity": "sha512-UwRE7CGpvSVEQS8gUMBe1uADWjNnVgP3Iusyda1nSRwNDCsRjnGc7w6El6WLQsXmZTbLZx9cecegumcitNfpmA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.60.2.tgz",
      "integrity": "sha512-gjEtURKLCC5VXm1I+2i1u9OhxFsKAQJKTVB8WvDAHF+oZlq0GTVFOlTlO1q3AlCTE/DF32c16ESvfgqR7343/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.60.2.tgz",
      "integrity": "sha512-Bcl6CYDeAgE70cqZaMojOi/eK63h5Me97ZqAQoh77VPjMysA/4ORQBRGo3rRy45x4MzVlU9uZxs8Uwy7ZaKnBw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.60.2.tgz",
      "integrity": "sha512-LU+TPda3mAE2QB0/Hp5VyeKJivpC6+tlOXd1VMoXV/YFMvk/MNk5iXeBfB4MQGRWyOYVJ01625vjkr0Az98OJQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.60.2.tgz",
      "integrity": "sha512-2QxQrM+KQ7DAW4o22j+XZ6RKdxjLD7BOWTP0Bv0tmjdyhXSsr2Ul1oJDQqh9Zf5qOwTuTc7Ek83mOFaKnodPjg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.60.2.tgz",
      "integrity": "sha512-TbziEu2DVsTEOPif2mKWkMeDMLoYjx95oESa9fkQQK7r/Orta0gnkcDpzwufEcAO2BLBsD7mZkXGFqEdMRRwfw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.60.2.tgz",
      "integrity": "sha512-bO/rVDiDUuM2YfuCUwZ1t1cP+/yqjqz+Xf2VtkdppefuOFS2OSeAfgafaHNkFn0t02hEyXngZkxtGqXcXwO8Rg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.60.2.tgz",
      "integrity": "sha512-hr26p7e93Rl0Za+JwW7EAnwAvKkehh12BU1Llm9Ykiibg4uIr2rbpxG9WCf56GuvidlTG9KiiQT/TXT1yAWxTA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.60.2.tgz",
      "integrity": "sha512-pOjB/uSIyDt+ow3k/RcLvUAOGpysT2phDn7TTUB3n75SlIgZzM6NKAqlErPhoFU+npgY3/n+2HYIQVbF70P9/A==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.60.2.tgz",
      "integrity": "sha512-2/w+q8jszv9Ww1c+6uJT3OwqhdmGP2/4T17cu8WuwyUuuaCDDJ2ojdyYwZzCxx0GcsZBhzi3HmH+J5pZNXnd+Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.60.2.tgz",
      "integrity": "sha512-11+aL5vKheYgczxtPVVRhdptAM2H7fcDR5Gw4/bTcteuZBlH4oP9f5s9zYO9aGZvoGeBpqXI/9TZZihZ609wKw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.60.2.tgz",
      "integrity": "sha512-i16fokAGK46IVZuV8LIIwMdtqhin9hfYkCh8pf8iC3QU3LpwL+1FSFGej+O7l3E/AoknL6Dclh2oTdnRMpTzFQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.60.2.tgz",
      "integrity": "sha512-49FkKS6RGQoriDSK/6E2GkAsAuU5kETFCh7pG4yD/ylj9rKhTmO3elsnmBvRD4PgJPds5W2PkhC82aVwmUcJ7A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.60.2.tgz",
      "integrity": "sha512-mjYNkHPfGpUR00DuM1ZZIgs64Hpf4bWcz9Z41+4Q+pgDx73UwWdAYyf6EG/lRFldmdHHzgrYyge5akFUW0D3mQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.60.2.tgz",
      "integrity": "sha512-ALyvJz965BQk8E9Al/JDKKDLH2kfKFLTGMlgkAbbYtZuJt9LU8DW3ZoDMCtQpXAltZxwBHevXz5u+gf0yA0YoA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.60.2.tgz",
      "integrity": "sha512-UQjrkIdWrKI626Du8lCQ6MJp/6V1LAo2bOK9OTu4mSn8GGXIkPXk/Vsp4bLHCd9Z9Iz2OTEaokUE90VweJgIYQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.60.2.tgz",
      "integrity": "sha512-bTsRGj6VlSdn/XD4CGyzMnzaBs9bsRxy79eTqTCBsA8TMIEky7qg48aPkvJvFe1HyzQ5oMZdg7AnVlWQSKLTnw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.60.2.tgz",
      "integrity": "sha512-6d4Z3534xitaA1FcMWP7mQPq5zGwBmGbhphh2DwaA1aNIXUu3KTOfwrWpbwI4/Gr0uANo7NTtaykFyO2hPuFLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.60.2.tgz",
      "integrity": "sha512-NetAg5iO2uN7eB8zE5qrZ3CSil+7IJt4WDFLcC75Ymywq1VZVD6qJ6EvNLjZ3rEm6gB7XW5JdT60c6MN35Z85Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.60.2.tgz",
      "integrity": "sha512-NCYhOotpgWZ5kdxCZsv6Iudx0wX8980Q/oW4pNFNihpBKsDbEA1zpkfxJGC0yugsUuyDZ7gL37dbzwhR0VI7pQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.60.2.tgz",
      "integrity": "sha512-RXsaOqXxfoUBQoOgvmmijVxJnW2IGB0eoMO7F8FAjaj0UTywUO/luSqimWBJn04WNgUkeNhh7fs7pESXajWmkg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.60.2.tgz",
      "integrity": "sha512-qdAzEULD+/hzObedtmV6iBpdL5TIbKVztGiK7O3/KYSf+HIzU257+MX1EXJcyIiDbMAqmbwaufcYPvyRryeZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.60.2.tgz",
      "integrity": "sha512-Nd/SgG27WoA9e+/TdK74KnHz852TLa94ovOYySo/yMPuTmpckK/jIF2jSwS3g7ELSKXK13/cVdmg1Z/DaCWKxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@schematics/angular": {
      "version": "21.2.9",
      "resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-21.2.9.tgz",
      "integrity": "sha512-1renEbBZz9Yw3A0GUOJ6x6E1jd2Vu/fX5tEGiFNbIoWaNwa71SlFTvKKqaYxiYQkrpc7oexVJ2ymuvOfgTbI1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@angular-devkit/core": "21.2.9",
        "@angular-devkit/schematics": "21.2.9",
        "jsonc-parser": "3.3.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
      }
    },
    "node_modules/@sigstore/bundle": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@sigstore/bundle/-/bundle-4.0.0.tgz",
      "integrity": "sha512-NwCl5Y0V6Di0NexvkTqdoVfmjTaQwoLM236r89KEojGmq/jMls8S+zb7yOwAPdXvbwfKDlP+lmXgAL4vKSQT+A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@sigstore/protobuf-specs": "^0.5.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@sigstore/core": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@sigstore/core/-/core-3.2.0.tgz",
      "integrity": "sha512-kxHrDQ9YgfrWUSXU0cjsQGv8JykOFZQ9ErNKbFPWzk3Hgpwu8x2hHrQ9IdA8yl+j9RTLTC3sAF3Tdq1IQCP4oA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@sigstore/protobuf-specs": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@sigstore/protobuf-specs/-/protobuf-specs-0.5.1.tgz",
      "integrity": "sha512-/ScWUhhoFasJsSRGTVBwId1loQjjnjAfE4djL6ZhrXRpNCmPTnUKF5Jokd58ILseOMjzET3UrMOtJPS9sYeI0g==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/@sigstore/sign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/@sigstore/sign/-/sign-4.1.1.tgz",
      "integrity": "sha512-Hf4xglukg0XXQ2RiD5vSoLjdPe8OBUPA8XeVjUObheuDcWdYWrnH/BNmxZCzkAy68MzmNCxXLeurJvs6hcP2OQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@gar/promise-retry": "^1.0.2",
        "@sigstore/bundle": "^4.0.0",
        "@sigstore/core": "^3.2.0",
        "@sigstore/protobuf-specs": "^0.5.0",
        "make-fetch-happen": "^15.0.4",
        "proc-log": "^6.1.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@sigstore/tuf": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@sigstore/tuf/-/tuf-4.0.2.tgz",
      "integrity": "sha512-TCAzTy0xzdP79EnxSjq9KQ3eaR7+FmudLC6eRKknVKZbV7ZNlGLClAAQb/HMNJ5n2OBNk2GT1tEmU0xuPr+SLQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@sigstore/protobuf-specs": "^0.5.0",
        "tuf-js": "^4.1.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@sigstore/verify": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@sigstore/verify/-/verify-3.1.0.tgz",
      "integrity": "sha512-mNe0Iigql08YupSOGv197YdHpPPr+EzDZmfCgMc7RPNaZTw5aLN01nBl6CHJOh3BGtnMIj83EeN4butBchc8Ag==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@sigstore/bundle": "^4.0.0",
        "@sigstore/core": "^3.1.0",
        "@sigstore/protobuf-specs": "^0.5.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@smithy/config-resolver": {
      "version": "4.4.17",
      "resolved": "https://registry.npmjs.org/@smithy/config-resolver/-/config-resolver-4.4.17.tgz",
      "integrity": "sha512-TzDZcAnhTyAHbXVxWZo7/tEcrIeFq20IBk8So3OLOetWpR8EwY/yEqBMBFaJMeyEiREDq4NfEl+qO3OAUD+vbQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-config-provider": "^4.2.2",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/config-resolver/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/core": {
      "version": "3.23.17",
      "resolved": "https://registry.npmjs.org/@smithy/core/-/core-3.23.17.tgz",
      "integrity": "sha512-x7BlLbUFL8NWCGjMF9C+1N5cVCxcPa7g6Tv9B4A2luWx3be3oU8hQ96wIwxe/s7OhIzvoJH73HAUSg5JXVlEtQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-stream": "^4.5.25",
        "@smithy/util-utf8": "^4.2.2",
        "@smithy/uuid": "^1.1.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/core/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/core/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/core/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/credential-provider-imds": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/credential-provider-imds/-/credential-provider-imds-4.2.14.tgz",
      "integrity": "sha512-Au28zBN48ZAoXdooGUHemuVBrkE+Ie6RPmGNIAJsFqj33Vhb6xAgRifUydZ2aY+M+KaMAETAlKk5NC5h1G7wpg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/credential-provider-imds/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-codec": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/eventstream-codec/-/eventstream-codec-4.2.14.tgz",
      "integrity": "sha512-erZq0nOIpzfeZdCyzZjdJb4nVSKLUmSkaQUVkRGQTXs30gyUGeKnrYEg+Xe1W5gE3aReS7IgsvANwVPxSzY6Pw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-crypto/crc32": "5.2.0",
        "@smithy/types": "^4.14.1",
        "@smithy/util-hex-encoding": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-codec/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-codec/node_modules/@smithy/util-hex-encoding": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-hex-encoding/-/util-hex-encoding-4.2.2.tgz",
      "integrity": "sha512-Qcz3W5vuHK4sLQdyT93k/rfrUwdJ8/HZ+nMUOyGdpeGA1Wxt65zYwi3oEl9kOM+RswvYq90fzkNDahPS8K0OIg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-browser": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/eventstream-serde-browser/-/eventstream-serde-browser-4.2.14.tgz",
      "integrity": "sha512-8IelTCtTctWRbb+0Dcy+C0aICh1qa0qWXqgjcXDmMuCvPJRnv26hiDZoAau2ILOniki65mCPKqOQs/BaWvO4CQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/eventstream-serde-universal": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-browser/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-config-resolver": {
      "version": "4.3.14",
      "resolved": "https://registry.npmjs.org/@smithy/eventstream-serde-config-resolver/-/eventstream-serde-config-resolver-4.3.14.tgz",
      "integrity": "sha512-sqHiHpYRYo3FJlaIxD1J8PhbcmJAm7IuM16mVnwSkCToD7g00IBZzKuiLNMGmftULmEUX6/UAz8/NN5uMP8bVA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-config-resolver/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-node": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/eventstream-serde-node/-/eventstream-serde-node-4.2.14.tgz",
      "integrity": "sha512-Ht/8BuGlKfFTy0H3+8eEu0vdpwGztCnaLLXtpXNdQqiR7Hj4vFScU3T436vRAjATglOIPjJXronY+1WxxNLSiw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/eventstream-serde-universal": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-node/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-universal": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/eventstream-serde-universal/-/eventstream-serde-universal-4.2.14.tgz",
      "integrity": "sha512-lWyt4T2XQZUZgK3tQ3Wn0w3XBvZsK/vjTuJl6bXbnGZBHH0ZUSONTYiK9TgjTTzU54xQr3DRFwpjmhp0oLm3gg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/eventstream-codec": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/eventstream-serde-universal/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/fetch-http-handler": {
      "version": "5.3.17",
      "resolved": "https://registry.npmjs.org/@smithy/fetch-http-handler/-/fetch-http-handler-5.3.17.tgz",
      "integrity": "sha512-bXOvQzaSm6MnmLaWA1elgfQcAtN4UP3vXqV97bHuoOrHQOJiLT3ds6o9eo5bqd0TJfRFpzdGnDQdW3FACiAVdw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/querystring-builder": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-base64": "^4.3.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/fetch-http-handler/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/fetch-http-handler/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/fetch-http-handler/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/hash-node": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/hash-node/-/hash-node-4.2.14.tgz",
      "integrity": "sha512-8ZBDY2DD4wr+GGjTpPtiglEsqr0lUP+KHqgZcWczFf6qeZ/YRjMIOoQWVQlmwu7EtxKTd8YXD8lblmYcpBIA1g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/hash-node/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/hash-node/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/invalid-dependency": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/invalid-dependency/-/invalid-dependency-4.2.14.tgz",
      "integrity": "sha512-c21qJiTSb25xvvOp+H2TNZzPCngrvl5vIPqPB8zQ/DmJF4QWXO19x1dWfMJZ6wZuuWUPPm0gV8C0cU3+ifcWuw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/invalid-dependency/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/is-array-buffer": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/is-array-buffer/-/is-array-buffer-4.2.2.tgz",
      "integrity": "sha512-n6rQ4N8Jj4YTQO3YFrlgZuwKodf4zUFs7EJIWH86pSCWBaAtAGBFfCM7Wx6D2bBJ2xqFNxGBSrUWswT3M0VJow==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/md5-js": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@smithy/md5-js/-/md5-js-2.0.7.tgz",
      "integrity": "sha512-2i2BpXF9pI5D1xekqUsgQ/ohv5+H//G9FlawJrkOJskV18PgJ8LiNbLiskMeYt07yAsSTZR7qtlcAaa/GQLWww==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^2.3.1",
        "@smithy/util-utf8": "^2.0.0",
        "tslib": "^2.5.0"
      }
    },
    "node_modules/@smithy/md5-js/node_modules/@smithy/types": {
      "version": "2.12.0",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-2.12.0.tgz",
      "integrity": "sha512-QwYgloJ0sVNBeBuBs65cIkTbfzV/Q6ZNPCJ99EICFEdJYG50nGIY/uYXp+TbsdJReIuPr0a0kXmCvren3MbRRw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@smithy/middleware-content-length": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/middleware-content-length/-/middleware-content-length-4.2.14.tgz",
      "integrity": "sha512-xhHq7fX4/3lv5NHxLUk3OeEvl0xZ+Ek3qIbWaCL4f9JwgDZEclPBElljaZCAItdGPQl/kSM4LPMOpy1MYgprpw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-content-length/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-endpoint": {
      "version": "4.4.32",
      "resolved": "https://registry.npmjs.org/@smithy/middleware-endpoint/-/middleware-endpoint-4.4.32.tgz",
      "integrity": "sha512-ZZkgyjnJppiZbIm6Qbx92pbXYi1uzenIvGhBSCDlc7NwuAkiqSgS75j1czAD25ZLs2FjMjYy1q7gyRVWG6JA0Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/core": "^3.23.17",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-middleware": "^4.2.14",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-endpoint/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-retry": {
      "version": "4.5.7",
      "resolved": "https://registry.npmjs.org/@smithy/middleware-retry/-/middleware-retry-4.5.7.tgz",
      "integrity": "sha512-bRt6ZImqVSeTk39Nm81K20ObIiAZ3WefY7G6+iz/0tZjs4dgRRjvRX2sgsH+zi6iDCRR/aQvQofLKxxz4rPBZg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/core": "^3.23.17",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/service-error-classification": "^4.3.1",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.6",
        "@smithy/uuid": "^1.1.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-retry/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-serde": {
      "version": "4.2.20",
      "resolved": "https://registry.npmjs.org/@smithy/middleware-serde/-/middleware-serde-4.2.20.tgz",
      "integrity": "sha512-Lx9JMO9vArPtiChE3wbEZ5akMIDQpWQtlu90lhACQmNOXcGXRbaDywMHDzuDZ2OkZzP+9wQfZi3YJT9F67zTQQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/core": "^3.23.17",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-serde/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-stack": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/middleware-stack/-/middleware-stack-4.2.14.tgz",
      "integrity": "sha512-2dvkUKLuFdKsCRmOE4Mn63co0Djtsm+JMh0bYZQupN1pJwMeE8FmQmRLLzzEMN0dnNi7CDCYYH8F0EVwWiPBeA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/middleware-stack/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/node-config-provider": {
      "version": "4.3.14",
      "resolved": "https://registry.npmjs.org/@smithy/node-config-provider/-/node-config-provider-4.3.14.tgz",
      "integrity": "sha512-S+gFjyo/weSVL0P1b9Ts8C/CwIfNCgUPikk3sl6QVsfE/uUuO+QsF+NsE/JkpvWqqyz1wg7HFdiaZuj5CoBMRg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/property-provider": "^4.2.14",
        "@smithy/shared-ini-file-loader": "^4.4.9",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/node-config-provider/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/node-http-handler": {
      "version": "4.6.1",
      "resolved": "https://registry.npmjs.org/@smithy/node-http-handler/-/node-http-handler-4.6.1.tgz",
      "integrity": "sha512-iB+orM4x3xrr57X3YaXazfKnntl0LHlZB1kcXSGzMV1Tt0+YwEjGlbjk/44qEGtBzXAz6yFDzkYTKSV6Pj2HUg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/querystring-builder": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/node-http-handler/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/property-provider": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/property-provider/-/property-provider-4.2.14.tgz",
      "integrity": "sha512-WuM31CgfsnQ/10i7NYr0PyxqknD72Y5uMfUMVSniPjbEPceiTErb4eIqJQ+pdxNEAUEWrewrGjIRjVbVHsxZiQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/property-provider/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/protocol-http": {
      "version": "5.3.14",
      "resolved": "https://registry.npmjs.org/@smithy/protocol-http/-/protocol-http-5.3.14.tgz",
      "integrity": "sha512-dN5F8kHx8RNU0r+pCwNmFZyz6ChjMkzShy/zup6MtkRmmix4vZzJdW+di7x//b1LiynIev88FM18ie+wwPcQtQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/protocol-http/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/querystring-builder": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/querystring-builder/-/querystring-builder-4.2.14.tgz",
      "integrity": "sha512-XYA5Z0IqTeF+5XDdh4BBmSA0HvbgVZIyv4cmOoUheDNR57K1HgBp9ukUMx3Cr3XpDHHpLBnexPE3LAtDsZkj2A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "@smithy/util-uri-escape": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/querystring-builder/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/querystring-parser": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/querystring-parser/-/querystring-parser-4.2.14.tgz",
      "integrity": "sha512-hr+YyqBD23GVvRxGGrcc/oOeNlK3PzT5Fu4dzrDXxzS1LpFiuL2PQQqKPs87M79aW7ziMs+nvB3qdw77SqE7Lw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/querystring-parser/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/service-error-classification": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@smithy/service-error-classification/-/service-error-classification-4.3.1.tgz",
      "integrity": "sha512-aUQuDGh760ts/8MU+APjIZhlLPKhIIfqyzZaJikLEIMrdxFvxuLYD0WxWzaYWpmLbQlXDe9p7EWM3HsBe0K6Gw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/service-error-classification/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/shared-ini-file-loader": {
      "version": "4.4.9",
      "resolved": "https://registry.npmjs.org/@smithy/shared-ini-file-loader/-/shared-ini-file-loader-4.4.9.tgz",
      "integrity": "sha512-495/V2I15SHgedSJoDPD23JuSfKAp726ZI1V0wtjB07Wh7q/0tri/0e0DLefZCHgxZonrGKt/OCTpAtP1wE1kQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/shared-ini-file-loader/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/signature-v4": {
      "version": "5.3.14",
      "resolved": "https://registry.npmjs.org/@smithy/signature-v4/-/signature-v4-5.3.14.tgz",
      "integrity": "sha512-1D9Y/nmlVjCeSivCbhZ7hgEpmHyY1h0GvpSZt3l0xcD9JjmjVC1CHOozS6+Gh+/ldMH8JuJ6cujObQqfayAVFA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/is-array-buffer": "^4.2.2",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-hex-encoding": "^4.2.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-uri-escape": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/signature-v4/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/signature-v4/node_modules/@smithy/util-hex-encoding": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-hex-encoding/-/util-hex-encoding-4.2.2.tgz",
      "integrity": "sha512-Qcz3W5vuHK4sLQdyT93k/rfrUwdJ8/HZ+nMUOyGdpeGA1Wxt65zYwi3oEl9kOM+RswvYq90fzkNDahPS8K0OIg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/signature-v4/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/smithy-client": {
      "version": "4.12.13",
      "resolved": "https://registry.npmjs.org/@smithy/smithy-client/-/smithy-client-4.12.13.tgz",
      "integrity": "sha512-y/Pcj1V9+qG98gyu1gvftHB7rDpdh+7kIBIggs55yGm3JdtBV8GT8IFF3a1qxZ79QnaJHX9GXzvBG6tAd+czJA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/core": "^3.23.17",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/types": "^4.14.1",
        "@smithy/util-stream": "^4.5.25",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/smithy-client/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/types": {
      "version": "3.7.2",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-3.7.2.tgz",
      "integrity": "sha512-bNwBYYmN8Eh9RyjS1p2gW6MIhSO2rl7X9QeLM8iTdcGRP+eDiIWDt66c9IysCc22gefKszZv+ubV9qZc7hdESg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@smithy/url-parser": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/url-parser/-/url-parser-4.2.14.tgz",
      "integrity": "sha512-p06BiBigJ8bTA3MgnOfCtDUWnAMY0YfedO/GRpmc7p+wg3KW8vbXy1xwSu5ASy0wV7rRYtlfZOIKH4XqfhjSQQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/querystring-parser": "^4.2.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/url-parser/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-base64": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-3.0.0.tgz",
      "integrity": "sha512-Kxvoh5Qtt0CDsfajiZOCpJxgtPHXOKwmM+Zy4waD43UoEMA+qPxxa98aE/7ZhdnBFZFXMOiBR5xbcaMhLtznQQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^3.0.0",
        "@smithy/util-utf8": "^3.0.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@smithy/util-base64/node_modules/@smithy/is-array-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/is-array-buffer/-/is-array-buffer-3.0.0.tgz",
      "integrity": "sha512-+Fsu6Q6C4RSJiy81Y8eApjEB5gVtM+oFKTffg+jSuwtvomJJrhUJBu2zS8wjXSgH/g1MKEWrzyChTBe6clb5FQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@smithy/util-base64/node_modules/@smithy/util-buffer-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-buffer-from/-/util-buffer-from-3.0.0.tgz",
      "integrity": "sha512-aEOHCgq5RWFbP+UDPvPot26EJHjOC+bRgse5A8V3FSShqd5E5UN4qc7zkwsvJPPAVsf73QwYcHN1/gt/rtLwQA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/is-array-buffer": "^3.0.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@smithy/util-base64/node_modules/@smithy/util-utf8": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-3.0.0.tgz",
      "integrity": "sha512-rUeT12bxFnplYDe815GXbq/oixEGHfRFFtcTF3YdDi/JaENIM6aSYYLJydG83UNzLXeRI5K8abYd/8Sp/QM0kA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^3.0.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@smithy/util-body-length-browser": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-body-length-browser/-/util-body-length-browser-4.2.2.tgz",
      "integrity": "sha512-JKCrLNOup3OOgmzeaKQwi4ZCTWlYR5H4Gm1r2uTMVBXoemo1UEghk5vtMi1xSu2ymgKVGW631e2fp9/R610ZjQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-body-length-node": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/@smithy/util-body-length-node/-/util-body-length-node-4.2.3.tgz",
      "integrity": "sha512-ZkJGvqBzMHVHE7r/hcuCxlTY8pQr1kMtdsVPs7ex4mMU+EAbcXppfo5NmyxMYi2XU49eqaz56j2gsk4dHHPG/g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-buffer-from": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-buffer-from/-/util-buffer-from-4.2.2.tgz",
      "integrity": "sha512-FDXD7cvUoFWwN6vtQfEta540Y/YBe5JneK3SoZg9bThSoOAC/eGeYEua6RkBgKjGa/sz6Y+DuBZj3+YEY21y4Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/is-array-buffer": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-config-provider": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-config-provider/-/util-config-provider-4.2.2.tgz",
      "integrity": "sha512-dWU03V3XUprJwaUIFVv4iOnS1FC9HnMHDfUrlNDSh4315v0cWyaIErP8KiqGVbf5z+JupoVpNM7ZB3jFiTejvQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-defaults-mode-browser": {
      "version": "4.3.49",
      "resolved": "https://registry.npmjs.org/@smithy/util-defaults-mode-browser/-/util-defaults-mode-browser-4.3.49.tgz",
      "integrity": "sha512-a5bNrdiONYB/qE2BuKegvUMd/+ZDwdg4vsNuuSzYE8qs2EYAdK9CynL+Rzn29PbPiUqoz/cbpRbcLzD5lEevHw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/property-provider": "^4.2.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-defaults-mode-browser/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-defaults-mode-node": {
      "version": "4.2.54",
      "resolved": "https://registry.npmjs.org/@smithy/util-defaults-mode-node/-/util-defaults-mode-node-4.2.54.tgz",
      "integrity": "sha512-g1cvrJvOnzeJgEdf7AE4luI7gp6L8weE0y9a9wQUSGtjb8QRHDbCJYuE4Sy0SD9N8RrnNPFsPltAz/OSoBR9Zw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/credential-provider-imds": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/property-provider": "^4.2.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-defaults-mode-node/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-endpoints": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-endpoints/-/util-endpoints-3.4.2.tgz",
      "integrity": "sha512-a55Tr+3OKld4TTtnT+RhKOQHyPxm3j/xL4OR83WBUhLJaKDS9dnJ7arRMOp3t31dcLhApwG9bgvrRXBHlLdIkg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-endpoints/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-hex-encoding": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-hex-encoding/-/util-hex-encoding-2.0.0.tgz",
      "integrity": "sha512-c5xY+NUnFqG6d7HFh1IFfrm3mGl29lC+vF+geHv4ToiuJCBmIfzx6IeHLg+OgRdPFKDXIw6pvi+p3CsscaMcMA==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.5.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@smithy/util-middleware": {
      "version": "4.2.14",
      "resolved": "https://registry.npmjs.org/@smithy/util-middleware/-/util-middleware-4.2.14.tgz",
      "integrity": "sha512-1Su2vj9RYNDEv/V+2E+jXkkwGsgR7dc4sfHn9Z7ruzQHJIEni9zzw5CauvRXlFJfmgcqYP8fWa0dkh2Q2YaQyw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-middleware/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-retry": {
      "version": "4.3.8",
      "resolved": "https://registry.npmjs.org/@smithy/util-retry/-/util-retry-4.3.8.tgz",
      "integrity": "sha512-LUIxbTBi+OpvXpg91poGA6BdyoleMDLnfXjVDqyi2RvZmTveY5loE/FgYUBCR5LU2BThW2SoZRh8dTIIy38IPw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/service-error-classification": "^4.3.1",
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-retry/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-stream": {
      "version": "4.5.25",
      "resolved": "https://registry.npmjs.org/@smithy/util-stream/-/util-stream-4.5.25.tgz",
      "integrity": "sha512-/PFpG4k8Ze8Ei+mMKj3oiPICYekthuzePZMgZbCqMiXIHHf4n2aZ4Ps0aSRShycFTGuj/J6XldmC0x0DwednIA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/types": "^4.14.1",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-hex-encoding": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-stream/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-stream/node_modules/@smithy/util-base64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-base64/-/util-base64-4.3.2.tgz",
      "integrity": "sha512-XRH6b0H/5A3SgblmMa5ErXQ2XKhfbQB+Fm/oyLZ2O2kCUrwgg55bU0RekmzAhuwOjA9qdN5VU2BprOvGGUkOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-stream/node_modules/@smithy/util-hex-encoding": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-hex-encoding/-/util-hex-encoding-4.2.2.tgz",
      "integrity": "sha512-Qcz3W5vuHK4sLQdyT93k/rfrUwdJ8/HZ+nMUOyGdpeGA1Wxt65zYwi3oEl9kOM+RswvYq90fzkNDahPS8K0OIg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-stream/node_modules/@smithy/util-utf8": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-4.2.2.tgz",
      "integrity": "sha512-75MeYpjdWRe8M5E3AW0O4Cx3UadweS+cwdXjwYGBW5h/gxxnbeZ877sLPX/ZJA9GVTlL/qG0dXP29JWFCD1Ayw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^4.2.2",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-uri-escape": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@smithy/util-uri-escape/-/util-uri-escape-4.2.2.tgz",
      "integrity": "sha512-2kAStBlvq+lTXHyAZYfJRb/DfS3rsinLiwb+69SstC9Vb0s9vNWkRwpnj918Pfi85mzi42sOqdV72OLxWAISnw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-utf8": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-utf8/-/util-utf8-2.0.0.tgz",
      "integrity": "sha512-rctU1VkziY84n5OXe3bPNpKR001ZCME2JCaBBFgtiM2hfKbHFudc/BkMuPab8hRbLd0j3vbnBTTZ1igBf0wgiQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/util-buffer-from": "^2.0.0",
        "tslib": "^2.5.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@smithy/util-utf8/node_modules/@smithy/is-array-buffer": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@smithy/is-array-buffer/-/is-array-buffer-2.2.0.tgz",
      "integrity": "sha512-GGP3O9QFD24uGeAXYUjwSTXARoqpZykHadOmA8G5vfJPK0/DC67qa//0qvqrJzL1xc8WQWX7/yc7fwudjPHPhA==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-buffer-from/-/util-buffer-from-2.2.0.tgz",
      "integrity": "sha512-IJdWBbTcMQ6DA0gdNhh/BwrLkDR+ADW5Kr1aZmd4k3DIF6ezMV4R2NIAmT08wQJ3yUK82thHWmC/TnK/wpMMIA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/is-array-buffer": "^2.2.0",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@smithy/util-waiter": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@smithy/util-waiter/-/util-waiter-4.3.0.tgz",
      "integrity": "sha512-JyjYmLAfS+pdxF92o4yLgEoy0zhayKTw73FU1aofLWwLcJw7iSqIY2exGmMTrl/lmZugP5p/zxdFSippJDfKWA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@smithy/types": "^4.14.1",
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/util-waiter/node_modules/@smithy/types": {
      "version": "4.14.1",
      "resolved": "https://registry.npmjs.org/@smithy/types/-/types-4.14.1.tgz",
      "integrity": "sha512-59b5HtSVrVR/eYNei3BUj3DCPKD/G7EtDDe7OEJE7i7FtQFugYo6MxbotS8mVJkLNVf8gYaAlEBwwtJ9HzhWSg==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@smithy/uuid": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@smithy/uuid/-/uuid-1.1.2.tgz",
      "integrity": "sha512-O/IEdcCUKkubz60tFbGA7ceITTAJsty+lBjNoorP4Z6XRqaFb/OjQjZODophEcuq68nKm6/0r+6/lLQ+XVpk8g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.6.2"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@tufjs/canonical-json": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@tufjs/canonical-json/-/canonical-json-2.0.0.tgz",
      "integrity": "sha512-yVtV8zsdo8qFHe+/3kw81dSLyF7D576A5cCFCi4X7B39tWT7SekaEFUnvnWJHz+9qO7qJTah1JbrDjWKqFtdWA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^16.14.0 || >=18.0.0"
      }
    },
    "node_modules/@tufjs/models": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@tufjs/models/-/models-4.1.0.tgz",
      "integrity": "sha512-Y8cK9aggNRsqJVaKUlEYs4s7CvQ1b1ta2DVPyAimb0I2qhzjNk+A+mxvll/klL0RlfuIUei8BF7YWiua4kQqww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tufjs/canonical-json": "2.0.0",
        "minimatch": "^10.1.1"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/aws-lambda": {
      "version": "8.10.161",
      "resolved": "https://registry.npmjs.org/@types/aws-lambda/-/aws-lambda-8.10.161.tgz",
      "integrity": "sha512-rUYdp+MQwSFocxIOcSsYSF3YYYC/uUpMbCY/mbO21vGqfrEYvNSoPyKYDj6RhXXpPfS0KstW9RwG3qXh9sL7FQ==",
      "license": "MIT"
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/chai": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
      "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/deep-eql": "*",
        "assertion-error": "^2.0.1"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/deep-eql": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
      "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^2"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.1.tgz",
      "integrity": "sha512-v4zIMr/cX7/d2BpAEX3KNKL/JrT1s43s96lLvvdTmza1oEvDudCqK9aF/djc/SWgy8Yh0h30TZx5VpzqFCxk5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.39",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.39.tgz",
      "integrity": "sha512-orrrD74MBUyK8jOAD/r0+lfa1I2MO6I+vAkmAWzMYbCcgrN4lCrmK52gRFQq/JRxfYPfonkr4b0jcY7Olqdqbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.0.tgz",
      "integrity": "sha512-JawvT8iBVWpzTrz3EGw9BTQFg3BQNmwERdKE22vlTxawwtbyUSlMppvZYKLZzB5zgACXdXxbD3m1bXaMqP/9ow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/uuid": {
      "version": "9.0.8",
      "resolved": "https://registry.npmjs.org/@types/uuid/-/uuid-9.0.8.tgz",
      "integrity": "sha512-jg+97EGIcY9AGHJJRaaPVgetKDsrTgbRjQ5Msgjh/DQKEFl0DtyRr/VCOyD1T2R1MNeWPK/u7JoGhlDZnKBAfA==",
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-basic-ssl": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-basic-ssl/-/plugin-basic-ssl-2.1.4.tgz",
      "integrity": "sha512-HXciTXN/sDBYWgeAD4V4s0DN0g72x5mlxQhHxtYu3Tt8BLa6MzcJZUyDVFCdtjNs3bfENVHVzOsmooTVuNgAAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "peerDependencies": {
        "vite": "^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/@vitest/expect": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-4.1.5.tgz",
      "integrity": "sha512-PWBaRY5JoKuRnHlUHfpV/KohFylaDZTupcXN1H9vYryNLOnitSw60Mw9IAE2r67NbwwzBw/Cc/8q9BK3kIX8Kw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "@types/chai": "^5.2.2",
        "@vitest/spy": "4.1.5",
        "@vitest/utils": "4.1.5",
        "chai": "^6.2.2",
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/mocker": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-4.1.5.tgz",
      "integrity": "sha512-/x2EmFC4mT4NNzqvC3fmesuV97w5FC903KPmey4gsnJiMQ3Be1IlDKVaDaG8iqaLFHqJ2FVEkxZk5VmeLjIItw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "4.1.5",
        "estree-walker": "^3.0.3",
        "magic-string": "^0.30.21"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/pretty-format": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-4.1.5.tgz",
      "integrity": "sha512-7I3q6l5qr03dVfMX2wCo9FxwSJbPdwKjy2uu/YPpU3wfHvIL4QHwVRp57OfGrDFeUJ8/8QdfBKIV12FTtLn00g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-4.1.5.tgz",
      "integrity": "sha512-2D+o7Pr82IEO46YPpoA/YU0neeyr6FTerQb5Ro7BUnBuv6NQtT/kmVnczngiMEBhzgqz2UZYl5gArejsyERDSQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "4.1.5",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-4.1.5.tgz",
      "integrity": "sha512-zypXEt4KH/XgKGPUz4eC2AvErYx0My5hfL8oDb1HzGFpEk1P62bxSohdyOmvz+d9UJwanI68MKwr2EquOaOgMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "4.1.5",
        "@vitest/utils": "4.1.5",
        "magic-string": "^0.30.21",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-4.1.5.tgz",
      "integrity": "sha512-2lNOsh6+R2Idnf1TCZqSwYlKN2E/iDlD8sgU59kYVl+OMDmvldO1VDk39smRfpUNwYpNRVn3w4YfuC7KfbBnkQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-4.1.5.tgz",
      "integrity": "sha512-76wdkrmfXfqGjueGgnb45ITPyUi1ycZ4IHgC2bhPDUfWHklY/q3MdLOAB+TF1e6xfl8NxNY0ZYaPCFNWSsw3Ug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "4.1.5",
        "convert-source-map": "^2.0.0",
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils/node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@yarnpkg/lockfile": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@yarnpkg/lockfile/-/lockfile-1.1.0.tgz",
      "integrity": "sha512-GpSwvyXOcOOlV70vbnzjj4fW5xW/FdUF6nQEt1ENy7m4ZCczi1+/buVUPAqmGfqznsORNFzUMjctTIp8a9tuCQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/abbrev": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-4.0.0.tgz",
      "integrity": "sha512-a1wflyaL0tHtJSmLSOVybYhy22vRih4eduhhrkcjgrWGnRfrZtovJ2FRjxuTtkkj47O/baf0R86QU5OuYpz8fA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.18.0.tgz",
      "integrity": "sha512-PlXPeEWMXMZ7sPYOHqmDyCJzcfNrUr3fGNKtezX14ykXOEIvyK81d+qydx89KY5O71FKMPaQ2vBfBFI5NHR63A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-3.0.1.tgz",
      "integrity": "sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/algoliasearch": {
      "version": "5.48.1",
      "resolved": "https://registry.npmjs.org/algoliasearch/-/algoliasearch-5.48.1.tgz",
      "integrity": "sha512-Rf7xmeuIo7nb6S4mp4abW2faW8DauZyE2faBIKFaUfP3wnpOvNSbiI5AwVhqBNj0jPgBWEvhyCu0sLjN2q77Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@algolia/abtesting": "1.14.1",
        "@algolia/client-abtesting": "5.48.1",
        "@algolia/client-analytics": "5.48.1",
        "@algolia/client-common": "5.48.1",
        "@algolia/client-insights": "5.48.1",
        "@algolia/client-personalization": "5.48.1",
        "@algolia/client-query-suggestions": "5.48.1",
        "@algolia/client-search": "5.48.1",
        "@algolia/ingestion": "1.48.1",
        "@algolia/monitoring": "1.48.1",
        "@algolia/recommend": "5.48.1",
        "@algolia/requester-browser-xhr": "5.48.1",
        "@algolia/requester-fetch": "5.48.1",
        "@algolia/requester-node-http": "5.48.1"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-7.3.0.tgz",
      "integrity": "sha512-BvU8nYgGQBxcmMuEeUEmNTvrMVjJNSH7RgW24vXexN4Ven6qCvy4TntnvlnwnMLTVlcRQQdbRY8NKnaIoeWDNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "environment": "^1.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.5.0.tgz",
      "integrity": "sha512-FMhOoZV4+qR6aTUALKX2rEqGG+oyATvwBt9IIzVR5rMa2HRWPkxf+P+PAJLD1I/H5/II+HuZcBJYEFBpq39ong==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.2",
        "caniuse-lite": "^1.0.30001787",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/aws-amplify": {
      "version": "6.16.4",
      "resolved": "https://registry.npmjs.org/aws-amplify/-/aws-amplify-6.16.4.tgz",
      "integrity": "sha512-BeeLmYMz+J9BLsKHOW/iMrewyG9GwlkmIyqYRcfByo6RHNOz5BFgKn+ASo0RtbMX+duBK1llNWcjfdTbGMcTBw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@aws-amplify/analytics": "7.0.94",
        "@aws-amplify/api": "6.3.25",
        "@aws-amplify/auth": "6.19.1",
        "@aws-amplify/core": "6.16.2",
        "@aws-amplify/datastore": "5.1.6",
        "@aws-amplify/notifications": "2.0.94",
        "@aws-amplify/storage": "6.14.0",
        "tslib": "^2.5.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.25",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.25.tgz",
      "integrity": "sha512-QO/VHsXCQdnzADMfmkeOPvHdIAkoB7i0/rGjINPJEetLx75hNttVWGQ/jycHUDP9zZ9rupbm60WRxcwViB0MiA==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/beasties": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/beasties/-/beasties-0.4.1.tgz",
      "integrity": "sha512-2Imdcw3LznDuxAbJM26RHniOLAzE6WgrK8OuvVXCQtNBS8rsnD9zsSEa3fHl4hHpUY7BYTlrpvtPVbvu9G6neg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "css-select": "^6.0.0",
        "css-what": "^7.0.0",
        "dom-serializer": "^2.0.0",
        "domhandler": "^5.0.3",
        "htmlparser2": "^10.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.49",
        "postcss-media-query-parser": "^0.2.3",
        "postcss-safe-parser": "^7.0.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/bidi-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/bidi-js/-/bidi-js-1.0.3.tgz",
      "integrity": "sha512-RKshQI1R3YQ+n9YJz2QQ147P66ELpa1FQEg20Dk8oW9t2KgLbpDLLp9aGZ7y8WHSshDknG0bknqGw5/tyCs5tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "require-from-string": "^2.0.2"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.2.tgz",
      "integrity": "sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.1",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/bowser": {
      "version": "2.14.1",
      "resolved": "https://registry.npmjs.org/bowser/-/bowser-2.14.1.tgz",
      "integrity": "sha512-tzPjzCxygAKWFOJP011oxFHs57HzIhOEracIgAePE4pqB3LikALKnSzUyU4MGs9/iCEUuHlAJTjTc5M+u7YEGg==",
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.5.tgz",
      "integrity": "sha512-VZznLgtwhn+Mact9tfiwx64fA9erHH/MCXEUfB/0bX/6Fz6ny5EGTXYltMocqg4xFAQZtnO3DHWWXi8RiuN7cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.12",
        "caniuse-lite": "^1.0.30001782",
        "electron-to-chromium": "^1.5.328",
        "node-releases": "^2.0.36",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cacache": {
      "version": "20.0.4",
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-20.0.4.tgz",
      "integrity": "sha512-M3Lab8NPYlZU2exsL3bMVvMrMqgwCnMWfdZbK28bn3pK6APT/Te/I8hjRPNu1uwORY9a1eEQoifXbKPQMfMTOA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@npmcli/fs": "^5.0.0",
        "fs-minipass": "^3.0.0",
        "glob": "^13.0.0",
        "lru-cache": "^11.1.0",
        "minipass": "^7.0.3",
        "minipass-collect": "^2.0.1",
        "minipass-flush": "^1.0.5",
        "minipass-pipeline": "^1.2.4",
        "p-map": "^7.0.2",
        "ssri": "^13.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/cacache/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001791",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001791.tgz",
      "integrity": "sha512-yk0l/YSrOnFZk3UROpDLQD9+kC1l4meK/wed583AXrzoarMGJcbRi2Q4RaUYbKxYAsZ8sWmaSa/DsLmdBeI1vQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chai": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/chai/-/chai-6.2.2.tgz",
      "integrity": "sha512-NUPRluOfOiTKBKvWPtSD4PhFvWCqOi0BGStNWs57X9js7XGTprSmFoz5F0tWhR4WPjNeR9jXqdC7/UpSJTnlRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/chalk": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.6.2.tgz",
      "integrity": "sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chardet": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-2.1.1.tgz",
      "integrity": "sha512-PsezH1rqdV9VvyNhxxOW32/d75r01NY7TQCmOqomRo15ZSOKbpTFVsfjghxo6JloQUCGnH4k1LGu0R4yCLlWQQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/chokidar": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-5.0.0.tgz",
      "integrity": "sha512-TQMmc3w+5AxjpL8iIiwebF73dRDF4fBIieAqGn9RGCWaEVwQ6Fb2cGe31Yns0RRIzii5goJ1Y7xbMwo1TxMplw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^5.0.0"
      },
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/chownr": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-3.0.0.tgz",
      "integrity": "sha512-+IxzY9BZOQd/XuYPRmrvEVjF/nqj5kgT4kEq7VofrDoM1MxoRjEWkrCC3EtLi59TVawxTAn+orJwFQcrqEN1+g==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/cli-cursor": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
      "integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-spinners": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-3.4.0.tgz",
      "integrity": "sha512-bXfOC4QcT1tKXGorxL3wbJm6XJPDqEnij2gQ2m7ESQuE+/z9YFIWnl/5RpTiKWbMq3EVKR4fRLJGn6DVfu0mpw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-truncate": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-5.2.0.tgz",
      "integrity": "sha512-xRwvIOMGrfOAnM1JYtqQImuaNtDEv9v6oIYAs4LIHwTiKee8uwvIi363igssOC0O5U04i4AlENs79LQLu9tEMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "slice-ansi": "^8.0.0",
        "string-width": "^8.2.0"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-width": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-4.1.0.tgz",
      "integrity": "sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/cliui": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-9.0.1.tgz",
      "integrity": "sha512-k7ndgKhwoQveBL+/1tqGJYNz097I7WOvwbmmU2AR5+magtbjPWQTS1C5vzGkBC8Ym8UWRzfKUzUUqFLypY4Q+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cliui/node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
      "integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/crc-32": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
      "integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
      "license": "Apache-2.0",
      "bin": {
        "crc32": "bin/crc32.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-select": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-6.0.0.tgz",
      "integrity": "sha512-rZZVSLle8v0+EY8QAkDWrKhpgt6SA5OtHsgBnsj6ZaLb5dmDVOWUDtQitd9ydxxvEjhewNudS6eTVU7uOyzvXw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^7.0.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.2.2",
        "nth-check": "^2.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/css-tree": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-3.2.1.tgz",
      "integrity": "sha512-X7sjQzceUhu1u7Y/ylrRZFU2FS6LRiFVp6rKLPg23y3x3c3DOKAwuXGDp+PAGjh6CSnCjYeAul8pcT8bAl+lSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mdn-data": "2.27.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/css-what": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-7.0.0.tgz",
      "integrity": "sha512-wD5oz5xibMOPHzy13CyGmogB3phdvcDaB5t0W/Nr5Z2O/agcB8YwOz6e2Lsp10pNDzBoDO9nVa3RGs/2BttpHQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cssstyle": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-6.2.0.tgz",
      "integrity": "sha512-Fm5NvhYathRnXNVndkUsCCuR63DCLVVwGOOwQw782coXFi5HhkXdu289l59HlXZBawsyNccXfWRYvLzcDCdDig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/css-color": "^5.0.1",
        "@csstools/css-syntax-patches-for-csstree": "^1.0.28",
        "css-tree": "^3.1.0",
        "lru-cache": "^11.2.6"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/cssstyle/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/data-urls": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-7.0.0.tgz",
      "integrity": "sha512-23XHcCF+coGYevirZceTVD7NdJOqVn+49IHyxgszm+JIiHLoB2TkmPtsYkNWT1pvRSGkc35L6NHs0yHkN2SumA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/dom-serializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
      "integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.2",
        "entities": "^4.2.0"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
      }
    },
    "node_modules/domelementtype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
      "integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "BSD-2-Clause"
    },
    "node_modules/domhandler": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
      "integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "domelementtype": "^2.3.0"
      },
      "engines": {
        "node": ">= 4"
      },
      "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
      }
    },
    "node_modules/domutils": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-3.2.2.tgz",
      "integrity": "sha512-6kZKyUajlDuqlHKVX1w7gyslj9MPIXzIFiz/rGu35uC1wMi+kMhQwGhl4lt9unC9Vb9INnY9Z3/ZA3+FhASLaw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "dom-serializer": "^2.0.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/fb55/domutils?sponsor=1"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.349",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.349.tgz",
      "integrity": "sha512-QsWVGyRuY07Aqb234QytTfwd5d9AJlfNIQ5wIOl1L+PZDzI9d9+Fn0FRale/QYlFxt/bUnB0/nLd1jFPGxGK1A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/env-paths": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/environment": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/environment/-/environment-1.1.0.tgz",
      "integrity": "sha512-xUtoPkMggbz0MPyPiIWr1Kp4aeWJjDZ6SMvURhimjdZgsRuDplF5/s9hcgGhyXMhs+6vpnuoiZ2kFiu3FMnS8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/err-code": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
      "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.1.0.tgz",
      "integrity": "sha512-n27zTYMjYu1aj4MjCWzSP7G9r75utsaoc8m61weK+W8JMBGGQybd43GstCXZ3WNmSFtGT9wi59qQTW6mhTR5LQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.3.tgz",
      "integrity": "sha512-8VwMnyGCONIs6cWue2IdpHxHnAjzxnw2Zr7MkVxB2vjmQ2ivqGFb4LEG3SMnv0Gb2F/G/2yA8zUaiL1gywDCCg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.3",
        "@esbuild/android-arm": "0.27.3",
        "@esbuild/android-arm64": "0.27.3",
        "@esbuild/android-x64": "0.27.3",
        "@esbuild/darwin-arm64": "0.27.3",
        "@esbuild/darwin-x64": "0.27.3",
        "@esbuild/freebsd-arm64": "0.27.3",
        "@esbuild/freebsd-x64": "0.27.3",
        "@esbuild/linux-arm": "0.27.3",
        "@esbuild/linux-arm64": "0.27.3",
        "@esbuild/linux-ia32": "0.27.3",
        "@esbuild/linux-loong64": "0.27.3",
        "@esbuild/linux-mips64el": "0.27.3",
        "@esbuild/linux-ppc64": "0.27.3",
        "@esbuild/linux-riscv64": "0.27.3",
        "@esbuild/linux-s390x": "0.27.3",
        "@esbuild/linux-x64": "0.27.3",
        "@esbuild/netbsd-arm64": "0.27.3",
        "@esbuild/netbsd-x64": "0.27.3",
        "@esbuild/openbsd-arm64": "0.27.3",
        "@esbuild/openbsd-x64": "0.27.3",
        "@esbuild/openharmony-arm64": "0.27.3",
        "@esbuild/sunos-x64": "0.27.3",
        "@esbuild/win32-arm64": "0.27.3",
        "@esbuild/win32-ia32": "0.27.3",
        "@esbuild/win32-x64": "0.27.3"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.4.tgz",
      "integrity": "sha512-mlsTRyGaPBjPedk6Bvw+aqbsXDtoAyAzm5MO7JgU+yVRyMQ5O8bD4Kcci7BS85f93veegeCPkL8R4GLClnjLFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/eventsource": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-3.0.7.tgz",
      "integrity": "sha512-CRT1WTyuQoD771GW56XEZFQ/ZoSfWid1alKGDYMmkt2yl8UXrVR4pspqWNEcqKvVIzg6PAltWjxcSSPrboA4iA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eventsource-parser": "^3.0.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/eventsource-parser": {
      "version": "3.0.8",
      "resolved": "https://registry.npmjs.org/eventsource-parser/-/eventsource-parser-3.0.8.tgz",
      "integrity": "sha512-70QWGkr4snxr0OXLRWsFLeRBIRPuQOvt4s8QYjmUlmlkyTZkRqS7EDVRZtzU3TiyDbXSzaOeF0XUKy8PchzukQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/expect-type": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.3.0.tgz",
      "integrity": "sha512-knvyeauYhqjOYvQ66MznSMs83wmHrCycNEN6Ao+2AeYEfxUIkuiVxdEa1qlGEPK+We3n0THiDciYSsCcgW/DoA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/exponential-backoff": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/exponential-backoff/-/exponential-backoff-3.1.3.tgz",
      "integrity": "sha512-ZgEeZXj30q+I0EN+CbSSpIyPaJ5HVQD18Z1m+u1FXbAeT94mr1zw50q4q6jiiC447Nl/YTcIYSAftiGqetwXCA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/express-rate-limit": {
      "version": "8.4.1",
      "resolved": "https://registry.npmjs.org/express-rate-limit/-/express-rate-limit-8.4.1.tgz",
      "integrity": "sha512-NGVYwQSAyEQgzxX1iCM978PP9AdO/hW93gMcF6ZwQCm+rFvLsBH6w4xcXWTcliS8La5EPRN3p9wzItqBwJrfNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ip-address": "10.1.0"
      },
      "engines": {
        "node": ">= 16"
      },
      "funding": {
        "url": "https://github.com/sponsors/express-rate-limit"
      },
      "peerDependencies": {
        "express": ">= 4.11"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-uri": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.1.0.tgz",
      "integrity": "sha512-iPeeDKJSWf4IEOasVVrknXpaBV0IApz/gp7S2bb7Z4Lljbl2MGJRqInZiUrQwV16cpzw/D3S5j5Julj/gT52AA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fast-xml-builder": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/fast-xml-builder/-/fast-xml-builder-1.1.5.tgz",
      "integrity": "sha512-4TJn/8FKLeslLAH3dnohXqE3QSoxkhvaMzepOIZytwJXZO69Bfz0HBdDHzOTOon6G59Zrk6VQ2bEiv1t61rfkA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "path-expression-matcher": "^1.1.3"
      }
    },
    "node_modules/fast-xml-parser": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/fast-xml-parser/-/fast-xml-parser-5.7.2.tgz",
      "integrity": "sha512-P7oW7tLbYnhOLQk/Gv7cZgzgMPP/XN03K02/Jy6Y/NHzyIAIpxuZIM/YqAkfiXFPxA2CTm7NtCijK9EDu09u2w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@nodable/entities": "^2.1.0",
        "fast-xml-builder": "^1.1.5",
        "path-expression-matcher": "^1.5.0",
        "strnum": "^2.2.3"
      },
      "bin": {
        "fxparser": "src/cli/cli.js"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fs-minipass": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-3.0.3.tgz",
      "integrity": "sha512-XUBA9XClHbnJWSfBzjkm6RvPsyg3sryZt06BEQoXcF7EK/xpGaQYJgQKDJSUH5SGZ76Y7pFx1QBnXz09rU5Fbw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.3"
      },
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.5.0.tgz",
      "integrity": "sha512-CQ+bEO+Tva/qlmw24dCejulK5pMzVnUOFOijVogd3KQs07HnRIgp8TGipvCCRT06xeYEbpbgwaCxglFyiuIcmA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob": {
      "version": "13.0.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-13.0.6.tgz",
      "integrity": "sha512-Wjlyrolmm8uDpm/ogGyXZXb1Z+Ca2B8NbJwqBVg0axK9GbBeoS7yGV6vjXnYdGm6X53iehEuxxbyiKp8QmN4Vw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "minimatch": "^10.2.2",
        "minipass": "^7.1.3",
        "path-scurry": "^2.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/graphql": {
      "version": "15.8.0",
      "resolved": "https://registry.npmjs.org/graphql/-/graphql-15.8.0.tgz",
      "integrity": "sha512-5gghUc24tP9HRznNpV2+FIoq3xKkj5dTQqf4v0CpdPbFVwFkWoxOM+o+2OC9ZSvjEMTjfmG9QT+gcvggTwW1zw==",
      "license": "MIT",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hono": {
      "version": "4.12.16",
      "resolved": "https://registry.npmjs.org/hono/-/hono-4.12.16.tgz",
      "integrity": "sha512-jN0ZewiNAWSe5khM3EyCmBb250+b40wWbwNILNfEvq84VREWwOIkuUsFONk/3i3nqkz7Oe1PcpM2mwQEK2L9Kg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16.9.0"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-9.0.3.tgz",
      "integrity": "sha512-Hc+ghLoSt6QaYZUv0WBiIvmMDZuZZ7oaDvdH8MbfOO4lOsxdXLEvuC6ePoGs9H1X9oCLyq6+NVN0MKqD+ydxyg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "lru-cache": "^11.1.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/hosted-git-info/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/html-encoding-sniffer": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-6.0.0.tgz",
      "integrity": "sha512-CV9TW3Y3f8/wT0BRFc1/KAVQ3TUHiXmaAb6VW9vtiMFf7SLoMd1PdAc4W3KFOFETBJUb90KatHqlsZMWV+R9Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.6.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/htmlparser2": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-10.1.0.tgz",
      "integrity": "sha512-VTZkM9GWRAtEpveh7MSF6SjjrpNVNNVJfFup7xTY3UpFtm67foy9HDVXneLtFVt4pMz5kZtgNcvCniNFb1hlEQ==",
      "dev": true,
      "funding": [
        "https://github.com/fb55/htmlparser2?sponsor=1",
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.2.2",
        "entities": "^7.0.1"
      }
    },
    "node_modules/htmlparser2/node_modules/entities": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-7.0.1.tgz",
      "integrity": "sha512-TWrgLOFUQTH994YUyl1yT4uyavY5nNB5muff+RtWaqNVCAK408b5ZnnbNAUEWLTCpum9w6arT70i1XdQ4UeOPA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.2.0.tgz",
      "integrity": "sha512-dTxcvPXqPvXBQpq5dUr6mEMJX4oIEFv6bwom3FDwKRDsuIjjJGANqhBuoAn9c1RQJIdAKav33ED65E2ys+87QQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/idb": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/idb/-/idb-5.0.6.tgz",
      "integrity": "sha512-/PFvOWPzRcEPmlDt5jEvzVZVs0wyd/EvGvkDIcbBpGuMMLQKrTPG0TxvE2UJtgZtCQCmOtM2QD7yQJBVEjKGOw==",
      "license": "ISC"
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/ignore-walk": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-8.0.0.tgz",
      "integrity": "sha512-FCeMZT4NiRQGh+YkeKMtWrOmBgWjHjMJ26WQWrRQyoyzqevdaGSakUaJW5xQYmjLlUVk2qUnCjYVBax9EKKg8A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minimatch": "^10.0.3"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/immer": {
      "version": "9.0.6",
      "resolved": "https://registry.npmjs.org/immer/-/immer-9.0.6.tgz",
      "integrity": "sha512-G95ivKpy+EvVAnAab4fVa4YGYn24J1SpEktnJX7JJ45Bd7xqME/SCplFzYFmTbrkwZbQ4xJK1xMTUYBkN6pWsQ==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/immutable": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/immutable/-/immutable-5.1.5.tgz",
      "integrity": "sha512-t7xcm2siw+hlUM68I+UEOK+z84RzmN59as9DZ7P1l0994DKUWV7UXBMQZVxaoMSRQ+PBZbHCOoBt7a2wxOMt+A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/ini/-/ini-6.0.0.tgz",
      "integrity": "sha512-IBTdIkzZNOpqm7q3dRqJvMaldXjDHWkEDfrwGEQTs5eaQMWV+djAhR+wahyNNMAa+qpbDUhBMVt4ZKNwpPm7xQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/ip-address": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/ip-address/-/ip-address-10.1.0.tgz",
      "integrity": "sha512-XXADHxXmvT9+CRxhXg56LJovE+bmWnEWB78LB83VZTprKTmaC5QfruXocxzTZ2Kl0DNwKuBdlIhjL8LeY8Sf8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-5.1.0.tgz",
      "integrity": "sha512-5XHYaSyiqADb4RnZ1Bdad6cPp8Toise4TzEjcOYDHZkTCbKgiUl7WTUCpNWHuxmDt91wnsZBc9xinNzopv3JMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-east-asian-width": "^1.3.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-interactive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-2.0.0.tgz",
      "integrity": "sha512-qP1vozQRI+BMOPcjFzrjXuQvdak2pHNUMZoeG2eRbiSqyvbEf/wQtEOTOX1guk6E3t36RkaqiSt8A/6YElNxLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-unicode-supported": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-2.1.0.tgz",
      "integrity": "sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
      "integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-6.0.3.tgz",
      "integrity": "sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/core": "^7.23.9",
        "@babel/parser": "^7.23.9",
        "@istanbuljs/schema": "^0.1.3",
        "istanbul-lib-coverage": "^3.2.0",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/jose": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/jose/-/jose-6.2.3.tgz",
      "integrity": "sha512-YYVDInQKFJfR/xa3ojUTl8c2KoTwiL1R5Wg9YCydwH0x0B9grbzlg5HC7mMjCtUJjbQ/YnGEZIhI5tCgfTb4Hw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/js-cookie": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/js-cookie/-/js-cookie-3.0.5.tgz",
      "integrity": "sha512-cEiJEAEoIbWfCZYKWhVwFuvPX1gETRYPw6LlaTKoxD3s2AkXzkCjnp6h0V77ozyqj0jakteJ4YqDJT830+lVGw==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsdom": {
      "version": "28.1.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-28.1.0.tgz",
      "integrity": "sha512-0+MoQNYyr2rBHqO1xilltfDjV9G7ymYGlAUazgcDLQaUf8JDHbuGwsxN6U9qWaElZ4w1B2r7yEGIL3GdeW3Rug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@acemir/cssom": "^0.9.31",
        "@asamuzakjp/dom-selector": "^6.8.1",
        "@bramus/specificity": "^2.4.2",
        "@exodus/bytes": "^1.11.0",
        "cssstyle": "^6.0.1",
        "data-urls": "^7.0.0",
        "decimal.js": "^10.6.0",
        "html-encoding-sniffer": "^6.0.0",
        "http-proxy-agent": "^7.0.2",
        "https-proxy-agent": "^7.0.6",
        "is-potential-custom-element-name": "^1.0.1",
        "parse5": "^8.0.0",
        "saxes": "^6.0.0",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^6.0.0",
        "undici": "^7.21.0",
        "w3c-xmlserializer": "^5.0.0",
        "webidl-conversions": "^8.0.1",
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.0",
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "canvas": "^3.0.0"
      },
      "peerDependenciesMeta": {
        "canvas": {
          "optional": true
        }
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-5.0.0.tgz",
      "integrity": "sha512-ZF1nxZ28VhQouRWhUcVlUIN3qwSgPuswK05s/HIaoetAoE/9tngVmCHjSxmSQPav1nd+lPtTL0YZ/2AFdR/iYQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-typed": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/json-schema-typed/-/json-schema-typed-8.0.2.tgz",
      "integrity": "sha512-fQhoXdcvc3V28x7C7BMs4P5+kNlgUURe2jmUT1T//oBRMDrqy1QPelJimwZGo7Hg9VPV3EQV5Bnq4hbFy2vetA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonc-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
      "integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonparse": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
      "integrity": "sha512-POQXvpdL69+CluYsillJ7SUhKvytYjW9vG/GKpnf+xP8UWgYEM/RaMzHHofbALDiKbbP1W8UEYmgGl39WkPZsg==",
      "dev": true,
      "engines": [
        "node >= 0.2.0"
      ],
      "license": "MIT"
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/listr2": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/listr2/-/listr2-9.0.5.tgz",
      "integrity": "sha512-ME4Fb83LgEgwNw96RKNvKV4VTLuXfoKudAmm2lP8Kk87KaMK0/Xrx/aAkMWmT8mDb+3MlFDspfbCs7adjRxA2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cli-truncate": "^5.0.0",
        "colorette": "^2.0.20",
        "eventemitter3": "^5.0.1",
        "log-update": "^6.1.0",
        "rfdc": "^1.4.1",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/listr2/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/listr2/node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/lmdb": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/lmdb/-/lmdb-3.5.1.tgz",
      "integrity": "sha512-NYHA0MRPjvNX+vSw8Xxg6FLKxzAG+e7Pt8RqAQA/EehzHVXq9SxDqJIN3JL1hK0dweb884y8kIh6rkWvPyg9Wg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@harperfast/extended-iterable": "^1.0.3",
        "msgpackr": "^1.11.2",
        "node-addon-api": "^6.1.0",
        "node-gyp-build-optional-packages": "5.2.2",
        "ordered-binary": "^1.5.3",
        "weak-lru-cache": "^1.2.2"
      },
      "bin": {
        "download-lmdb-prebuilds": "bin/download-prebuilds.js"
      },
      "optionalDependencies": {
        "@lmdb/lmdb-darwin-arm64": "3.5.1",
        "@lmdb/lmdb-darwin-x64": "3.5.1",
        "@lmdb/lmdb-linux-arm": "3.5.1",
        "@lmdb/lmdb-linux-arm64": "3.5.1",
        "@lmdb/lmdb-linux-x64": "3.5.1",
        "@lmdb/lmdb-win32-arm64": "3.5.1",
        "@lmdb/lmdb-win32-x64": "3.5.1"
      }
    },
    "node_modules/lodash": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.18.1.tgz",
      "integrity": "sha512-dMInicTPVE8d1e5otfwmmjlxkZoUpiVLwyeTdUsi/Caj/gfzzblBcCE5sRHV/AsjuCmxWrte2TNGSYuCeCq+0Q==",
      "license": "MIT"
    },
    "node_modules/log-symbols": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-7.0.1.tgz",
      "integrity": "sha512-ja1E3yCr9i/0hmBVaM0bfwDjnGy8I/s6PP4DFp+yP+a+mrHO4Rm7DtmnqROTUkHIkqffC84YY7AeqX6oFk0WFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-unicode-supported": "^2.0.0",
        "yoctocolors": "^2.1.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-update": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/log-update/-/log-update-6.1.0.tgz",
      "integrity": "sha512-9ie8ItPR6tjY5uYJh8K/Zrv/RMZ5VOlOWvtZdEHYSTFKZfIBPQa9tOAEeAWhd+AnIneLJ22w5fjOYtoutpWq5w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-escapes": "^7.0.0",
        "cli-cursor": "^5.0.0",
        "slice-ansi": "^7.1.0",
        "strip-ansi": "^7.1.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-update/node_modules/slice-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-7.1.2.tgz",
      "integrity": "sha512-iOBWFgUX7caIZiuutICxVgX1SdxwAVFFKwt1EvMYYec/NWO5meOJ6K5uQxhrYBdQJne4KxiqZc+KptFOWFSI9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "is-fullwidth-code-point": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/slice-ansi?sponsor=1"
      }
    },
    "node_modules/log-update/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-update/node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/make-fetch-happen": {
      "version": "15.0.5",
      "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-15.0.5.tgz",
      "integrity": "sha512-uCbIa8jWWmQZt4dSnEStkVC6gdakiinAm4PiGsywIkguF0eWMdcjDz0ECYhUolFU3pFLOev9VNPCEygydXnddg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@gar/promise-retry": "^1.0.0",
        "@npmcli/agent": "^4.0.0",
        "@npmcli/redact": "^4.0.0",
        "cacache": "^20.0.1",
        "http-cache-semantics": "^4.1.1",
        "minipass": "^7.0.2",
        "minipass-fetch": "^5.0.0",
        "minipass-flush": "^1.0.5",
        "minipass-pipeline": "^1.2.4",
        "negotiator": "^1.0.0",
        "proc-log": "^6.0.0",
        "ssri": "^13.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.27.1",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.27.1.tgz",
      "integrity": "sha512-9Yubnt3e8A0OKwxYSXyhLymGW4sCufcLG6VdiDdUGVkPhpqLxlvP5vl1983gQjJl3tqbrM731mjaZaP68AgosQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/mimic-function": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
      "integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minipass-collect": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-2.0.1.tgz",
      "integrity": "sha512-D7V8PO9oaz7PWGLbCACuI1qEOsq7UKfLotx/C0Aet43fCUB/wfQ7DYeq2oR/svFJGYDHPr38SHATeaj/ZoKHKw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.3"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minipass-fetch": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-5.0.2.tgz",
      "integrity": "sha512-2d0q2a8eCi2IRg/IGubCNRJoYbA1+YPXAzQVRFmB45gdGZafyivnZ5YSEfo3JikbjGxOdntGFvBQGqaSMXlAFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minipass": "^7.0.3",
        "minipass-sized": "^2.0.0",
        "minizlib": "^3.0.1"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      },
      "optionalDependencies": {
        "iconv-lite": "^0.7.2"
      }
    },
    "node_modules/minipass-flush": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.7.tgz",
      "integrity": "sha512-TbqTz9cUwWyHS2Dy89P3ocAGUGxKjjLuR9z8w4WUTGAVgEj17/4nhgo2Du56i0Fm3Pm30g4iA8Lcqctc76jCzA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minipass-flush/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-flush/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/minipass-pipeline": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
      "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-pipeline/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-pipeline/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/minipass-sized": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-2.0.0.tgz",
      "integrity": "sha512-zSsHhto5BcUVM2m1LurnXY6M//cGhVaegT71OfOXoprxT6o780GZd792ea6FfrQkuU4usHZIUczAQMRUE2plzA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minizlib": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.1.0.tgz",
      "integrity": "sha512-KZxYo1BUkWD2TVFLr0MQoM8vUUigWD3LlD83a/75BqC+4qE0Hb1Vo5v1FgcfaNXvfXzr+5EhQ6ing/CaBijTlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/mrmime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.1.tgz",
      "integrity": "sha512-Y3wQdFg2Va6etvQ5I82yUhGdsKrcYox6p7FfL1LbK2J4V01F9TGlepTIhnK24t7koZibmg82KGglhA1XK5IsLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/msgpackr": {
      "version": "1.11.12",
      "resolved": "https://registry.npmjs.org/msgpackr/-/msgpackr-1.11.12.tgz",
      "integrity": "sha512-RBdJ1Un7yGlXWajrkxcSa93nvQ0w4zBf60c0yYv7YtBelP8H2FA7XsfBbMHtXKXUMUxH7zV3Zuozh+kUQWhHvg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "optionalDependencies": {
        "msgpackr-extract": "^3.0.2"
      }
    },
    "node_modules/msgpackr-extract": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/msgpackr-extract/-/msgpackr-extract-3.0.3.tgz",
      "integrity": "sha512-P0efT1C9jIdVRefqjzOQ9Xml57zpOXnIuS+csaB4MdZbTdmGDLo8XhzBG1N7aO11gKDDkJvBLULeFTo46wwreA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "node-gyp-build-optional-packages": "5.2.2"
      },
      "bin": {
        "download-msgpackr-prebuilds": "bin/download-prebuilds.js"
      },
      "optionalDependencies": {
        "@msgpackr-extract/msgpackr-extract-darwin-arm64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-darwin-x64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-arm": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-arm64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-x64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-win32-x64": "3.0.3"
      }
    },
    "node_modules/mute-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-2.0.0.tgz",
      "integrity": "sha512-WWdIxpyjEn+FhQJQQv9aQAYlHoNVdzIzUySNV1gHUPDSdZJ3yZn7pAAbQcV7B56Mvu881q9FZV+0Vx2xC44VWA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.12",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.12.tgz",
      "integrity": "sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-addon-api": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-6.1.0.tgz",
      "integrity": "sha512-+eawOlIgy680F0kBzPUNFhMZGtJ1YmqM6l4+Crf4IkImjYrO/mqPwRMh352g23uIaQKFItcQ64I7KMaJxHgAVA==",
      "dev": true,
      "license": "MIT",
      "optional": true
    },
    "node_modules/node-gyp": {
      "version": "12.3.0",
      "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-12.3.0.tgz",
      "integrity": "sha512-QNcUWM+HgJplcPzBvFBZ9VXacyGZ4+VTOb80PwWR+TlVzoHbRKULNEzpRsnaoxG3Wzr7Qh7BYxGDU3CbKib2Yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "env-paths": "^2.2.0",
        "exponential-backoff": "^3.1.1",
        "graceful-fs": "^4.2.6",
        "nopt": "^9.0.0",
        "proc-log": "^6.0.0",
        "semver": "^7.3.5",
        "tar": "^7.5.4",
        "tinyglobby": "^0.2.12",
        "undici": "^6.25.0",
        "which": "^6.0.0"
      },
      "bin": {
        "node-gyp": "bin/node-gyp.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/node-gyp-build-optional-packages": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/node-gyp-build-optional-packages/-/node-gyp-build-optional-packages-5.2.2.tgz",
      "integrity": "sha512-s+w+rBWnpTMwSFbaE0UXsRlg7hU4FjekKU4eyAih5T8nJuNZT1nNsskXpxmeqSK9UzkBl6UgRlnKc8hz8IEqOw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "detect-libc": "^2.0.1"
      },
      "bin": {
        "node-gyp-build-optional-packages": "bin.js",
        "node-gyp-build-optional-packages-optional": "optional.js",
        "node-gyp-build-optional-packages-test": "build-test.js"
      }
    },
    "node_modules/node-gyp/node_modules/isexe": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-4.0.0.tgz",
      "integrity": "sha512-FFUtZMpoZ8RqHS3XeXEmHWLA4thH+ZxCv2lOiPIn1Xc7CxrqhWzNSDzD+/chS/zbYezmiwWLdQC09JdQKmthOw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/node-gyp/node_modules/undici": {
      "version": "6.25.0",
      "resolved": "https://registry.npmjs.org/undici/-/undici-6.25.0.tgz",
      "integrity": "sha512-ZgpWDC5gmNiuY9CnLVXEH8rl50xhRCuLNA97fAUnKi8RRuV4E6KG31pDTsLVUKnohJE0I3XDrTeEydAXRw47xg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.17"
      }
    },
    "node_modules/node-gyp/node_modules/which": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/which/-/which-6.0.1.tgz",
      "integrity": "sha512-oGLe46MIrCRqX7ytPUf66EAYvdeMIZYn3WaocqqKZAxrBpkqHfL/qvTyJ/bTk5+AqHCjXmrv3CEWgy368zhRUg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^4.0.0"
      },
      "bin": {
        "node-which": "bin/which.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.38",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.38.tgz",
      "integrity": "sha512-3qT/88Y3FbH/Kx4szpQQ4HzUbVrHPKTLVpVocKiLfoYvw9XSGOX2FmD2d6DrXbVYyAQTF2HeF6My8jmzx7/CRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nopt": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-9.0.0.tgz",
      "integrity": "sha512-Zhq3a+yFKrYwSBluL4H9XP3m3y5uvQkB/09CwDruCiRmR/UJYnn9W4R48ry0uGC70aeTPKLynBtscP9efFFcPw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "abbrev": "^4.0.0"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-bundled": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-5.0.0.tgz",
      "integrity": "sha512-JLSpbzh6UUXIEoqPsYBvVNVmyrjVZ1fzEFbqxKkTJQkWBO3xFzFT+KDnSKQWwOQNbuWRwt5LSD6HOTLGIWzfrw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "npm-normalize-package-bin": "^5.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-install-checks": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-8.0.0.tgz",
      "integrity": "sha512-ScAUdMpyzkbpxoNekQ3tNRdFI8SJ86wgKZSQZdUxT+bj0wVFpsEMWnkXP0twVe1gJyNF5apBWDJhhIbgrIViRA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "semver": "^7.1.1"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-normalize-package-bin": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-5.0.0.tgz",
      "integrity": "sha512-CJi3OS4JLsNMmr2u07OJlhcrPxCeOeP/4xq67aWNai6TNWWbTrlNDgl8NcFKVlcBKp18GPj+EzbNIgrBfZhsag==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-package-arg": {
      "version": "13.0.2",
      "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-13.0.2.tgz",
      "integrity": "sha512-IciCE3SY3uE84Ld8WZU23gAPPV9rIYod4F+rc+vJ7h7cwAJt9Vk6TVsK60ry7Uj3SRS3bqRRIGuTp9YVlk6WNA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "hosted-git-info": "^9.0.0",
        "proc-log": "^6.0.0",
        "semver": "^7.3.5",
        "validate-npm-package-name": "^7.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-packlist": {
      "version": "10.0.4",
      "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-10.0.4.tgz",
      "integrity": "sha512-uMW73iajD8hiH4ZBxEV3HC+eTnppIqwakjOYuvgddnalIw2lJguKviK1pcUJDlIWm1wSJkchpDZDSVVsZEYRng==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "ignore-walk": "^8.0.0",
        "proc-log": "^6.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-pick-manifest": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-11.0.3.tgz",
      "integrity": "sha512-buzyCfeoGY/PxKqmBqn1IUJrZnUi1VVJTdSSRPGI60tJdUhUoSQFhs0zycJokDdOznQentgrpf8LayEHyyYlqQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "npm-install-checks": "^8.0.0",
        "npm-normalize-package-bin": "^5.0.0",
        "npm-package-arg": "^13.0.0",
        "semver": "^7.3.5"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/npm-registry-fetch": {
      "version": "19.1.1",
      "resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-19.1.1.tgz",
      "integrity": "sha512-TakBap6OM1w0H73VZVDf44iFXsOS3h+L4wVMXmbWOQroZgFhMch0juN6XSzBNlD965yIKvWg2dfu7NSiaYLxtw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@npmcli/redact": "^4.0.0",
        "jsonparse": "^1.3.1",
        "make-fetch-happen": "^15.0.0",
        "minipass": "^7.0.2",
        "minipass-fetch": "^5.0.0",
        "minizlib": "^3.0.1",
        "npm-package-arg": "^13.0.0",
        "proc-log": "^6.0.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/obug": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/obug/-/obug-2.1.1.tgz",
      "integrity": "sha512-uTqF9MuPraAQ+IsnPf366RG4cP9RtUi7MLO1N3KEc+wb0a6yKpeL0lmk2IB1jY5KHPAlTc6T/JRdC/YqxHNwkQ==",
      "dev": true,
      "funding": [
        "https://github.com/sponsors/sxzz",
        "https://opencollective.com/debug"
      ],
      "license": "MIT"
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
      "integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-function": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ora": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-9.3.0.tgz",
      "integrity": "sha512-lBX72MWFduWEf7v7uWf5DHp9Jn5BI8bNPGuFgtXMmr2uDz2Gz2749y3am3agSDdkhHPHYmmxEGSKH85ZLGzgXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.6.2",
        "cli-cursor": "^5.0.0",
        "cli-spinners": "^3.2.0",
        "is-interactive": "^2.0.0",
        "is-unicode-supported": "^2.1.0",
        "log-symbols": "^7.0.1",
        "stdin-discarder": "^0.3.1",
        "string-width": "^8.1.0"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ordered-binary": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/ordered-binary/-/ordered-binary-1.6.1.tgz",
      "integrity": "sha512-QkCdPooczexPLiXIrbVOPYkR3VO3T6v2OyKRkR1Xbhpy7/LAVXwahnRCgRp78Oe/Ehf0C/HATAxfSr6eA1oX+w==",
      "dev": true,
      "license": "MIT",
      "optional": true
    },
    "node_modules/p-map": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-7.0.4.tgz",
      "integrity": "sha512-tkAQEw8ysMzmkhgw8k+1U/iPhWNhykKnSk4Rd5zLoPJCuJaGRPo6YposrZgaxHKzDHdDWWZvE/Sk7hsL2X/CpQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pacote": {
      "version": "21.3.1",
      "resolved": "https://registry.npmjs.org/pacote/-/pacote-21.3.1.tgz",
      "integrity": "sha512-O0EDXi85LF4AzdjG74GUwEArhdvawi/YOHcsW6IijKNj7wm8IvEWNF5GnfuxNpQ/ZpO3L37+v8hqdVh8GgWYhg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@npmcli/git": "^7.0.0",
        "@npmcli/installed-package-contents": "^4.0.0",
        "@npmcli/package-json": "^7.0.0",
        "@npmcli/promise-spawn": "^9.0.0",
        "@npmcli/run-script": "^10.0.0",
        "cacache": "^20.0.0",
        "fs-minipass": "^3.0.0",
        "minipass": "^7.0.2",
        "npm-package-arg": "^13.0.0",
        "npm-packlist": "^10.0.1",
        "npm-pick-manifest": "^11.0.1",
        "npm-registry-fetch": "^19.0.0",
        "proc-log": "^6.0.0",
        "promise-retry": "^2.0.1",
        "sigstore": "^4.0.0",
        "ssri": "^13.0.0",
        "tar": "^7.4.3"
      },
      "bin": {
        "pacote": "bin/index.js"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/parse5": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-8.0.1.tgz",
      "integrity": "sha512-z1e/HMG90obSGeidlli3hj7cbocou0/wa5HacvI3ASx34PecNjNQeaHNo5WIZpWofN9kgkqV1q5YvXe3F0FoPw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "entities": "^8.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5-html-rewriting-stream": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/parse5-html-rewriting-stream/-/parse5-html-rewriting-stream-8.0.0.tgz",
      "integrity": "sha512-wzh11mj8KKkno1pZEu+l2EVeWsuKDfR5KNWZOTsslfUX8lPDZx77m9T0kIoAVkFtD1nx6YF8oh4BnPHvxMtNMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "entities": "^6.0.0",
        "parse5": "^8.0.0",
        "parse5-sax-parser": "^8.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5-html-rewriting-stream/node_modules/entities": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-6.0.1.tgz",
      "integrity": "sha512-aN97NXWF6AWBTahfVOIrB/NShkzi5H7F9r1s9mD3cDj4Ko5f2qhhVoYMibXF7GlLveb/D2ioWay8lxI97Ven3g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/parse5-sax-parser": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/parse5-sax-parser/-/parse5-sax-parser-8.0.0.tgz",
      "integrity": "sha512-/dQ8UzHZwnrzs3EvDj6IkKrD/jIZyTlB+8XrHJvcjNgRdmWruNdN9i9RK/JtxakmlUdPwKubKPTCqvbTgzGhrw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parse5": "^8.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5/node_modules/entities": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-8.0.0.tgz",
      "integrity": "sha512-zwfzJecQ/Uej6tusMqwAqU/6KL2XaB2VZ2Jg54Je6ahNBGNH6Ek6g3jjNCF0fG9EWQKGZNddNjU5F1ZQn/sBnA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-expression-matcher": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/path-expression-matcher/-/path-expression-matcher-1.5.0.tgz",
      "integrity": "sha512-cbrerZV+6rvdQrrD+iGMcZFEiiSrbv9Tfdkvnusy6y0x0GKBXREFg/Y65GhIfm0tnLntThhzCnfKwp1WRjeCyQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.2.tgz",
      "integrity": "sha512-3O/iVVsJAPsOnpwWIeD+d6z/7PmqApyQePUtCndjatj/9I5LylHvt5qluFaBT3I5h3r1ejfR056c+FCv+NnNXg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "11.3.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.3.5.tgz",
      "integrity": "sha512-NxVFwLAnrd9i7KUBxC4DrUhmgjzOs+1Qm50D3oF1/oL+r1NpZ4gA7xvG0/zJ8evR7zIKn4vLf7qTNduWFtCrRw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/piscina": {
      "version": "5.1.4",
      "resolved": "https://registry.npmjs.org/piscina/-/piscina-5.1.4.tgz",
      "integrity": "sha512-7uU4ZnKeQq22t9AsmHGD2w4OYQGonwFnTypDypaWi7Qr2EvQIFVtG8J5D/3bE7W123Wdc9+v4CZDu5hJXVCtBg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.x"
      },
      "optionalDependencies": {
        "@napi-rs/nice": "^1.0.4"
      }
    },
    "node_modules/pkce-challenge": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/pkce-challenge/-/pkce-challenge-5.0.1.tgz",
      "integrity": "sha512-wQ0b/W4Fr01qtpHlqSqspcj3EhBvimsdh0KlHhH8HRZnMsEa0ea2fTULOXOS9ccQr3om+GcGRk4e+isrZWV8qQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.13",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.13.tgz",
      "integrity": "sha512-qif0+jGGZoLWdHey3UFHHWP0H7Gbmsk8T5VEqyYFbWqPr1XqvLGBbk/sl8V5exGmcYJklJOhOQq1pV9IcsiFag==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-media-query-parser": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/postcss-media-query-parser/-/postcss-media-query-parser-0.2.3.tgz",
      "integrity": "sha512-3sOlxmbKcSHMjlUXQZKQ06jOswE7oVkXPxmZdoB1r5l0q6gTFTQSHxNxOrCccElbW7dxNytifNEo8qidX2Vsig==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-safe-parser": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/postcss-safe-parser/-/postcss-safe-parser-7.0.1.tgz",
      "integrity": "sha512-0AioNCJZ2DPYz5ABT6bddIqlhgwhpHZ/l65YAYo0BCIn0xiDpsnTHz0gnoTGk0OXZW0JRs+cDwL8u/teRdz+8A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss-safe-parser"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=18.0"
      },
      "peerDependencies": {
        "postcss": "^8.4.31"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prettier": {
      "version": "3.8.3",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.8.3.tgz",
      "integrity": "sha512-7igPTM53cGHMW8xWuVTydi2KO233VFiTNyF5hLJqpilHfmn8C8gPf+PS7dUT64YcXFbiMGZxS9pCSxL/Dxm/Jw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/proc-log": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/proc-log/-/proc-log-6.1.0.tgz",
      "integrity": "sha512-iG+GYldRf2BQ0UDUAd6JQ/RwzaQy6mXmsk/IzlYyal4A4SNFw54MeH4/tLkF4I5WoWG9SQwuqWzS99jaFQHBuQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/promise-retry": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
      "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "err-code": "^2.0.2",
        "retry": "^0.12.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.15.1",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.1.tgz",
      "integrity": "sha512-6YHEFRL9mfgcAvql/XhwTvf5jKcOiiupt2FiJxHkiX1z4j7WL8J/jRHYLluORvc1XxB5rV20KoeK00gVJamspg==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-5.0.0.tgz",
      "integrity": "sha512-9u/XQ1pvrQtYyMpZe7DXKv2p5CNvyVwzUB6uhLAnQwHMSgKMBR62lc7AHljaeteeHXn11XTAaLLUVZYVZyuRBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/reflect-metadata": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.2.2.tgz",
      "integrity": "sha512-urBwgfrvVP/eAyXx4hluJivBKzuEbSQs9rKWCrCkbSxNv8mxPcUZKeuoF3Uy4mJl3Lwprp6yy5/39VWigZ4K6Q==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.12",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.12.tgz",
      "integrity": "sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/restore-cursor": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
      "integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "onetime": "^7.0.0",
        "signal-exit": "^4.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/retry": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
      "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rfdc": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
      "integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/rolldown": {
      "version": "1.0.0-rc.4",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.0-rc.4.tgz",
      "integrity": "sha512-V2tPDUrY3WSevrvU2E41ijZlpF+5PbZu4giH+VpNraaadsJGHa4fR6IFwsocVwEXDoAdIv5qgPPxgrvKAOIPtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.113.0",
        "@rolldown/pluginutils": "1.0.0-rc.4"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.0.0-rc.4",
        "@rolldown/binding-darwin-arm64": "1.0.0-rc.4",
        "@rolldown/binding-darwin-x64": "1.0.0-rc.4",
        "@rolldown/binding-freebsd-x64": "1.0.0-rc.4",
        "@rolldown/binding-linux-arm-gnueabihf": "1.0.0-rc.4",
        "@rolldown/binding-linux-arm64-gnu": "1.0.0-rc.4",
        "@rolldown/binding-linux-arm64-musl": "1.0.0-rc.4",
        "@rolldown/binding-linux-x64-gnu": "1.0.0-rc.4",
        "@rolldown/binding-linux-x64-musl": "1.0.0-rc.4",
        "@rolldown/binding-openharmony-arm64": "1.0.0-rc.4",
        "@rolldown/binding-wasm32-wasi": "1.0.0-rc.4",
        "@rolldown/binding-win32-arm64-msvc": "1.0.0-rc.4",
        "@rolldown/binding-win32-x64-msvc": "1.0.0-rc.4"
      }
    },
    "node_modules/rollup": {
      "version": "4.60.2",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.60.2.tgz",
      "integrity": "sha512-J9qZyW++QK/09NyN/zeO0dG/1GdGfyp9lV8ajHnRVLfo/uFsbji5mHnDgn/qYdUHyCkM2N+8VyspgZclfAh0eQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.60.2",
        "@rollup/rollup-android-arm64": "4.60.2",
        "@rollup/rollup-darwin-arm64": "4.60.2",
        "@rollup/rollup-darwin-x64": "4.60.2",
        "@rollup/rollup-freebsd-arm64": "4.60.2",
        "@rollup/rollup-freebsd-x64": "4.60.2",
        "@rollup/rollup-linux-arm-gnueabihf": "4.60.2",
        "@rollup/rollup-linux-arm-musleabihf": "4.60.2",
        "@rollup/rollup-linux-arm64-gnu": "4.60.2",
        "@rollup/rollup-linux-arm64-musl": "4.60.2",
        "@rollup/rollup-linux-loong64-gnu": "4.60.2",
        "@rollup/rollup-linux-loong64-musl": "4.60.2",
        "@rollup/rollup-linux-ppc64-gnu": "4.60.2",
        "@rollup/rollup-linux-ppc64-musl": "4.60.2",
        "@rollup/rollup-linux-riscv64-gnu": "4.60.2",
        "@rollup/rollup-linux-riscv64-musl": "4.60.2",
        "@rollup/rollup-linux-s390x-gnu": "4.60.2",
        "@rollup/rollup-linux-x64-gnu": "4.60.2",
        "@rollup/rollup-linux-x64-musl": "4.60.2",
        "@rollup/rollup-openbsd-x64": "4.60.2",
        "@rollup/rollup-openharmony-arm64": "4.60.2",
        "@rollup/rollup-win32-arm64-msvc": "4.60.2",
        "@rollup/rollup-win32-ia32-msvc": "4.60.2",
        "@rollup/rollup-win32-x64-gnu": "4.60.2",
        "@rollup/rollup-win32-x64-msvc": "4.60.2",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "7.8.2",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.2.tgz",
      "integrity": "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/sass": {
      "version": "1.97.3",
      "resolved": "https://registry.npmjs.org/sass/-/sass-1.97.3.tgz",
      "integrity": "sha512-fDz1zJpd5GycprAbu4Q2PV/RprsRtKC/0z82z0JLgdytmcq0+ujJbJ/09bPGDxCLkKY3Np5cRAOcWiVkLXJURg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^4.0.0",
        "immutable": "^5.0.2",
        "source-map-js": ">=0.6.2 <2.0.0"
      },
      "bin": {
        "sass": "sass.js"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "optionalDependencies": {
        "@parcel/watcher": "^2.4.1"
      }
    },
    "node_modules/sass/node_modules/chokidar": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.3.tgz",
      "integrity": "sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/sass/node_modules/readdirp": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.1.2.tgz",
      "integrity": "sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.18.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/saxes": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
      "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "xmlchars": "^2.2.0"
      },
      "engines": {
        "node": ">=v12.22.7"
      }
    },
    "node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sigstore": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/sigstore/-/sigstore-4.1.0.tgz",
      "integrity": "sha512-/fUgUhYghuLzVT/gaJoeVehLCgZiUxPCPMcyVNY0lIf/cTCz58K/WTI7PefDarXxp9nUKpEwg1yyz3eSBMTtgA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@sigstore/bundle": "^4.0.0",
        "@sigstore/core": "^3.1.0",
        "@sigstore/protobuf-specs": "^0.5.0",
        "@sigstore/sign": "^4.1.0",
        "@sigstore/tuf": "^4.0.1",
        "@sigstore/verify": "^3.1.0"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/slice-ansi": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-8.0.0.tgz",
      "integrity": "sha512-stxByr12oeeOyY2BlviTNQlYV5xOj47GirPr4yA1hE9JCtxfQN0+tVbkxwCtYDQWhEKWFHsEK48ORg5jrouCAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.3",
        "is-fullwidth-code-point": "^5.1.0"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/chalk/slice-ansi?sponsor=1"
      }
    },
    "node_modules/smart-buffer": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks": {
      "version": "2.8.8",
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.8.8.tgz",
      "integrity": "sha512-NlGELfPrgX2f1TAAcz0WawlLn+0r3FyhhCRpFFK2CemXenPYvzMWWZINv3eDNo9ucdwme7oCHRY0Jnbs4aIkog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ip-address": "^10.1.1",
        "smart-buffer": "^4.2.0"
      },
      "engines": {
        "node": ">= 10.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks-proxy-agent": {
      "version": "8.0.5",
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.5.tgz",
      "integrity": "sha512-HehCEsotFqbPW9sJ8WVYB6UbmIMv7kUUORIF2Nncq4VQvBfNBLibW9YZR5dlYCSUhwcD628pRllm7n+E+YTzJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "socks": "^2.8.3"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/socks/node_modules/ip-address": {
      "version": "10.2.0",
      "resolved": "https://registry.npmjs.org/ip-address/-/ip-address-10.2.0.tgz",
      "integrity": "sha512-/+S6j4E9AHvW9SWMSEY9Xfy66O5PWvVEJ08O0y5JGyEKQpojb0K0GKpz/v5HJ/G0vi3D2sjGK78119oXZeE0qA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/source-map": {
      "version": "0.7.6",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.6.tgz",
      "integrity": "sha512-i5uvt8C3ikiWeNZSVZNWcfZPItFQOsYTUAOkcUPGd8DqDy1uOUikjt5dG+uRlwyvR108Fb9DOd4GvXfT0N2/uQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
      "integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w==",
      "dev": true,
      "license": "CC-BY-3.0"
    },
    "node_modules/spdx-expression-parse": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-4.0.0.tgz",
      "integrity": "sha512-Clya5JIij/7C6bRR22+tnGXbc4VKlibKSVj2iHvVeX5iMW7s1SIQlqu699JkODJJIhh/pUu8L0/VLh8xflD+LQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.23",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.23.tgz",
      "integrity": "sha512-CWLcCCH7VLu13TgOH+r8p1O/Znwhqv/dbb6lqWy67G+pT1kHmeD/+V36AVb/vq8QMIQwVShJ6Ssl5FPh0fuSdw==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/ssri": {
      "version": "13.0.1",
      "resolved": "https://registry.npmjs.org/ssri/-/ssri-13.0.1.tgz",
      "integrity": "sha512-QUiRf1+u9wPTL/76GTYlKttDEBWV1ga9ZXW8BG6kfdeyyM8LGPix9gROyg9V2+P0xNyF3X2Go526xKFdMZrHSQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.3"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/std-env": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-4.1.0.tgz",
      "integrity": "sha512-Rq7ybcX2RuC55r9oaPVEW7/xu3tj8u4GeBYHBWCychFtzMIr86A7e3PPEBPT37sHStKX3+TiX/Fr/ACmJLVlLQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stdin-discarder": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/stdin-discarder/-/stdin-discarder-0.3.2.tgz",
      "integrity": "sha512-eCPu1qRxPVkl5605OTWF8Wz40b4Mf45NY5LQmVPQ599knfs5QhASUm9GbJ5BDMDOXgrnh0wyEdvzmL//YMlw0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width": {
      "version": "8.2.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-8.2.1.tgz",
      "integrity": "sha512-IIaP0g3iy9Cyy18w3M9YcaDudujEAVHKt3a3QJg1+sr/oX96TbaGUubG0hJyCjCBThFH+tFpcIyoUHUn1ogaLA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-east-asian-width": "^1.5.0",
        "strip-ansi": "^7.1.2"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strnum": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/strnum/-/strnum-2.2.3.tgz",
      "integrity": "sha512-oKx6RUCuHfT3oyVjtnrmn19H1SiCqgJSg+54XqURKp5aCMbrXrhLjRN9TjuwMjiYstZ0MzDrHqkGZ5dFTKd+zg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT"
    },
    "node_modules/sucrase": {
      "version": "3.35.1",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz",
      "integrity": "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "tinyglobby": "^0.2.11",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tailwindcss": {
      "version": "3.4.19",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz",
      "integrity": "sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/tailwindcss/node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/tailwindcss/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/tailwindcss/node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/tar": {
      "version": "7.5.13",
      "resolved": "https://registry.npmjs.org/tar/-/tar-7.5.13.tgz",
      "integrity": "sha512-tOG/7GyXpFevhXVh8jOPJrmtRpOTsYqUIkVdVooZYJS/z8WhfQUX8RJILmeuJNinGAMSu1veBr4asSHFt5/hng==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/fs-minipass": "^4.0.0",
        "chownr": "^3.0.0",
        "minipass": "^7.1.2",
        "minizlib": "^3.1.0",
        "yallist": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tar/node_modules/yallist": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-5.0.0.tgz",
      "integrity": "sha512-YgvUTfwqyc7UXVMrB+SImsVYSmTS8X/tSrtdNZMImM+n7+QTriRXyXim0mBrTXNeqzVF0KWGgHPeiyViFFrNDw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.1.2.tgz",
      "integrity": "sha512-dAqSqE/RabpBKI8+h26GfLq6Vb3JVXs30XYQjdMjaj/c2tS8IYYMbIzP599KtRj7c57/wYApb3QjgRgXmrCukA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyrainbow": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-3.1.0.tgz",
      "integrity": "sha512-Bf+ILmBgretUrdJxzXM0SgXLZ3XfiaUuOj/IKQHuTXip+05Xn+uyEYdVg0kYDipTBcLrCVyUzAPz7QmArb0mmw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tldts": {
      "version": "7.0.30",
      "resolved": "https://registry.npmjs.org/tldts/-/tldts-7.0.30.tgz",
      "integrity": "sha512-ELrFxuqsDdHUwoh0XxDbxuLD3Wnz49Z57IFvTtvWy1hJdcMZjXLIuonjilCiWHlT2GbE4Wlv1wKVTzDFnXH1aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^7.0.30"
      },
      "bin": {
        "tldts": "bin/cli.js"
      }
    },
    "node_modules/tldts-core": {
      "version": "7.0.30",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-7.0.30.tgz",
      "integrity": "sha512-uiHN8PIB1VmWyS98eZYja4xzlYqeFZVjb4OuYlJQnZAuJhMw4PbKQOKgHKhBdJR3FE/t5mUQ1Kd80++B+qhD1Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tough-cookie": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-6.0.1.tgz",
      "integrity": "sha512-LktZQb3IeoUWB9lqR5EWTHgW/VTITCXg4D21M+lvybRVdylLrRMnqaIONLVb5mav8vM19m44HIcGq4qASeu2Qw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tldts": "^7.0.5"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/tr46": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-6.0.0.tgz",
      "integrity": "sha512-bLVMLPtstlZ4iMQHpFHTR7GAGj2jxi8Dg0s2h2MafAE4uSWF98FC/3MomU51iQAMf8/qDUbKWf5GxuvvVcXEhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tuf-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/tuf-js/-/tuf-js-4.1.0.tgz",
      "integrity": "sha512-50QV99kCKH5P/Vs4E2Gzp7BopNV+KzTXqWeaxrfu5IQJBOULRsTIS9seSsOVT8ZnGXzCyx55nYWAi4qJzpZKEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tufjs/models": "4.1.0",
        "debug": "^4.4.3",
        "make-fetch-happen": "^15.0.1"
      },
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/ulid": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/ulid/-/ulid-2.4.0.tgz",
      "integrity": "sha512-fIRiVTJNcSRmXKPZtGzFQv9WRrZ3M9eoptl/teFJvjOzmpU+/K/JH6HZ8deBfb5vMEpicJcLn7JmvdknlMq7Zg==",
      "license": "MIT",
      "bin": {
        "ulid": "bin/cli.js"
      }
    },
    "node_modules/undici": {
      "version": "7.24.4",
      "resolved": "https://registry.npmjs.org/undici/-/undici-7.24.4.tgz",
      "integrity": "sha512-BM/JzwwaRXxrLdElV2Uo6cTLEjhSb3WXboncJamZ15NgUURmvlXvxa6xkwIOILIjPNo9i8ku136ZvWV0Uly8+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.18.1"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "11.1.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.1.tgz",
      "integrity": "sha512-vIYxrBCC/N/K+Js3qSN88go7kIfNPssr/hHCesKCQNAjmgvYS2oqr69kIufEG+O4+PfezOH4EbIeHCfFov8ZgQ==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/esm/bin/uuid"
      }
    },
    "node_modules/validate-npm-package-name": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-7.0.2.tgz",
      "integrity": "sha512-hVDIBwsRruT73PbK7uP5ebUt+ezEtCmzZz3F59BSr2F6OVFnJ/6h8liuvdLrQ88Xmnk6/+xGGuq+pG9WwTuy3A==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vite": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.2.tgz",
      "integrity": "sha512-Bby3NOsna2jsjfLVOHKes8sGwgl4TT0E6vvpYgnAYDIF/tie7MRaFthmKuHx1NSXjiTueXH3do80FMQgvEktRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vitest": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-4.1.5.tgz",
      "integrity": "sha512-9Xx1v3/ih3m9hN+SbfkUyy0JAs72ap3r7joc87XL6jwF0jGg6mFBvQ1SrwaX+h8BlkX6Hz9shdd1uo6AF+ZGpg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "4.1.5",
        "@vitest/mocker": "4.1.5",
        "@vitest/pretty-format": "4.1.5",
        "@vitest/runner": "4.1.5",
        "@vitest/snapshot": "4.1.5",
        "@vitest/spy": "4.1.5",
        "@vitest/utils": "4.1.5",
        "es-module-lexer": "^2.0.0",
        "expect-type": "^1.3.0",
        "magic-string": "^0.30.21",
        "obug": "^2.1.1",
        "pathe": "^2.0.3",
        "picomatch": "^4.0.3",
        "std-env": "^4.0.0-rc.1",
        "tinybench": "^2.9.0",
        "tinyexec": "^1.0.2",
        "tinyglobby": "^0.2.15",
        "tinyrainbow": "^3.1.0",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0",
        "why-is-node-running": "^2.3.0"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@opentelemetry/api": "^1.9.0",
        "@types/node": "^20.0.0 || ^22.0.0 || >=24.0.0",
        "@vitest/browser-playwright": "4.1.5",
        "@vitest/browser-preview": "4.1.5",
        "@vitest/browser-webdriverio": "4.1.5",
        "@vitest/coverage-istanbul": "4.1.5",
        "@vitest/coverage-v8": "4.1.5",
        "@vitest/ui": "4.1.5",
        "happy-dom": "*",
        "jsdom": "*",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@opentelemetry/api": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser-playwright": {
          "optional": true
        },
        "@vitest/browser-preview": {
          "optional": true
        },
        "@vitest/browser-webdriverio": {
          "optional": true
        },
        "@vitest/coverage-istanbul": {
          "optional": true
        },
        "@vitest/coverage-v8": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        },
        "vite": {
          "optional": false
        }
      }
    },
    "node_modules/w3c-xmlserializer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
      "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/watchpack": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.5.1.tgz",
      "integrity": "sha512-Zn5uXdcFNIA1+1Ei5McRd+iRzfhENPCe7LeABkJtNulSxjma+l7ltNx55BWZkRlwRnpOgHqxnjyaDgJnNXnqzg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/weak-lru-cache": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/weak-lru-cache/-/weak-lru-cache-1.2.2.tgz",
      "integrity": "sha512-DEAoo25RfSYMuTGc9vPJzZcZullwIqRDSI9LOy+fkCJPi6hykCnfKaXTuPBDuXAUcqHXyOgFtHNp/kB2FjYHbw==",
      "dev": true,
      "license": "MIT",
      "optional": true
    },
    "node_modules/webidl-conversions": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-8.0.1.tgz",
      "integrity": "sha512-BMhLD/Sw+GbJC21C/UgyaZX41nPt8bUTg+jWyDeg7e7YN4xOM05YPSIXceACnXVtqyEw/LMClUQMtMZ+PGGpqQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-5.0.0.tgz",
      "integrity": "sha512-sXcNcHOC51uPGF0P/D4NVtrkjSU2fNsm9iog4ZvZJsL3rjoDAzXZhkm2MWt1y+PUdggKAYVoMAIYcs78wJ51Cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/whatwg-url": {
      "version": "16.0.1",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-16.0.1.tgz",
      "integrity": "sha512-1to4zXBxmXHV3IiSSEInrreIlu02vUOvrhxJJH5vcxYTBDAx51cqZiKdyTxlecdKNSjj8EcxGBxNf6Vg+945gw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.11.0",
        "tr46": "^6.0.0",
        "webidl-conversions": "^8.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/xhr2": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/xhr2/-/xhr2-0.2.1.tgz",
      "integrity": "sha512-sID0rrVCqkVNUn8t6xuv9+6FViXjUVXq8H5rWOH2rz9fDNQEd4g0EA2XlcEdJXRz5BMEn4O1pJFdT+z4YHhoWw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/xml-name-validator": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
      "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yargs": {
      "version": "18.0.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-18.0.0.tgz",
      "integrity": "sha512-4UEqdc2RYGHZc7Doyqkrqiln3p9X2DZVxaGbwhn2pi7MrRagKaOcIKe8L3OxYcbhXLgLFUS3zAYuQjKBQgmuNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^9.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "string-width": "^7.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^22.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yargs-parser": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-22.0.0.tgz",
      "integrity": "sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoctocolors": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yoctocolors/-/yoctocolors-2.1.2.tgz",
      "integrity": "sha512-CzhO+pFNo8ajLM2d2IW/R93ipy99LWjtwblvC1RsoSUMZgyLbYFr221TnSNT7GjGdYui6P459mw9JH/g/zW2ug==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoctocolors-cjs": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/yoctocolors-cjs/-/yoctocolors-cjs-2.1.3.tgz",
      "integrity": "sha512-U/PBtDf35ff0D8X8D0jfdzHYEPFxAI7jJlxZXwCSez5M3190m+QobIfh+sWDWSHMCWWJN2AWamkegn6vr6YBTw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.6.tgz",
      "integrity": "sha512-rftlrkhHZOcjDwkGlnUtZZkvaPHCsDATp4pGpuOOMDaTdDDXF91wuVDJoWoPsKX/3YPQ5fHuF3STjcYyKr+Qhg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-to-json-schema": {
      "version": "3.25.2",
      "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.25.2.tgz",
      "integrity": "sha512-O/PgfnpT1xKSDeQYSCfRI5Gy3hPf91mKVDuYLUHZJMiDFptvP41MSnWofm8dnCm0256ZNfZIM7DSzuSMAFnjHA==",
      "dev": true,
      "license": "ISC",
      "peerDependencies": {
        "zod": "^3.25.28 || ^4"
      }
    }
  }
}
```

### `package.json`

```json
{
  "name": "purplepoint-front",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:purplepoint-front": "node dist/purplepoint-front/server/server.mjs"
  },
  "private": true,
  "packageManager": "npm@11.6.2",
  "dependencies": {
    "@angular/common": "^21.2.0",
    "@angular/compiler": "^21.2.0",
    "@angular/core": "^21.2.0",
    "@angular/forms": "^21.2.0",
    "@angular/platform-browser": "^21.2.0",
    "@angular/platform-server": "^21.2.0",
    "@angular/router": "^21.2.0",
    "@angular/ssr": "^21.2.7",
    "aws-amplify": "^6.16.4",
    "express": "^5.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^21.2.7",
    "@angular/cli": "^21.2.7",
    "@angular/compiler-cli": "^21.2.0",
    "@types/express": "^5.0.1",
    "@types/node": "^20.17.19",
    "autoprefixer": "^10.5.0",
    "jsdom": "^28.0.0",
    "postcss": "^8.5.13",
    "prettier": "^3.8.1",
    "tailwindcss": "^3.4.19",
    "typescript": "~5.9.2",
    "vitest": "^4.0.8"
  }
}
```

### `public/favicon.ico`

```
    00     ¨%  6          ¨  Þ%       h  †6  (   0   `           $                                                                                                          Ið'J
ó²J
ó²Ið'                                                                                                                                                                        SòEôˆF	ôþH
öÿL	õÿMòÿPó™Sò                                                                                                                                                        Ì ÏKïcDòéF	ôþH
öÿL	õÿL	õÿQôÿQôÿTòîZðwŽ÷                                                                                                                                            bîFE	ïÒF	ôþF	ôþF	ôþH
öÿL	õÿL	õÿQôÿQôÿVòÿ\îÿcêØbîF                                                                                                                                Ið'J
ó²MòÿMòÿF	ôþF	ôþH
öÿH
öÿL	õÿQôÿQôÿVòÿYðÿaíÿféÿmæÿsâ»{ä*                                                                                                                SòSí‘QïùMòÿMòÿMòÿL	õÿL	õÿH
öÿL	õÿL	õÿQôÿQôÿVòÿ\îÿféÿi	éÿqãÿvàÿ{Þÿ…×™žÕ                                                                                                    KïcZîïVñÿVñÿVñÿVñÿPõÿPõÿPõÿPõÿPõÿQôÿQôÿVòÿYðÿaíÿféÿmæÿqãÿ{Þÿ‚ÙÿŒ
Óÿ”Îí®ØX                                                                                                Zî…\ñÿ\ñÿ\ñÿVñÿVñÿVöÿVöÿVöÿPõÿPõÿQôÿQôÿVòÿ\îÿaíÿi	éÿqãÿvàÿ{Þÿ‚ÙÿŒ
Óÿ–ÌÿŸÇ                                                                                                ð_ðù\ñÿ\ñÿ\ñÿ\öÿ\öÿVöÿVöÿVöÿVöÿVòÿVòÿYðÿaíÿféÿmæÿqãÿ{Þÿ‚ÙÿŒ
Óÿ–ÌÿÈüžÕ                                                                                                    bñ±dñÿdñÿböÿ\öÿ\öÿ\öÿ\öÿ[õÿ[õÿ[õÿ[õÿaíÿaíÿi	éÿqãÿvàÿ{Þÿ‚ÙÿŒ
Óÿ–Ìÿ¡Ä¥                                                                                                        bîFgõÿgõÿe÷ÿböÿböÿböÿböÿaôÿaôÿ_òÿ_òÿaíÿi	éÿmæÿqãÿvàÿ‚ÙÿŒ
Óÿ–ÌÿÈü³Ì:                                                                                                            ióØgõÿgõÿgõÿe÷ÿe÷ÿböÿböÿaôÿaôÿdñÿi	éÿmæÿqãÿvàÿ{Þÿ‚ÙÿŒ
Óÿ–Ìÿ ÆÕÌ Ï                                                                                                            hòQh÷—h÷—h÷—h÷—h÷—h÷—hò‘hò‘hò‘hò‘uæŒuæŒuæŒuæŒ‰	Õˆ‰	Õˆ‰	ÕˆŸÇ¦ÀE                                                                                                                                                                                                                                                                    ó7                                                                                                                                                                íŽ&                    Sòƒ ð¿                                                                                                                                                                ð‰™ð
ˆ                {ä*–%ôýqî-                                                                                                                                                        é•ï€ùé•                bîF›'õÿƒó¯                                                                                                                                                        òyŒð	~ÿóy*                {ñY›'õÿ–%ôýð                                                                                                                                                ð€ñ	|ðð{ÿñ‚6                ‹ öj¡)öÿ›'õÿ‚ñ¡                                                                                                                                                ð†|ð	~ÿð{ÿñwK                „ó€¡)öÿ¡)öÿ›&ôó}õ                                        }õ… ÷ê‰ôô‰ôô‰ôôíóíó•çò•çò›ßò¥Øñ¥Øñ®Íæ×¸                                        ð
ˆí€éð{ÿòwÿï[                †ó“§+øÿ§+øÿ¡)öÿ†ó“                                            ƒó¯!õÿ!õÿ“ ðÿ“ ðÿ—éÿ—éÿŸäÿ¥Þÿ¥Þÿ®Õÿº Ðž                                            ñƒlð	~ÿð{ÿòwÿñƒl                —!ô¦¬,ùÿ§+øÿ§+øÿ›&ôóŽ÷                                        ó7!õÿ“ ðÿ“ ðÿ™!îÿ›éÿ›éÿŸäÿ¥Þÿ®Õÿ®Õÿ³Ì:                                        Ì Ïì
Ûð	~ÿòwÿòwÿór{                ‘!óº¬,ùÿ¬,ùÿ¬,ùÿ§+øÿ„ó€                                            ‘ôÕ–%ôý™!îÿ™!îÿ›éÿŸäÿ¥Þÿ­!Þÿ®Õÿ½$ØÊ                                            ï[ñƒÿð{ÿòwÿôrÿòyŒ                ›%øÈ±-úÿ±-úÿ¬,ùÿ¬,ùÿŸ&øäÌ Ï                                        “ôoŸ#ïÿŸ#ïÿŸ#ïÿ¤!èÿ¤!èÿ­!Þÿ­!Þÿµ#Úÿ¶Ël                                            ë‰Ïñƒÿð	~ÿòwÿôrÿõn›                %öØ´.ûÿ´.ûÿ±-úÿ¬,ùÿ¬,ùÿ‹ öj                                        }õ›&ôóŸ#ïÿ¦%íÿ¤!èÿ«$èÿ­!Þÿµ#Úÿ¸"Õñ×¸                                        ïIð‰ÿñƒÿð	~ÿòwÿôrÿõ k«                Ÿ&øä¸.üÿ´.ûÿ´.ûÿ±-úÿ±-úÿŸ&øä                                            —!ô¦¦%íÿ¦%íÿ«$èÿ±%äÿµ#Úÿµ#Úÿº Ðž                                            îÁðŒÿñ†ÿð	~ÿòwÿôrÿöoÅ                ³)ûë»/üÿ¸.üÿ¸.üÿ´.ûÿ´.ûÿ±-úÿ’ øS                                        ™ð)¦%íÿ«$èÿ«$èÿ±%äÿµ#Úÿ½&ÜÿÀ!Õ*                                        ñ‚6í“ÿðŒÿñ†ÿòÿó	|ÿôrÿöoÅ                ´,ùö¿/ýÿ»/üÿ»/üÿ¸.üÿµ.ýÿ´.ûÿ'úÒ                                            ¨#óË±'êÿ±%äÿ¹'ãÿ½&Üÿ½$ØÊ                                            íš­í“ÿðŒÿð‰ÿòÿó	|ÿòwÿòtÞ                ¼-üûÂ0ýÿ¿/ýÿ¿/ýÿ»/üÿ¸.üÿ¸.üÿµ.ýÿ”ù=                                        §ìe±'êÿ¹'ãÿ¹'ãÿ½&ÜÿÂ!Õ]                                        íŽ&ì›þí“ÿïÿð‰ÿñƒÿó	|ÿó	|ÿñ	|ð            Ì ÏÆ0þÿÆ0þÿÂ0ýÿÂ0ýÿ¿/ýÿ¿/ýÿ»/üÿ¸.üÿ›%øÈ                                        Ì Ï»'ìâ¹'ãÿ¿*äþÂ'ÛíŽ÷                                        íš­ì›þî˜ÿïÿð‰ÿñƒÿòÿó	|ÿó	|ÿÌ Ï        ðÌ0þÿÊ0ýÿÆ0þÿÆ0þÿÂ0ýÿ¿/ýÿ¿/ýÿ»/üÿµ.ýÿŒù*                                        ²#ã™¿*äþÃ*áþº Ðž                                        é•ê¡øì›þî˜ÿïÿðŒÿñ†ÿòÿòÿó	|ÿð€        ó7Ï0þÿÌ0þÿÊ0ýÿÆ0þÿÆ0þÿÂ0ýÿÂ0ýÿ¿/ýÿ¿/ýÿ¢#úº                                        ¸ Ø ¿*äþÃ*áþ¸ Ø                                         ë¢—ì£ÿíŸÿî˜ÿð“ÿðŒÿð‰ÿñ†ÿñƒÿòÿíŽ&        ’ øSÒ0þÿÏ0þÿÌ0þÿÌ0þÿÈ0þÿÆ0þÿÂ0ýÿÂ0ýÿ¿/ýÿ¼-üûð                                        ½$ØÊ½$ØÊ                                        ×¸é!¬ðì£ÿíŸÿî›ÿð“ÿïÿðŒÿð‰ÿñ†ÿñƒÿñ‚6        “ôoÖ1ÿÿÒ0þÿÏ0þÿÏ0þÿÌ0þÿÈ0þÿÆ0þÿÆ0þÿÂ0ýÿÂ0ýÿ—!ô¦                                        ®ØXÂ!Õ]                                        é ¨‰ë ¬ÿì§ÿíŸÿî›ÿï–ÿïÿïÿðŒÿð‰ÿñ†ÿïI        œøƒÙ1ÿÿÖ1ÿÿÒ0þÿÒ0þÿÏ0þÿÌ0þÿÊ0ýÿÆ0þÿÆ0þÿÂ0ýÿ¼+ûö}õ                                                                                ð
ˆé!¬ðë ¬ÿì§ÿì£ÿíŸÿî˜ÿð“ÿð“ÿïÿðŒÿð‰ÿï[        ¡ ÷–Ù1ÿÿÙ1ÿÿÖ1ÿÿÔ0þÿÒ0þÿÏ0þÿÌ0þÿÊ0ýÿÊ0ýÿÆ0þÿÆ0þÿ¡ ÷–                                                                                è!«zê"²ÿê!¯ÿëªÿì£ÿíŸÿî›ÿî˜ÿï–ÿð“ÿïÿðŒÿñƒl        ¬"ö®Ù1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÖ1ÿÿÒ0þÿÏ0þÿÌ0þÿÌ0þÿÊ0ýÿÈ0þÿ¼+ûöŽ÷                                                                        Ì Ïæ%µäé#¶ÿê!¯ÿë ¬ÿì§ÿíŸÿíŸÿî›ÿî˜ÿï–ÿð“ÿïÿð†|        ¢#úºÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÔ0þÿÒ0þÿÏ0þÿÏ0þÿÌ0þÿÊ0ýÿÊ0ýÿ³!ï€                                                                        å ºmè%ºÿé#¶ÿê"²ÿë ¬ÿì§ÿì£ÿíŸÿíŸÿî›ÿî˜ÿï–ÿð“ÿð‰™        ¨#óËÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÖ1ÿÿÒ0þÿÒ0þÿÏ0þÿÏ0þÿÌ0þÿ¼*öí                                                                        å&¼Öç'½ÿè%ºÿê"²ÿê!¯ÿëªÿì§ÿì£ÿíŸÿíŸÿî›ÿî˜ÿï–ÿð‰™        Ž÷œøƒ¼+ûöÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÒ0þÿÒ0þÿÏ0þÿÐ0üþÐ0üþ§ìe                                                                å$²Oæ'Áþç'½ÿè%ºÿé#¶ÿê"²ÿë ¬ÿëªÿì§ÿì£ÿì£ÿíŸÿîÙñƒlð
ˆ                    “ôo³)ûëÙ1ÿÿÙ1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÔ0þÿÓ0üÿÒ0þÿÐ0üþ¾(ôã                                                                å&¼Öå)Æÿæ'Áþç'½ÿé#¶ÿê"²ÿê!¯ÿë ¬ÿëªÿì§ÿîÙí–aÌ Ï                                    ’ øSµ&üÝÖ1ÿÿÙ1ÿÿÙ1ÿÿ×1þÿÔ0þÿÔ0þÿÓ0üÿÐ0üþ®ØX                                                        ìª:ä+Ìÿå)Æÿæ'Áþç'½ÿè%ºÿé#¶ÿê"²ÿê!¯ÿë¨ÆïI                                                        ”ù=³%ùÐÔ0þÿÙ1ÿÿ×1þÿ×1þÿÔ0þÿÓ0üÿ»'ìâ                                                        æ'ÁÅä+Ìÿå)Æÿå)Æÿæ'Áþè%ºÿé#¶ÿë¨Æìª:                                                                        ™ð)µ$öÀÓ0üÿ×1þÿ×1þÿ×1þÿÓ0üÿ³Ì:                                                ã"µ-ã,Òÿä+Ìÿä+Ìÿå)Æÿæ'Áþê®´íŽ&                                                                                        žÕ¬"ö®Ð0üþ×1þÿÖ1ûÿÆ&ìÊ                                                å'Ä¹ã,Òÿã,Òÿå)Èõç ¸ é•                                                                                                        Ž÷³!ï€Î+õóÖ1ûÿÀ!Õ*                                        í$¿â-Öûã+Îðç ¸ ×¸                                                                                                                        Ì ÏÆ#â}Ê$ßx                                        å ºmå ºmÌ Ï                                                                ÿÿþÿÿ  ÿÿøÿÿ  ÿÿðÿÿ  ÿÿÀÿÿ  ÿÿ  ÿÿ  ÿü  ?ÿ  ÿø  ÿ  ÿð  ÿ  ÿø  ÿ  ÿø  ÿ  ÿü  ?ÿ  ÿü  ?ÿ  ÿþ  ÿ  ÿÿÿÿÿÿ  ÿÿÿÿÿÿ  ïÿÿÿÿ÷  ïÿÿÿÿ÷  çÿÿÿÿç  çÿÿÿÿç  ãÿÿÿÿç  ÃÿÀÿÇ  ÁÿÀÿÇ  Áÿàÿ‡  Àÿàÿƒ  Àÿðÿ  Àÿðÿ  Àðþ  Àøþ  À?øü  À?ü?ü  Àü?ø  Àü?ø  Àþð  Àþð  Àÿÿà  €ÿÿà  €ÿÿà  €ÿÿÀ  €ÿÿÀ  €ÿÿ€  Àÿÿ€  ø ÿÿ   þ ÿÿ   ÿ€þÿ  ÿàþÿ  ÿø?üÿ  ÿþ?üÿ  ÿÿÿÿÿÿ  (       @                                                                                     Jò'I	õµI	õµJò'                                                                                                        \ðDòˆF	ôøH
öÿL	õÿQóûUò™vó                                                                                        l ÿF
îjF	ðêDóÿH
öÿL	õÿOôÿSóÿXðÿbëîk	åw€ë                                                                            RîKPîÖLñÿLñÿL	õÿH
öÿL	õÿOôÿSóÿ]îÿféÿpãÿzÞÙ‡	ÕU                                                                    Xì¢YîÿUñÿUñÿPõÿPõÿPõÿOôÿSóÿXðÿbëÿkæÿtáÿ~ÛÿŽ
ÒÿœÈ˜                                                                \í^ñÿ^ñÿZõÿZõÿV÷ÿV÷ÿVóÿVòÿ]îÿféÿpãÿyÞÿ†	×ÿ”Íÿ¢Âq                                                                vófòöaôÿaôÿ]÷ÿ]÷ÿZõÿ]óÿ]óÿbëÿkæÿtáÿ~ÛÿŽ
Òÿ›ÈöÍ¡                                                                    hó¬gõÿgõÿcøÿcøÿbôÿbôÿfïÿlêÿq
åÿyÞÿ†	×ÿ”Íÿ¢Å                                                                        gñ%h÷ch÷ch÷ceô`g÷^kñ[kñ[xíY~ßW~ßW	ÒU™ÉU±Ä                                            Œñ                                                                                                        Í¡            \ðñŸ                                                                                                        ï‚~ìŠ        yò(“%ôö\ð                                                                                                ìŠï
€êõ
z        zïAœ(õÿ€ï                                                                                                î‚lñ	}ÿóv)        xíY£*÷ÿ™%öí€ë                        l ÿøª„ó®†ï­ŽéªŽéª™â§ ×¦©Ðžã «                        ã «ï€Þðzÿòr:        †ñp¨+øÿ£*÷ÿƒõ}                            † ÷¾‘ ñÿ‘ ñÿ•ëÿšçÿ¡ßÿª×ÿ±Í´                            ñyZñ	}ÿñwÿõsI        ‰ò†¯,ùÿ¨+øÿ™%öíÝ Á                        Š úT—"ñÿ—"ñÿŸ!êÿ¡åÿ©Ýÿ±Õÿ½ ÍG                            ðƒÑðzÿótÿñyZ        ó›³.úÿ¯,ùÿ«-ùÿˆ"øi                            ›$õáŸ#îÿŸ!êÿ¨!äÿ°"Üÿ·!ÔàÝ Á                        ë‹Kñƒÿñ	}ÿótÿõ lj        • õ®·.ûÿ³.úÿ¯,ùÿ›$õá                            —î‰¥$îÿ©$ëü¯$âÿ·%ßÿÀ#Ó€                            ëŽÄð‡ÿñ	}ÿótÿõ mz        ›#ö¿¼/ýÿ¸/üÿ·.ûÿ³.úÿŠ úT                        vó©$ëü¯%èÿ·%ßÿ»%Ùù±Ä                        ê›;ï‘ÿð‡ÿñ	}ÿótÿôqŒ        ¡%ùÌÂ0ýÿ¿/ýÿ¸/üÿ¸/üÿž)úÕ                            ©!é·´(çÿ·%ßÿ½%Ô³                            í™·ï‘ÿðŒÿñƒÿózÿôtž        ª&øÝÇ0ýÿÂ0ýÿ¿/ýÿ¼/ýÿ¸/üÿ— ù>                        ª#äBº*æÿÀ)àÿ½ ÍG                        í¡*ëœýï”ÿðŒÿñƒÿñ	}ÿòz°        ±'úéË0þÿÇ0ýÿÂ0ýÿ¿/ýÿ¿/ýÿ¡%ùÌ                            »(âÞÁ(ÛÞ                            ì¡«íŸÿï–ÿðŒÿð‡ÿñƒÿóÁ        º*ûóÐ/þÿË0þÿÈ1þÿÅ0þÿÂ0ýÿ¼/ýÿ ô+                        »$ÝÀ#Ó€                        æªë ¨ùíŸÿî™ÿï‘ÿðŒÿð‡ÿðƒÑ        Ä-ýûÔ1ÿÿÐ/þÿÎ1þÿË0þÿÇ0ýÿÂ0ýÿ¤%ø¼                        ÝÅ¤ê                        ê ªŸë«ÿí¢ÿîšÿï”ÿï‘ÿðŒÿð‡â        Ð/þÿÙ1ÿÿÔ1ÿÿÒ1þÿÎ1þÿË0þÿÇ0ýÿÄ-ýûŒñ                                                á¶è#³õê!¯ÿì§ÿíŸÿî™ÿï”ÿï‘ÿðï        Ö1ÿÿÙ1ÿÿÙ1ÿÿÖ1ÿÿÒ1þÿÎ1þÿË0þÿÊ0üÿ­$õ«                                                è#±“è#·ÿê!¯ÿì§ÿí¢ÿíŸÿîšÿï–ÿï‘ÿÝ Á¤êÃ+ûùÙ1ÿÿÙ1ÿÿÙ1ÿÿ×0ÿÿÒ1þÿÐ/þÿÎ1þÿÃ+ûù¤ê                                        ÝÅæ&½ñè%ºÿé"´ÿë«ÿì§ÿí¢ÿíŸÿîšÿï”ÝìŠ        š"új¸(ýèÙ1ÿÿÙ1ÿÿ×0ÿÿÔ1ÿÿÒ1þÿÎ1þÿ²!ð™                                        è$¶…å)Åÿç'¾ÿè#·ÿê!¯ÿë«ÿì§ÿížÕì—`Ý Á                    › ùYµ%üÝ×0ÿÿ×0ÿÿÔ1ÿÿÔ0ýÿÉ-øöl ÿ                                Ý Áå(Åêå)Åÿç'¾ÿè%ºÿé"´ÿë¨ÌîžL                                        — ù>·%øÐÔ0ýÿÔ1ÿÿÔ0ýÿ¾#è…                                å#»tä,Ïýå*Éÿæ&Âüë °Âê›;                                                         ô+¼%ò¿Ò/ûýÎ+óñ                                ã)Ìää,Ïýè!¹¹í¡*                                                                        ÂàÈ$é°Ê'ßH                        â%¹>ä$À¢á¶                                        ÿþÿÿøÿÿðÿÿÀÿÿ  ÿÿ€ÿÿ€ÿÿ€ÿÿÿÿÿÿÿÿÿßÿÿÿßÿÿûÏÿÿûÏðóÏðó‡øã‡øãƒøÃƒü?Áü?þ€þ€ÿ€þ€þ€?ü€?üàøøøþøÿñÿÿï÷ÿ(                                                            @ì(FõµNô¶Wó)                                        QäJíŽIóøJ
öÿQóÿ_ìûsã™†Î                                [ïÊXñÿTõÿRôÿVòÿiçÿ|Ýÿ˜ÊÂ                                còydõÿa÷ÿ_ôÿeîÿrâÿ‰
Ôÿ¥Ài                    €+ÿ        ]èg÷>f÷<gò9vè8‚Ý5–
Í3¿ ¿        ÿ €    wîyï|                                                î…\ÿ €€ò(“$ôé  ÿ          ÿyõg…ëfåb Ô^ÿ ÿ        ÿ ÿï
~Òõ pƒóB¨,÷ÿ„õj            Œ ôÎ– íÿ âÿ°ÐÅ            î…Kñyÿó p)ˆñ^³.ùÿ›'øá            ñj£$ìÿ¯"ßÿ¿#Í`            î‰Åòwÿö k9ôw¼/ûÿ¶/üÿˆ#ùX        f ÿ­&éíº%ÜïÛ$¶        ëš?ïŒÿó	{ÿñtK• öÇ0ýÿ¿0ýÿ¤(ûØ            ³#â À$Õ            êž¾î‘ÿó‚ÿòz`  ù§Ð0þÿÈ1þÿÂ0ýÿ—÷B        º"Ý%Ä'Ë'        ç"¨5ê¦þî–ÿðŒÿòu¥"øºÙ1ÿÿÒ0þÿË1þÿ¯&øÎ                        é#±·ê «ÿížÿï–ÿîŠ‰–÷a½)þðÙ1ÿÿÓ1þÿÍ0üþª ê0                ë!·'è(¾ûê"±ÿì§ÿîšÒðD        ŸüZº%ùÝÕ0ýÿÀ&ïÃ                å%¿²æ(Äþé®ÏïœP                        °îJÅ&íËÉ(×        á-´å$Áºê«=                þ  ø  ð  ø  ÿÿ  ÿÿ  ¿ý  ¼=  žy  žy  q  ñ  à  ‡á  ãÇ  ûß  ```

### `src/app/app.component.ts`

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'pp-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="min-h-screen bg-surface-2">
      @if (auth.isAuthenticated()) {
        <pp-navbar />
      }
      <main [class]="auth.isAuthenticated() ? 'pt-16' : ''">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppComponent implements OnInit {
  readonly auth = inject(AuthService);

  async ngOnInit(): Promise<void> {
    await this.auth.restoreSession();
  }
}
```

### `src/app/app.config.server.ts`

```typescript
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
```

### `src/app/app.config.ts`

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/http/auth.interceptor';
import { errorInterceptor } from './core/http/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor]),
    ),
  ],
};
```

### `src/app/app.css`

```css
```

### `src/app/app.html`

```html
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * Delete the template below * * * * * * * * * -->
<!-- * * * * * * * to get started with your project! * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->

<style>
  :host {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    height: 100dvh;
  }

  h1 {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p {
    margin: 0;
    color: var(--gray-700);
  }

  main {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo {
    max-width: 9.2rem;
  }

  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content h1 {
    margin-top: 1.75rem;
  }

  .content p {
    margin-top: 1.5rem;
  }

  .divider {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
    white-space: nowrap;
  }

  .pill:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group .pill:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group .pill:nth-child(6n + 2) {
    --pill-accent: var(--electric-violet);
  }
  .pill-group .pill:nth-child(6n + 3) {
    --pill-accent: var(--french-violet);
  }

  .pill-group .pill:nth-child(6n + 4),
  .pill-group .pill:nth-child(6n + 5),
  .pill-group .pill:nth-child(6n + 6) {
    --pill-accent: var(--hot-red);
  }

  .pill-group svg {
    margin-inline-start: 0.25rem;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links path {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links a:hover svg path {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content {
      flex-direction: column;
      width: max-content;
    }

    .divider {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }
</style>

<main class="main">
  <div class="content">
    <div class="left-side">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 982 239"
        fill="none"
        class="angular-logo"
      >
        <g clip-path="url(#a)">
          <path
            fill="url(#b)"
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
          <path
            fill="url(#c)"
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
        </g>
        <defs>
          <radialGradient
            id="c"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(118.122 171.182 60.81) scale(205.794)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF41F8" />
            <stop offset=".707" stop-color="#FF41F8" stop-opacity=".5" />
            <stop offset="1" stop-color="#FF41F8" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="b"
            x1="0"
            x2="982"
            y1="192"
            y2="192"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F0060B" />
            <stop offset="0" stop-color="#F0070C" />
            <stop offset=".526" stop-color="#CC26D5" />
            <stop offset="1" stop-color="#7702FF" />
          </linearGradient>
          <clipPath id="a"><path fill="#fff" d="M0 0h982v239H0z" /></clipPath>
        </defs>
      </svg>
      <h1>Hello, {{ title() }}</h1>
      <p>Congratulations! Your app is running. ðŸŽ‰</p>
    </div>
    <div class="divider" role="separator" aria-label="Divider"></div>
    <div class="right-side">
      <div class="pill-group">
        @for (item of [
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
        ]; track item.title) {
          <a
            class="pill"
            [href]="item.link"
            target="_blank"
            rel="noopener"
          >
            <span>{{ item.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 -960 960 960"
              width="14"
              fill="currentColor"
            >
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
              />
            </svg>
          </a>
        }
      </div>
      <div class="social-links">
        <a
          href="https://github.com/angular/angular"
          aria-label="Github"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Github"
          >
            <path
              d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"
            />
          </svg>
        </a>
        <a
          href="https://x.com/angular"
          aria-label="X"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="X"
          >
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw"
          aria-label="Youtube"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="29"
            height="20"
            viewBox="0 0 29 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Youtube"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</main>

<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * The content above * * * * * * * * * * * * -->
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * * -->
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * End of Placeholder  * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->


<router-outlet />
```

### `src/app/app.routes.server.ts`

```typescript
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
```

### `src/app/app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { roleGuard } from './core/auth/role.guard';
import { UserRole } from './core/models/roles.enum';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const loadLogin = () =>
  import('./features/auth/login/login.component').then(m => m.LoginComponent);

//const loadUnauthorized = () =>
//  import('./shared/components/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent);

const loadPatientRoutes = () =>
  import('./features/patient/patient.routes').then(m => m.PATIENT_ROUTES);

const loadMedicalRoutes = () =>
  import('./features/medical/medical.routes').then(m => {
    console.log('âœ… Medical routes loaded!', m.MEDICAL_ROUTES);
    return m.MEDICAL_ROUTES;
  }).catch(err => {
    console.error('âŒ Failed to load medical routes', err);
    return [];
  });

const loadEmployeeRoutes = () =>
  import('./features/employee/employee.routes').then(m => m.EMPLOYEE_ROUTES);

const loadAdminRoutes = () =>
  import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES);

// const loadCeoRoutes = () =>
//  import('./features/ceo/ceo.routes').then(m => m.CEO_ROUTES);

export const routes: Routes = [
  // Redirect root to a real, existing route to avoid redirect loops
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'login', loadComponent: loadLogin },

  {
    path: 'patient',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.PATIENT] },
    loadChildren: loadPatientRoutes,
  },
  {
    path: 'medical',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.MEDICAL] },
    loadChildren: loadMedicalRoutes,
  },
  {
    path: 'employee',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.EMPLOYEE] },
    loadChildren: loadEmployeeRoutes,
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.ADMIN] },
    loadChildren: loadAdminRoutes,
  },
  /*{
    path: 'ceo',
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.CEO] },
    loadChildren: loadCeoRoutes,
  },

  { path: 'unauthorized', loadComponent: loadUnauthorized },*/
  // Fallback to login instead of a non-existent /dashboard to prevent loops

  { path: '**', component: NotFoundComponent },
];
```

### `src/app/app.spec.ts`

```typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, purplepoint-front');
  });
});
```

### `src/app/app.ts`

```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('purplepoint-front');
}
```

### `src/app/core/auth/amplify.config.ts`

```typescript
import { Amplify } from 'aws-amplify';
import { environment } from '../../../environments/environment';

export function configureAmplify(): void {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: environment.cognito.userPoolId,
        userPoolClientId: environment.cognito.clientId,
      },
    },
  });
}
```

### `src/app/core/auth/auth.guard.ts`

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  console.log('authGuard appelÃ©');
  const auth   = inject(AuthService);
  const router = inject(Router);

  return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
```

### `src/app/core/auth/auth.service.ts`

```typescript
import { Injectable, computed, signal, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  signIn,
  signOut,
  getCurrentUser,
  fetchAuthSession,
  AuthError,
} from 'aws-amplify/auth';
import { User } from '../models/user.model';
import { UserRole } from '../models/roles.enum';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(null);
  private readonly _token       = signal<string | null>(null);
  private readonly _loading     = signal<boolean>(false);

  readonly currentUser    = this._currentUser.asReadonly();
  readonly token          = this._token.asReadonly();
  readonly isLoading      = this._loading.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);
  readonly userRole        = computed(() => this._currentUser()?.role ?? null);

  // Expose loading state as observable for HomeComponent
  readonly isLoading$ = toObservable(this.isLoading);

  hasRole(role: UserRole): boolean {
    return this._currentUser()?.role === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const role = this._currentUser()?.role;
    return role ? roles.includes(role) : false;
  }

  /** AppelÃ© au dÃ©marrage pour restaurer la session existante */
  async restoreSession(): Promise<void> {
    try {
      this._loading.set(true);
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken;
      const accessToken = session.tokens?.accessToken;

      if (!idToken || !accessToken) return;

      const payload  = idToken.payload;
      const rawAccessToken = accessToken.toString();

      const user = this.mapPayloadToUser(payload);
      this.setSession(user, rawAccessToken);
    } catch {
      // Pas de session active â€” Ã©tat initial conservÃ© (null)
    } finally {
      this._loading.set(false);
    }
  }

  async login(email: string, password: string): Promise<void> {
    this._loading.set(true);
    try {
      await signIn({ username: email, password });
      await this.restoreSession();
      this.redirectAfterLogin();
    } finally {
      this._loading.set(false);
    }
  }

  async logout(): Promise<void> {
    await signOut();
    this._currentUser.set(null);
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  private redirectAfterLogin(): void {
    const role = this.userRole();
    const roleRouteMap: Record<UserRole, string> = {
      [UserRole.PATIENT]:  '/patient',
      [UserRole.MEDICAL]:  '/medical',
      [UserRole.AIDANT]:   '/patient',
      [UserRole.EMPLOYEE]: '/employee',
      [UserRole.ADMIN]:    '/admin',
      [UserRole.CEO]:      '/ceo',
    };
    this.router.navigate([roleRouteMap[role!] ?? '/unauthorized']);
  }

  private setSession(user: User, token: string): void {
    this._currentUser.set(user);
    this._token.set(token);
  }

  private mapPayloadToUser(payload: Record<string, unknown>): User {
    return {
      id:         payload['sub'] as string,
      cognitoSub: payload['sub'] as string,
      email:      payload['email'] as string,
      firstName:  payload['given_name'] as string ?? '',
      lastName:   payload['family_name'] as string ?? '',
      role:       payload['custom:role'] as UserRole,
      region:     payload['custom:region'] as string | undefined,
      status:     'ACTIVE',
    };
  }
}
```

### `src/app/core/auth/role.guard.ts`

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from '../models/roles.enum';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

  console.log('roleGuard - URL:', route.url);
  const auth     = inject(AuthService);
  const router   = inject(Router);
  const allowed  = (route.data['roles'] as UserRole[]) ?? [];
  console.log('allowed roles:', allowed);

  // Si aucun rÃ´le exigÃ©, on laisse passer (les enfants de la route mÃ©dicale par ex.)
  if (allowed.length === 0) {
    return true;
  }

  return auth.hasAnyRole(allowed)
    ? true
    : router.createUrlTree(['/unauthorized']);
};
```

### `src/app/core/http/api.service.ts`

```typescript
// core/http/api-base.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class ApiBaseService {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  protected getPaginated<T>(
    params?: HttpParams
  ): Observable<PaginatedData<T>> {
    return this.http.get<ApiResponse<PaginatedData<T>>>(this.baseUrl, { params })
      .pipe(map(res => res.data));
  }

}
```

### `src/app/core/http/auth.interceptor.ts`

```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  if (!token) return next(req);

  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(authReq);
};
```

### `src/app/core/http/error.interceptor.ts`

```typescript
import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router  = inject(Router);
  const auth    = inject(AuthService);

  return next(req).pipe(
    catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:
          auth.logout();
          break;
        case HttpStatusCode.Forbidden:
          router.navigate(['/unauthorized']);
          break;
        case HttpStatusCode.InternalServerError:
          // TODO: brancher sur NotificationService
          console.error('Server error', error);
          break;
      }
      return throwError(() => error);
    }),
  );
};
```

### `src/app/core/models/appointment.model.ts`

```typescript
export type AppointmentType =
  | 'CONSULTATION'
  | 'FOLLOW_UP'
  | 'EMERGENCY'
  | 'HOME_VISIT';

export type AppointmentStatus =
  | 'SCHEDULED'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'CANCELLED';

export interface Appointment {
  id: string;
  patientId: string;
  providerId: string;
  type: AppointmentType;
  status: AppointmentStatus;
  scheduledAt: string;
  duration: number;
  location?: string;
  notes?: string;
}
```

### `src/app/core/models/call.model.ts`

```typescript
export type CallOutcome =
  | 'REACHED'
  | 'NO_ANSWER'
  | 'BUSY'
  | 'WRONG_NUMBER'
  | 'CALLBACK_REQUESTED';

export type CallStatus = 'PENDING' | 'SYNCED' | 'FAILED';

export interface Call {
  id: string;
  employeeId: string;
  patientId: string;
  patientName?: string;
  outcome: CallOutcome;
  duration?: number;
  notes?: string;
  calledAt: string;
  status: CallStatus;
}

export interface CreateCallPayload {
  employeeId: string;
  patientId: string;
  outcome: CallOutcome;
  duration?: number;
  notes?: string;
  calledAt: string;
}
```

### `src/app/core/models/campaign.model.ts`

```typescript
export type CampaignStatus = 'DRAFT' | 'SCHEDULED' | 'SENT' | 'CANCELLED';

export type CampaignTarget = 'ALL' | 'REGION' | 'ROLE';

export interface Campaign {
  id: string;
  title: string;
  message: string;
  target: CampaignTarget;
  region?: string;
  role?: string;
  status: CampaignStatus;
  scheduledAt?: string;
  sentAt?: string;
  createdBy: string;
  createdAt: string;
  recipientCount?: number;
}

export interface CreateCampaignPayload {
  title: string;
  message: string;
  target: CampaignTarget;
  region?: string;
  role?: string;
  scheduledAt?: string;
}
```

### `src/app/core/models/medical-record.model.ts`

```typescript
export type BloodType =
  | 'A_POSITIVE' | 'A_NEGATIVE'
  | 'B_POSITIVE' | 'B_NEGATIVE'
  | 'AB_POSITIVE' | 'AB_NEGATIVE'
  | 'O_POSITIVE' | 'O_NEGATIVE'
  | 'UNKNOWN';

export interface MedicalNote {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  bloodType: BloodType;
  allergies: string[];
  chronicDiseases: string[];
  notes: MedicalNote[];
}
```

### `src/app/core/models/medication.model.ts`

```typescript
export type MedicationFrequency =
  | 'ONCE_DAILY'
  | 'TWICE_DAILY'
  | 'THREE_TIMES_DAILY'
  | 'WEEKLY'
  | 'AS_NEEDED';

export type MedicationStatus = 'ACTIVE' | 'COMPLETED' | 'SUSPENDED';

export type IntakeStatus = 'TAKEN' | 'MISSED' | 'SKIPPED';

export interface Medication {
  id: string;
  patientId: string;
  prescribedBy: string;
  name: string;
  dosage: string;
  frequency: MedicationFrequency;
  startDate: string;
  endDate?: string;
  status: MedicationStatus;
  notes?: string;
}

export interface MedicationIntake {
  id: string;
  medicationId: string;
  status: IntakeStatus;
  scheduledAt: string;
  takenAt?: string;
  note?: string;
}
```

### `src/app/core/models/roles.enum.ts`

```typescript
export enum UserRole {
  PATIENT  = 'PATIENT',
  MEDICAL  = 'MEDICAL',
  AIDANT   = 'AIDANT',
  EMPLOYEE = 'EMPLOYEE',
  ADMIN    = 'ADMIN',
  CEO      = 'CEO',
}
```

### `src/app/core/models/user.model.ts`

```typescript
import { UserRole } from './roles.enum';

export interface User {
  id: string;
  cognitoSub: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  region?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}
```

### `src/app/features/admin/admin.routes.ts`

```typescript
import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/admin-dashboard.component')
    .then(m => m.AdminDashboardComponent);

const loadUserManagement = () =>
  import('./pages/user-management/user-management.component')
    .then(m => m.UserManagementComponent);

const loadUserForm = () =>
  import('./pages/user-form/user-form.component')
    .then(m => m.UserFormComponent);

const loadCampaignList = () =>
  import('./pages/campaign-list/campaign-list.component')
    .then(m => m.CampaignListComponent);

const loadCampaignForm = () =>
  import('./pages/campaign-form/campaign-form.component')
    .then(m => m.CampaignFormComponent);

export const ADMIN_ROUTES: Routes = [
  { path: '',                  redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',         loadComponent: loadDashboard },
  { path: 'users',             loadComponent: loadUserManagement },
  { path: 'users/new',         loadComponent: loadUserForm },
  { path: 'users/:id/edit',    loadComponent: loadUserForm },
  { path: 'campaigns',         loadComponent: loadCampaignList },
  { path: 'campaigns/new',     loadComponent: loadCampaignForm },
];
```

### `src/app/features/admin/pages/campaign-form/campaign-form.component.html`

```html
<div class="max-w-2xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Nouvelle campagne</h1>
    <p class="text-sm text-muted mt-1">Envoyer un message groupÃ© aux patients</p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  <div class="bg-surface rounded-lg border border-border p-6">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Titre *</label>
        <input type="text" formControlName="title"
               placeholder="Ex: Rappel prise mÃ©dicaments â€“ Mai 2026"
               class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
        @if (form.controls.title.invalid && form.controls.title.touched) {
          <p class="mt-1 text-xs text-red-600">Champ requis.</p>
        }
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea formControlName="message" rows="5"
                  placeholder="RÃ©digez votre message iciâ€¦"
                  class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none">
        </textarea>
        @if (form.controls.message.invalid && form.controls.message.touched) {
          <p class="mt-1 text-xs text-red-600">Minimum 10 caractÃ¨res.</p>
        }
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Cible *</label>
        <div class="grid grid-cols-3 gap-2">
          @for (t of targets; track t.value) {
            <label
              class="flex items-center justify-center px-3 py-2.5 rounded-md border
                     cursor-pointer transition-colors text-sm text-center"
              [class]="form.controls.target.value === t.value
                ? 'border-primary bg-primary-light text-primary'
                : 'border-border hover:bg-surface-2 text-gray-700'"
            >
              <input type="radio" formControlName="target"
                     [value]="t.value" class="hidden"/>
              {{ t.label }}
            </label>
          }
        </div>
      </div>

      @if (showRegion()) {
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">RÃ©gion</label>
          <input type="text" formControlName="region"
                 placeholder="Ex: YaoundÃ©, Doualaâ€¦"
                 class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
        </div>
      }

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">
          Date d'envoi planifiÃ©e
          <span class="text-muted font-normal ml-1">â€” optionnel, envoi immÃ©diat sinon</span>
        </label>
        <input type="datetime-local" formControlName="scheduledAt"
               class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button type="button" (click)="cancel()"
                class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                 hover:bg-surface-2 transition-colors">
          Annuler
        </button>
        <button type="submit" [disabled]="isLoading() || form.invalid"
                class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
          {{ isLoading() ? 'CrÃ©ationâ€¦' : 'CrÃ©er la campagne' }}
        </button>
      </div>

    </form>
  </div>
</div>
```

### `src/app/features/admin/pages/campaign-form/campaign-form.component.ts`

```typescript
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CampaignService } from '../../services/campaign.service';
import { CampaignTarget } from '../../../../core/models/campaign.model';

@Component({
  selector: 'pp-campaign-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './campaign-form.component.html',
})
export class CampaignFormComponent {
  private readonly fb              = inject(FormBuilder);
  private readonly router          = inject(Router);
  private readonly auth            = inject(AuthService);
  private readonly campaignService = inject(CampaignService);

  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly targets: { value: CampaignTarget; label: string }[] = [
    { value: 'ALL',    label: 'Tous les patients'     },
    { value: 'REGION', label: 'Par rÃ©gion'            },
    { value: 'ROLE',   label: 'Par rÃ´le'              },
  ];

  readonly form = this.fb.nonNullable.group({
    title:       ['', Validators.required],
    message:     ['', [Validators.required, Validators.minLength(10)]],
    target:      ['ALL' as CampaignTarget, Validators.required],
    region:      [''],
    scheduledAt: [''],
  });

  readonly showRegion = () => this.form.controls.target.value === 'REGION';

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { title, message, target, region, scheduledAt } =
      this.form.getRawValue();

    try {
      await this.campaignService.create({
        title,
        message,
        target,
        region:      target === 'REGION' && region ? region : undefined,
        scheduledAt: scheduledAt ? new Date(scheduledAt).toISOString() : undefined,
      }).toPromise();

      this.router.navigate(['/admin/campaigns']);
    } catch {
      this.error.set('Erreur lors de la crÃ©ation. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/campaigns']);
  }
}
```

### `src/app/features/admin/pages/campaign-list/campaign-list.component.html`

```html
<div class="max-w-5xl mx-auto px-4 py-8">

  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold text-gray-900">Campagnes</h1>
      <p class="text-sm text-muted mt-1">{{ total() }} campagnes crÃ©Ã©es</p>
    </div>
    <a routerLink="../campaigns/new"
       class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md
              hover:bg-primary-hover transition-colors">
      + Nouvelle campagne
    </a>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <div class="grid gap-4">
      @for (campaign of campaigns(); track campaign.id) {
        <div class="bg-surface rounded-lg border border-border p-5">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <h2 class="text-sm font-medium text-gray-900 truncate">{{ campaign.title }}</h2>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                      [class]="statusStyle(campaign.status)">
                  {{ statusLabel(campaign.status) }}
                </span>
              </div>
              <p class="text-sm text-muted line-clamp-2">{{ campaign.message }}</p>
              <div class="flex items-center gap-4 mt-2 text-xs text-muted">
                <span>Cible : {{ campaign.target }}</span>
                @if (campaign.region) {
                  <span>RÃ©gion : {{ campaign.region }}</span>
                }
                @if (campaign.recipientCount !== undefined) {
                  <span>{{ campaign.recipientCount }} destinataires</span>
                }
                @if (campaign.scheduledAt) {
                  <span>
                    PlanifiÃ©e : {{ campaign.scheduledAt | date:'d MMM yyyy' : '' : 'fr' }}
                  </span>
                }
              </div>
            </div>
            @if (campaign.status === 'DRAFT') {
              <button
                (click)="delete(campaign.id)"
                class="flex-shrink-0 text-xs text-danger hover:underline"
              >
                Supprimer
              </button>
            }
          </div>
        </div>
      } @empty {
        <div class="bg-surface rounded-lg border border-border px-6 py-12 text-center">
          <p class="text-sm text-muted">Aucune campagne crÃ©Ã©e.</p>
        </div>
      }
    </div>

    @if (totalPages() > 1) {
      <div class="flex items-center justify-between mt-4">
        <p class="text-xs text-muted">Page {{ page() }} sur {{ totalPages() }}</p>
        <div class="flex gap-2">
          <button (click)="goToPage(page() - 1)" [disabled]="page() === 1"
                  class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed">
            PrÃ©cÃ©dent
          </button>
          <button (click)="goToPage(page() + 1)" [disabled]="page() === totalPages()"
                  class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed">
            Suivant
          </button>
        </div>
      </div>
    }

  }
</div>
```

### `src/app/features/admin/pages/campaign-list/campaign-list.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CampaignService } from '../../services/campaign.service';
import { Campaign, CampaignStatus } from '../../../../core/models/campaign.model';
import { firstValueFrom } from 'rxjs';

const STATUS_STYLE: Record<CampaignStatus, string> = {
  DRAFT:     'bg-gray-100 text-muted',
  SCHEDULED: 'bg-amber-50 text-warning',
  SENT:      'bg-green-50 text-success',
  CANCELLED: 'bg-red-50 text-danger',
};

const STATUS_LABEL: Record<CampaignStatus, string> = {
  DRAFT:     'Brouillon',
  SCHEDULED: 'PlanifiÃ©e',
  SENT:      'EnvoyÃ©e',
  CANCELLED: 'AnnulÃ©e',
};

@Component({
  selector: 'pp-campaign-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './campaign-list.component.html',
})
export class CampaignListComponent implements OnInit {
  private readonly campaignService = inject(CampaignService);

  readonly campaigns  = signal<Campaign[]>([]);
  readonly isLoading  = signal(true);
  readonly page       = signal(1);
  readonly total      = signal(0);
  readonly limit      = 20;

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly statusStyle = (s: CampaignStatus) => STATUS_STYLE[s] ?? 'bg-gray-100 text-muted';
  readonly statusLabel = (s: CampaignStatus) => STATUS_LABEL[s] ?? s;

  async ngOnInit(): Promise<void> {
    await this.loadCampaigns();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadCampaigns();
  }

  async delete(id: string): Promise<void> {
    if (!confirm('Supprimer cette campagne ?')) return;
    await this.campaignService.delete(id).toPromise();
    await this.loadCampaigns();
  }

  // campaign-list.component.ts - loadCampaigns()
  private async loadCampaigns(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.campaignService.getAll(this.page(), this.limit)
      );
      // res.data.data au lieu de res.data
      this.campaigns.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } finally {
      this.isLoading.set(false);
    }
  }

}
```

### `src/app/features/admin/pages/dashboard/admin-dashboard.component.html`

```html
<div class="max-w-5xl mx-auto px-4 py-8">

  <div class="mb-8">
    <h1 class="text-2xl font-semibold text-gray-900">Administration</h1>
    <p class="text-sm text-muted mt-1">Gestion des utilisateurs et des campagnes</p>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <!-- KPIs -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Utilisateurs</p>
        <p class="text-2xl font-semibold text-gray-900">{{ totalUsers() }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Patients</p>
        <p class="text-2xl font-semibold text-gray-900">{{ totalPatients() }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">EmployÃ©s terrain</p>
        <p class="text-2xl font-semibold text-gray-900">{{ totalEmployees() }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Campagnes</p>
        <p class="text-2xl font-semibold text-gray-900">{{ totalCampaigns() }}</p>
      </div>
    </div>

    <!-- Actions rapides -->
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="bg-surface rounded-lg border border-border p-6">
        <h2 class="text-base font-medium text-gray-900 mb-1">Utilisateurs</h2>
        <p class="text-sm text-muted mb-4">
          CrÃ©er, modifier ou dÃ©sactiver des comptes
        </p>
        <div class="flex gap-2">
          <a routerLink="../users"
             class="px-3 py-1.5 text-sm text-primary border border-primary rounded-md
                    hover:bg-primary-light transition-colors">
            Voir tout
          </a>
          <a routerLink="../users/new"
             class="px-3 py-1.5 text-sm text-white bg-primary rounded-md
                    hover:bg-primary-hover transition-colors">
            + CrÃ©er
          </a>
        </div>
      </div>

      <div class="bg-surface rounded-lg border border-border p-6">
        <h2 class="text-base font-medium text-gray-900 mb-1">Campagnes</h2>
        <p class="text-sm text-muted mb-4">
          Envoyer des messages groupÃ©s aux patients
        </p>
        <div class="flex gap-2">
          <a routerLink="../campaigns"
             class="px-3 py-1.5 text-sm text-primary border border-primary rounded-md
                    hover:bg-primary-light transition-colors">
            Voir tout
          </a>
          <a routerLink="../campaigns/new"
             class="px-3 py-1.5 text-sm text-white bg-primary rounded-md
                    hover:bg-primary-hover transition-colors">
            + Nouvelle
          </a>
        </div>
      </div>
    </div>

  }
</div>
```

### `src/app/features/admin/pages/dashboard/admin-dashboard.component.ts`

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminUserService } from '../../services/admin-user.service';
import { CampaignService } from '../../services/campaign.service';
import { UserRole } from '../../../../core/models/roles.enum';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  private readonly userService     = inject(AdminUserService);
  private readonly campaignService = inject(CampaignService);

  readonly totalUsers     = signal(0);
  readonly totalPatients  = signal(0);
  readonly totalEmployees = signal(0);
  readonly totalCampaigns = signal(0);
  readonly isLoading      = signal(true);

  // admin-dashboard.component.ts
  async ngOnInit(): Promise<void> {
    try {
      const [all, patients, employees, campaigns] = await Promise.all([
        firstValueFrom(this.userService.getAll(1, 1)),
        firstValueFrom(this.userService.getAll(1, 1, UserRole.PATIENT)),
        firstValueFrom(this.userService.getAll(1, 1, UserRole.EMPLOYEE)),
        firstValueFrom(this.campaignService.getAll(1, 1)),
      ]);

      this.totalUsers.set(all?.data?.total ?? 0);
      this.totalPatients.set(patients?.data?.total ?? 0);
      this.totalEmployees.set(employees?.data?.total ?? 0);
      // campaigns.data.total au lieu de campaigns.total
      this.totalCampaigns.set(campaigns?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading dashboard stats:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

}
```

### `src/app/features/admin/pages/user-form/user-form.component.html`

```html
<div class="max-w-2xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">
      {{ isEdit() ? 'Modifier l\'utilisateur' : 'CrÃ©er un utilisateur' }}
    </h1>
    <p class="text-sm text-muted mt-1">
      {{ isEdit() ? 'Mettre Ã  jour les informations du compte' : 'Nouveau compte sur la plateforme' }}
    </p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  @if (isFetching()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <div class="bg-surface rounded-lg border border-border p-6">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">PrÃ©nom *</label>
            <input type="text" formControlName="firstName"
                   class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
            @if (form.controls.firstName.invalid && form.controls.firstName.touched) {
              <p class="mt-1 text-xs text-red-600">Champ requis.</p>
            }
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Nom *</label>
            <input type="text" formControlName="lastName"
                   class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
            @if (form.controls.lastName.invalid && form.controls.lastName.touched) {
              <p class="mt-1 text-xs text-red-600">Champ requis.</p>
            }
          </div>
        </div>

        @if (!isEdit()) {
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
            <input type="email" formControlName="email"
                   placeholder="utilisateur@exemple.com"
                   class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
            @if (form.controls.email.invalid && form.controls.email.touched) {
              <p class="mt-1 text-xs text-red-600">Email invalide.</p>
            }
          </div>
        }

        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">TÃ©lÃ©phone</label>
            <input type="tel" formControlName="phone"
                   placeholder="+237600000000"
                   class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">RÃ©gion</label>
            <input type="text" formControlName="region"
                   placeholder="Ex: YaoundÃ©"
                   class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
          </div>
        </div>

        @if (!isEdit()) {
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1.5">RÃ´le *</label>
            <select formControlName="role"
                    class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              @for (role of roles; track role) {
                <option [value]="role">{{ role }}</option>
              }
            </select>
          </div>
        }

        <div class="flex items-center justify-end gap-3">
          <button type="button" (click)="cancel()"
                  class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                   hover:bg-surface-2 transition-colors">
            Annuler
          </button>
          <button type="submit" [disabled]="isLoading() || form.invalid"
                  class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                   hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
            {{ isLoading() ? 'Enregistrementâ€¦' : isEdit() ? 'Mettre Ã  jour' : 'CrÃ©er le compte' }}
          </button>
        </div>

      </form>
    </div>

  }
</div>
```

### `src/app/features/admin/pages/user-form/user-form.component.ts`

```typescript
import { Component, OnInit, inject, input, signal, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminUserService } from '../../services/admin-user.service';
import { UserRole } from '../../../../core/models/roles.enum';

@Component({
  selector: 'pp-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  private readonly fb          = inject(FormBuilder);
  private readonly router      = inject(Router);
  private readonly userService = inject(AdminUserService);

  readonly id        = input<string>();
  readonly isEdit    = computed(() => !!this.id());
  readonly isLoading = signal(false);
  readonly isFetching = signal(false);
  readonly error     = signal<string | null>(null);

  readonly roles = Object.values(UserRole);

  readonly form = this.fb.nonNullable.group({
    firstName:  ['', Validators.required],
    lastName:   ['', Validators.required],
    email:      ['', [Validators.required, Validators.email]],
    phone:      [''],
    role:       [UserRole.PATIENT, Validators.required],
    region:     [''],
    cognitoSub: [''],
  });

  async ngOnInit(): Promise<void> {
    const id = this.id();
    if (!id) return;

    this.isFetching.set(true);
    try {
      const user = await this.userService.getById(id).toPromise();
      if (!user) return;
      this.form.patchValue({
        firstName: user.firstName,
        lastName:  user.lastName,
        phone:     user.phone ?? '',
        role:      user.role,
        region:    user.region ?? '',
      });
      this.form.controls.email.disable();
    } finally {
      this.isFetching.set(false);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { firstName, lastName, email, phone, role, region, cognitoSub } =
      this.form.getRawValue();

    try {
      if (this.isEdit()) {
        await this.userService.update(this.id()!, {
          firstName,
          lastName,
          phone:  phone  || undefined,
          region: region || undefined,
        }).toPromise();
      } else {
        await this.userService.create({
          cognitoSub: cognitoSub || crypto.randomUUID(),
          email,
          firstName,
          lastName,
          phone:  phone  || undefined,
          role,
          region: region || undefined,
        }).toPromise();
      }

      this.router.navigate(['/admin/users']);
    } catch {
      this.error.set('Erreur lors de l\'enregistrement. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/users']);
  }
}
```

### `src/app/features/admin/pages/user-management/user-management.component.html`

```html
<div class="max-w-6xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold text-gray-900">Utilisateurs</h1>
      <p class="text-sm text-muted mt-1">{{ total() }} comptes enregistrÃ©s</p>
    </div>
    <a routerLink="../users/new"
       class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md
              hover:bg-primary-hover transition-colors">
      + CrÃ©er un utilisateur
    </a>
  </div>

  <!-- Filtres -->
  <div class="flex flex-wrap gap-3 mb-6">
    <input
      type="text"
      [ngModel]="search()"
      (ngModelChange)="search.set($event)"
      placeholder="Rechercher par nom ou emailâ€¦"
      class="px-3 py-2 rounded-md border border-border bg-surface text-sm w-full sm:w-64
             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
    <select
      [ngModel]="filterRole()"
      (ngModelChange)="onRoleFilter($event)"
      class="px-3 py-2 rounded-md border border-border bg-surface text-sm
             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
      <option value="">Tous les rÃ´les</option>
      @for (role of roles; track role) {
        <option [value]="role">{{ role }}</option>
      }
    </select>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <div class="bg-surface rounded-lg border border-border overflow-hidden">
      <table class="w-full text-sm">
        <thead>
        <tr class="border-b border-border bg-surface-2">
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Utilisateur</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden sm:table-cell">Email</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">RÃ´le</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden md:table-cell">RÃ©gion</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Statut</th>
          <th class="px-4 py-3"></th>
        </tr>
        </thead>
        <tbody>
          @for (user of filtered(); track user.id) {
            <tr class="border-b border-border last:border-0 hover:bg-surface-2 transition-colors">
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-primary-light flex items-center
                              justify-center flex-shrink-0">
                    <span class="text-xs font-medium text-primary">
                      {{ user.firstName[0] }}{{ user.lastName[0] }}
                    </span>
                  </div>
                  <span class="font-medium text-gray-900">
                    {{ user.firstName }} {{ user.lastName }}
                  </span>
                </div>
              </td>
              <td class="px-4 py-3 text-muted hidden sm:table-cell">{{ user.email }}</td>
              <td class="px-4 py-3">
                <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                      [class]="roleStyle(user.role)">
                  {{ user.role }}
                </span>
              </td>
              <td class="px-4 py-3 text-muted hidden md:table-cell">
                {{ user.region ?? 'â€”' }}
              </td>
              <td class="px-4 py-3">
                <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                      [class]="user.status === 'ACTIVE'
                        ? 'bg-green-50 text-success'
                        : 'bg-gray-100 text-muted'">
                  {{ user.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center justify-end gap-3">
                  <a [routerLink]="['../users', user.id, 'edit']"
                     class="text-xs text-primary hover:underline">
                    Modifier
                  </a>
                  @if (user.status === 'ACTIVE') {
                    <button
                      (click)="deactivate(user)"
                      class="text-xs text-danger hover:underline"
                    >
                      DÃ©sactiver
                    </button>
                  }
                </div>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="6" class="px-4 py-12 text-center text-sm text-muted">
                Aucun utilisateur trouvÃ©.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    @if (totalPages() > 1) {
      <div class="flex items-center justify-between mt-4">
        <p class="text-xs text-muted">Page {{ page() }} sur {{ totalPages() }}</p>
        <div class="flex gap-2">
          <button
            (click)="goToPage(page() - 1)"
            [disabled]="page() === 1"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            PrÃ©cÃ©dent
          </button>
          <button
            (click)="goToPage(page() + 1)"
            [disabled]="page() === totalPages()"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    }

  }
</div>
```

### `src/app/features/admin/pages/user-management/user-management.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminUserService } from '../../services/admin-user.service';
import { User } from '../../../../core/models/user.model';
import { UserRole } from '../../../../core/models/roles.enum';
import { firstValueFrom } from 'rxjs';

const ROLE_STYLE: Record<UserRole, string> = {
  [UserRole.PATIENT]:  'bg-blue-50 text-blue-700',
  [UserRole.MEDICAL]:  'bg-purple-50 text-primary',
  [UserRole.AIDANT]:   'bg-gray-100 text-muted',
  [UserRole.EMPLOYEE]: 'bg-amber-50 text-warning',
  [UserRole.ADMIN]:    'bg-red-50 text-danger',
  [UserRole.CEO]:      'bg-green-50 text-success',
};

@Component({
  selector: 'pp-user-management',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent implements OnInit {
  private readonly userService = inject(AdminUserService);

  readonly users       = signal<User[]>([]);
  readonly isLoading   = signal(true);
  readonly search      = signal('');
  readonly filterRole  = signal<UserRole | ''>('');
  readonly page        = signal(1);
  readonly total       = signal(0);
  readonly limit       = 20;

  readonly roles = Object.values(UserRole);

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    return this.users().filter(u => {
      const matchSearch = !q ||
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchRole = !this.filterRole() || u.role === this.filterRole();
      return matchSearch && matchRole;
    });
  });

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly roleStyle = (role: UserRole) => ROLE_STYLE[role] ?? 'bg-gray-100 text-muted';

  async ngOnInit(): Promise<void> {
    await this.loadUsers();
  }

  // user-management.component.ts
  async loadUsers(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.userService.getAll(
          this.page(),
          this.limit,
          this.filterRole() as UserRole || undefined,
        )
      );
      // âœ… MÃªme correction
      this.users.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading users:', error);
      this.users.set([]);
      this.total.set(0);
    } finally {
      this.isLoading.set(false);
    }
  }

  async onRoleFilter(role: UserRole | ''): Promise<void> {
    this.filterRole.set(role);
    this.page.set(1);
    await this.loadUsers();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadUsers();
  }

  async deactivate(user: User): Promise<void> {
    if (!confirm(`DÃ©sactiver ${user.firstName} ${user.lastName} ?`)) return;
    await this.userService
      .update(user.id, { status: 'INACTIVE' })
      .toPromise();
    await this.loadUsers();
  }
}
```

### `src/app/features/admin/services/admin-user.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/models/user.model';
import { UserRole } from '../../../core/models/roles.enum';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface CreateUserPayload {
  cognitoSub: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  region?: string;
}

interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  phone?: string;
  region?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

@Injectable({ providedIn: 'root' })
export class AdminUserService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;

  getAll(
    page = 1,
    limit = 20,
    role?: UserRole,
    region?: string,
  ): Observable<ApiResponse<PaginatedData<User>>> {
    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    if (role)   params = params.set('role', role);
    if (region) params = params.set('region', region);

    return this.http.get<ApiResponse<PaginatedData<User>>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateUserPayload): Observable<User> {
    return this.http.post<User>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateUserPayload): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

### `src/app/features/admin/services/campaign.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Campaign, CreateCampaignPayload } from '../../../core/models/campaign.model';

// Ajouter l'interface ApiResponse
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// Garder PaginatedResponse pour la structure interne
interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/campaigns`;

  getAll(page = 1, limit = 20): Observable<ApiResponse<PaginatedData<Campaign>>> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedData<Campaign>>>(this.baseUrl, { params });
  }

  create(payload: CreateCampaignPayload): Observable<Campaign> {
    return this.http.post<Campaign>(this.baseUrl, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

### `src/app/features/auth/login/login.component.html`

```html
<div class="min-h-screen bg-surface-2 flex items-center justify-center px-4">
  <div class="w-full max-w-md">

    <!-- Logo / Brand -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary mb-4">
        <span class="text-white font-semibold text-lg">P</span>
      </div>
      <h1 class="text-2xl font-semibold text-gray-900">PurplePoint</h1>
      <p class="text-sm text-muted mt-1">Plateforme de santÃ© connectÃ©e</p>
    </div>

    <!-- Card -->
    <div class="bg-surface rounded-lg border border-border p-8 shadow-sm">
      <h2 class="text-lg font-medium text-gray-900 mb-6">Connexion</h2>

      <!-- Error banner -->
      @if (error()) {
        <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
          {{ error() }}
        </div>
      }

      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">
            Adresse email
          </label>
          <input
            id="email"
            type="email"
            formControlName="email"
            autocomplete="email"
            placeholder="vous@exemple.com"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   placeholder:text-muted transition-shadow"
          />
          @if (form.controls.email.invalid && form.controls.email.touched) {
            <p class="mt-1 text-xs text-red-600">Email invalide.</p>
          }
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1.5">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            formControlName="password"
            autocomplete="current-password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   placeholder:text-muted transition-shadow"
          />
          @if (form.controls.password.invalid && form.controls.password.touched) {
            <p class="mt-1 text-xs text-red-600">8 caractÃ¨res minimum.</p>
          }
        </div>

        <!-- Submit -->
        <button
          type="submit"
          [disabled]="isLoading()"
          class="w-full py-2.5 px-4 rounded-md bg-primary text-white text-sm font-medium
                 hover:bg-primary-hover active:scale-[0.99] transition-all
                 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          @if (isLoading()) {
            <span class="inline-flex items-center gap-2">
              <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Connexion...
            </span>
          } @else {
            Se connecter
          }
        </button>

      </form>
    </div>

  </div>
</div>
```

### `src/app/features/auth/login/login.component.ts`

```typescript
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pp-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly fb   = inject(FormBuilder);
  private readonly auth = inject(AuthService);

  readonly isLoading = this.auth.isLoading;
  readonly error     = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    email:    ['docteur.martin@purplepoint.dev', [Validators.required, Validators.email]],
    password: ['PurplePoint2026!', [Validators.required, Validators.minLength(8)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.error.set(null);

    const { email, password } = this.form.getRawValue();

    try {
      await this.auth.login(email, password);
    } catch (err: unknown) {
      this.error.set(this.parseError(err));
    }
  }

  private parseError(err: unknown): string {
    if (err instanceof Error) {
      if (err.message.includes('Incorrect username or password'))
        return 'Email ou mot de passe incorrect.';
      if (err.message.includes('User is not confirmed'))
        return 'Compte non vÃ©rifiÃ©. VÃ©rifiez votre email.';
    }
    console.log(':: ERROR ::', err);
    return 'Une erreur est survenue. RÃ©essayez.';
  }
}
```

### `src/app/features/employee/employee.routes.ts`

```typescript
import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/employee-dashboard.component')
    .then(m => m.EmployeeDashboardComponent);

const loadCallLogForm = () =>
  import('./pages/call-log-form/call-log-form.component')
    .then(m => m.CallLogFormComponent);

const loadCallHistory = () =>
  import('./pages/call-history/call-history.component')
    .then(m => m.CallHistoryComponent);

export const EMPLOYEE_ROUTES: Routes = [
  { path: '',            redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',   loadComponent: loadDashboard },
  { path: 'calls/new',   loadComponent: loadCallLogForm },
  { path: 'calls',       loadComponent: loadCallHistory },
];
```

### `src/app/features/employee/pages/call-history/call-history.component.html`

```html
<div class="max-w-4xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold text-gray-900">Historique des appels</h1>
      <p class="text-sm text-muted mt-1">{{ total() }} appels enregistrÃ©s</p>
    </div>
    <a routerLink="../calls/new"
       class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md
              hover:bg-primary-hover transition-colors">
      + Nouvel appel
    </a>
  </div>

  <!-- Pending sync banner -->
  @if (pendingCount() > 0) {
    <div class="mb-6 px-4 py-3 rounded-md bg-amber-50 border border-amber-200 text-sm text-warning
                flex items-center gap-2">
      <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2">
        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      </svg>
      {{ pendingCount() }} appel(s) locaux en attente de synchronisation
    </div>
  }

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <div class="bg-surface rounded-lg border border-border overflow-hidden">
      <table class="w-full text-sm">
        <thead>
        <tr class="border-b border-border bg-surface-2">
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Patient</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden sm:table-cell">Date</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden md:table-cell">DurÃ©e</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">RÃ©sultat</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden lg:table-cell">Notes</th>
        </tr>
        </thead>
        <tbody>
          @for (call of calls(); track call.id) {
            <tr class="border-b border-border last:border-0 hover:bg-surface-2 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-900">
                {{ call.patientName ?? call.patientId }}
              </td>
              <td class="px-4 py-3 text-muted hidden sm:table-cell">
                {{ call.calledAt | date:'d MMM yyyy, HH:mm' : '' : 'fr' }}
              </td>
              <td class="px-4 py-3 text-muted hidden md:table-cell">
                {{ call.duration ? call.duration + 's' : 'â€”' }}
              </td>
              <td class="px-4 py-3">
                <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                      [class]="outcomeStyle(call.outcome)">
                  {{ outcomeLabel(call.outcome) }}
                </span>
              </td>
              <td class="px-4 py-3 text-muted text-xs hidden lg:table-cell max-w-xs truncate">
                {{ call.notes ?? 'â€”' }}
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="5" class="px-4 py-12 text-center text-sm text-muted">
                Aucun appel enregistrÃ©.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    @if (totalPages() > 1) {
      <div class="flex items-center justify-between mt-4">
        <p class="text-xs text-muted">Page {{ page() }} sur {{ totalPages() }}</p>
        <div class="flex gap-2">
          <button
            (click)="goToPage(page() - 1)"
            [disabled]="page() === 1"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            PrÃ©cÃ©dent
          </button>
          <button
            (click)="goToPage(page() + 1)"
            [disabled]="page() === totalPages()"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Suivant
          </button>
        </div>
      </div>
    }

  }
</div>
```

### `src/app/features/employee/pages/call-history/call-history.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CallService } from '../../services/call.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { Call, CallOutcome } from '../../../../core/models/call.model';

const OUTCOME_LABEL: Record<CallOutcome, string> = {
  REACHED:            'Contact abouti',
  NO_ANSWER:          'Pas de rÃ©ponse',
  BUSY:               'OccupÃ©',
  WRONG_NUMBER:       'Mauvais numÃ©ro',
  CALLBACK_REQUESTED: 'Rappel demandÃ©',
};

const OUTCOME_STYLE: Record<CallOutcome, string> = {
  REACHED:            'bg-green-50 text-success',
  NO_ANSWER:          'bg-gray-100 text-muted',
  BUSY:               'bg-gray-100 text-muted',
  WRONG_NUMBER:       'bg-red-50 text-danger',
  CALLBACK_REQUESTED: 'bg-purple-50 text-primary',
};

@Component({
  selector: 'pp-call-history',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './call-history.component.html',
})
export class CallHistoryComponent implements OnInit {
  private readonly auth           = inject(AuthService);
  private readonly callService    = inject(CallService);
  private readonly offlineService = inject(OfflineCallService);

  readonly calls        = signal<Call[]>([]);
  readonly isLoading    = signal(true);
  readonly page         = signal(1);
  readonly total        = signal(0);
  readonly limit        = 20;
  readonly pendingCount = this.offlineService.pendingCount;

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  readonly outcomeLabel = (o: CallOutcome) => OUTCOME_LABEL[o] ?? o;
  readonly outcomeStyle = (o: CallOutcome) => OUTCOME_STYLE[o] ?? 'bg-gray-100 text-muted';

  async ngOnInit(): Promise<void> {
    await this.loadCalls();
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadCalls();
  }

  private async loadCalls(): Promise<void> {
    const employeeId = this.auth.currentUser()?.id;
    if (!employeeId) return;

    this.isLoading.set(true);
    try {
      const res = await this.callService
        .getByEmployee(employeeId, this.page(), this.limit)
        .toPromise();
      this.calls.set(res?.data ?? []);
      this.total.set(res?.total ?? 0);
    } finally {
      this.isLoading.set(false);
    }
  }
}
```

### `src/app/features/employee/pages/call-log-form/call-log-form.component.html`

```html
<div class="max-w-xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Enregistrer un appel</h1>
    <p class="text-sm text-muted mt-1">
      @if (!isOnline()) {
        <span class="text-warning">Hors ligne â€” l'appel sera synchronisÃ© Ã  la reconnexion</span>
      } @else {
        Remplissez les informations de l'appel
      }
    </p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  <div class="bg-surface rounded-lg border border-border p-6">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <!-- Recherche patient -->
      <div class="mb-4 relative">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Patient *</label>
        <input
          type="text"
          [ngModel]="patientQuery()"
          (ngModelChange)="searchPatients($event)"
          [ngModelOptions]="{standalone: true}"
          placeholder="Rechercher un patientâ€¦"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        @if (isSearching()) {
          <div class="absolute right-3 top-9">
            <svg class="animate-spin h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
          </div>
        }

        @if (patients().length > 0) {
          <div class="absolute z-10 w-full mt-1 bg-surface border border-border rounded-md shadow-sm overflow-hidden">
            @for (patient of patients(); track patient.id) {
              <button
                type="button"
                (click)="selectPatient(patient)"
                class="w-full text-left px-3 py-2.5 text-sm hover:bg-surface-2 transition-colors
                       border-b border-border last:border-0"
              >
                <span class="font-medium text-gray-900">
                  {{ patient.firstName }} {{ patient.lastName }}
                </span>
                <span class="text-muted ml-2">{{ patient.region }}</span>
              </button>
            }
          </div>
        }

        @if (form.controls.patientId.invalid && form.controls.patientId.touched) {
          <p class="mt-1 text-xs text-red-600">Veuillez sÃ©lectionner un patient.</p>
        }
      </div>

      <!-- RÃ©sultat de l'appel -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">RÃ©sultat *</label>
        <div class="grid grid-cols-2 gap-2">
          @for (outcome of outcomes; track outcome.value) {
            <label
              class="flex items-center gap-2 px-3 py-2.5 rounded-md border cursor-pointer
                     transition-colors text-sm"
              [class]="form.controls.outcome.value === outcome.value
                ? 'border-primary bg-primary-light text-primary'
                : 'border-border hover:bg-surface-2 text-gray-700'"
            >
              <input
                type="radio"
                formControlName="outcome"
                [value]="outcome.value"
                class="hidden"
              />
              {{ outcome.label }}
            </label>
          }
        </div>
      </div>

      <!-- DurÃ©e -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">
          DurÃ©e (secondes)
          <span class="text-muted font-normal ml-1">â€” optionnel, calculÃ©e auto sinon</span>
        </label>
        <input
          type="number"
          formControlName="duration"
          min="0"
          placeholder="Ex: 120"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <!-- Notes -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
        <textarea
          formControlName="notes"
          rows="3"
          placeholder="Observations, informations remontÃ©es par le patientâ€¦"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        ></textarea>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button
          type="button"
          (click)="cancel()"
          class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                 hover:bg-surface-2 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          [disabled]="isLoading() || form.invalid"
          class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {{ isLoading() ? 'Enregistrementâ€¦' : isOnline() ? 'Enregistrer' : 'Enregistrer (hors ligne)' }}
        </button>
      </div>

    </form>
  </div>
</div>
```

### `src/app/features/employee/pages/call-log-form/call-log-form.component.ts`

```typescript
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { UserService } from '../../../medical/services/user.service';
import { User } from '../../../../core/models/user.model';
import { CallOutcome } from '../../../../core/models/call.model';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-call-log-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './call-log-form.component.html',
})
export class CallLogFormComponent {
  private readonly fb             = inject(FormBuilder);
  private readonly router         = inject(Router);
  private readonly auth           = inject(AuthService);
  private readonly offlineService = inject(OfflineCallService);
  private readonly userService    = inject(UserService);

  readonly isLoading    = signal(false);
  readonly isOnline     = signal(navigator.onLine);
  readonly error        = signal<string | null>(null);
  readonly patientQuery = signal('');
  readonly patients     = signal<User[]>([]);
  readonly isSearching  = signal(false);
  readonly startTime    = Date.now();

  readonly outcomes: { value: CallOutcome; label: string }[] = [
    { value: 'REACHED',            label: 'Contact abouti'         },
    { value: 'NO_ANSWER',          label: 'Pas de rÃ©ponse'         },
    { value: 'BUSY',               label: 'OccupÃ©'                 },
    { value: 'WRONG_NUMBER',       label: 'Mauvais numÃ©ro'         },
    { value: 'CALLBACK_REQUESTED', label: 'Rappel demandÃ©'         },
  ];

  readonly form = this.fb.nonNullable.group({
    patientId: ['', Validators.required],
    outcome:   ['REACHED' as CallOutcome, Validators.required],
    duration:  [0],
    notes:     [''],
  });

  // call-log-form.component.ts
  async searchPatients(query: string): Promise<void> {
    this.patientQuery.set(query);
    if (query.length < 2) {
      this.patients.set([]);
      return;
    }

    this.isSearching.set(true);
    try {
      const res = await firstValueFrom(this.userService.getPatients(1, 10));
      // âœ… Correction : res.data.data au lieu de res.data
      const patientsList = res?.data?.data ?? [];
      const q = query.toLowerCase();
      this.patients.set(
        patientsList.filter(p =>
          `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
        )
      );
    } catch (error) {
      console.error('Error searching patients:', error);
      this.patients.set([]);
    } finally {
      this.isSearching.set(false);
    }
  }

  selectPatient(patient: User): void {
    this.form.patchValue({ patientId: patient.id });
    this.patientQuery.set(`${patient.firstName} ${patient.lastName}`);
    this.patients.set([]);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    const { patientId, outcome, duration, notes } = this.form.getRawValue();

    try {
      await this.offlineService.submit({
        employeeId: this.auth.currentUser()!.id,
        patientId,
        outcome,
        duration:   duration || elapsed,
        notes:      notes || undefined,
        calledAt:   new Date().toISOString(),
      });

      this.router.navigate(['/employee/dashboard']);
    } catch {
      this.error.set('Erreur lors de l\'enregistrement. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/employee/dashboard']);
  }
}
```

### `src/app/features/employee/pages/dashboard/employee-dashboard.component.html`

```html
<div class="max-w-4xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="flex items-center justify-between mb-8">
    <div>
      <h1 class="text-2xl font-semibold text-gray-900">
        Bonjour, {{ user()?.firstName }} ðŸ‘‹
      </h1>
      <p class="text-sm text-muted mt-1">Tableau de bord terrain</p>
    </div>

    <!-- Statut connexion -->
    <div class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
         [class]="isOnline()
           ? 'bg-green-50 text-success'
           : 'bg-amber-50 text-warning'">
      <span class="w-1.5 h-1.5 rounded-full"
            [class]="isOnline() ? 'bg-success' : 'bg-warning'"></span>
      {{ isOnline() ? 'En ligne' : 'Hors ligne' }}
    </div>
  </div>

  <!-- Pending sync banner -->
  @if (pendingCount() > 0) {
    <div class="mb-6 px-4 py-3 rounded-md bg-amber-50 border border-amber-200
                flex items-center justify-between">
      <div class="flex items-center gap-2 text-sm text-warning">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        </svg>
        {{ pendingCount() }} appel(s) en attente de synchronisation
      </div>
      <span class="text-xs text-muted">Synchronisation automatique au retour de connexion</span>
    </div>
  }

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <!-- KPIs -->
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Appels aujourd'hui</p>
        <p class="text-2xl font-semibold text-gray-900">{{ todayCallCount() }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Contacts aboutis</p>
        <p class="text-2xl font-semibold text-gray-900">{{ reachedCount() }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Taux de contact</p>
        <p class="text-2xl font-semibold text-gray-900">{{ contactRate() }}%</p>
      </div>
    </div>

    <!-- CTA principal -->
    <div class="bg-primary rounded-lg p-6 mb-8 flex items-center justify-between">
      <div>
        <p class="text-white font-medium">Enregistrer un appel</p>
        <p class="text-purple-200 text-sm mt-0.5">Moins de 30 secondes</p>
      </div>
      <a routerLink="../calls/new"
         class="px-4 py-2 bg-white text-primary text-sm font-medium rounded-md
                hover:bg-purple-50 transition-colors">
        Nouvel appel
      </a>
    </div>

    <!-- Appels rÃ©cents -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-base font-medium text-gray-900">Appels rÃ©cents</h2>
        <a routerLink="../calls" class="text-sm text-primary hover:underline">
          Voir tout
        </a>
      </div>

      @if (recentCalls().length === 0) {
        <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
          <p class="text-sm text-muted">Aucun appel enregistrÃ©.</p>
        </div>
      } @else {
        <div class="bg-surface rounded-lg border border-border overflow-hidden">
          @for (call of recentCalls().slice(0, 5); track call.id) {
            <div class="flex items-center justify-between px-4 py-3
                        border-b border-border last:border-0">
              <div>
                <p class="text-sm font-medium text-gray-900">
                  {{ call.patientName ?? call.patientId }}
                </p>
                <p class="text-xs text-muted mt-0.5">
                  {{ call.calledAt | date: 'd MMM, HH:mm' : '' : 'fr' }}
                  @if (call.duration) { Â· {{ call.duration }}s }
                </p>
              </div>
              <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                    [class]="call.outcome === 'REACHED'
                      ? 'bg-green-50 text-success'
                      : 'bg-gray-100 text-muted'">
                {{ call.outcome }}
              </span>
            </div>
          }
        </div>
      }
    </section>

  }
</div>
```

### `src/app/features/employee/pages/dashboard/employee-dashboard.component.ts`

```typescript
import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CallService } from '../../services/call.service';
import { OfflineCallService } from '../../services/offline-call.service';
import { Call } from '../../../../core/models/call.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pp-employee-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './employee-dashboard.component.html',
})
export class EmployeeDashboardComponent implements OnInit, OnDestroy {
  private readonly auth = inject(AuthService);
  private readonly callService = inject(CallService);
  private readonly offlineService = inject(OfflineCallService);

  readonly user = this.auth.currentUser;
  readonly recentCalls = signal<Call[]>([]);
  readonly isLoading = signal(true);
  readonly isOnline = signal(navigator.onLine);
  readonly pendingCount = this.offlineService.pendingCount;

  readonly todayCallCount = computed(() => {
    const today = new Date().toDateString();
    return this.recentCalls().filter((c) => new Date(c.calledAt).toDateString() === today).length;
  });

  readonly reachedCount = computed(
    () => this.recentCalls().filter((c) => c.outcome === 'REACHED').length,
  );

  readonly contactRate = computed(() => {
    const total = this.recentCalls().length;
    if (total === 0) return 0;
    return Math.round((this.reachedCount() / total) * 100);
  });

  private readonly onlineHandler = () => {
    this.isOnline.set(true);
    this.offlineService.syncQueue();
  };
  private readonly offlineHandler = () => this.isOnline.set(false);

  async ngOnInit(): Promise<void> {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
    await this.loadRecentCalls();
  }

  ngOnDestroy(): void {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

  private async loadRecentCalls(): Promise<void> {
    const employeeId = this.user()?.id;
    if (!employeeId) return;

    this.isLoading.set(true);
    try {
      const res = await this.callService.getByEmployee(employeeId, 1, 50).toPromise();
      this.recentCalls.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
```

### `src/app/features/employee/services/call.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Call, CreateCallPayload } from '../../../core/models/call.model';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

@Injectable({ providedIn: 'root' })
export class CallService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/calls`;

  getByEmployee(
    employeeId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Call>> {
    const params = new HttpParams()
      .set('employeeId', employeeId)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<PaginatedResponse<Call>>(this.baseUrl, { params });
  }

  create(payload: CreateCallPayload): Observable<Call> {
    return this.http.post<Call>(this.baseUrl, payload);
  }
}
```

### `src/app/features/employee/services/offline-call.service.ts`

```typescript
import { Injectable, inject, signal } from '@angular/core';
import { Call, CreateCallPayload, CallStatus } from '../../../core/models/call.model';
import { CallService } from './call.service';
import { AuthService } from '../../../core/auth/auth.service';

const QUEUE_KEY = 'pp_call_queue';

@Injectable({ providedIn: 'root' })
export class OfflineCallService {
  private readonly callService = inject(CallService);
  private readonly auth        = inject(AuthService);

  readonly pendingCount = signal(this.loadQueue().length);

  /** CrÃ©e un appel : online â†’ API directement, offline â†’ queue locale */
  async submit(payload: CreateCallPayload): Promise<void> {
    if (navigator.onLine) {
      await this.callService.create(payload).toPromise();
    } else {
      this.enqueue(payload);
    }
  }

  /** Rejoue la queue au retour de la connexion */
  async syncQueue(): Promise<void> {
    const queue = this.loadQueue();
    if (queue.length === 0) return;

    const results = await Promise.allSettled(
      queue.map(p => this.callService.create(p).toPromise())
    );

    const remaining = queue.filter((_, i) =>
      results[i].status === 'rejected'
    );

    this.saveQueue(remaining);
    this.pendingCount.set(remaining.length);
  }

  private enqueue(payload: CreateCallPayload): void {
    const queue = this.loadQueue();
    queue.push(payload);
    this.saveQueue(queue);
    this.pendingCount.set(queue.length);
  }

  private loadQueue(): CreateCallPayload[] {
    try {
      return JSON.parse(localStorage.getItem(QUEUE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private saveQueue(queue: CreateCallPayload[]): void {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }
}
```

### `src/app/features/medical/medical.routes.ts`

```typescript
import { Routes } from '@angular/router';

const loadPatientList = () =>
  import('./pages/patient-list/patient-list.component')
    .then(m => m.PatientListComponent);

const loadPatientDetail = () =>
  import('./pages/patient-detail/patient-detail.component')
    .then(m => m.PatientDetailComponent);

const loadMedicationForm = () =>
  import('./pages/medication-form/medication-form.component')
    .then(m => m.MedicationFormComponent);

const loadAppointmentForm = () =>
  import('./pages/appointment-form/appointment-form.component')
    .then(m => m.AppointmentFormComponent);

const loadMedicalNoteForm = () =>
  import('./pages/medical-note-form/medical-note-form.component')
    .then(m => m.MedicalNoteFormComponent);

export const MEDICAL_ROUTES: Routes = [
  { path: '',                           redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients',                   loadComponent: loadPatientList },
  { path: 'patients/:id',               loadComponent: loadPatientDetail },
  { path: 'patients/:id/medications/new',    loadComponent: loadMedicationForm },
  { path: 'patients/:id/appointments/new',   loadComponent: loadAppointmentForm },
  { path: 'patients/:id/notes/new',          loadComponent: loadMedicalNoteForm },
];
```

### `src/app/features/medical/pages/appointment-form/appointment-form.component.html`

```html
<div class="max-w-2xl mx-auto px-4 py-8">
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Ajouter un rendez-vous</h1>
    <p class="text-sm text-muted mt-1">Planifier un rendez-vous pour ce patient</p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  <div class="bg-surface rounded-lg border border-border p-6">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Type de rendez-vous *</label>
        <select
          formControlName="type"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          @for (t of types; track t.value) {
            <option [value]="t.value">{{ t.label }}</option>
          }
        </select>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Date et heure *</label>
          <input
            type="datetime-local"
            formControlName="scheduledAt"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          @if (form.controls.scheduledAt.invalid && form.controls.scheduledAt.touched) {
            <p class="mt-1 text-xs text-red-600">Date requise.</p>
          }
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">DurÃ©e (minutes) *</label>
          <input
            type="number"
            formControlName="duration"
            min="5"
            step="5"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          @if (form.controls.duration.invalid && form.controls.duration.touched) {
            <p class="mt-1 text-xs text-red-600">DurÃ©e minimum 5 minutes.</p>
          }
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Lieu</label>
        <input
          type="text"
          formControlName="location"
          placeholder="Ex: Cabinet MÃ©dical Central, YaoundÃ©"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
        <textarea
          formControlName="notes"
          rows="3"
          placeholder="Instructions ou informations complÃ©mentairesâ€¦"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        ></textarea>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button
          type="button"
          (click)="cancel()"
          class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                 hover:bg-surface-2 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          [disabled]="isLoading() || form.invalid"
          class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {{ isLoading() ? 'Enregistrementâ€¦' : 'CrÃ©er le rendez-vous' }}
        </button>
      </div>

    </form>
  </div>
</div>
```

### `src/app/features/medical/pages/appointment-form/appointment-form.component.ts`

```typescript
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalAppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
})
export class AppointmentFormComponent {
  private readonly fb      = inject(FormBuilder);
  private readonly router  = inject(Router);
  private readonly apptSvc = inject(MedicalAppointmentService);
  private readonly auth    = inject(AuthService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly types = [
    { value: 'CONSULTATION', label: 'Consultation'        },
    { value: 'FOLLOW_UP',    label: 'Suivi'               },
    { value: 'EMERGENCY',    label: 'Urgence'             },
    { value: 'HOME_VISIT',   label: 'Visite Ã  domicile'   },
  ];

  readonly form = this.fb.nonNullable.group({
    type:        ['CONSULTATION', Validators.required],
    scheduledAt: ['', Validators.required],
    duration:    [30, [Validators.required, Validators.min(5)]],
    location:    [''],
    notes:       [''],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { type, scheduledAt, duration, location, notes } =
      this.form.getRawValue();

    try {
      await this.apptSvc.create({
        patientId:  this.id(),
        providerId: this.auth.currentUser()!.id,
        type,
        scheduledAt: new Date(scheduledAt).toISOString(),
        duration,
        location:  location || undefined,
        notes:     notes    || undefined,
      }).toPromise();

      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set('Erreur lors de la crÃ©ation du rendez-vous. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
```

### `src/app/features/medical/pages/medical-note-form/medical-note-form.component.html`

```html
<div class="max-w-2xl mx-auto px-4 py-8">
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Ajouter une note mÃ©dicale</h1>
    <p class="text-sm text-muted mt-1">La note sera attachÃ©e au dossier du patient</p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  <div class="bg-surface rounded-lg border border-border p-6">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Contenu de la note *</label>
        <textarea
          formControlName="content"
          rows="6"
          placeholder="Observations cliniques, rÃ©sultats, recommandationsâ€¦"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        ></textarea>
        @if (form.controls.content.invalid && form.controls.content.touched) {
          <p class="mt-1 text-xs text-red-600">Minimum 10 caractÃ¨res requis.</p>
        }
      </div>

      <div class="flex items-center justify-end gap-3">
        <button
          type="button"
          (click)="cancel()"
          class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                 hover:bg-surface-2 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          [disabled]="isLoading() || form.invalid"
          class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {{ isLoading() ? 'Enregistrementâ€¦' : 'Enregistrer la note' }}
        </button>
      </div>
    </form>
  </div>
</div>
```

### `src/app/features/medical/pages/medical-note-form/medical-note-form.component.ts`

```typescript
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalRecordService } from '../../services/medical-record.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-medical-note-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './medical-note-form.component.html',
})
export class MedicalNoteFormComponent {
  private readonly fb        = inject(FormBuilder);
  private readonly router    = inject(Router);
  private readonly recordSvc = inject(MedicalRecordService);
  private readonly auth      = inject(AuthService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    try {
      await this.recordSvc.addNote(this.id(), {
        authorId: this.auth.currentUser()!.id,
        content:  this.form.getRawValue().content,
      }).toPromise();

      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set('Erreur lors de l\'enregistrement. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
```

### `src/app/features/medical/pages/medication-form/medication-form.component.html`

```html
<div class="max-w-2xl mx-auto px-4 py-8">
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Prescrire un mÃ©dicament</h1>
    <p class="text-sm text-muted mt-1">Nouveau traitement pour ce patient</p>
  </div>

  @if (error()) {
    <div class="mb-4 px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
      {{ error() }}
    </div>
  }

  <div class="bg-surface rounded-lg border border-border p-6">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">MÃ©dicament *</label>
          <input
            type="text"
            formControlName="name"
            placeholder="Ex: Metformine"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Dosage *</label>
          <input
            type="text"
            formControlName="dosage"
            placeholder="Ex: 500mg"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">FrÃ©quence *</label>
        <select
          formControlName="frequency"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          @for (f of frequencies; track f.value) {
            <option [value]="f.value">{{ f.label }}</option>
          }
        </select>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Date de dÃ©but *</label>
          <input
            type="date"
            formControlName="startDate"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Date de fin</label>
          <input
            type="date"
            formControlName="endDate"
            class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
        <textarea
          formControlName="notes"
          rows="3"
          placeholder="Instructions particuliÃ¨resâ€¦"
          class="w-full px-3 py-2 rounded-md border border-border bg-surface text-sm
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        ></textarea>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button
          type="button"
          (click)="cancel()"
          class="px-4 py-2 text-sm font-medium text-muted rounded-md border border-border
                 hover:bg-surface-2 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          [disabled]="isLoading() || form.invalid"
          class="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary
                 hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {{ isLoading() ? 'Enregistrementâ€¦' : 'Prescrire' }}
        </button>
      </div>

    </form>
  </div>
</div>
```

### `src/app/features/medical/pages/medication-form/medication-form.component.ts`

```typescript
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalMedicationService } from '../../services/medication.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'pp-medication-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './medication-form.component.html',
})
export class MedicationFormComponent {
  private readonly fb      = inject(FormBuilder);
  private readonly router  = inject(Router);
  private readonly medSvc  = inject(MedicalMedicationService);
  private readonly auth    = inject(AuthService);

  readonly id        = input.required<string>();
  readonly isLoading = signal(false);
  readonly error     = signal<string | null>(null);

  readonly frequencies = [
    { value: 'ONCE_DAILY',        label: '1Ã— par jour'     },
    { value: 'TWICE_DAILY',       label: '2Ã— par jour'     },
    { value: 'THREE_TIMES_DAILY', label: '3Ã— par jour'     },
    { value: 'WEEKLY',            label: '1Ã— par semaine'  },
    { value: 'AS_NEEDED',         label: 'Ã€ la demande'    },
  ];

  readonly form = this.fb.nonNullable.group({
    name:      ['', Validators.required],
    dosage:    ['', Validators.required],
    frequency: ['ONCE_DAILY', Validators.required],
    startDate: ['', Validators.required],
    endDate:   [''],
    notes:     [''],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    this.error.set(null);

    const { name, dosage, frequency, startDate, endDate, notes } =
      this.form.getRawValue();

    try {
      await this.medSvc.prescribe({
        patientId:    this.id(),
        prescribedBy: this.auth.currentUser()!.id,
        name,
        dosage,
        frequency,
        startDate:    new Date(startDate).toISOString(),
        endDate:      endDate ? new Date(endDate).toISOString() : undefined,
        notes:        notes || undefined,
      }).toPromise();

      this.router.navigate(['/medical/patients', this.id()]);
    } catch {
      this.error.set('Erreur lors de la prescription. RÃ©essayez.');
    } finally {
      this.isLoading.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/medical/patients', this.id()]);
  }
}
```

### `src/app/features/medical/pages/patient-detail/patient-detail.component.html`

```html
<div class="max-w-5xl mx-auto px-4 py-8">

  <!-- Back -->
  <a routerLink="/medical/patients"
     class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-gray-900 mb-6 transition-colors">
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
    Retour aux patients
  </a>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <!-- Patient header -->
    <div class="bg-surface rounded-lg border border-border p-6 mb-6">
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
            <span class="text-base font-semibold text-primary">
              {{ patient()?.firstName?.[0] }} {{ patient()?.lastName?.[0] }}
            </span>
          </div>
          <div>
            <h1 class="text-xl font-semibold text-gray-900">
              {{ patient()?.firstName }} {{ patient()?.lastName }}
            </h1>
            <p class="text-sm text-muted mt-0.5">{{ patient()?.email }}</p>
            @if (patient()?.region) {
              <p class="text-xs text-muted mt-0.5">{{ patient()?.region }}</p>
            }
          </div>
        </div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="w-32">
            <p class="text-xs text-muted mb-1">AdhÃ©rence</p>
            <pp-adherence-badge [score]="adherenceScore()" />
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="border-b border-border mb-6">
      <nav class="flex gap-1 -mb-px">
        @for (tab of tabs; track tab.key) {
          <button
            (click)="setTab(tab.key)"
            class="px-4 py-2.5 text-sm font-medium border-b-2 transition-colors"
            [class]="activeTab() === tab.key
              ? 'border-primary text-primary'
              : 'border-transparent text-muted hover:text-gray-900'"
          >
            {{ tab.label }}
          </button>
        }
      </nav>
    </div>

    <!-- Tab: Dossier mÃ©dical -->
    @if (activeTab() === 'record') {
      <div class="bg-surface rounded-lg border border-border p-6">
        @if (record()) {
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <p class="text-xs font-medium text-muted uppercase tracking-wide mb-2">Groupe sanguin</p>
              <p class="text-sm text-gray-900">{{ record()?.bloodType ?? 'â€”' }}</p>
            </div>
            <div>
              <p class="text-xs font-medium text-muted uppercase tracking-wide mb-2">Allergies</p>
              @if ((record()?.allergies?.length ?? 0) > 0) {
                <div class="flex flex-wrap gap-1.5">
                  @for (allergy of record()?.allergies ?? []; track allergy) {
                    <span class="px-2 py-0.5 rounded-full text-xs bg-red-50 text-danger border border-red-100">
                      {{ allergy }}
                    </span>
                  }
                </div>
              } @else {
                <p class="text-sm text-muted">Aucune allergie connue</p>
              }
            </div>
            <div class="sm:col-span-2">
              <p class="text-xs font-medium text-muted uppercase tracking-wide mb-2">Maladies chroniques</p>
              @if ((record()?.chronicDiseases?.length ?? 0) > 0) {
                <div class="flex flex-wrap gap-1.5">
                  @for (disease of record()?.chronicDiseases ?? []; track disease) {
                    <span class="px-2 py-0.5 rounded-full text-xs bg-purple-50 text-primary border border-purple-100">
                      {{ disease }}
                    </span>
                  }
                </div>
              } @else {
                <p class="text-sm text-muted">Aucune maladie chronique enregistrÃ©e</p>
              }
            </div>
          </div>
        } @else {
          <p class="text-sm text-muted text-center py-8">Aucun dossier mÃ©dical disponible.</p>
        }
      </div>
    }

    <!-- Tab: Traitements -->
    @if (activeTab() === 'medications') {
      <div class="flex justify-end mb-4">
        <a [routerLink]="['/medical/patients', id(), 'medications/new']"
           class="text-sm font-medium px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors">
          + Prescrire
        </a>
      </div>
      <div class="grid gap-3">
        @for (med of medications(); track med.id) {
          <div class="bg-surface rounded-lg border border-border p-4 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ med.name }}</p>
              <p class="text-xs text-muted mt-0.5">{{ med.dosage }} Â· {{ med.frequency }}</p>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full"
                  [class]="med.status === 'ACTIVE' ? 'bg-green-50 text-success' : 'bg-gray-100 text-muted'">
              {{ med.status }}
            </span>
          </div>
        } @empty {
          <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
            <p class="text-sm text-muted">Aucun traitement enregistrÃ©.</p>
          </div>
        }
      </div>
    }

    <!-- Tab: Rendez-vous -->
    @if (activeTab() === 'appointments') {
      <div class="flex justify-end mb-4">
        <a [routerLink]="['/medical/patients', id(), 'appointments/new']"
           class="text-sm font-medium px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors">
          + Ajouter un RDV
        </a>
      </div>
      <div class="grid gap-3">
        @for (appt of appointments(); track appt.id) {
          <div class="bg-surface rounded-lg border border-border p-4 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ appt.type }}</p>
              <p class="text-xs text-muted mt-0.5">
                {{ appt.scheduledAt | date:'EEEE d MMMM yyyy, HH:mm' : '' : 'en' }}
                Â· {{ appt.duration }} min
              </p>
              @if (appt.location) {
                <p class="text-xs text-muted">{{ appt.location }}</p>
              }
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full"
                  [class]="appt.status === 'CONFIRMED' ? 'bg-green-50 text-success' : 'bg-purple-50 text-primary'">
              {{ appt.status }}
            </span>
          </div>
        } @empty {
          <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
            <p class="text-sm text-muted">Aucun rendez-vous enregistrÃ©.</p>
          </div>
        }
      </div>
    }

    <!-- Tab: Notes -->
    @if (activeTab() === 'notes') {
      <div class="flex justify-end mb-4">
        <a [routerLink]="['/medical/patients', id(), 'notes/new']"
           class="text-sm font-medium px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors">
          + Ajouter une note
        </a>
      </div>
      <div class="grid gap-3">
        @for (note of record()?.notes ?? []; track note.id) {
          <div class="bg-surface rounded-lg border border-border p-4">
            <p class="text-sm text-gray-900 leading-relaxed">{{ note.content }}</p>
            <p class="text-xs text-muted mt-2">
              {{ note.createdAt | date:'d MMMM yyyy Ã  HH:mm' : '' : 'en' }}
            </p>
          </div>
        } @empty {
          <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
            <p class="text-sm text-muted">Aucune note mÃ©dicale.</p>
          </div>
        }
      </div>
    }

  }
</div>
```

### `src/app/features/medical/pages/patient-detail/patient-detail.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MedicalRecordService } from '../../services/medical-record.service';
import { MedicalMedicationService } from '../../services/medication.service';
import { MedicalAppointmentService } from '../../services/appointment.service';
import { User } from '../../../../core/models/user.model';
import { MedicalRecord } from '../../../../core/models/medical-record.model';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { AdherenceBadgeComponent } from '../../../patient/components/adherence-badge/adherence-badge';
import { firstValueFrom } from 'rxjs';

type Tab = 'record' | 'medications' | 'appointments' | 'notes';

@Component({
  selector: 'pp-patient-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, AdherenceBadgeComponent],
  templateUrl: './patient-detail.component.html',
})
export class PatientDetailComponent implements OnInit {
  private readonly userService  = inject(UserService);
  private readonly recordSvc    = inject(MedicalRecordService);
  private readonly medSvc       = inject(MedicalMedicationService);
  private readonly apptSvc      = inject(MedicalAppointmentService);

  // withComponentInputBinding() permet de rÃ©cupÃ©rer :id directement
  readonly id = input.required<string>();

  readonly patient      = signal<User | null>(null);
  readonly record       = signal<MedicalRecord | null>(null);
  readonly medications  = signal<Medication[]>([]);
  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);
  readonly activeTab    = signal<Tab>('record');

  readonly adherenceScore = computed(() => {
    const meds = this.medications();
    if (meds.length === 0) return 0;
    const active = meds.filter(m => m.status === 'ACTIVE').length;
    return Math.round((active / meds.length) * 100);
  });

  readonly tabs: { key: Tab; label: string }[] = [
    { key: 'record',       label: 'Dossier mÃ©dical' },
    { key: 'medications',  label: 'Traitements'     },
    { key: 'appointments', label: 'Rendez-vous'     },
    { key: 'notes',        label: 'Notes'           },
  ];

  async ngOnInit(): Promise<void> {
    const id = this.id();
    this.isLoading.set(true); // âœ… activer le loader avant les appels
    try {
      const [patient, record, meds, appts] = await Promise.all([
        firstValueFrom(this.userService.getById(id)),
        firstValueFrom(this.recordSvc.getByPatient(id)),
        firstValueFrom(this.medSvc.getByPatient(id)),
        firstValueFrom(this.apptSvc.getByPatient(id)),
      ]);

      this.patient.set(patient ?? null);       // maintenant patient est User
      this.record.set(record ?? null);         // MedicalRecord
      this.medications.set(meds?.data ?? []);  // meds est PaginatedData â†’ .data = tableau
      this.appointments.set(appts?.data ?? []);// appts est PaginatedData â†’ .data = tableau
    } catch (error) {
      console.error('Error loading patient details', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }
}
```

### `src/app/features/medical/pages/patient-list/patient-list.component.html`

```html
<div class="max-w-5xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold text-gray-900">Patients</h1>
      <p class="text-sm text-muted mt-1">{{ total() }} patients enregistrÃ©s</p>
    </div>
  </div>

  <!-- Search -->
  <div class="mb-6">
    <input
      type="text"
      [ngModel]="search()"
      (ngModelChange)="search.set($event)"
      placeholder="Rechercher par nom, email ou rÃ©gionâ€¦"
      class="w-full sm:max-w-sm px-3 py-2 rounded-md border border-border bg-surface
             text-sm focus:outline-none focus:ring-2 focus:ring-primary
             focus:border-transparent placeholder:text-muted"
    />
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <!-- Table -->
    <div class="bg-surface rounded-lg border border-border overflow-hidden">
      <table class="w-full text-sm">
        <thead>
        <tr class="border-b border-border bg-surface-2">
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Patient</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden sm:table-cell">Email</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide hidden md:table-cell">RÃ©gion</th>
          <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Statut</th>
          <th class="px-4 py-3"></th>
        </tr>
        </thead>
        <tbody>
          @for (patient of filtered(); track patient.id) {
            <tr class="border-b border-border last:border-0 hover:bg-surface-2 transition-colors">
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <span class="text-xs font-medium text-primary">
                      {{ patient.firstName[0] }}{{ patient.lastName[0] }}
                    </span>
                  </div>
                  <span class="font-medium text-gray-900">
                    {{ patient.firstName }} {{ patient.lastName }}
                  </span>
                </div>
              </td>
              <td class="px-4 py-3 text-muted hidden sm:table-cell">{{ patient.email }}</td>
              <td class="px-4 py-3 text-muted hidden md:table-cell">{{ patient.region ?? 'â€”' }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                      [class]="patient.status === 'ACTIVE'
                    ? 'bg-green-50 text-success'
                    : 'bg-gray-100 text-muted'">
                  {{ patient.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <a [routerLink]="['/medical/patients', patient.id]"
                   class="text-xs font-medium text-primary hover:underline">
                  Voir
                </a>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="5" class="px-4 py-12 text-center text-sm text-muted">
                Aucun patient trouvÃ©.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    @if (totalPages() > 1) {
      <div class="flex items-center justify-between mt-4">
        <p class="text-xs text-muted">
          Page {{ page() }} sur {{ totalPages() }}
        </p>
        <div class="flex gap-2">
          <button
            (click)="goToPage(page() - 1)"
            [disabled]="page() === 1"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            PrÃ©cÃ©dent
          </button>
          <button
            (click)="goToPage(page() + 1)"
            [disabled]="page() === totalPages()"
            class="px-3 py-1.5 text-xs rounded-md border border-border
                   hover:bg-surface-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Suivant
          </button>
        </div>
      </div>
    }

  }
</div>
```

### `src/app/features/medical/pages/patient-list/patient-list.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'pp-patient-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent implements OnInit {
  private readonly userService = inject(UserService);

  readonly patients  = signal<User[]>([]);
  readonly isLoading = signal(true);
  readonly search    = signal('');
  readonly page      = signal(1);
  readonly total     = signal(0);
  readonly limit     = 20;

  // patient-list.component.ts corrigÃ©
  readonly filtered = computed(() => {
    const patientsList = this.patients(); // â† rÃ©cupÃ©rer la valeur du signal
    const q = this.search().toLowerCase().trim();

    if (!q) return patientsList;

    return patientsList.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.region?.toLowerCase().includes(q)
    );
  });

  readonly totalPages = computed(() => Math.ceil(this.total() / this.limit));

  async ngOnInit(): Promise<void> {
    await this.loadPatients();
  }

  // patient-list.component.ts
  async loadPatients(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.userService.getPatients(this.page(), this.limit)
      );
      // âœ… Maintenant res.data.data est correct
      this.patients.set(res?.data?.data ?? []);
      this.total.set(res?.data?.total ?? 0);
    } catch (error) {
      console.error('Error loading patients:', error);
      this.patients.set([]);
      this.total.set(0);
    } finally {
      this.isLoading.set(false);
    }
  }

  async goToPage(p: number): Promise<void> {
    this.page.set(p);
    await this.loadPatients();
  }
}
```

### `src/app/features/medical/services/appointment.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Appointment } from '../../../core/models/appointment.model';
import { map } from 'rxjs/operators';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface CreateAppointmentPayload {
  patientId: string;
  providerId: string;
  type: string;
  scheduledAt: string;
  duration: number;
  location?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalAppointmentService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/appointments`;

  // medical/services/appointment.service.ts
  getByPatient(
    patientId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Appointment>> {  // â† retourne directement PaginatedData
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('page', page)
      .set('limit', limit);

    // On pipe pour extraire data du wrapper API
    return this.http.get<ApiResponse<PaginatedResponse<Appointment>>>(this.baseUrl, { params })
      .pipe(map(response => response.data));
  }

  create(payload: CreateAppointmentPayload): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, payload);
  }

  confirm(id: string): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.baseUrl}/${id}/confirm`, {});
  }

  cancel(id: string, reason: string): Observable<Appointment> {
    return this.http.patch<Appointment>(
      `${this.baseUrl}/${id}/cancel`,
      { reason },
    );
  }
}
```

### `src/app/features/medical/services/medical-record.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MedicalRecord } from '../../../core/models/medical-record.model';

interface AddNotePayload {
  authorId: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medical-records`;

  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(
      `${this.baseUrl}/patient/${patientId}`,
    );
  }

  addNote(patientId: string, payload: AddNotePayload): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(
      `${this.baseUrl}/patient/${patientId}/notes`,
      payload,
    );
  }
}
```

### `src/app/features/medical/services/medication.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Medication } from '../../../core/models/medication.model';
import { map } from 'rxjs/operators';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface PrescribePayload {
  patientId: string;
  prescribedBy: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicalMedicationService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medications`;

  getByPatient(
    patientId: string,
    status = 'ACTIVE',
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Medication>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<ApiResponse<PaginatedResponse<Medication>>>(
      `${this.baseUrl}/patient/${patientId}`,
      { params },
    ).pipe(map(response => response.data));
  }

  prescribe(payload: PrescribePayload): Observable<Medication> {
    return this.http.post<Medication>(this.baseUrl, payload);
  }
}
```

### `src/app/features/medical/services/user.service.ts`

```typescript
// user.service.ts corrigÃ©
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/models/user.model';
import { UserRole } from '../../../core/models/roles.enum';
import { map } from 'rxjs/operators';

// Interface pour le wrapper API
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// Interface pour les donnÃ©es paginÃ©es
interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;

  getPatients(
    page = 1,
    limit = 20,
    region?: string,
  ): Observable<ApiResponse<PaginatedData<User>>> {
    let params = new HttpParams()
      .set('role', UserRole.PATIENT)
      .set('page', page)
      .set('limit', limit);

    if (region) params = params.set('region', region);

    return this.http.get<ApiResponse<PaginatedData<User>>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<User> {
    return this.http.get<ApiResponse<User>>(`${this.baseUrl}/${id}`)
      .pipe(map(response => response.data));
  }
}
```

### `src/app/features/patient/components/adherence-badge/adherence-badge.ts`

```typescript
import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'pp-adherence-badge',
  standalone: true,
  template: `
    <div class="flex items-center gap-2">
      <div class="flex-1 h-2 bg-border rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-500"
          [class]="barColor()"
          [style.width.%]="score()"
        ></div>
      </div>
      <span class="text-sm font-medium" [class]="textColor()">
        {{ score() }}%
      </span>
    </div>
  `,
})
export class AdherenceBadgeComponent {
  readonly score = input.required<number>();

  readonly barColor = computed(() => {
    if (this.score() >= 80) return 'bg-success';
    if (this.score() >= 50) return 'bg-warning';
    return 'bg-danger';
  });

  readonly textColor = computed(() => {
    if (this.score() >= 80) return 'text-success';
    if (this.score() >= 50) return 'text-warning';
    return 'text-danger';
  });
}
```

### `src/app/features/patient/components/appointment-card/appointment-card.component.html`

```html
<div class="bg-surface rounded-lg border border-border p-4 flex items-center justify-between gap-4">
  <div class="flex items-center gap-3">
    <div class="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
      <svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    </div>
    <div>
      <p class="text-sm font-medium text-gray-900">{{ typeLabel() }}</p>
      <p class="text-xs text-muted mt-0.5">
        {{ appointment().scheduledAt | date:'EEEE d MMMM, HH:mm' : '' : 'fr' }}
        Â· {{ appointment().duration }} min
      </p>
      @if (appointment().location) {
        <p class="text-xs text-muted">{{ appointment().location }}</p>
      }
    </div>
  </div>
  <span class="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
        [class]="statusStyle()">
    {{ appointment().status }}
  </span>
</div>
```

### `src/app/features/patient/components/appointment-card/appointment-card.component.ts`

```typescript
import { Component, input, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Appointment } from '../../../../core/models/appointment.model';

const TYPE_LABEL: Record<string, string> = {
  CONSULTATION: 'Consultation',
  FOLLOW_UP:    'Suivi',
  EMERGENCY:    'Urgence',
  HOME_VISIT:   'Visite Ã  domicile',
};

const STATUS_STYLE: Record<string, string> = {
  SCHEDULED:  'bg-purple-50 text-purple-600',
  CONFIRMED:  'bg-green-50 text-success',
  COMPLETED:  'bg-gray-100 text-muted',
  CANCELLED:  'bg-red-50 text-danger',
};

@Component({
  selector: 'pp-appointment-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  readonly appointment = input.required<Appointment>();

  readonly typeLabel   = computed(() => TYPE_LABEL[this.appointment().type]   ?? this.appointment().type);
  readonly statusStyle = computed(() => STATUS_STYLE[this.appointment().status] ?? '');
}
```

### `src/app/features/patient/components/medication-card/medication-card.component.html`

```html
<div class="bg-surface rounded-lg border border-border p-4 flex items-start justify-between gap-4">
  <div class="flex items-start gap-3">
    <div class="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
      <svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
      </svg>
    </div>
    <div>
      <p class="text-sm font-medium text-gray-900">{{ medication().name }}</p>
      <p class="text-xs text-muted mt-0.5">{{ medication().dosage }} Â· {{ frequencyLabel(medication().frequency) }}</p>
    </div>
  </div>
  <button
    (click)="markAsTaken()"
    class="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-md
           bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
  >
    Pris
  </button>
</div>
```

### `src/app/features/patient/components/medication-card/medication-card.component.ts`

```typescript
import { Component, input, output, inject } from '@angular/core';
import { Medication } from '../../../../core/models/medication.model';
import { MedicationService } from '../../services/medication.service';

const FREQUENCY_LABEL: Record<string, string> = {
  ONCE_DAILY:         '1Ã— par jour',
  TWICE_DAILY:        '2Ã— par jour',
  THREE_TIMES_DAILY:  '3Ã— par jour',
  WEEKLY:             '1Ã— par semaine',
  AS_NEEDED:          'Ã€ la demande',
};

@Component({
  selector: 'pp-medication-card',
  standalone: true,
  templateUrl: './medication-card.component.html',
})
export class MedicationCardComponent {
  private readonly medService = inject(MedicationService);

  readonly medication = input.required<Medication>();
  readonly taken      = output<string>();

  readonly frequencyLabel = (freq: string) => FREQUENCY_LABEL[freq] ?? freq;

  async markAsTaken(): Promise<void> {
    const med = this.medication();
    // @ts-ignore
    await this.medService.logIntake(med.id, {
      status: 'TAKEN',
      scheduledAt: new Date().toISOString(),
      takenAt: new Date().toISOString(),
    }).toPromise();

    this.taken.emit(med.id);
  }
}
```

### `src/app/features/patient/pages/appointments/appointment-list.component.html`

```html
<div class="max-w-3xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Mes rendez-vous</h1>
    <p class="text-sm text-muted mt-1">Historique et rendez-vous Ã  venir</p>
  </div>

  <!-- Tabs -->
  <div class="border-b border-border mb-6">
    <nav class="flex gap-1 -mb-px">
      @for (tab of tabs; track tab.key) {
        <button
          (click)="setTab(tab.key)"
          class="px-4 py-2.5 text-sm font-medium border-b-2 transition-colors"
          [class]="activeTab() === tab.key
            ? 'border-primary text-primary'
            : 'border-transparent text-muted hover:text-gray-900'"
        >
          {{ tab.label }}
        </button>
      }
    </nav>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {
    @if (filtered().length === 0) {
      <div class="bg-surface rounded-lg border border-border px-6 py-12 text-center">
        <p class="text-sm text-muted">
          Aucun rendez-vous {{ activeTab() === 'upcoming' ? 'Ã  venir' : 'passÃ©' }}.
        </p>
      </div>
    } @else {
      <div class="grid gap-3">
        @for (appt of filtered(); track appt.id) {
          <pp-appointment-card [appointment]="appt" />
        }
      </div>
    }
  }

</div>
```

### `src/app/features/patient/pages/appointments/appointment-list.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { MedicalAppointmentService } from '../../../medical/services/appointment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { Appointment } from '../../../../core/models/appointment.model';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'pp-appointment-list',
  standalone: true,
  imports: [AppointmentCardComponent],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit {
  private readonly auth        = inject(AuthService);
  private readonly apptService = inject(AppointmentService);

  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);
  readonly activeTab    = signal<'upcoming' | 'past'>('upcoming');

  readonly tabs: { key: 'upcoming' | 'past'; label: string }[] = [
    { key: 'upcoming', label: 'Ã€ venir'  },
    { key: 'past',     label: 'PassÃ©s'   },
  ];

  readonly filtered = computed(() => {
    const now = new Date();
    return this.appointments().filter(a =>
      this.activeTab() === 'upcoming'
        ? new Date(a.scheduledAt) >= now
        : new Date(a.scheduledAt) < now
    );
  });

  async ngOnInit(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      // @ts-ignore
      const res = await this.apptService
        .getByPatient(patientId)
        .toPromise();
      this.appointments.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }

  setTab(tab: 'upcoming' | 'past'): void {
    this.activeTab.set(tab);
  }
}
```

### `src/app/features/patient/pages/dashboard/patient-dashboard.component.html`

```html
<div class="max-w-5xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Bonjour, {{ user()?.firstName }} ðŸ‘‹
    </h1>
    <p class="text-sm text-muted mt-1">Voici votre tableau de bord santÃ©</p>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {

    <!-- KPI strip -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Traitements actifs</p>
        <p class="text-2xl font-semibold text-gray-900">{{ medications().length }}</p>
      </div>
      <div class="bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-1">Prochain RDV</p>
        <p class="text-2xl font-semibold text-gray-900">
          {{ upcomingAppointments().length > 0 ? upcomingAppointments()[0].type : 'â€”' }}
        </p>
      </div>
      <div class="col-span-2 sm:col-span-1 bg-surface rounded-lg border border-border p-4">
        <p class="text-xs text-muted mb-2">AdhÃ©rence globale</p>
        <pp-adherence-badge [score]="adherenceScore()" />
      </div>
    </div>

    <!-- MÃ©dicaments du jour -->
    <section class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-base font-medium text-gray-900">MÃ©dicaments du jour</h2>
        <a routerLink="../medications" class="text-sm text-primary hover:underline">
          Voir tout
        </a>
      </div>

      @if (todayMedications().length === 0) {
        <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
          <p class="text-sm text-muted">Aucun traitement actif pour aujourd'hui.</p>
        </div>
      } @else {
        <div class="grid gap-3 sm:grid-cols-2">
          @for (med of todayMedications(); track med.id) {
            <pp-medication-card [medication]="med" />
          }
        </div>
      }
    </section>

    <!-- Rendez-vous Ã  venir -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-base font-medium text-gray-900">Rendez-vous Ã  venir</h2>
        <a routerLink="../appointments" class="text-sm text-primary hover:underline">
          Voir tout
        </a>
      </div>

      @if (upcomingAppointments().length === 0) {
        <div class="bg-surface rounded-lg border border-border px-6 py-10 text-center">
          <p class="text-sm text-muted">Aucun rendez-vous Ã  venir.</p>
        </div>
      } @else {
        <div class="grid gap-3">
          @for (appt of upcomingAppointments(); track appt.id) {
            <pp-appointment-card [appointment]="appt" />
          }
        </div>
      }
    </section>

  }

</div>
```

### `src/app/features/patient/pages/dashboard/patient-dashboard.component.ts`

```typescript
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { MedicationService } from '../../services/medication.service';
import { AppointmentService } from '../../services/appointment.service';
import { Medication } from '../../../../core/models/medication.model';
import { Appointment } from '../../../../core/models/appointment.model';
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { AdherenceBadgeComponent } from '../../components/adherence-badge/adherence-badge';

@Component({
  selector: 'pp-patient-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MedicationCardComponent,
    AppointmentCardComponent,
    AdherenceBadgeComponent,
  ],
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent implements OnInit {
  private readonly auth        = inject(AuthService);
  private readonly medService  = inject(MedicationService);
  private readonly apptService = inject(AppointmentService);

  readonly user         = this.auth.currentUser;
  readonly medications  = signal<Medication[]>([]);
  readonly appointments = signal<Appointment[]>([]);
  readonly isLoading    = signal(true);

  readonly todayMedications = computed(() =>
    this.medications().filter(m => m.status === 'ACTIVE').slice(0, 4)
  );

  readonly upcomingAppointments = computed(() =>
    this.appointments()
      .filter(a => new Date(a.scheduledAt) > new Date())
      .slice(0, 3)
  );

  readonly adherenceScore = computed(() => {
    const total = this.medications().length;
    if (total === 0) return 0;
    const active = this.medications().filter(m => m.status === 'ACTIVE').length;
    return Math.round((active / total) * 100);
  });

  async ngOnInit(): Promise<void> {
    const patientId = this.user()?.id;
    if (!patientId) return;

    try {
      const [meds, appts] = await Promise.all([
        this.medService.getByPatient(patientId, 'ACTIVE').toPromise(),
        this.apptService.getByPatient(patientId).toPromise(),
      ]);

      this.medications.set(meds?.data ?? []);
      this.appointments.set(appts?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
```

### `src/app/features/patient/pages/medical-record/medical-record-view.component.html`

```html
<div class="max-w-3xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Mon dossier mÃ©dical</h1>
    <p class="text-sm text-muted mt-1">Informations mÃ©dicales en lecture seule</p>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else if (!record()) {
    <div class="bg-surface rounded-lg border border-border px-6 py-12 text-center">
      <p class="text-sm text-muted">Aucun dossier mÃ©dical disponible.</p>
    </div>
  } @else {

    <!-- Groupe sanguin -->
    <div class="bg-surface rounded-lg border border-border p-6 mb-4">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-medium text-muted uppercase tracking-wide mb-1">Groupe sanguin</p>
          <p class="text-3xl font-semibold text-primary">
            {{ bloodTypeLabel(record()!.bloodType) }}
          </p>
        </div>
        <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
          <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Allergies -->
    <div class="bg-surface rounded-lg border border-border p-6 mb-4">
      <p class="text-sm font-medium text-gray-900 mb-3">Allergies</p>
      @if (record()!.allergies.length > 0) {
        <div class="flex flex-wrap gap-2">
          @for (allergy of record()!.allergies; track allergy) {
            <span class="px-3 py-1 rounded-full text-sm bg-red-50 text-danger border border-red-100">
              {{ allergy }}
            </span>
          }
        </div>
      } @else {
        <p class="text-sm text-muted">Aucune allergie connue.</p>
      }
    </div>

    <!-- Maladies chroniques -->
    <div class="bg-surface rounded-lg border border-border p-6 mb-4">
      <p class="text-sm font-medium text-gray-900 mb-3">Maladies chroniques</p>
      @if (record()!.chronicDiseases.length > 0) {
        <div class="flex flex-wrap gap-2">
          @for (disease of record()!.chronicDiseases; track disease) {
            <span class="px-3 py-1 rounded-full text-sm bg-primary-light text-primary border border-purple-100">
              {{ disease }}
            </span>
          }
        </div>
      } @else {
        <p class="text-sm text-muted">Aucune maladie chronique enregistrÃ©e.</p>
      }
    </div>

    <!-- Notes mÃ©dicales -->
    <div class="bg-surface rounded-lg border border-border p-6">
      <p class="text-sm font-medium text-gray-900 mb-4">Notes mÃ©dicales</p>
      @if (record()!.notes.length > 0) {
        <div class="grid gap-3">
          @for (note of record()!.notes; track note.id) {
            <div class="border-l-2 border-primary pl-4 py-1">
              <p class="text-sm text-gray-900 leading-relaxed">{{ note.content }}</p>
              <p class="text-xs text-muted mt-1.5">
                {{ note.createdAt | date:'d MMMM yyyy Ã  HH:mm' : '' : 'fr' }}
              </p>
            </div>
          }
        </div>
      } @else {
        <p class="text-sm text-muted">Aucune note mÃ©dicale disponible.</p>
      }
    </div>

  }

</div>
```

### `src/app/features/patient/pages/medical-record/medical-record-view.component.ts`

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MedicalRecordService } from '../../../medical/services/medical-record.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MedicalRecord } from '../../../../core/models/medical-record.model';

const BLOOD_TYPE_LABEL: Record<string, string> = {
  A_POSITIVE:  'A+',  A_NEGATIVE:  'Aâˆ’',
  B_POSITIVE:  'B+',  B_NEGATIVE:  'Bâˆ’',
  AB_POSITIVE: 'AB+', AB_NEGATIVE: 'ABâˆ’',
  O_POSITIVE:  'O+',  O_NEGATIVE:  'Oâˆ’',
  UNKNOWN:     'Inconnu',
};

@Component({
  selector: 'pp-medical-record-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './medical-record-view.component.html',
})
export class MedicalRecordViewComponent implements OnInit {
  private readonly auth      = inject(AuthService);
  private readonly recordSvc = inject(MedicalRecordService);

  readonly record    = signal<MedicalRecord | null>(null);
  readonly isLoading = signal(true);

  readonly bloodTypeLabel = (type: string) => BLOOD_TYPE_LABEL[type] ?? type;

  async ngOnInit(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      const res = await this.recordSvc.getByPatient(patientId).toPromise();
      this.record.set(res ?? null);
    } finally {
      this.isLoading.set(false);
    }
  }
}
```

### `src/app/features/patient/pages/medications/medication-list.component.html`

```html
<div class="max-w-3xl mx-auto px-4 py-8">

  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-900">Mes traitements</h1>
    <p class="text-sm text-muted mt-1">Suivi de vos mÃ©dicaments</p>
  </div>

  <!-- Tabs -->
  <div class="border-b border-border mb-6">
    <nav class="flex gap-1 -mb-px">
      @for (tab of tabs; track tab.key) {
        <button
          (click)="setTab(tab.key)"
          class="px-4 py-2.5 text-sm font-medium border-b-2 transition-colors"
          [class]="activeTab() === tab.key
            ? 'border-primary text-primary'
            : 'border-transparent text-muted hover:text-gray-900'"
        >
          {{ tab.label }}
        </button>
      }
    </nav>
  </div>

  @if (isLoading()) {
    <div class="flex justify-center py-24">
      <svg class="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  } @else {
    @if (medications().length === 0) {
      <div class="bg-surface rounded-lg border border-border px-6 py-12 text-center">
        <p class="text-sm text-muted">Aucun traitement {{ activeTab() === 'ACTIVE' ? 'en cours' : activeTab() === 'COMPLETED' ? 'terminÃ©' : 'suspendu' }}.</p>
      </div>
    } @else {
      <div class="grid gap-3 sm:grid-cols-2">
        @for (med of medications(); track med.id) {
          <pp-medication-card
            [medication]="med"
            (taken)="onTaken($event)"
          />
        }
      </div>
    }
  }

</div>
```

### `src/app/features/patient/pages/medications/medication-list.component.ts`

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';
import { MedicalMedicationService } from '../../../medical/services/medication.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { Medication } from '../../../../core/models/medication.model';
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';

@Component({
  selector: 'pp-medication-list',
  standalone: true,
  imports: [MedicationCardComponent],
  templateUrl: './medication-list.component.html',
})
export class MedicationListComponent implements OnInit {
  private readonly auth       = inject(AuthService);
  private readonly medService = inject(MedicalMedicationService);

  readonly medications = signal<Medication[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<'ACTIVE' | 'COMPLETED' | 'SUSPENDED'>('ACTIVE');

  readonly tabs: { key: 'ACTIVE' | 'COMPLETED' | 'SUSPENDED'; label: string }[] = [
    { key: 'ACTIVE',    label: 'En cours'   },
    { key: 'COMPLETED', label: 'TerminÃ©s'   },
    { key: 'SUSPENDED', label: 'Suspendus'  },
  ];

  async ngOnInit(): Promise<void> {
    await this.loadMedications();
  }

  async setTab(tab: 'ACTIVE' | 'COMPLETED' | 'SUSPENDED'): Promise<void> {
    this.activeTab.set(tab);
    await this.loadMedications();
  }

  async onTaken(medicationId: string): Promise<void> {
    this.medications.update(meds => meds.filter(m => m.id !== medicationId));
  }

  private async loadMedications(): Promise<void> {
    const patientId = this.auth.currentUser()?.id;
    if (!patientId) return;

    this.isLoading.set(true);
    try {
      const res = await this.medService
        .getByPatient(patientId, this.activeTab())
        .toPromise();
      this.medications.set(res?.data ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }
}
```

### `src/app/features/patient/patient.routes.ts`

```typescript
import { Routes } from '@angular/router';

const loadDashboard = () =>
  import('./pages/dashboard/patient-dashboard.component')
    .then(m => m.PatientDashboardComponent);

const loadMedications = () =>
  import('./pages/medications/medication-list.component')
    .then(m => m.MedicationListComponent);

const loadAppointments = () =>
  import('./pages/appointments/appointment-list.component')
    .then(m => m.AppointmentListComponent);

const loadMedicalRecord = () =>
  import('./pages/medical-record/medical-record-view.component')
    .then(m => m.MedicalRecordViewComponent);

export const PATIENT_ROUTES: Routes = [
  { path: '',         redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',      loadComponent: loadDashboard },
  { path: 'medications',    loadComponent: loadMedications },
  { path: 'appointments',   loadComponent: loadAppointments },
  { path: 'medical-record', loadComponent: loadMedicalRecord },
];
```

### `src/app/features/patient/services/appointment.service.ts`

```typescript
// patient/services/appointment.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Appointment } from '../../../core/models/appointment.model';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

interface PaginatedData<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/appointments`;

  // medical/services/appointment.service.ts
  getByPatient(
    patientId: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedData<Appointment>> {  // â† retourne directement PaginatedData
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('page', page)
      .set('limit', limit);

    // On pipe pour extraire data du wrapper API
    return this.http.get<ApiResponse<PaginatedData<Appointment>>>(this.baseUrl, { params })
      .pipe(map(response => response.data));
  }
}
```

### `src/app/features/patient/services/medical-record.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MedicalRecord } from '../../../core/models/medical-record.model';

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medical-records`;

  getByPatient(patientId: string): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(
      `${this.baseUrl}/patient/${patientId}`,
    );
  }
}
```

### `src/app/features/patient/services/medication.service.ts`

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Medication, MedicationIntake, IntakeStatus } from '../../../core/models/medication.model';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

interface LogIntakePayload {
  status: IntakeStatus;
  scheduledAt: string;
  takenAt?: string;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class MedicationService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/medications`;

  getByPatient(
    patientId: string,
    status: string,
    page = 1,
    limit = 20,
  ): Observable<PaginatedResponse<Medication>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', page)
      .set('limit', limit);

    return this.http.get<PaginatedResponse<Medication>>(
      `${this.baseUrl}/patient/${patientId}`,
      { params },
    );
  }

  logIntake(
    medicationId: string,
    payload: LogIntakePayload,
  ): Observable<MedicationIntake> {
    return this.http.post<MedicationIntake>(
      `${this.baseUrl}/${medicationId}/intakes`,
      payload,
    );
  }
}
```

### `src/app/home/home.component.ts`

```typescript
import { Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { UserRole } from '../core/models/roles.enum';

@Component({
  selector: 'pp-home',
  standalone: true,
  template: '',
})
export class HomeComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    // L'effect se dÃ©clenche Ã  chaque changement de `isAuthenticated` ou `isLoading`.
    effect(() => {
      console.log('HomeComponent effect - isLoading:', this.auth.isLoading(), 'isAuthenticated:', this.auth.isAuthenticated());
      // On attend que le chargement soit terminÃ© avant de dÃ©cider
      if (!this.auth.isLoading()) {
        if (this.auth.isAuthenticated()) {
          this.redirectByRole();
        } else {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  ngOnInit(): void {
    // Si l'utilisateur est dÃ©jÃ  authentifiÃ© au moment du montage (trÃ¨s peu probable mais possible),
    // l'effect ci-dessus le dÃ©tectera aussitÃ´t.
  }

  private redirectByRole(): void {
    const role = this.auth.userRole();
    const roleRouteMap: Record<UserRole, string> = {
      [UserRole.PATIENT]: '/patient',
      [UserRole.MEDICAL]: '/medical',
      [UserRole.AIDANT]: '/patient',
      [UserRole.EMPLOYEE]: '/employee',
      [UserRole.ADMIN]: '/admin',
      [UserRole.CEO]: '/ceo',
    };
    this.router.navigate([roleRouteMap[role!] ?? '/login']);
  }
}
```

### `src/app/shared/components/navbar/navbar.component.html`

```html
<header class="fixed top-0 inset-x-0 z-50 h-16 bg-surface border-b border-border">
  <div class="max-w-7xl mx-auto h-full px-4 flex items-center justify-between gap-6">

    <!-- Brand -->
    <a routerLink="/" class="flex items-center gap-2 flex-shrink-0">
      <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
        <span class="text-white text-xs font-semibold">P</span>
      </div>
      <span class="text-sm font-semibold text-gray-900">PurplePoint</span>
    </a>

    <!-- Nav links -->
    <nav class="flex items-center gap-1">
      @for (item of visibleItems(); track item.route) {
        <a
          [routerLink]="item.route"
          routerLinkActive="bg-primary-light text-primary font-medium"
          class="px-3 py-1.5 rounded-md text-sm text-muted hover:bg-surface-2 hover:text-gray-900 transition-colors"
          >
          {{ item.label }}
        </a>
      }
    </nav>

    <!-- User menu -->
    <div class="flex items-center gap-3 flex-shrink-0">
      <span class="text-xs text-muted hidden sm:block">
        {{ user()?.email }}
      </span>
      <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
        <span class="text-xs font-medium text-primary">{{ userInitials() }}</span>
      </div>
      <button
        (click)="logout()"
        class="text-xs text-muted hover:text-gray-900 px-2 py-1 rounded transition-colors"
      >
        DÃ©connexion
      </button>
    </div>

  </div>
</header>
```

### `src/app/shared/components/navbar/navbar.component.ts`

```typescript
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { UserRole } from '../../../core/models/roles.enum';

interface NavItem {
  label: string;
  route: string;
  roles: UserRole[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Mon espace',   route: '/patient',  roles: [UserRole.PATIENT, UserRole.AIDANT] },
  { label: 'Patients',     route: '/medical',  roles: [UserRole.MEDICAL] },
  { label: 'Mes appels',   route: '/employee', roles: [UserRole.EMPLOYEE] },
  { label: 'Administration', route: '/admin',  roles: [UserRole.ADMIN] },
  { label: 'Analytics',    route: '/ceo',      roles: [UserRole.CEO] },
];

@Component({
  selector: 'pp-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly auth = inject(AuthService);

  readonly user = this.auth.currentUser;

  readonly visibleItems = computed(() => {
    const role = this.auth.userRole();
    if (!role) return [];
    return NAV_ITEMS.filter(item => item.roles.includes(role));
  });

  readonly userInitials = computed(() => {
    const u = this.user();
    if (!u) return '';
    return `${u.email[0]}${u.email[5]}`.toUpperCase();
  });

  logout(): void {
    this.auth.logout();
  }
}
```

### `src/app/shared/components/not-found/not-found.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `<div class="p-8 text-center"><h1>Page introuvable</h1><p>La route demandÃ©e n'existe pas.</p></div>`,
})
export class NotFoundComponent {}
```

### `src/environments/environment.prod.ts`

```typescript
```

### `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
  cognito: {
    userPoolId: 'us-east-1_U3yCwN5yQ',
    clientId: '3nngurnl4v1m22l4l21r7oivph',
    // domain: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_U3yCwN5yQ/.well-known/jwks.json',
    redirectUri: 'http://localhost:4200/login',
    redirectSignOutUri: 'http://localhost:4200/login',
  },
} as const;
```

### `src/index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PurplepointFront</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <pp-root></pp-root>
</body>
</html>
```

### `src/main.server.ts`

```typescript
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);

export default bootstrap;
```

### `src/main.ts`

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { configureAmplify } from './app/core/auth/amplify.config';

configureAmplify();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

### `src/server.ts`

```typescript
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
```

### `src/styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables CSS pour les tokens sÃ©mantiques (version light par dÃ©faut) */
:root {
  --color-primary: #534AB7;         /* purple-600 */
  --color-primary-hover: #3C3489;   /* purple-800 */
  --color-primary-light: #EEEDFE;   /* purple-50 */
  --color-primary-text: #26215C;    /* purple-900 */

  --color-surface: #FFFFFF;
  --color-surface-2: #F8F8FB;
  --color-border: #E5E4F0;
  --color-muted: #7C7A8E;
}

/* Override pour le dark mode (si prÃ©fÃ©rence systÃ¨me : dark) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #13121F;
    --color-surface-2: #1C1B2E;
    --color-border: #2E2C45;
    --color-muted: #9E9CB8;
  }
}

/* Optionnel : tu peux aussi dÃ©finir des classes utilitaires personnalisÃ©es si besoin */
@layer components {
  .btn-primary {
    @apply bg-primary text-white rounded-md px-4 py-2 transition-colors;
  }
  .btn-primary:hover {
    background-color: var(--color-primary-hover);
  }
}
```

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mode sombre basÃ© sur la prÃ©fÃ©rence systÃ¨me (media)
  darkMode: 'media',

  content: [
    // tes chemins de fichiers ici
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],

  theme: {
    // DÃ©finition de la police (sans-serif par dÃ©faut)
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },

    // Extension du thÃ¨me (pour ne pas Ã©craser les valeurs par dÃ©faut)
    extend: {
      colors: {
        // Palette Purple (copie des valeurs v4)
        purple: {
          50: '#EEEDFE',
          100: '#CECBF6',
          200: '#AFA9EC',
          400: '#7F77DD',
          600: '#534AB7',
          800: '#3C3489',
          900: '#26215C',
        },

        // Tokens sÃ©mantiques (rÃ©fÃ©rencent des variables CSS pour compatibilitÃ© dark mode)
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        'primary-text': 'var(--color-primary-text)',

        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',

        success: '#1D9E75',
        warning: '#BA7517',
        danger: '#E24B4A',
      },

      // Rayon des bordures
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
    },
  },

  plugins: [],
};
```

### `tsconfig.app.json`

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [
      "node"
    ]
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
```

### `tsconfig.json`

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
```

### `tsconfig.spec.json`

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
```

