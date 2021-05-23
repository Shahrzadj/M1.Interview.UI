// Wait for the DOM to be ready
$(function() {  
    $("form[name='addPerson']").validate({
      // Specify validation rules
      rules: {
        newPersonName: "required",
        newPersonAge: {
          required: true,
          min:18,
          max:100,
          number: true
        },
        newPersonPhone: {
          required: true,
          minlength: 8,
          number: true
        }
      },
      // Specify validation error messages
      messages: {
        newPersonPhone: {
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
            editedpersonName: "required",
          editedpersonAge: {
            required: true,
            min:18,
            max:100,
            number: true
          },
          editedpersonPhone: {
            required: true,
            minlength: 8,
            number: true
          }
        },
        // Specify validation error messages
        messages: {
            editedpersonPhone: {
            minlength: "Your phone number must be at least 8 characters long"
          }      },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
  });