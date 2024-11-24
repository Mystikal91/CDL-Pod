const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready( function () {
    $('.datatables-table').DataTable({
        language: {
            url: './vendor/datatables/i18n/it-IT.json',
        },
    });
} );