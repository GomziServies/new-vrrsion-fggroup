try {
    if (!HOST || !PUBLIC_ROUTE) { }
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: error.message || 'report this issue'
    })
}

function createFitnessOrder(payload) {
    $.post({
        url: BASE_URL + '/fitness-plan/book',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            payment(result.data)
        },
        error: error => {
            error = error.responseJSON

            if (error && error.message == 'Invalid Token') {
                return modalLogin()
            }

            try {
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return Swal.fire({
                    title: 'Error',
                    text: 'Something went wrong!',
                    icon: 'error',
                })
            }
        }
    })
}

function createGeneralFitnessOrder(payload) {
    $.post({
        url: BASE_URL + '/fitness-plan/book/general',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            result.data.hidden = {
                contact: false,
                email: false
            }
            payment(result.data)
        },
        error: error => {
            error = error.responseJSON

            if (error && error.message == 'Invalid Token') {
                return modalLogin()
            }

            try {
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return Swal.fire({
                    title: 'Error',
                    text: 'Something went wrong!',
                    icon: 'error',
                })
            }
        }
    })
}

function payment(options) {
    // Add Handler
    options.handler = () => Swal.fire({
        title: 'Success',
        text: 'Please check your email for invoice.',
        icon: 'success',
    })

    new Razorpay(options).open()
}