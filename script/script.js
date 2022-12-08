const answer = document.getElementById('answer');
const history = document.getElementById('history');

function number(num) {
    if (answer.value == '0' || answer.value == '') {
        answer.value = num;
    } else {
        answer.value += num;
        history.value = eval(answer.value);
    }
}

function clr() {
    answer.value = '';
    history.value = '';
}

function del() {
    answer.value = answer.value.slice(0, -1);
}

function math(math) {
    if (answer.value == '' || answer.value == '0') {
        answer.value = '';
    } else {
        if (answer.value[answer.value.length - 1] == '/'
            || answer.value[answer.value.length - 1] == '*'
            || answer.value[answer.value.length - 1] == '-'
            || answer.value[answer.value.length - 1] == '+'
            || answer.value[answer.value.length - 1] == '%'
            || answer.value[answer.value.length - 1] == '.'
        ) {
            answer.value = answer.value;
        } else {
            answer.value += math;
        }
    }
    history.value = eval(answer.value);

}

function equal() {
    answer.value = eval(answer.value);
    history.value = '';

}