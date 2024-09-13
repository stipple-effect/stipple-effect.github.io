window.onload = () => {
    parseDeltascript();
};

function parseDeltascript() {
    const dsTypes = new Set([
        "int", "bool", "float", "char", "string", 
        "color", "image", "project", "layer", "palette"
    ]);
    
    document.querySelectorAll(".nx").forEach(codeWord => {
        if (dsTypes.has(codeWord.innerHTML))
            codeWord.setAttribute("class", "ds-type");
        else {
            const next = codeWord.nextElementSibling;

            if (next instanceof Element && next.innerHTML.startsWith("("))
                codeWord.setAttribute("class", "ds-function");
        }
    });
}
