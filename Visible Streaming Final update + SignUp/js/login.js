$(function(){
    
    $.validator.setDefaults({
         errorClass: 'help-block'
    });
   
    $('#form').validate({
        rules: {
            email: {
                required: true, 
                email: true
            },
            password: 'required',
            password2: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            email: {
                required: 'Please enter an email adress.',
                email: 'Please enter a <em>valid</em> address.'
            }
        }
    });
    
});