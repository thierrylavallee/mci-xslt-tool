
$(document).ready(function () {
    $("#action").click(function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'pt',
            format: [297 * 2.83465, 210 * 2.83465]}),
                source = $("#result")[0],
                margins = {
                    top: 20 * 2.83465,
                    bottom: 20 * 2.83465,
                    left: 20 * 2.83465,
                    width: 257 * 2.83465
                };
        doc.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, {
                    // y coord
                    width: margins.width // max width of content on PDF
                },
                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF
                    //          this allow the insertion of new lines after html
                    doc.save("Test.pdf");
                },
                margins
                );
    });
});