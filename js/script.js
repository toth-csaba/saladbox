$(window).load(function() {

});

$(document).ready(function() {

	// This fade out the login form and fade in the register form
	$('.register').hide();
	$('#register').click(function(e) {
		e.preventDefault();
		var el = $(this);
		$('.register a').removeClass('register-removed');
		$('#register-btn').removeClass('register-done');
		if (el.hasClass('clicked')) {
			el.removeClass('clicked');
		} else {
			el.addClass('clicked');
			$('.login').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Registrează');
				$('.register').fadeIn();
			}, 500);
		}
	});

	// This fade out the register form and fade in the login form --> register done
	$('#register-btn').click(function(e) {
		e.preventDefault();
		$('#register').removeClass('clicked');
		$('.register a').removeClass('register-removed');
		if ($(this).hasClass('register-done')) {
			$(this).removeClass('register-done');
		} else {
			$(this).addClass('register-done');
			$('.register').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Logează-te');
				$('.login').fadeIn();
			}, 500);
		}
	});

	// This fade out the register form and fade in the login form --> go back to the login form
	$('.register a').click(function(e) {
		e.preventDefault();
		$('#register').removeClass('clicked');
		if ($(this).hasClass('register-removed')) {
			$(this).removeClass('register-removed');
		} else {
			$(this).addClass('register-removed');
			$('.register').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Logează-te');
				$('.login').fadeIn();
			}, 500);
		}
	});

	// This fade out the login form and fade in the forgot password form
	$('.forgot-password').hide();
	$('#get-password').click(function(e) {
		e.preventDefault();
		var el = $(this);
		$('.forgot-password a').removeClass('recover-removed');
		$('#recover-btn').removeClass('recover-done');
		if (el.hasClass('clicked')) {
			el.removeClass('clicked');
		} else {
			el.addClass('clicked');
			$('.login').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Recuperează parola');
				$('.forgot-password').fadeIn();
			}, 500);
		}
	});

	// This fade out the forgot password form and fade in the login form --> recover password, new password given
	$('#recover-btn').click(function(e) {
		e.preventDefault();
		$('#get-password').removeClass('clicked');
		$('.forgot-password a').removeClass('recover-removed');
		if ($(this).hasClass('recover-done')) {
			$(this).removeClass('recover-done');
		} else {
			$(this).addClass('recover-done');
			$('.forgot-password').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Logează-te');
				$('.login').fadeIn();
			}, 500);
		}
	});

	// This fade out the forgot password form and fade in the login form --> go back to the login form
	$('.forgot-password a').click(function(e) {
		e.preventDefault();
		$('#get-password').removeClass('clicked');
		if ($(this).hasClass('recover-removed')) {
			$(this).removeClass('recover-removed');
		} else {
			$(this).addClass('recover-removed');
			$('.forgot-password').fadeOut();
			setTimeout(function() {
				$('.content-head h2').html('Logează-te');
				$('.login').fadeIn();
			}, 500);
		}
	});

	// Script for IE9 placeholder support
	if (!Modernizr.input.placeholder) {

		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}

	// Bootstrap popovers
	$('.salad-option ul li').popover();
	$('.setting-content a').popover();
	$('.address').popover();
	$('.shopping').popover();

	// Bootstrap tab funtions and dropwdown for the menu page
	$('#tabs li a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('.dropdown-toggle').dropdown();

	// Equail height on soup menu
	equalheight('#soup ul li .thumbnail');

	// Settings tabs accordion functions
	$('.setting').click(function(e) {
		e.preventDefault();
		$('.address').removeClass('active');
		$('.address-accordion').slideUp();
		$('.setting').toggleClass('active');
		$('.setting-form').slideToggle();
		$('.shopping').removeClass('active');
		$('.shopping-menu').slideUp();
	});

	$('.address').click(function(e) {
		e.preventDefault();
		$('.setting').removeClass('active');
		$('.setting-form').slideUp();
		$('.address').toggleClass('active');
		$('.address-accordion').slideToggle();
		$('.shopping').removeClass('active');
		$('.shopping-menu').slideUp();
	});

	$('.shopping').click(function(e) {
		e.preventDefault();
		$('.setting').removeClass('active');
		$('.setting-form').slideUp();
		$('.address').removeClass('active');
		$('.address-accordion').slideUp();
		$('.shopping').toggleClass('active');
		$('.shopping-menu').slideToggle();
	});

	$('.closing-accordion').click(function(e) {
		e.preventDefault();
		$('.setting-form').slideUp();
		$('.setting').removeClass('active');
	});

	$('.closing-accordion').click(function(e) {
		e.preventDefault();
		$('.address-accordion').slideUp();
		$('.address').removeClass('active');
	});

	$('.closing-accordion').click(function(e) {
		e.preventDefault();
		$('.shopping-menu').slideUp();
		$('.shopping').removeClass('active');
	});

	// My address remove if i click this
	$('.close-address').click(function() {
		var removed_li = $(this).closest('li').fadeOut();
		setTimeout(function() {
			removed_li.remove();
		}, 1000);
	});

	// Remove my salad if i click this
	$('.delete-salad').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('removed')) {
			$(this).removeClass('removed');
		} else {
			$(this).addClass('removed');
			$(this).closest('li').fadeOut();
			setTimeout(function() {
				$(this).closest('li').remove();
			}, 1000);
		}
	});

	//ddSlick functions
	$('.city-dropdown').ddslick({
		width : '100%',
		selectText : "Selecteaza adresa"
	});

});

