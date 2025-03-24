function minusQuantity() {
    let quantity = document.getElementById('txt_quantity').value;
    if (quantity > 1) {
        quantity--;
        document.getElementById('txt_quantity').value = quantity;
    } else {
        return Swal.fire({
            title: 'Error',
            text: 'Min 1 book required for order!',
            icon: 'error',
        })
    }
}

function plusQuantity() {
    let quantity = document.getElementById('txt_quantity').value;
    if (quantity < 10) {
        quantity++;
        document.getElementById('txt_quantity').value = quantity;
    } else {
        return Swal.fire({
            title: 'Error',
            text: 'Max limit is 10 books per order!',
            icon: 'error',
        })
    }

}

let bookSearchParams = new URLSearchParams(window.location.search);

if (bookSearchParams.has('action') && bookSearchParams.get('action') == 'directBuyBook') {
    let findPayload = localStorage.getItem('tmp_BookPurchasePayload');
    if (findPayload) {
        try {
            findPayload = JSON.parse(findPayload);
            createBookOrder(findPayload.book_id, findPayload.quantity, {
                address_line_1: findPayload.address_line_1,
                address_line_2: findPayload.address_line_2,
                city: findPayload.city,
                pin_code: findPayload.pin_code,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

function createPaymentBook(book_id) {

    let quantity = $('#txt_quantity').val()

    let address_line_1 = $('#txt_address').val()
    let city = $('#txt_city').val()
    let pin_code = $('#txt_pincode').val()

    if (!address_line_1 || !city || !pin_code) {
        return Swal.fire({
            title: 'Error',
            text: 'Address, City and Pin code is required',
            icon: 'error',
        })
    }

    let address = {
        address_line_1: $('#txt_address').val(),
        address_line_2: $('#txt_address_2').val(),
        city: $('#txt_city').val(),
        pin_code: $('#txt_pincode').val()
    }


    createBookOrder(book_id, quantity, address);
}

function createBookOrder(book_id, quantity = 1, address) {
    if (!book_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Book ID is required.',
            icon: 'error',
        })
    }

    if (!address) {
        return Swal.fire({
            title: 'Error',
            text: 'Address, city and pin code are required!',
            icon: 'error',
        })
    }

    if (!address.address_line_1 || !address.city || !address.pin_code) {
        return Swal.fire({
            title: 'Error',
            text: 'Address, city and pin code are required!',
            icon: 'error',
        })
    }

    if (quantity == undefined || isNaN(parseInt(quantity)) || parseInt(quantity) < 1) {
        return Swal.fire({
            title: 'Error',
            text: 'Min 1 book required for order!',
            icon: 'error',
        })
    }

    let { address_line_1, address_line_2, city, pin_code } = address

    let payload = {
        book_id,
        quantity: parseInt(quantity),
    }


    let coupon_id = localStorage.getItem('coupon_id')
    if (coupon_id) {
        payload.coupon_id = coupon_id
    }

    if (address_line_1 && city && pin_code) {
        address_line_1 = String(address_line_1).trim()
        city = String(city).trim()
        pin_code = String(pin_code).trim()

        if (address_line_1.length == 0) {
            return Swal.fire({
                title: 'Error',
                text: 'Address Line 1 is required!',
                icon: 'error',
            })
        }

        if (city.length == 0) {
            return Swal.fire({
                title: 'Error',
                text: 'City name is invalid!',
                icon: 'error',
            })
        }

        if (isNaN(parseInt(pin_code)) || pin_code.length != 6) {
            return Swal.fire({
                title: 'Error',
                text: 'Pin Code is invalid!',
                icon: 'error',
            })
        }

        payload.address_line_1 = address_line_1
        payload.city = city
        payload.pin_code = pin_code
    }

    if (address_line_2) {
        payload.address_line_2 = String(address_line_2).trim()
    }

    // Will use after authentication
    localStorage.setItem('tmp_BookPurchasePayload', JSON.stringify({ ...payload, expire: new Date().getTime() + (1000 * 60 * 60 * 5) }))

    // Check Authentication
    if (localStorage.getItem("fg_group_user_authorization") == null || localStorage.getItem("user_info") == null) {
        localStorage.removeItem('fg_group_user_authorization')
        localStorage.removeItem('user_info')

        // Store Payload in Local Storage
        // expire in 5h
        return modalLogin('directBuyBook')
    }

    $.post({
        url: BASE_URL + '/books/create-order',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.data) {
                result.data.handler = () => {
                    localStorage.removeItem('tmp_BookPurchasePayload')
                    return Swal.fire({
                        title: 'Success',
                        text: 'Please check your email for invoice.',
                        icon: 'success',
                    }).then(() => {
                        $('#txt_pincode,#txt_address,#txt_city').val('')
                        $('#txt_quantity').val(1)


                        let user_info = localStorage.getItem('user_info')

                        if (user_info) {
                            user_info = JSON.parse(user_info)
                        }

                        if (user_info && ((user_info.first_name).toLowerCase()).trim() == "fg" || ((user_info.last_name).toLowerCase()).trim() == "user") {
                            return window.location.href = '../account/profile.html'
                        }

                        // remove coupon id
                        localStorage.removeItem('coupon_id')

                        // Redirect to Order Page
                        return window.location.href = 'health-and-wellness-books-orders.html'
                    })
                };

                result.data.hidden = {
                    contact: false,
                    email: false
                }
                new Razorpay(result.data).open()
            }
        },
        error: error => {
            error = error.responseJSON

            try {
                if (error && error.status && (error.status == 401)) {
                    return modalLogin(`directBuyBook`)
                }
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return modalLogin(`directBuyBook`)
            }
        }
    })
}

// ----------- E-BOOK

// Create E-book Order
function createEBookPayment(ebook_id) {
    if (!ebook_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Book ID is required.',
            icon: 'error',
        })
    }

    // check if local storage has payload

    let payload = {
        ebook_id,
        quantity: 1,
    }


    let coupon_id = localStorage.getItem('coupon_id')
    if (coupon_id) {
        payload.coupon_id = coupon_id
    }

    // Will use after authentication
    // Check Authentication
    if (localStorage.getItem("fg_group_user_authorization") == null || localStorage.getItem("user_info") == null) {
        localStorage.removeItem('fg_group_user_authorization')
        localStorage.removeItem('user_info')

        // Store Payload in Local Storage
        // expire in 5h
        return modalLogin(`directBuyEBook`)
    }

    $.post({
        url: BASE_URL + '/ebooks/create-order',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.data) {
                result.data.handler = () => {
                    localStorage.removeItem('tmp_BookPurchasePayload')
                    return Swal.fire({
                        title: 'Success',
                        text: 'Please check your email for invoice & book pdf',
                        icon: 'success',
                    }).then(() => {
                        $('#txt_pincode,#txt_address,#txt_city').val('')
                        $('#txt_quantity').val(1)


                        let user_info = localStorage.getItem('user_info')

                        if (user_info) {
                            user_info = JSON.parse(user_info)
                        }

                        if (user_info && ((user_info.first_name).toLowerCase()).trim() == "fg" || ((user_info.last_name).toLowerCase()).trim() == "user") {
                            return window.location.href = '../account/profile.html'
                        }

                        // remove coupon id
                        localStorage.removeItem('coupon_id')

                        // Redirect to Order Page
                        return window.location.href = 'health-and-wellness-books-orders.html'
                    })
                };
                result.data.hidden = {
                    contact: false,
                    email: false
                }
                new Razorpay(result.data).open()
            }
        },
        error: error => {
            error = error.responseJSON

            try {
                if (error && error.status && (error.status == 401)) {
                    return modalLogin(`directBuyEBook`)
                }
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return modalLogin(`directBuyEBook`)
            }
        }
    })
}

