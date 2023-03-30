import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js"


/* -------------- PAGES -------------- */

const login = templateEngine.readPage("./public/pages/login/login.html");
const loginPage = templateEngine.renderPage(login, {
   tabTitle:  "Login | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/login/login.css">`,
});

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
   tabTitle:  "Great Node(s) | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

const variables = templateEngine.readPage("./public/pages/variables/variables.html");
const variablesPage = templateEngine.renderPage(variables, {
   tabTitle:  "Variables | Mandatory"
});

const functions = templateEngine.readPage("./public/pages/functions/functions.html");
const functionsPage = templateEngine.renderPage(functions, {
   tabTitle:  "Functions | Mandatory"
});

const datatypes = templateEngine.readPage("./public/pages/datatypes/datatypes.html");
const datatypesPage = templateEngine.renderPage(datatypes, {
   tabTitle:  "Datatypes | Mandatory"
});

const loop_methods = templateEngine.readPage("./public/pages/loop_methods/loop_methods.html");
const loop_methodsPage = templateEngine.renderPage(loop_methods, {
   tabTitle:  "Loop methods | Mandatory"
});

const fetch = templateEngine.readPage("./public/pages/fetch/fetch.html");
const fetchPage = templateEngine.renderPage(fetch, {
   tabTitle:  "Fetch | Mandatory"
});

const conventions = templateEngine.readPage("./public/pages/conventions/conventions.html");
const conventionsPage = templateEngine.renderPage(conventions, {
   tabTitle:  "Conventions | Mandatory"
});

const terminal = templateEngine.readPage("./public/pages/terminal/terminal.html");
const terminalPage = templateEngine.renderPage(terminal, {
   tabTitle:  "Terminal commands | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/terminal/terminal.css">` 
});

const tools = templateEngine.readPage("./public/pages/tools/tools.html");
const toolsPage = templateEngine.renderPage(tools, {
   tabTitle:  "Tools | Mandatory"
});

const packages = templateEngine.readPage("./public/pages/packages/packages.html");
const packagesPage = templateEngine.renderPage(packages, {
   tabTitle:  "Packages | Mandatory"
});

const import_export = templateEngine.readPage("./public/pages/import_export/import_export.html");
const import_exportPage = templateEngine.renderPage(import_export, {
   tabTitle:  "Import & Export | Mandatory"
});

const ssr_csr = templateEngine.readPage("./public/pages/ssr_csr/ssr_csr.html");
const ssr_csrPage = templateEngine.renderPage(ssr_csr, {
   tabTitle:  "SSR & CSR | Mandatory"
});

const redirects = templateEngine.readPage("./public/pages/redirects/redirects.html");
const redirectsPage = templateEngine.renderPage(redirects, {
   tabTitle:  "Redirection | Mandatory"
});

const app_setup = templateEngine.readPage("./public/pages/app_setup/app_setup.html");
const app_setupPage = templateEngine.renderPage(app_setup, {
   tabTitle:  "App.js setup | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/app_setup/app_setup.css">` 
});

const serve_html = templateEngine.readPage("./public/pages/serve_html/serve_html.html");
const serve_htmlPage = templateEngine.renderPage(serve_html, {
   tabTitle:  "Serve HTML | Mandatory"
});

const rest_api = templateEngine.readPage("./public/pages/rest_api/rest_api.html");
const rest_apiPage = templateEngine.renderPage(rest_api, {
   tabTitle:  "REST API | Mandatory"
});

const html_design = templateEngine.readPage("./public/pages/html_design/html_design.html");
const html_designPage = templateEngine.renderPage(html_design, {
   tabTitle:  "HTML design | Mandatory"
});

const admin = templateEngine.readPage("./public/pages/admin/admin.html");
const adminPage = templateEngine.renderPage(admin, {
   tabTitle:  "Admin panel | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/admin/admin.css">` 
});

const fail = templateEngine.readPage("./public/pages/fail/fail.html");
const failPage = templateEngine.renderPage(fail, {
   tabTitle:  "Login failed | Mandatory",
   cssLink:  `<link rel="stylesheet" href="/pages/fail/fail.css">` 
});


app.get("/", (req, res) => {
    res.send(loginPage);
});

app.get("/frontpage", (req, res) => {
    res.send(frontpagePage);
});

app.get("/variables", (req, res) => {
    res.send(variablesPage);
});

app.get("/functions", (req, res) => {
    res.send(functionsPage);
});

app.get("/datatypes", (req, res) => {
    res.send(datatypesPage);
});

app.get("/loop_methods", (req, res) => {
    res.send(loop_methodsPage);
});

app.get("/fetch", (req, res) => {
    res.send(fetchPage);
});

app.get("/conventions", (req, res) => {
    res.send(conventionsPage);
});

app.get("/terminal", (req, res) => {
    res.send(terminalPage);
});

app.get("/tools", (req, res) => {
    res.send(toolsPage);
});

app.get("/packages", (req, res) => {
    res.send(packagesPage);
});

app.get("/import_export", (req, res) => {
    res.send(import_exportPage);
});

app.get("/rendering", (req, res) => {
    res.send(ssr_csrPage);
});

app.get("/redirects", (req, res) => {
    res.send(redirectsPage);
});

app.get("/app_setup", (req, res) => {
    res.send(app_setupPage);
});

app.get("/serve_html", (req, res) => {
    res.send(serve_htmlPage);
});

app.get("/rest_api", (req, res) => {
    res.send(rest_apiPage);
});

app.get("/html_design", (req, res) => {
    res.send(html_designPage);
});

app.get("/admin", (req, res) => {
    res.send(adminPage);
});

app.get("/fail", (req, res) => {
    res.send(failPage);
});

/* --------------- REDIRECTS --------------- */

const users = [
    { objectUsername: "admin", objectPassword: "adminadmin" }
];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = {
        objectUsername: username,
        objectPassword: password
    };
    users.push(user);
    res.redirect("/");
});


app.post("/login", (req, res) => {
    const loginName = req.body.username;
    const loginPassword = req.body.password;
    const validatedUser = users.find(user => user.objectUsername === loginName && user.objectPassword === loginPassword);
    if (validatedUser) {
        res.redirect("/admin");
    } else {
        res.redirect("/fail");
    }
});


/* --------------- API --------------- */

// if there were a database it would make sense to have the "api" in the endpoint
app.post("/api/admin", (req, res) => {
    res.redirect("/frontpage");
});


/* --------------- PORT --------------- */

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) { 
        console.log(error); 
    }
    console.log("Server is running on port " + PORT);
});