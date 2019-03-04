let submitForm = function (name, surname, floor, position) {
    let submitContainer = document.querySelector('#submit-container');
    submitContainer.style.display = 'none';

    if (name !== '' || surname !== '' || floor !== '' || position !== '') {
        let resultContainer = submitContainer.querySelector('#result-container');
        let nameHTML = alertBlock();
        let surnameHTML = alertBlock();
        let floorHTML = alertBlock();
        let positionHTML = alertBlock();

        resultContainer.classList.remove('alert-danger');
        resultContainer.classList.remove('alert-primary');

        if (name !== '') {
            nameHTML = alertBlock('Имя: ' + name);

        }

        if (surname !== '') {
            surnameHTML = alertBlock('Фамилия: ' + surname);
        }

        if (floor !== '') {
            floorHTML = alertBlock('Пол: ' + floor);

            switch (floor) {
                case 'Женский':
                    resultContainer.classList.add('alert-danger');

                    break;
                case 'Мужской':
                    resultContainer.classList.add('alert-primary');

                    break;
                default:
                    resultContainer.classList.add('alert-primary');
            }
        }

        if (position !== '') {
            positionHTML = alertBlock('Должность: ' + position);
        }

        submitContainer.querySelector('.js-name').innerHTML = nameHTML;
        submitContainer.querySelector('.js-surname').innerHTML = surnameHTML;
        submitContainer.querySelector('.js-floor').innerHTML = floorHTML;
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