$('#menu-btn').click (function(){
    $('nav .navigation ul').addClass('active')

});
$('#menu-close').click (function(){
    $('nav .navigation ul').removeClass('active')

});

// -----------------------------------------------------------------
$(document).ready(function() {
    $.getJSON('data/data.json', function(data) {
        let medicinesHtml = '';
        data.medicines.forEach(function(medicine) {
            medicinesHtml += `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${medicine.name}</h5>
                            <p class="card-text"> ${medicine.use}</p>
                            <p class="card-text-Price"> ${medicine.price}</p>
                        </div>
                    </div>
                </div>`;
        });
        $('#medicines').html(medicinesHtml);

    });
});