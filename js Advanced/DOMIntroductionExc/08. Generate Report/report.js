function generateReport() {

    // html dict
    const html = {
        checkboxes: document.querySelectorAll("input[type='checkbox']"),
        rows: document.getElementsByTagName("tr"),
        output: document.getElementById("output")
    };

    const selectedCheckboxes = Array.from(html.checkboxes)
    .map((x, i) => [x, i])
    .filter((x) => x[0].checked)
    .map((x) => [x[0].name, x[1]]);

    const rowData = Array.from(html.rows)
    .slice(1)
    .map((x) => Array.from(x.children).map((y) => y.innerHTML));

    html.output.value = JSON.stringify(
        rowData.map((x) =>
        selectedCheckboxes.reduce((a, v) => {
            const [sColName, sColIndex] = v;
            a[sColName] = x[sColIndex];
            return a;
        }, {})
        )
    );
}