// Equail height on soup menu
equalheight = function(container) {

	var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto');
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for ( currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			// empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for ( currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
};

$(window).resize(function() {
	equalheight('#soup ul li .thumbnail');
});

//main drag'n'drop logic
$(document).ready(function() {
	// define ingredient and salad gallery and destination
	var gallery = $('.kj'), destination = $(".empty-box");

	// let the gallery items be draggable
	$(".combination ul li").draggable({
		cancel : "a.ui-icon", // clicking an icon won't initiate dragging
		revert : "invalid", // when not dropped, the item will revert back to its initial position
		containment : "document",
		helper : "clone",
		cursor : "move",
		refreshPositions : true,
	});

	// let the ingredient items be draggable
	// $("li", destination).draggable({
	// cancel : "a.ui-icon", // clicking an icon won't initiate dragging
	// revert : "invalid", // when not dropped, the item will revert back to its initial position
	// containment : "document",
	// cursor : "move",
	// refreshPositions : true,
	// });

	// let the trash be droppable, accepting the gallery items
	destination.droppable({
		accept : ".combination ul > li",
		activeClass : "ui-state-highlight",
		tolerance : "fit",
		drop : function(event, ui) {
			// $("ul.selected-salad").appendTo(destination);
			$(this).find('ul').append(ui.draggable.clone());
			$("ul.selected-salad li:first-child").animate({
				width : "300px"
			}, 1500).find("img").animate({
				height : "auto"
			}, 1500);
		},
		deactivate : function(event, ui) {

			//get data set
			var data = ui.draggable[0]['dataset'];
			var dataType = data.type;
			var dataPrice = data.price;
			var dataName = data.name;
			var dataCalories = data.calories;
			var dataProtein = data.protein;

			if (dataType == 'ingredient ') {
				//if we receive an ingredient, first we check if there is already a salad - if not, we return a warning to choose a salad first
				//if we have a salad ->
				// we create the ingredient object, take the session of the temp salad and add the ingredient
				//we check if there are already 2 ingredients - if yes, we do not add another but warn to delete some ingredients to switch
				
				//put all ingredient info in an object
				var data_ingred = {
					Name : dataName,
					Type : dataType,
					Calories : dataCalories,
					Proteins : dataProtein,
					Price : dataPrice
				};
			} else if (dataType == 'salad'){
				//if we receive a salad, we check if there is already a salad chosen. if yes, we delete the existing salad both in the dispay and in the temp salad
				//but we retain the other already chosen ingredients. we build the salad object, add the existing ingredients (if any) and save to display and temp salad in session
				
			} else if (dataType == 'crutoane') {
				//we get the temp salad from the session , check if crutons are not already addedd. if not, we add crutons
				
			} else if (dataType == 'dressing'){
				//we check if there is already a dressing. if yes, we delete the existing dressing from the temp session and add the new one - update both display and temp salad in session
				
			}
			//parse current salad from session
			var salate = $.parseJSON(sessionStorage.getItem('salata_tmp'));
			//if we already have a salad
			if (salate !== null) {

				if (salate.Ingrediente.length > 1) {
					console.log('Max 2 ingredient');
					return false;
				} else {
					salate.Total_Price = getCommaDelimitedStringFromStringValue(getFloatValueFromCommaDelimitedString(salate.Total_Price) + getFloatValueFromCommaDelimitedString(dataPrice));
					salate.Ingrediente.push(data_ingred);
					sessionStorage.setItem('salata_tmp', JSON.stringify(salate));
				}

			} else {
				//if we don't have a salad yet
				if (dataType === 'salata') {
					var salate = {
						Name : dataName,
						Type : dataType,
						Ingrediente : [],
						Total_Price : dataPrice
					};

					sessionStorage.setItem('salata_tmp', JSON.stringify(salate));
				} else {
					console.log('Choose a salad first!');
					if (destination.dataType !== "salata") {
						$("li", destination).remove();
					}

					console.log(ui);
				}
			}
			console.log(salate);
		}
	});

	var getFloatValueFromCommaDelimitedString = function(stringValue) {
		return parseFloat(stringValue.replace(/,/g, '.'));
	};
	var getCommaDelimitedStringFromStringValue = function(floatValue) {
		return floatValue.toString().replace(/\./g, ',');
	};
	// let the gallery be droppable as well, accepting items from the trash
	gallery.droppable({
		accept : destination,
		activeClass : "custom-state-active",
		drop : function(event, ui) {

		}
	});

	// image deletion function
	// function deleteImage( $item ) {
	// $item.fadeOut(function() {
	// // var $list = $( "ul", destination ).length ?
	// // $( "ul", destination ) :
	// // $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( destination );
	// var $list = $('ul.selected-salad');
	// //$item.find( "a.ui-icon-trash" ).remove();
	// $item.appendTo( $list ).fadeIn(function() {
	// $item
	// .animate({ width: "300px" })
	// .find( "img" )
	// .animate({ height: "auto" });
	// });
	// });
	// }
});
