require('./bootstrap');

$('.user-link').click(function(e) {

    let linkId = $(this).data('link-id');
    let linkUrl = $(this).attr('href');

    // store visit async without interrupting link opening
    axios.post('/visit/' + linkId, {
        link: linkUrl
    })
        .then(res => console.log('Response: ', res))
        .catch(err => console.error('Error: ', err))
})