let setCurrentBookLang = 'english';
function purchasePaperBook() {
    $('.form_book').show()
    $("[id^='btn_book']").hide()
    $("[id^='btn_ebook']").hide()
    switch (setCurrentBookLang) {
        case 'english':
            $('#btn_book').show()
            break;

        case 'hindi':
            $('#btn_book_hindi').show()
            break;

        default:
            $('#btn_book').show()
            $('.form_book').show()
            break;
    }
}

function purchaseEbook() {
    // hide book button
    $("[id^='btn_book']").hide()
    $("[id^='btn_ebook']").hide()
    $('.form_book').hide()

    try {
        switch (setCurrentBookLang) {
            case 'english':
                $('#btn_ebook').show()
                break;
            case 'hindi':
                $('#btn_ebook_hindi').show()
                break;

            default:
                $('#btn_ebook').show()
                break;
        }
    } catch (error) {

    }
}

// For books feedback

function setStar(element) {
    let star = $(element).attr('data-star');

    document.getElementById('txt_book_star').value = star;

    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            $(`#book_${i}`).css('color', '#f7c434');
        } else {
            $(`#book_${i}`).css('color', 'gray');
        }
    }

}

// Submit Book Feedback

function submitFeedback(book_id) {

    let feedback_point = document.getElementById('txt_book_star').value;
    let comment = document.getElementById('txt_review').value;

    if (!feedback_point || !comment || !book_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Please fill all the fields!',
            icon: 'error',
        })
    }

    let payload = {
        book_id,
        feedback_point,
        feedback_comment: comment
    }

    $.post({
        url: BASE_URL + '/feedback/books',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.status == 200) {
                // reset form
                document.getElementById('txt_book_star').value = '';
                document.getElementById('txt_review').value = '';
                return Swal.fire({
                    title: 'Success',
                    text: 'Thank you for your feedback!',
                    icon: 'success',
                })

            }


        },
        error: error => {
            error = error.responseJSON

            try {
                if (error && error.status && (error.status == 401)) {
                    return modalLogin('review_segment')
                }
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return modalLogin()
            }
        }
    })


}

