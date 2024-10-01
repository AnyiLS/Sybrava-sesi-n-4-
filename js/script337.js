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


	$('#play-video').on('click', () => {
		$('.boton-play').on('click', () => {
            $('.play-boton-10').hide();
            localStorage.setItem('slide337', 'true')
            $('.cursor').hide();
            $('.boton-next').show();
            $('.reproduc').show();
            $('.vutom-col').hide();
        })
	})
})
