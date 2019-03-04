let submitForm = function (name, surname, sex, position) {
    let submitContainer = document.querySelector('#submit-container');
    submitContainer.style.display = 'none';

    if (name !== '' || surname !== '' || sex !== '' || position !== '') {
        let resultContainer = submitContainer.querySelector('#result-container');
        let nameHTML = alertBlock();
        let surnameHTML = alertBlock();
        let sexHTML = alertBlock();
        let positionHTML = alertBlock();

        resultContainer.classList.remove('alert-danger');
        resultContainer.classList.remove('alert-primary');

        if (name !== '') {
            nameHTML = alertBlock('Имя: ' + name);
        }

        if (surname !== '') {
            surnameHTML = alertBlock('Фамилия: ' + surname);
        }

        if (sex !== '') {
            sexHTML = alertBlock('Пол: ' + sex);

            switch (sex) {
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

        let jsName = submitContainer.querySelector('.js-name');
        let jsSurname = submitContainer.querySelector('.js-surname');
        let jsSex = submitContainer.querySelector('.js-sex');
        let jsPosition = submitContainer.querySelector('.js-position');
        
        toggleAlertContainer(name, jsName);
        toggleAlertContainer(surname, jsSurname);
        toggleAlertContainer(sex, jsSex);
        toggleAlertContainer(position, jsPosition);

        jsName.innerHTML = nameHTML;
        jsSurname.innerHTML = surnameHTML;
        jsSex.innerHTML = sexHTML;
        jsPosition.innerHTML = positionHTML;
        submitContainer.style.display = 'block';

    }
};

let toggleAlertContainer = function (value, alertContainer) {
    alertContainer.style.display = 'none';

    if (value !== '') {
        alertContainer.style.display = 'block';
    }
}


let submitForm2 = function (name, surname) {
    let sexContainer = document.querySelector('#sex-container');
    let positionContainer = document.querySelector('#position-container');
    sexContainer.style.display = 'none';
    positionContainer.style.display = 'none';

    if (name !== '' && surname !== '' ) {
        sexContainer.style.display = 'block';
        positionContainer.style.display = 'block';
    }
};



let alertBlock = function (text = '') {
    if (text === '') {
        return '';
    }

    return '<div class="alert alert-secondary">' + text + '</div>'
};

