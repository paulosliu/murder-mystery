(function() {
    $(OnLoad);

    function OnLoad() {
        InitNavButtons();
    }

    function InitNavButtons() {
        $(".nav-button").click((e) => {
            let isNext = $(e.target).hasClass("next-page-button");
            let $currPage = $(e.target).parents(".page");
            let index = parseInt($currPage.attr("page-index"));

            if(isNext) {
                let validated = ValidatePage(index);
                if(!validated) {
                    $("#warning").fadeIn();
                    return;
                } else {
                    $("#warning").css("display", "none");
                }
            }

            let nextIndex = isNext ? index + 1 : index - 1;
            let $nextPage = $(`.page[page-index='${nextIndex}']`);
            $currPage.fadeOut(() => {$nextPage.fadeIn()});
        });
    }

    function ValidatePage(pageIndex) {

        return true;
    }
})();