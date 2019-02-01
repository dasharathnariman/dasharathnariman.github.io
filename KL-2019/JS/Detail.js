// JavaScript Document
$(document).ready(function() {
	$('#1-full').DataTable({
		"columnDefs": [
	{
			"targets": [1,2,5,6,9,10],
			"render": function (data, type, row, meta)
			{
				if (data == 0)
				{
					return'';
				}
				else
				{
					var x=data;
					x=x.toString();
					var afterPoint = '';
					if(x.indexOf('.') > 0)
						afterPoint = x.substring(x.indexOf('.'),x.length);
					x = Math.floor(x);
					x=x.toString();
					var lastThree = x.substring(x.length-3);
					var otherNumbers = x.substring(0,x.length-3);
					if(otherNumbers != '')
						lastThree = ',' + lastThree;
					var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
					return res;
				}
			}
		},
			
			
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

		"language": 
		{
			"thousands": "'"
		},
		"paging":   false,
		"info":     false,
		"searching": false,
		"ordering": false
	});
} );