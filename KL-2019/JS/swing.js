// JavaScript Document
var oTable = $('table.data-table').DataTable({
	rowCallback: function(row, data, index){
		if(data[3]== '15.00%'')
		{
			$(row).find('td:eq(4)').css('color', 'green');
		}
	}
});