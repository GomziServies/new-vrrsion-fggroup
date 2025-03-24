try {
    if (!HOST || !PUBLIC_ROUTE) {}
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: error.message || 'report this issue'
    })
}

function recipeLike(recipeId, element, unlike) {

    if (!localStorage.getItem('fg_group_user_authorization')) {
        return modalLogin()
    }

    if (!recipeId) {
        return Swal.fire({
            title: 'Error',
            text: 'Something went wrong',
            icon: 'error',
        })
    }

    $.post({
        url: `${BASE_URL}/recipe/like`,
        method: 'POST',
        data: JSON.stringify({
            recipe_id: recipeId,
            like: (typeof unlike == 'undefined') ? 'LIKE' : 'DISLIKE'
        }),
        contentType: 'application/json',
        success: result => {
            if (typeof unlike == 'undefined') {
                $('#img_like').attr('src', '../images/img/like.webp')
                element.onclick = () => recipeLike(recipeId, element, true)
            } else {
                $('#img_like').attr('src', '../images/img/not-bookmarked.svg')
                element.onclick = () => recipeLike(recipeId, element)
            }
        },
        error: error => {
            error = error.responseJSON

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

function getRecipeLike(recipeId, element) {
    let baseURL = BASE_URL
    if (!localStorage.getItem('fg_group_user_authorization')) {
        baseURL = HOST + PUBLIC_ROUTE
    }

    $.getJSON(`${baseURL}/recipe?id=${recipeId}`).then(result => {
        if (result.data && result.data.user_like && result.data.user_like.isLike) {
            $(document).ready(() => {
                $('#img_like').attr('src', redirectDir + 'images/img/like.webp')
                element.onclick = () => recipeLike(recipeId, element, true)
            })
        } else {
            $('#img_like').attr('src', redirectDir + 'images/img/not-bookmarked.svg')
            element.onclick = () => recipeLike(recipeId, element)
        }

        return result
    })
}