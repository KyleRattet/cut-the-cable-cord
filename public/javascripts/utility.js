//////////////////////////////////////////////
///function to sum checked values from menu///
//////////////////////////////////////////////

function sumChecked (checkedValues) {
  var total = 0;

  for (var i = 0; i < checkedValues.length; i++) {
    total += parseInt(checkedValues[i]);
  }
  return total;
}


//////////////////////////////////////////////
///compare checked values vs monthly cost  ///
//////////////////////////////////////////////

function costCompare (menuTotal, monthlyCableCost) {
  var monthlyDifference = monthlyCableCost - menuTotal;
  var annualizedDifference = 12*monthlyDifference;

  if(annualizedDifference > 0) {
    return " You'd save $" + annualizedDifference + " a year if you cut the cord.";
  } else {
    return "If only considering economics, you should keep cable. It would cost $" + annualizedDifference *-1 + " to free yourself of cable.";
  }
}


//////////////////////////
/// sum survey answers ///
//////////////////////////

function sumSelectedValues (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
     total += parseInt(array[i].value);
  }
  return total;
}


//////////////////////////////////
/// survey results conditional ///
//////////////////////////////////

function surveyScore (number) {

  if(number <= 5) {
    return "<em>Don't cut!</em> Your survey results indicate you'd be unable to duplicate your media consumption without subscribing to a paid cable package.";
  }
  else if (number <=15) {
    return "<em>Consider cord shaving!</em> Based on your survey results, you're on the cusp of being indifferent between paying for cable tv and being able to get your media fix through other means. With that in mind, you could be an ideal candidate for exploring some alternatives to the traditional cable/internet bundle.";
  }
  else return "<em>Cut the cord!</em> Your cable usage doesn't warrant keeping the service bundle. Based on your behavior of generally low cable usage, lack of live viewing urgency, and quality streaming capabilities, you're unlikely to benefit from being be a paid TV subscriber.";
}


///////////////////////////////
/// score image conditional ///
///////////////////////////////

function imageChoice(number) {
  if(number < 5) {
    $('#modal-image').html('<img src="images/tv-luv.jpg" alt="cut-cord" style="width:300px;height:300px;"/>');
  }
  else if (number <= 15) {
    $('#modal-image').html('<img src="images/decisions.jpg" alt="cut-cord" style="width:300px;height:300px;"/>');
  }
  else {
  $('#modal-image').html('<img src="images/cut-cord.png" alt="cut-cord" style="width:300px;height:300px;"/>');
  }

}


////////////////////////////////////
/// alert popup for usage survey ///
////////////////////////////////////

function surveyAlert(event) {

  $('.survey_alert_placeholder').html('');

  $('.survey_alert_placeholder').append('<div id="alertdiv" class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>'+"Please make sure to respond to all questions"+'</span></div>');

  $("#alertdiv").delay(2000).slideUp(500, function(){
    $("#alertdiv").alert('close');
  });

  event.preventDefault();

}



