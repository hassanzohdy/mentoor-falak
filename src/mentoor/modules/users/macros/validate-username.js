function validateUsername(username) {
    if (Is.empty(username)) {
        return this.form.formHandler.addError(`username`, 'required', trans('validation.required'));
    }

    // accepts only small English letters, dot and underscore
    // let regex = /^[a-z\.\_]+$/;
    // user name should:
    // 1- starts with English letter
    // 2- has only English letters, dots and underscores.
    // 3- Only one dot|underscore between English letters
    // 4- ends with at least two letters|numbers

    let regex = '^';
    regex += '[a-z_]'; // starts with English letter Or Underscore
    regex += '([a-z0-9]+'; // May contain one ore more English letter|number
    regex += '(\.|_)?)*';// may contain underscore or dot, at most one time between letters 
    regex += '[a-z0-9]{2,}'; // should ends with two English letters|numbers 
    regex += '$';

    regex = new RegExp(regex);

    let formHandler = this.form.formHandler;

    if (!username.match(regex)) {
        formHandler.addError(`username`, 'regex', 'Invalid username');
    } else {
        echo(2)
        formHandler.removeError(`username`);
    }

    // this.detectChanges();
}

Macros.create('validateUserName', validateUsername);
