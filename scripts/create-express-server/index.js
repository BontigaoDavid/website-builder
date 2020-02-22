const fs = require("fs");
const PATH = require("path")


function checkFiles() {
    if (fs.existsSync("server.js")) {
        console.log("'server.js' file already exists");
    }

    else if (fs.existsSync("public")) {
        console.log("'public' directory already exists");
    }

    else if (fs.existsSync("routes")) {
        console.log("'routes' directory already exists");
    }

    else {
        createDirectories();
        createServerSJ();
        createRoutesIndex();
        createPublicIndex()
    }
}


function createDirectories() {
    fs.mkdirSync("public");
    fs.mkdirSync("routes");
}


function createServerSJ() {
    let fileText = fs.readFileSync(PATH.resolve(__dirname, 'server-js-text.txt'), "utf8");
    fs.writeFileSync("server.js", fileText);
}

function createRoutesIndex() {
    let fileText = fs.readFileSync(PATH.resolve(__dirname, 'routes-index-js-text.txt'), "utf8");
    fs.writeFileSync("./routes/index.js", fileText);
}

function createPublicIndex() {
    let fileText = fs.readFileSync(PATH.resolve(__dirname, 'public-index-html-text.txt'), "utf8");
    fs.writeFileSync("./public/index.html", fileText);
}

checkFiles();

