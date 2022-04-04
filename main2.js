const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', calculateResults);

function calculateResults(e) {
    // UI components
    const loanEl          = document.querySelector('.loan-amount'),
          interestEl      = document.querySelector('.annual-interest'),
          paymentsEl      = document.querySelector('.payment-years'),
          totalInterestEl = document.querySelector('.total-interest'),
          monthPaymentEl  = document.querySelector('.monthly-payment'),
          totalPaymentEl  = document.querySelector('.total-payment');

    document.querySelector('.res-container').classList.add('d-none');
    document.querySelector('.placeholder-glow').classList.remove('d-none');
    document.querySelector('.results-container').classList.add('d-none');

    // Logic
    const principal = parseFloat(loanEl.value),
          calInterest = parseFloat(interestEl.value) / 100 / 12,
          calYears = parseFloat(paymentsEl.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calInterest, calYears),
          monthly = (principal * x * calInterest) / (x-1);

    if (isFinite(monthly)) {
        monthPaymentEl.value = monthly.toFixed(2);
        totalPaymentEl.value = (monthly * calYears).toFixed(2);
        totalInterestEl.value = ((monthly * calYears) - principal).toFixed(2);
        document.querySelector('.res-container').classList.remove('d-none');
        setTimeout(function() {
            document.querySelector('.placeholder-glow').classList.add('d-none');
            document.querySelector('.results-container').classList.remove('d-none');
        }, 2500);
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.appendChild(document.createTextNode('There is something wrong! please try again.'));
        document.querySelector('.res-container').classList.remove('d-none');
        setTimeout(function() {
            document.querySelector('.res-container').classList.add('d-none');
            document.querySelector('.card-body').insertBefore(errorDiv, document.querySelector('.card-body > .card-title'));
            setTimeout(function() {
                document.querySelector('.alert').remove();
            }, 3000);
        }, 2500)
    }

    e.preventDefault();
}