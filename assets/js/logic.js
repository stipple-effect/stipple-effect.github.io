window.onload = () => {
    parseDeltascript();
    formatFakeH4Bodies();
};

function parseDeltascript() {
    const dsTypes = new Set([
        "int", "bool", "float", "char", "string", "color", "image", 
        "project", "layer", "palette", "script", "save_config", "light"
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

function formatFakeH4Bodies() {
    const coreContentParagraphs = document.querySelectorAll('.core-content p:has(strong:only-child)');
    const contentParagraphs = document.querySelectorAll('.content p:has(strong:only-child)');
    
    const allParagraphs = [...coreContentParagraphs, ...contentParagraphs];

    allParagraphs.forEach(fakeHeader => {
        if (fakeHeader.childNodes.length === 1) {
            const body = fakeHeader.nextElementSibling;

            if (body instanceof Element)
                body.setAttribute("class", "fake-h4-body");
        }
    });
}
