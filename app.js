async function getGif(word) {
    let gifBox = document.querySelector('#gifBox')
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(res)
    let randGif = res.data.data[Math.floor(Math.random() * 51)].images.downsized.url;
    console.log(randGif)
    $('#gifBox').append(`<img src="${randGif}">`)
}

$('#search').on('click', function (e) {
    e.preventDefault()
    let word = $('#gifTxt').val()
    getGif(word)
    $('#gifTxt').val('')
})
$('#rmBtn').on('click', function (e) {
    e.preventDefault();
    $('img').remove();
    $('#gifTxt').val('')
})

$('#gifTxt').on('keypress', function (e) {
    let word = $('#gifTxt').val()
    if (e.which === 13) {
        getGif(word);
        $('#gifTxt').val('')
    }
})



console.log("Let's get this party started!");