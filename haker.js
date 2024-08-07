const terminal =  document.querySelector(`.terminal`);
const lines = [
    "Accessing mainframe...",
    "Bypassing security protocols...",
    "Initiating data transfer...",
    "Downloading classified files...",
    "Complete. Operation successful."
];
setTimeout(()=>{

    terminal.textContent =  "Accessing mainframe..."
    setTimeout(()=>{
        terminal.textContent =  "Bypassing security protocols..."
        setTimeout(()=>{
            terminal.textContent =  "Initiating data transfer..."
            setTimeout(()=>{
                terminal.textContent = "Downloading classified files..."
                setTimeout(()=>{
                    terminal.textContent = "Complete. Operation successful."
                },Math.floor(Math.random()*9000));
            },Math.floor(Math.random()*9000));
        },Math.floor(Math.random()*9000));
    },Math.floor(Math.random()*9000));
},Math.floor(Math.random()*100));
