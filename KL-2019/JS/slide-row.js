/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table id="detail" class="display" style="width:100%">'+
        '<thead>'+
		'<tr>'
			'<td>Neurtal</td>'+
			'<td>Neutral</td>'+
            '<td>'+d.neutral_nda+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.neutral_udf+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
		'<tbody>'+
    '</table>';
}
 
$(document).ready(function() {
    var table = $('#example').DataTable( {
        "ajax": "array.json",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            {"data": "no"},
            {"data": "constituency"},
            {"data": "nda"},
            {"data": "nda_swing"},
			{"data": "udf"},
			{"data": "udf_swing"},
			{"data": "ldf"},
			{"data": "ldf_swing"},
			{"data": "winner"},
			{"data": "margin"}
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );