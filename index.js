#!/usr/bin/env node

executeCommand(process.argv[2]);

function executeCommand(command) {
    if(!command) {
        command = "no command";
    }
    
    switch (command) {
        case "no command":
            console.log("//////////////// ZetaSOFT Application Builder ////////////////");
            console.log("Commands: ");
            console.log("   create-express-server");
            break;

        case "create-express-server":
            require("./scripts/create-express-server");
    }
}