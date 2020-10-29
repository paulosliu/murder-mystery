(function () {
    $(OnLoad);

    function OnLoad() {
        InitNavButtons();
        // ShowPage(3);
    }

    // for debugging
    function ShowPage(index) {
        $(".page").css("display", "none");
        $(`.page[page-index='${index}']`).css("display", "block");
        $("#game").fadeIn();
    }

    function InitNavButtons() {
        $(".start-button").click((e) => {
            let $currPage = $(e.target).parents(".page");
            $currPage.fadeOut(() => { $("#game").fadeIn() });
        });

        $(".nav-button").click((e) => {
            $("#warning").css("display", "none");
            let isNext = $(e.target).hasClass("next-page-button");
            let $currPage = $(e.target).parents(".page");
            let index = parseInt($currPage.attr("page-index"));

            if (isNext) {
                let validated = ValidatePage(index);
                if (!validated) {
                    $("#warning").fadeIn();
                    return;
                } else {
                    OnSuccess(index);
                }
            }

            let nextIndex = isNext ? index + 1 : index - 1;
            let $nextPage = $(`.page[page-index='${nextIndex}']`);
            $currPage.fadeOut(() => { $nextPage.fadeIn() });
        });

        $(".fake-nav-button").click((e) => {
            $("#warning").css("display", "none");
            $("#warning").fadeIn();
        });
    }

    const ANS = ["ProSS", "skull", undefined, "Project Super Human", "Faculty Club", "61343"];
    function ValidatePage(pageIndex) {
        let value = ANS[pageIndex - 1] ;
        if(typeof value === "undefined")
            return true;

        let $input = $(`.page[page-index='${pageIndex}'] input`);
        return $input.val().toUpperCase() === value.toUpperCase();
    }

    function OnSuccess(pageIndex) {
        switch (pageIndex)
        {
            case 1:
                document.getElementById('chem').play();
                return;
            case 2:
                document.getElementById('chem').pause();
                return;
            case 4:
                document.getElementById('phoneCall').pause();  
                document.getElementById('vlog').play();
                return;
            case 5:
                document.getElementById('vlog').pause();
                return;    
            case 6:
                document.getElementById('facultyBG').pause();
                return;        
        }
    }
})();