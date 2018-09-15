$(document).ready(function() {
  function resetTabs() {
    $('.tabs-accordionlink, .tabs-tab, .tabs-content').removeClass('is-active');
  }
  //Get the content of each tab and prepend the accordion trigger
  $(".tabs--accordion .tabs-tab").each(function() {
    var tabContent = $(this).html();
    var tabContentData = $(this).attr('data-tab');
    $("#" + tabContentData).before($('<span class="tabs-accordionlink">').html(tabContent).attr('data-tab',tabContentData));
  });
  $('.tabs-accordionlink').click(function() {
    var tabContentData = $(this).attr('data-tab');
    resetTabs();
    $(this).addClass('is-active');
    $(this).nextAll(".tabs-content").first().addClass('is-active');
    $('.tabs-tab[data-tab*='+ tabContentData + ']').addClass('is-active');
    $('html, body').animate({
        scrollTop: $(this).offset().top - 120
    }, 500);
  })

  $('.tabs-tab').click(function() {
    var tabContentData = $(this).attr('data-tab');
    resetTabs();
    $(this).addClass('is-active');
    $('.tabs-accordionlink[data-tab*='+ tabContentData + ']').addClass('is-active');
    $("#" + tabContentData).addClass('is-active');
    $('html, body').animate({
        scrollTop: $(this).offset().top - 120
    }, 500);
  })

})
