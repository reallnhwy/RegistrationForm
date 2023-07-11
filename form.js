document.getElementById('toRight').onclick = function () {
    // Convert to array after get list option by DOM
    var options = Array.from(document.getElementById('leftlist').getElementsByTagName('option'));
    for (let i = 0; i < options.length; i++) {
        // checked if options is selected
        if (options[i].selected) {
            // set it to false & append this element to right column
            options[i].selected = false
            document.getElementById('rightlist').appendChild(options[i])
        }

    }
}

document.getElementById('all_to_right').onclick = function () {
    // Convert to array after get list option by DOM
    let options = Array.from(document.getElementById('leftlist').getElementsByTagName('option'));

    for (let i = 0; i < options.length; i++) {
        document.getElementById('rightlist').appendChild(options[i])
    }
}

document.getElementById('toLeft').onclick = function () {
    // Convert to array after get list option by DOM
    var options = Array.from(document.getElementById('rightlist').getElementsByTagName('option'));
    for (let i = 0; i < options.length; i++) {
        // checked if options is selected
        if (options[i].selected) {
            // set it to false & append this element to right column
            options[i].selected = false
            document.getElementById('leftlist').appendChild(options[i])
        }

    }
}

document.getElementById('all_to_left').onclick = function () {
    // Convert to array after get list option by DOM
    let options = Array.from(document.getElementById('rightlist').getElementsByTagName('option'));

    for (let i = 0; i < options.length; i++) {
        document.getElementById('leftlist').appendChild(options[i])
    }
}
