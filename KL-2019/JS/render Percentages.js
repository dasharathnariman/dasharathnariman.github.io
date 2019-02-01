// JavaScript Document
$(document).ready(function() {
	$('#1-full').DataTable({
		"columnDefs": 
		[
		{
			"targets": [3,4,7,8,11,12],
			"render": function (data, type, row, meta)
			{
				if (data == 0)
				{
					return'';
				}
				else
				{
					var x = data * 100;
					return parseFloat(x).toFixed(2) + '%';
				}
			}
		}
		],		
		"paging":   false,
		"info":     false,
		"searching": false,
		"ordering": false
	});
} );
