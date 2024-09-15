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
}