// Get Book Feedback

function getBookFeedback(book_id) {

    $.get({
        url: PUBLIC_URL + '/feedback/books?book_id=' + book_id,
        success: result => {
            if (result && result.status == 200) {
                let feedback = result.data,
                    total_points = 0,
                    feedback_count = {
                        'star_1': 0,
                        'star_2': 0,
                        'star_3': 0,
                        'star_4': 0,
                        'star_5': 0
                    }

                if (feedback) {

                    feedback.forEach(feedback => {
                        total_points += feedback.feedback_point;

                        // add into feedback count
                        feedback_count[`star_${feedback.feedback_point}`] += 1;
                    })

                    // calculate average
                    let average_points = total_points / feedback.length;

                    // NaN check
                    if (isNaN(average_points) || average_points == 0) {
                        average_points = 5;
                    }
                    document.getElementById('div_overall_rating').innerHTML = average_points.toFixed(1);
                    document.getElementById('span_overall_rating').innerHTML = average_points.toFixed(1);

                    // average point start fillup rating
                    for (let i = 1; i <= 5; i++) {

                        // for half star
                        if (i <= average_points) {
                            if (average_points > i && average_points < (i + 1)) {
                                $(`#overall_half_${i}`).css('color', '#f7c434');
                                $(`#overall_top_${i}`).css('color', '#f7c434');
                                $(`#overall_half_${i}`).show();
                                $(`#overall_top_half_${i}`).show();
                                $(`#overall_${i}`).css('display', 'none');
                                $(`#overall_top_${i}`).css('display', 'none');
                            } else {

                                $(`#overall_${i}`).css('color', '#f7c434');
                                $(`#overall_top_${i}`).css('color', '#f7c434');
                            }
                        } else {
                            $(`#overall_${i}`).css('color', 'gray');
                            $(`#overall_top_${i}`).css('color', 'gray');
                        }
                    }

                    // total review
                    document.getElementById('div_total_review').innerHTML = feedback.length + ' reviews';

                    // feedback count percentage
                    let feedback_count_percentage = {
                        'star_1': (feedback_count['star_1'] / feedback.length) * 100,
                        'star_2': (feedback_count['star_2'] / feedback.length) * 100,
                        'star_3': (feedback_count['star_3'] / feedback.length) * 100,
                        'star_4': (feedback_count['star_4'] / feedback.length) * 100,
                        'star_5': (feedback_count['star_5'] / feedback.length) * 100
                    }
                    //check NaN
                    if (isNaN(feedback_count_percentage['star_1'])) {
                        feedback_count_percentage['star_1'] = 0;
                    }
                    if (isNaN(feedback_count_percentage['star_2'])) {
                        feedback_count_percentage['star_2'] = 0;
                    }
                    if (isNaN(feedback_count_percentage['star_3'])) {
                        feedback_count_percentage['star_3'] = 0;
                    }
                    if (isNaN(feedback_count_percentage['star_4'])) {
                        feedback_count_percentage['star_4'] = 0;
                    }
                    if (isNaN(feedback_count_percentage['star_5'])) {
                        feedback_count_percentage['star_5'] = 0;
                    }

                    // feedback count show
                    for (let i = 1; i <= 5; i++) {
                        $(`#star_${i}`).text(`${feedback_count_percentage[`star_${i}`].toFixed(0)}%`);
                    }

                    // push codeblock of review
                    let review_codeblock = '';
                    feedback.forEach(feedback => {

                        // feedback point start fillup rating
                        let feedback_point = feedback.feedback_point,
                            star_block = '';
                        for (let i = 1; i <= 5; i++) {

                            // for star
                            if (i <= feedback_point) {
                                star_block += `<i className="fas fa-star"></i>`;
                            } else {
                                star_block += `<i className="fas fa-star" style="color:grey"></i>`;
                            }
                        }

                        review_codeblock += `<div className="mt-2 mb-5 meal">
                        <p className="d-inline-block mt-0">${(feedback?.user?.first_name || 'FG User') + ' ' + feedback?.user?.last_name || ''}</p>
                        ${star_block}
                        <span className="w-100 d-block">${feedback.feedback_comment}</span>
                    </div>`;
                    })


                    if (review_codeblock == '') {
                        review_codeblock = '<div className="mt-2 mb-5 meal">No reviews yet</div>'
                    }
                    document.getElementById('div_review_codeblock').innerHTML = review_codeblock;

                }
            }
        }
    })

}