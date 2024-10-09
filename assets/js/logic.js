window.onload = () => {
    parseDeltascript();
};

function parseDeltascript() {
    const dsTypes = new Set([
        "int", "bool", "float", "char", "string", "color", "image", 
        "project", "layer", "palette", "script", "save_config"
    ]);
    
    document.querySelectorAll(".nx").forEach(codeWord => {
        const next = codeWord.nextElementSibling;
        const previous = codeWord.previousElementSibling;

        if (dsTypes.has(codeWord.innerHTML))
            codeWord.setAttribute("class", "ds-type");
        else if (codeWord.innerHTML.startsWith("$"))
            codeWord.setAttribute("class", "namespace");
        else if (next instanceof Element && next.innerHTML.startsWith("("))
            codeWord.setAttribute("class", "ds-function");
        else if (previous instanceof Element && previous.innerHTML === ".")
            codeWord.setAttribute("class", "ds-property");
    });

    document.querySelectorAll(".err").forEach(codeWord => {
        const next = codeWord.nextElementSibling;

        if (codeWord.innerHTML === "#" && next instanceof Element && 
            (next.innerHTML.length == 6 || next.innerHTML.length == 8)) {
            codeWord.setAttribute("class", "hcl");
            next.setAttribute("class", "hcl");
        }
    });
}
