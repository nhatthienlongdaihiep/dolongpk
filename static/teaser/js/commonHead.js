var CommonValid = new function () {
    this.ValidateEmail = function (_email) { var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; return filter.test(_email); };
    this.ValidateOnlyLetter = function (_text) { var filter = /^[a-zA-Z]+$/; return filter.test(_text); };
    this.ValidateLetter = function (_text) { var filter = /^[a-zA-Z0-9]+$/; return filter.test(_text); };
    this.ValidateLetterPassword = function (_text) { var filter = /^[a-zA-Z0-9\.\_~!@#$%^&*(:)-+=]+$/; return filter.test(_text); };
    this.ValidateUserName = function (_text) { var filter = /^[a-zA-Z0-9._]+$/; return filter.test(_text); };
    this.ValidateNumberOnly = function (_text) { var filter = /^[0-9]+$/; return filter.test(_text); };

    this.InputExtender = function (id, type) {
        try {
            var val = $('#' + id).val();
            //alert(val);
            if (val == '' || val == 'undefined') {
                return;
            }

            var str = '';
            switch (type) {
                case 0:
                    for (var index = 0; index < val.length; index++) {
                        if (CommonValid.ValidateLetter(val.charAt(index))) {
                            str += val.charAt(index);
                        }
                        $('#' + id).val(str);
                    }

                    break;
                case 1:
                    for (var index = 0; index < val.length; index++) {
                        if (CommonValid.ValidateNumberOnly(val.charAt(index))) {

                            str += val.charAt(index);
                        }
                    }

                    $('#' + id).val(str);

                    break;
                case 2:
                    for (var index = 0; index < val.length; index++) {
                        if (CommonValid.ValidateOnlyLetter(val.charAt(index))) {
                            str += val.charAt(index);
                        }
                        $('#' + id).val(str);
                    }

                    break;
                case 3:
                    for (var index = 0; index < val.length; index++) {
                        if (CommonValid.ValidateLetterPassword(val.charAt(index))) {
                            str += val.charAt(index);
                        }
                        $('#' + id).val(str);
                    }
                    break;
                case 4:
                    for (var index = 0; index < val.length; index++) {
                        if (CommonValid.ValidateUserName(val.charAt(index))) {
                            str += val.charAt(index);
                        }
                        $('#' + id).val(str);
                    }
                    break;
            }
        }
        catch (err) { alert(err); }
    };
}


var checkKeyUpInput = new function () {
    this.checkKeyUpUser = function () {
        
    }
}

