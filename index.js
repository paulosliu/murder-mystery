(function() {
    $(OnLoad);

    function OnLoad() {
        InitNavButtons();
    }

    function InitNavButtons() {
        $(".next-page-button").click((e) => {
            let $currPage = $(e.target).parents(".page");
            let index = parseInt($currPage.attr("page-index"));

            let $nextPage = $(`.page[page-index='${index+1}']`);
            $currPage.fadeOut(() => {$nextPage.fadeIn()});
        });
    }
})();