function encodeAndDecodeMessages() {
    // capture elements
    const [encodeButton, decodeButton] = Array.from(
        document.querySelectorAll("#main button"));
        const textContainers = Array.from(document.querySelectorAll("#main textarea"));

        // attach events
        encodeButton.addEventListener("click", encodeAndSend);
        decodeButton.addEventListener("click", decondeAndRead);

        //helper methods
        function nextChar(char)  {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }

        function previousChar(char) {
            return String.fromCharCode(char.charCodeAt(0) - 1);
        }

        function transform(text, cb) {
            return text.split("").map(cb).join("");
        }

        //callback methods
        function encodeAndSend() {
            textContainers[1].value = transform(textContainers[0].value, nextChar);
            textContainers[0].value = "";
        }

        function decondeAndRead() {
            textContainers[1]. value = transform(textContainers[1].value, previousChar);
        }
}