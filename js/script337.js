$(document).ready(function () {
	// modal
    $(".openModal").on("click", () => {
        $(".modal").css("display", "block");
    });
    // cerra modal
    $(".closeModal").on("click", () => {
        $(".modal").css("display", "none");
        $('.reproduc').trigger('pause');
        $('.reproduc').hide();
    });


	// modal1
    $(".openModal1").on("click", () => {
        $(".modal1").css("display", "block");
    });
    // cerra modal
    $(".closeModal1").on("click", () => {
        $(".modal1").css("display", "none");
        $('.reproduc').trigger('pause');
        $('.reproduc').hide();
    });

    // modal2
    $(".openModal2").on("click", () => {
        $(".modal2").css("display", "block");
    });
    // cerra modal
    $(".closeModal2").on("click", () => {
        $(".modal2").css("display", "none");
        $('.reproduc').trigger('pause');
        $('.reproduc').hide();
    });

     // modal3
     $(".openModal3").on("click", () => {
        $(".modal3").css("display", "block");
    });
    // cerra modal
    $(".closeModal3").on("click", () => {
        $(".modal3").css("display", "none");
        $('.reproduc').trigger('pause');
        $('.reproduc').hide();
    });
})
