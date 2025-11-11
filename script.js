const editor = document.getElementById("editor");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const lineCount = document.getElementById("lineCount");

editor.addEventListener("input", () => {
    const text = editor.value;
    charCount.textContent = text.length;
    wordCount.textContent = text.trim().split(/\s+/).filter(Boolean).length;
    lineCount.textContent = text.split(/\n/).length;
});
