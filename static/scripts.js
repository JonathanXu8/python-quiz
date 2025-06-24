document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("answer-box");
    const form = textarea.closest("form");

    textarea.addEventListener("keydown", function (e) {
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const value = this.value;

        // TAB inserts indentation
        if (e.key === "Tab") {
            e.preventDefault();
            this.value = value.substring(0, start) + "\t" + value.substring(end);
            this.selectionStart = this.selectionEnd = start + 1;
        }

        // Shift+Enter submits the form
        else if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            form.submit();
        }

        // ENTER with auto-indent
        else if (e.key === "Enter") {
            e.preventDefault();

            // Find current line's indentation
            const lineStart = value.lastIndexOf("\n", start - 1) + 1;
            const currentLine = value.substring(lineStart, start);
            const indentMatch = currentLine.match(/^\s*/);
            const indent = indentMatch ? indentMatch[0] : "";

            // Add extra indent after ":" like Python expects
            const addIndent = currentLine.trim().endsWith(":") ? "\t" : "";

            const newText = "\n" + indent + addIndent;

            this.value = value.substring(0, start) + newText + value.substring(end);
            this.selectionStart = this.selectionEnd = start + newText.length;
        }
    });
});
