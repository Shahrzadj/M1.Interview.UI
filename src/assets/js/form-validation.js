// Wait for the DOM to be ready
$(function() {  
    $("form[name='addPerson']").validate({
      // Specify validation rules
      rules: {
        addName: "required",
        addAge: {
          required: true,
          min:18,
          max:100,
          number: true
        },
        addPhone: {
          required: true,
          minlength: 8,
          number: true
        }
      },
      // Specify validation error messages
      messages: {
        addPhone: {
          minlength: "Your phone number must be at least 8 characters long"
        }      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
    $("form[name='editPerson']").validate({
        // Specify validation rules
        rules: {
            editName: "required",
          editAge: {
            required: true,
            min:18,
            max:100,
            number: true
          },
          editPhone: {
            required: true,
            minlength: 8,
            number: true
          }
        },
        // Specify validation error messages
        messages: {
            editPhone: {
            minlength: "Your phone number must be at least 8 characters long"
          }      },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
  });