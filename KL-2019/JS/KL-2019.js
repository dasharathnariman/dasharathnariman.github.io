// JavaScript Document
$(document).ready(function() {
	$('#KL-2019').DataTable({
		"columnDefs": [
			
			{
				"render": function(data, type, row){
					var x = data * 100;
					return parseFloat(x).toFixed(2) + '%';
				},
				"targets": [2,3,4,5,6,7],
				
			},
			
			
			{
			"targets": [3,5,7],
			"createdCell": function (td, cellData, rowData, row, col) {
				if ( cellData > 0 ) 
				{
					$(td).css('color', '#006600'),
						$(td).css('background-color', '#ccffcc')
				}
				else if ( cellData < 0 ) 
				{
					$(td).css('color', '#990000'),
						$(td).css('background-color', '#ffcccc')
				}
			}
			
		}],
		
		
		"paging":   false,
		"info":     false,
		"searching": false
	});
} );

