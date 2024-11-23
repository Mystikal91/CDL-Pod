$(function () {

    $(".check-if-works").each(function() {
        var url = $("a", this).attr("href");
        fetch(url, {mode: 'no-cors'}).then(r=>{
            $("a", this).removeClass("disabled").removeClass("btn-secondary").addClass("btn-outline-dark");
            $(this).removeAttr("data-bs-toggle").removeAttr("data-bs-title").removeClass("check-if-works");
        })
        .catch(e=>{
            console.log(url+" non è raggiungibile");
        });
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});