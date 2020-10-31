(function () {
    $(OnLoad);

    function OnLoad() {
        InitNavButtons();
        ShowPage(6);
    }

    // for debugging
    function ShowPage(index) {
        $(".page").css("display", "none");
        $GetPage(index).css("display", "block");
        $("#game").fadeIn();
    }

    function $GetPage(pageIndex) {
        return $(`.page[page-index='${pageIndex}']`);
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
            let $nextPage = $GetPage(nextIndex);
            $currPage.fadeOut(() => { $nextPage.fadeIn() });
        });

        $(".fake-nav-button").click((e) => {
            $("#warning").css("display", "none");
            $("#warning").fadeIn();
        });
    }

    const ANS = ["Professor Adams Morris", "skull", undefined, "Project Super Human", undefined, "Faculty Club", "61343"];
    function ValidatePage(pageIndex) {
        let value = ANS[pageIndex - 1] ;
        if(typeof value === "undefined")
            return true;

        let $input = $GetPage(pageIndex).find('input');
        return $input.val().toUpperCase() === value.toUpperCase();
    }

    function OnSuccess(pageIndex) {
        switch (pageIndex)
        {
            case 1:
                document.getElementById('intro').pause();
                PlayAfterShortTimeout('jon');
                return;
            case 2:
                document.getElementById('jon').pause();
                PlayAfterShortTimeout('chem');
                return;
            case 3:
                document.getElementById('chem').pause();
                return;    
            case 4:
                document.getElementById('phoneCall').pause();
                PlayAfterShortTimeout('vlog');
                return;
            case 5:
                ShowHint(6, 120);
                return;
            case 6:
                document.getElementById('facultyBG').play();
                ShowHint(7, 180);
                return;  
            case 7:
                document.getElementById('facultyBG').pause();
                PlayAfterShortTimeout('ending');
                return;        
        }
    }

    function ShowHint(pageIndex, delayInSeconds) {
        let $hint = $GetPage(pageIndex).find(".hint");
        setTimeout(() => {
            $hint.fadeIn();
        }, delayInSeconds * 1000);
    }
})();

function PlayAfterShortTimeout(id) {
    setTimeout(() => {
        document.getElementById(id).play();
    }, 600);
}