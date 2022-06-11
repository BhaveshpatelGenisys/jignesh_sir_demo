$(document).ready(function () {

    $(".button-registration").click(function (ev) {
        $(".model-registration").show()
    })

    $(".icon-close").click(function (ev) {
        $("#registrationForm").trigger("reset");
        $(".model-registration").hide();
        eventCheck(true);
    })

    document.getElementById('dateOfBirth').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
});

let flag = true;

function eventCheck(flagValue) {
    console.log("eventCheck", flagValue);
    flag = flagValue;
}

$(document).on("mouseup mousedown click mousemove mouseover mouseenter mouseleave", function (e) {
    console.log(flag, e.type);
    if (flag) {
        $(document.body).css('pointer-events', 'auto');
        return true;
    } else {
        $(document.body).css('pointer-events', 'none');
        return false;
    }
});

$(document).on("keydown", function (e) {
    if (!flag) {
        let curruntId = '';
        var inputValue = e.which;

        $(":focus").each(function () {
            curruntId = this.id;
        });
        switch (curruntId) {
            case 'firstName':
                if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0 && inputValue != 8 && inputValue != 37 && inputValue != 39 && inputValue != 46)) {
                    e.preventDefault();
                }
                break;
            case 'lastName':
                if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0 && inputValue != 8 && inputValue != 37 && inputValue != 39 && inputValue != 46)) {
                    e.preventDefault();
                }
                break;
            case 'email':
                if (!(inputValue >= 65 && inputValue <= 120 || inputValue >= 48 && inputValue <= 57) && (inputValue != 32 && inputValue != 0 && inputValue != 8 && inputValue != 37 && inputValue != 39 && inputValue != 46 && inputValue != 190)) {
                    e.preventDefault();
                }
                break;
            case 'mobile':
                if (!(inputValue >= 96 && inputValue <= 105 || inputValue >= 48 && inputValue <= 57) && (inputValue != 32 && inputValue != 0 && inputValue != 8 && inputValue != 37 && inputValue != 39 && inputValue != 46)) {
                    e.preventDefault();
                }
                break;
            default:

        }
    } else {
        // $(document.body).css('pointer-events', 'none');
        // return false;
    }
});