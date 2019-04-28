$(() => {

    let counter = $('#counter');
    let clicks = 0;
    const button = $('#button');
    button.click(() => {        
        clicks++;
        counter.html(clicks)
    })

    const inputs = $('input');
    inputs.change((a) => {
        $('.test').css(
            'background-color',
            `rgba(${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value}, ${inputs[3].value})`,

        )
    })
});