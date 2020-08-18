$(document).ready(function () {

  // fullpage
  function fullpage_init(){
    $('#contents').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['HOME', 'Commission sample', 'Request form', 'Contact'],
      showActiveTooltip: true,
      menu: '#navi',
      anchors: ['home', 'sample', 'form','cont','foot']
      
    });
  
    $('#contentsNoToolTip').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
    });
  }



  // main

  function hiddenImg_init(){
    var logo = $('#main .title-box > .logo');
    var hiddenImg = $('#main .img-box.absolute');
  
    logo.hover(
      function () {
        hiddenImg.addClass('active');
      },
      function () {
        hiddenImg.removeClass('active');
      }
    );
  }

  var main_offset = $('#main').offset().top;
  var commission_offset = $('#commission').offset().top;
  var requestForm_offset = $('#request-form').offset().top;
  var contact_offset = $('#contact').offset().top;
  var sectionOffset = [main_offset, commission_offset, requestForm_offset, contact_offset];
  
  
   
  


  // $('header > nav.menu > ul > li').click(function(e){
  //   e.preventDefault();    
  //   var page= $(this).data('page');
    
  //   console.log(eq);
  // });

  


  hiddenImg_init();
  fullpage_init();

});