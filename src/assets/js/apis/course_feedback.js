// For course feedback

function setStar(element) {
    let star = $(element).attr('data-star');
    document.getElementById('txt_course_star').value = star;

    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            $(`#course_${i}`).css('color', '#f7c434');
        } else {
            $(`#course_${i}`).css('color', 'gray');
        }
    }

}

// Submit course feedback

function submitFeedback(course_id) {

    let feedback_point = document.getElementById('txt_course_star').value;
    let comment = document.getElementById('txt_review').value;

    if (!feedback_point || !comment || !course_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Please fill all the fields!',
            icon: 'error',
        })
    }

    let payload = {
        course_id,
        feedback_point,
        feedback_comment: comment
    }

    $.post({
        url: BASE_URL + '/feedback/course',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.status == 200) {
                // reset form
                document.getElementById('txt_course_star').value = '';
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

function getFeedback(course_id) {

    $.get({
        url: PUBLIC_URL + '/feedback/course?course_id=' + course_id,
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
                    try {
                        document.getElementById('div_overall_rating').innerHTML = average_points.toFixed(1);
                        document.getElementById('span_overall_rating').innerHTML = average_points.toFixed(1);

                    } catch { }

                    // average point start fillup rating
                    for (let i = 1; i <= 5; i++) {

                        // for half star
                        if (i <= average_points) {
                            if (average_points > i && average_points < (i + 1)) {
                                $(`#overall_half_${i}`).css('color', '#f7c434');
                                $(`#overall_top_half_${i}`).css('color', '#f7c434');
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

                    try {
                        // total review
                        document.getElementById('div_total_review').innerHTML = feedback.length + ' reviews';
                    } catch { }

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
                    try {
                        document.getElementById('div_review_codeblock').innerHTML = review_codeblock;
                    } catch { }

                }
            }
        }
    })

}