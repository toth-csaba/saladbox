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
		start : function(event, ui) {
			var data = ui.helper[0]['dataset'];
			var dataType = data.type;
			var dataName = data.name;
			if (dataType == 'salata') {
				$('.ui-draggable-dragging').animate({
					width : "300px",
					height : "auto"
				}, 500);
			}
			$('.ui-draggable-dragging').prepend(dataName);
		},
		snap : $('.empty-box'),
		snapTolerance : 30,
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
		tolerance : "intersect",
		start : function() {
			//we get the original position of the element so that in case we want to reject it
			//we can send it back to this position
			$(this).data("origPosition", $(this).position());
		},
		drop : function(event, ui) {
			//get data set
			var data = ui.draggable[0]['dataset'];
			var dataType = data.type;
			var dataPrice = data.price;
			var dataName = data.name;
			var dataCalories = data.calories;
			var dataProtein = data.protein;
			console.log(dataType);

			if (dataType == 'ingredient') {
				//if we receive an ingredient, first we check if there is already a salad -
				var salata = $.parseJSON(sessionStorage.getItem('salata_tmp'));
				//if not, we return a warning to choose a salad first
				if (salata == null) {
					console.log('Alege prima data o salata');
				} else {
					//if we have a salad ->
					//we check if there are already 2 ingredients -
					if (salata.Ingrediente.length > 1) {
						//if yes, we do not add another but warn to delete some ingredients to switch
						//send back the element to its original position
						console.log('La combinaţia noastră poţi adăuga maxim două ingrediente');
						ui.draggable.animate(ui.draggable.data("origPosition"), "fast");
						return false;
					} else {
						//put the ingredient in the display
						$('ul.selected-ingredients').append(ui.draggable.clone());

						// we create the ingredient object, take the session of the temp salad and add the ingredient
						var data_ingred = {
							Name : dataName,
							Type : dataType,
							Calories : dataCalories,
							Proteins : dataProtein,
							Price : dataPrice
						};
						salata.Ingrediente.push(data_ingred);
						//recalculate total price
						var ingredients_price = totalIngPrice(salata);
						var total_price = parseFloat(salata.Price.replace(',', '.')) + ingredients_price;
						salata.Total_Price = total_price.toFixed(2);
						//save to temp salad in session
						localStorage.removeItem('salata_tmp');
						sessionStorage.setItem('salata_tmp', JSON.stringify(salata));
					}
				}
			} else if (dataType == 'salata') {
				//if we receive a salad,
				//we check if there is already a salad chosen or is a different one then what we received
				var salata = $.parseJSON(sessionStorage.getItem('salata_tmp'));
				if ((salata != null) && (salata.Type == 'salata')) {
					//if yes, we replace the existing salad in the temp salad
					salata.Name = dataName;
					salata.Price = dataPrice;
					//remove it from the dispay and add the new salad
					$("ul.selected-salad li").remove();
					$('ul.selected-salad').prepend(ui.draggable.clone());
					//we recalculate the total price, including the old ingredients
					var ingredients_price = totalIngPrice(salata);
					var total_price = parseFloat(dataPrice.replace(',', '.')) + ingredients_price;
					//save the total price as a string with only two decimals
					salata.Total_Price = total_price.toFixed(2);
					//save to display and temp salad in session
					localStorage.removeItem('salata_tmp');
					sessionStorage.setItem('salata_tmp', JSON.stringify(salata));
				} else {
					//prepend the salad to the display
					$('ul.selected-salad').prepend(ui.draggable.clone());
					//create the initial temporary salad and save it to the session
					var salata = {
						Name : dataName,
						Type : dataType,
						Price : dataPrice,
						Ingrediente : [],
						Crutoane : false,
						Dressing : '',
						Total_Price : dataPrice
					};
					sessionStorage.setItem('salata_tmp', JSON.stringify(salata));
				}

			} else if (dataType == 'crutoane') {
				//we get the temp salad from the session ,
				var salata = $.parseJSON(sessionStorage.getItem('salata_tmp'));
				if (salata == null) {
					console.log('Alege prima dată o salată');
				} else {
					//if we have a salad ->
					//check if crutons are not already addedd. if not, we add crutons
					if (salata.Crutoane == true) {
						//if yes, we do not add another but warn to delete some ingredients to switch
						//send back the element to its original position
						console.log('Poţi adăuga crutoanele doar o dată');
						ui.draggable.animate(ui.draggable.data("origPosition"), "fast");
						return false;
					} else {
						//put the ingredient in the display and in the temp salad
						$('ul.selected-crutons').append(ui.draggable.clone());

						salata.Crutoane = true;
						//save to temp salad in session
						localStorage.removeItem('salata_tmp');
						sessionStorage.setItem('salata_tmp', JSON.stringify(salata));
					}
				}

			} else if (dataType == 'dressing') {
				var salata = $.parseJSON(sessionStorage.getItem('salata_tmp'));
				if (salata == null) {
					console.log('Alege prima dată o salată');
				} else {
					//if we have a salad ->
					//check if a dressing is already addedd. 
					if (salata.Dressing !== '') {
						// if yes, we delete the existing dressing from the display and add the new one
						$('ul.selected-dressing li').remove();
					} 
					//add the dressing to the display
					$('ul.selected-dressing').append(ui.draggable.clone());
					//set the dressing name - no matter if it was already added or not
					console.log(dataName);
					salata.Dressing = dataName;
					//save to temp salad in session
					localStorage.removeItem('salata_tmp');
					sessionStorage.setItem('salata_tmp', JSON.stringify(salata));

				}
			}
			//parse current salad from session
			// var salate = $.parseJSON(sessionStorage.getItem('salata_tmp'));
			// //if we already have a salad
			// if (salate !== null) {
			//
			// if (salate.Ingrediente.length > 1) {
			// console.log('Max 2 ingredient');
			// return false;
			// } else {
			// salate.Total_Price = getCommaDelimitedStringFromStringValue(getFloatValueFromCommaDelimitedString(salate.Total_Price) + getFloatValueFromCommaDelimitedString(dataPrice));
			// salate.Ingrediente.push(data_ingred);
			// sessionStorage.setItem('salata_tmp', JSON.stringify(salate));
			// }
			//
			// } else {
			// //if we don't have a salad yet
			// if (dataType === 'salata') {
			// var salate = {
			// Name : dataName,
			// Type : dataType,
			// Ingrediente : [],
			// Price : dataPrice,
			// Total_Price : dataPrice
			// };
			//
			// sessionStorage.setItem('salata_tmp', JSON.stringify(salate));
			// } else {
			// console.log('Choose a salad first!');
			// if (destination.dataType !== "salata") {
			// $("li", destination).remove();
			// }
			//
			// //console.log(ui);
			// }
			// }
			//console.log(salate);
		}
	});

	// var getFloatValueFromCommaDelimitedString = function(stringValue) {
	// return parseFloat(stringValue.replace(/,/g, '.'));
	// };
	// var getCommaDelimitedStringFromStringValue = function(floatValue) {
	// return floatValue.toString().replace(/\./g, ',');
	// };
	// let the gallery be droppable as well, accepting items from the trash
	// gallery.droppable({
	// accept : destination,
	// activeClass : "custom-state-active",
	// drop : function(event, ui) {
	//
	// }
	// });

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
function totalIngPrice(data) {
	//calculate the total price of all added ingredients
	var ingredients_price = 0;
	if (data.Ingrediente.length > 0) {
		for ( i = 0; i < data.Ingrediente.length; i++) {
			//loop through ingredients
			//add price from processed string (comma replaced with dot)
			ingredients_price = ingredients_price + parseFloat(data.Ingrediente[i].Price.replace(',', '.'));
		};
	}
	return ingredients_price;
}
