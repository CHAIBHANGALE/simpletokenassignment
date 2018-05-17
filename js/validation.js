$(function(){

	jQuery.validator.addMethod('allowedName',function(value,element){

		return this.optional(element) 
				||  /^[a-z.]+$/.test(value);



	},'Wrong Value');


	jQuery.validator.addMethod('allowedCompany',function(value,element){

		return this.optional(element) 
				||  /^[\w.-]+$/.test(value);



	},'Wrong Value');


	$("#Profileform").validate({

		rules:{
			firstname:{
				required:true,
				minlength:3,
				maxlength:50,
				allowedName:true
			},

			lastname:{
				required:true,
				minlength:3,
				maxlength:50,
				allowedName:true
			},

			description:{
				required:true,
				minlength:5,
				maxlength:220
			},

			company:{
				required:true,
				maxlength:50,
				allowedCompany:true
			},

			designation:{
				required:true,
				allowedCompany:true,
				minlength:2,
				maxlength:50
			},

			dateofjoining:{
				required:true
			},

			linkedin:{
				maxlength:20,
				url:true
			},

			instagram:{
				maxlength:20,
				url:true
			}

		},

		messages:{

			firstname:{
				required:"Firstname required",
				minlength:"Minimum length 3 required",
				maxlength:"Length cannot exceed 50",
				allowedName:"Firstname should contain only alphabets and . "
			},

			lastname:{
				required:"Lastname required",
				minlength:"Minimum length 3 required",
				maxlength:"Length cannot exceed 50",
				allowedName:"Lastname should contain only alphabets and . "
			},

			description:{
				required:"Description required",
				minlength:"Minimum length 5 required",
				maxlength:"Length cannot exceed 220",
			},

			company:{
				required:"Company Name required",
				maxlength:"Length cannot exceed 50",
				allowedCompany:"Company Name should contain only alphabets numbers and hyphen"	
			},

			designation:{
				required:"Designation required",
				minlength:"Length cannot be less than 2",
				maxlength:"Length cannot exceed 50",
				allowedCompany:"Designation should contain only alphabets numbers and hyphen"	
			},

			dateofjoining:{
				required:"Date of Joining required"
			},

			linkedin:{
				maxlength:"Length cannot exceed 20",
				url:"URL not valid"

			},

			instagram:{
				maxlength:"Length cannot exceed 20",
				url:"URL not valid"
			}




		}

	});


$('#buttonCancel').click(function(){				
					if(confirm("Want to clear?")){
						
						$('#Profileform input[type="text"]').val('');
						
						$('#Profileform #InputDescribe').val('');
					}					
				});



});