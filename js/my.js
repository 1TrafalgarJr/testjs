let submitForm = function (name, position) {
    let submitContainer = document.querySelector('#submit-container');
    submitContainer.style.display = 'none';

    if (name !== '' || position !== '') {
        let nameHTML = alertBlock();
        let positionHTML = alertBlock();

        if (name !== '') {
            nameHTML = alertBlock('Имя: ' + name);
        }

        if (position !== '') {
            positionHTML = alertBlock('Должность: ' + position);
        }

        submitContainer.querySelector('.js-name').innerHTML = nameHTML;
        submitContainer.querySelector('.js-position').innerHTML = positionHTML;
        submitContainer.style.display = 'block';
    }
};

let alertBlock = function (text = '') {
    if (text === '') {
        return '';
    }

    return '<div class="alert alert-secondary">' + text + '</div>'
};