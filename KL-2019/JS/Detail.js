// JavaScript Document
$(document).ready(function() {
	$('#1-full').DataTable({
		"columnDefs": [
			{
				
	
		"render": function(data, type, row){
			var x = data * 100;
			return parseFloat(x).toFixed(2) + '%';
		},
		"targets": [3,4,7,8,11,12],
 
			},
			
			{
			"targets": [4,8,12],
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
			},
			
			{
			"targets": [2,6,10],
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
			}
		],
		"paging":   false,
		"info":     false,
		"searching": false
	});
} );