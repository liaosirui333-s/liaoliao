

    $("#dram").click(function () {
        if ($("#dram").html() == "中文") {
            $("#dram").html("English").css("color");
            $(".english").css("display", "none");
            $(".chinese").css("display", "block");
        } else {
            $("#dram").html("中文").css("color" );
            $(".english").css("display", "block");
            $(".chinese").css("display", "none");

        }
    });
