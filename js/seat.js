$(function() {
	var row = 20;
	var colum = 50;
	var left = 1;
	var right = 2;
	var checkedMaxNum = 5;
	var checkedNum = 0;
	var disabled_seats = {
		1: {
			price: 10,
			leftColum: 1,
			rightColum: 2
		},
		2: {
			price: 10,
			leftColum: 4,
			rightColum: 3,
		},
		3: {
			price: 10,
			leftColum: 3,
			rightColum: 4
		}

	}
	var sale_seats ='%59%,%56%,%57%';
	var html_a_disabled = '<a class="disabled" href="javascript:;"></a>'
	var html_a = '<a title="%title%" data-column="%column%" data-row="%row%" data-type="N" data-no="%no%" class="%class%" hidefocus="true" href="javascript:;"></a>'
	for (var i = 1; i <= row; i++) {
		var rowData = disabled_seats[i];
		var leftColum = left;
		var rightColum = right;
		if (typeof(rowData) != "undefined") {
			leftColum = rowData.leftColum;
			rightColum = rowData.rightColum;
		}
		var li = document.createElement("li");
		for (var j = 1; j <= leftColum; j++) {
			$(li).append(html_a_disabled);
		}
		for (var j = leftColum + 1; j <= colum - rightColum; j++) {
			var a = html_a.replace("%title%", i + "排" + j + "座").replace("%column%", j).replace("%row%", i).replace("%no%", (i-1) * colum + j);
			var xy = '%'+((i-1) * colum + j)+'%'; 
			if(sale_seats.match(xy)){
				a = a.replace("%class%", 'sale');
			}else{
				a = a.replace("%class%", '')
			}
			$(li).append(a);
		}
		for (var j = 1; j <= rightColum; j++) {
			$(li).append(html_a_disabled);
		}
		$(".seat ul").append(li);
	}


	var checkedSeats = '';
	$(".seat a").on("tap", function() {
		if (!$(this).hasClass("disabled")&&!$(this).hasClass("sale")) {
			if ($(this).hasClass("active")) {
				if (checkedNum > 0) {
					checkedNum--;
				} else {
					return;
				}
				$(this).removeClass("active")
				var s = ',' + $(this).attr("data-no");
			} else {
				if (checkedMaxNum - 1 >= checkedNum) {
					checkedNum++;
				} else {
					alert("a");
					return;
				}
				var title = $(this).attr("title");
				$('.seatText').append('<span>'+title+'</span>')
				$(this).addClass("active");
			}
		}
	});
})