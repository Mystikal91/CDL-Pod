$(document).ready( function () {
    $.ajax({
        type: "GET",
        url: "./data/bottoni-homepage.csv",
        dataType:'text',
        success: function (data) {
            renderPage($.csv.toObjects(data));
        }
    });

    function renderPage(data) {

        var $row_attuale = $("#button-grid .row");
        var html_template =
            '<div class="col-6 col-md-4 col-lg-3 col-xl-2">' +
                '<div class="shadow">' +
                    '<div class="d-grid gap-2">' +
                        '<a class="btn btn-outline-dark" href="$url" target="_blank" role="button" data-bs-toggle="$tooltip" data-bs-title="$tooltip-text"><img class="img-fluid" src="$img_src">$title</a>' +
                        '<a class="btn btn-primary disabled" href="./manual-urbi.html" role="button">Guide e Manuali</a>' +
                    '</div>' +
                '</div>' +
            '</div>';

        $.each(data, function (index, line) {
            var html = html_template;
            html = html.replace("$url", line["Link"])
                       .replace("$img_src", line["Icona"])
                       .replace("$title", line["Titolo"])
                       .replace("$tooltip-text", line["Tooltip"]);
            if (line["Tooltip"] != "")
                html = html.replace("$tooltip", "tooltip");
            else
                html = html.replace("$tooltip", "");

            switch (line["Categoria"]) {
                case 'attuale':
                    $row_attuale.append(html);
                    break;
                default:
                    break;
            }
        });
        activateTooltip();
    }

    function activateTooltip() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }

} );