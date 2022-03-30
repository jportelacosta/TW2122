// flickr api key: https://www.flickr.com/services/api/misc.api_keys.html || a5dbe90ceeb8a3561dfc760ae33be5f7
// Weather api key: https://home.openweathermap.org/users/sign_in || a9e49b305a5d14cc0790dbf507251ca1

function requestFlickrApi() {
    const searchValue = $('#imageSearchID').val();

    $.ajax({
        url: 'https://www.flickr.com/services/rest',
        data: {
            method: 'flickr.photos.search',
            api_key: 'a5dbe90ceeb8a3561dfc760ae33be5f7',
            text: searchValue,
            format: 'json',
            nojsoncallback: 1,
            per_page: 10,
            extras: 'url_m'
        },
        method: 'GET',
        success: function (response) {

                $('#photosContainer').html('');
                response.photos.photo.forEach(item => {
                        const imageHTMLElement = $('<img>').attr('src', item.url_m)
                        $('#photosContainer').append(imageHTMLElement);
                    }
                )

        }
    });
}