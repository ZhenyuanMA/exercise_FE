$("#button").on("click", function () {
	$(".wrapper").removeClass("active")
	$.getJSON('/find/' + $(".telephone").val(), function (data) {
		$(".idcode").text(data.result)
		$("#qrcode").html("")
		if (data.result != 404) {
			new QRCode(document.querySelector("#qrcode"), "" + data.result);
		}
		else {
			$(".idcode").text("没有找到对应的订单")
		}
		$(".wrapper").addClass("active")
	})
})