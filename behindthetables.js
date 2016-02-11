$.ajax({
	url: 'dnd.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		$(data.Dungeons.Castles.questions).each(function(index, value){

			var arr_leng = value.predicate.length;
			pred_i = value.predicate[Math.floor(Math.random()*arr_leng)];
			$('body').append(value.subject + pred_i + "</br>");
			//$('body').add(pred_i);
		});
	}
});