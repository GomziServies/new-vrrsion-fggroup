try {
    if (!HOST || !PUBLIC_ROUTE) { }
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: error.message || 'report this issue'
    })
}

function createDigitalPlanOrder(plan_id, element) {
    $.post({
        url: BASE_URL + '/fg-digital/create-order',
        method: 'POST',
        data: JSON.stringify({ plan_id }),
        contentType: 'application/json',
        success: result => {
            if (result && result.data) {
                result.data.handler = () =>
                    Swal.fire({
                        title: 'Success',
                        text: 'Please check your email for invoice.',
                        icon: 'success',
                    });
                result.data.hidden = {
                    contact: false,
                    email: false
                }
                new Razorpay(result.data).open()
            }
        },
        error: error => {
            error = error.responseJSON
            if (error && error.status && error.status == 401) {
                return modalLogin(`buyId=${encodeURIComponent(plan_id)}`)
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
        },
        beforeSend: () => $(element).attr('disabled', true),
        complete: () => $(element).attr('disabled', false)
    })
}