(function() {
    $(OnLoad);

    function OnLoad() {
        InitNavButtons();
    }

    function InitNavButtons() {
        $(".start-button").click((e) => {
            let $currPage = $(e.target).parents(".page");
            $currPage.fadeOut(() => {$("#game").fadeIn()});
        });
        
        $(".nav-button").click((e) => {
            $("#warning").css("display", "none");
            let isNext = $(e.target).hasClass("next-page-button");
            let $currPage = $(e.target).parents(".page");
            let index = parseInt($currPage.attr("page-index"));

            if(isNext) {
                let validated = ValidatePage(index);
                if(!validated) {
                    $("#warning").fadeIn();
                    return;
                }
            }

            let nextIndex = isNext ? index + 1 : index - 1;
            let $nextPage = $(`.page[page-index='${nextIndex}']`);
            $currPage.fadeOut(() => {$nextPage.fadeIn()});
        });
    }

    function ValidatePage(pageIndex) {
        switch (pageIndex)
        {
            case 1:
                return ValidatePage1();
            case 7:
                return ValidatePage7();
            default:
                return true;        
        }
    }

    function ValidatePage1() {
        return $("#input-one").val() === "rickroll";
    }

    /**
     * Faculty Building Code
     */
    function ValidatePage7()
    {
        if ($("#input-seven").val() === "61343")
        {
            document.getElementById('facultyBG').pause();
            return true;
        }
   
        return false;
    }
})();