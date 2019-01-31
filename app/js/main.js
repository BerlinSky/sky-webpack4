// eslint-disable-line no-unused-vars

import $ from 'jquery';
import Cleave from 'cleave.js';
// import Select2 from 'select2';

$(function () {

	// Place order - submit form
	const btnPlaceOrder = $('.js-btnPlaceOrder');
	if (btnPlaceOrder.length > 0) {
		btnPlaceOrder.click(function( ) {
			console.log('btnPlaceOrder clicked');
			$('.js-paymentForm').submit();

		});
	}
	// End: Place order - submit form


	// Size selection
	const sizePicker = $('.js-sizeSelection');

	sizePicker.click(function( ) {
		const markerClass = 'sizeBlock--chosen';
		const selected = $(event.target);

		selected.parent('.js-sizeSelection').siblings().children('.sizeBlock--chosen').removeClass(markerClass);
		selected.addClass(markerClass);
	});
	// End: Size selection

	// Assign the size selections
	$('.js-dataForm').submit(function( ) {
		const sizes = $('.sizeBlock--chosen');
		// console.log("sizes: ", sizes.length);
		const sizeList = [];
		sizes.each(function(index, item) {
			const elem = $(item);
			// console.log(elem.attr('data-itemId'));
			// console.log(elem.attr('data-sizePicker'));
			sizeList.push(`${elem.attr('data-itemId')}:${elem.attr('data-sizePicker')}`);
			// console.log(sizeList);
		});

		$('input[type=hidden].js-sizeSelectionHidden').val(sizeList);
	  // event.preventDefault();
	});
	// End: Assign the size selections

	$('.js-couponCodeInput').hide();

	const couponButtonLead = $('.js-couponCodeButton-lead');
	const couponButton = $('.js-couponCodeButton');

	couponButtonLead.click(function( event ) {
		$(event.target).hide();
		couponButton.hide();
		$('.js-couponCodeInput').show();
		$('.js-couponCodeInput').focus();
	});

	couponButton.click(function( event ) {
		$(event.target).hide();
		couponButtonLead.hide();
		$('.js-couponCodeInput').show();
		$('.js-couponCodeInput').focus();
	});

  $('.js-credit--default').css({ "display": "block" });

  if ($('.js-dataInput--cardNum').length > 0) {
  	dimCardImages(false);

    // it exists
		const cleaveCardNum = new Cleave('.js-dataInput--cardNum', {  // eslint-disable-line no-unused-vars
		  creditCard: true,
		  onCreditCardTypeChanged: function (type) {
		    console.log(type);

		    if (type === 'unknown') {
		      dimCardImages(false);
		    }
		    else {
		      dsiplayCardImages(type);
		    }
		  }
		});
	}

  if ($('.js-dataInput--cardExpDate').length > 0) {
		const cleaeveCardDate = new Cleave('.js-dataInput--cardExpDate', {   // eslint-disable-line no-unused-vars
	    date: true,
	    datePattern: ['m', 'y'],
	    delimiter: '/'
		});
	}

	if ($('.js-dataInput--cardCVCode').length > 0) {
		const cleaeveCardCvCode = new Cleave('.js-dataInput--cardCVCode', {  // eslint-disable-line no-unused-vars
	    numeral: true,
	    delimiter: ''
		});
	}

	function dimCardImages(dimFlag) {
		if (dimFlag) {
			$('.js-credit--amex').hide();
			$('.js-credit--amex-mask').show();
			$('.js-credit--visa').hide();
			$('.js-credit--visa-mask').show();
			$('.js-credit--mastercard').hide();
			$('.js-credit--mastercard-mask').show();
			$('.js-credit--discover').hide();
			$('.js-credit--discover-mask').show();
		}
		else {
			$('.js-credit--amex').show();
			$('.js-credit--amex-mask').hide();
			$('.js-credit--visa').show();
			$('.js-credit--visa-mask').hide();
			$('.js-credit--mastercard').show();
			$('.js-credit--mastercard-mask').hide();
			$('.js-credit--discover').show();
			$('.js-credit--discover-mask').hide();
		}
  }

	function dsiplayCardImages(type) {
    dimCardImages(true)

		const cardType = '.js-credit--' + type;
		const cardTypeMask = '.js-credit--' + type + '-mask';
		$(cardType).show();
		$(cardTypeMask).hide();
	}

	if ($('.js-cvvInstructions').length > 0) {
		$('.js-cvvInstructions').click(function(e) {
	    e.stopPropagation();

			const $link = $('.js-lightboxClose');
			location.href = $link.attr('href');
		});
	}

	$('.dataForm__section .inputGroup input').focusout((event) => {
		const input = $(event.target);
	  const textVal = input.val();
	  if(textVal === "") {
	    input.removeClass('js-userData');
	  }
	  else {
	    input.addClass('js-userData');
	  }
	});
});
