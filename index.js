var all = document.getElementsByTagName("*");

const getFacets = () => {
    fetch('https://api.facet.ninja/facet/mene-prod', {
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const { facet } = data;
        console.log('successful response', facet);
        facet && facet.forEach(f => {
            console.log('F', f);
            f.id && f.id.forEach(idx => {
                $(`#${idx}`).css('display', 'none');
            })
            console.log('f', f)

        })
    });
}
getFacets();