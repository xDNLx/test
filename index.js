$(() => {

    let counter = $('#counter');
    let clicks = 0;
    const button = $('#button');
    button.click(() => {        
        clicks++;
         counter.html(clicks)
    })


});