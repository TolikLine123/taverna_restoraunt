$(document).ready(function() {
    function updateSum() {
        let total = 0;
        $('tbody tr').each(function() {
            const price = parseFloat($(this).find('.price').text());
            const qty = parseInt($(this).find('.qty').val());
            const sum = price * qty;
            $(this).find('.sum').text(sum);
            total += sum;
        });
        $('#total').text(total);
    }

    $('.qty').on('change', function() {
        updateSum();
    });

    updateSum(); // Initial calculation
});