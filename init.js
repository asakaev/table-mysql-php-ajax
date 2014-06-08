var start = '<table class="table table-striped" width="647">' +
'<thead>' +
'<tr>' +
'<th>#</th>' +
'<th>Name</th>' +
'<th>Specialization</th>' +
'<th>Telephone</th>' +
'</tr>' +
'</thead>' +
'<tbody>';

var doctor = '';

function loadJSON() {
    $.getJSON('getfromdb', function (data) {
        data.forEach(function(entry) {
            console.log(entry);
            doctor += '<tr>' +    
            '<td>' + entry.id + '</td>' +
            '<td>' + entry.name + '</td>' +
            '<td>' + entry.specialization + '</td>' +
            '<td>' + entry.h_phone + '</td>' +
            '</tr>';
        });
        var end = start + doctor + '</tbody></table>';
        $('body').append(end);
    });
}