import moment from 'moment';

export const validations = {
    checkMinLength: function(text, minLength){
        if(text.length <= minLength) {
            return `length should be at least ${minLength} characters`
        } else {
            return '';
        }
    },

    timeShouldBeInTheFuture: function (t) {
        if(moment(t).isValid() && moment(t).isAfter()){
            return '';
        }else{
            return 'can\'t be in the past';
        }
    }
}