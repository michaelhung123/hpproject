
$(document).ready(function() {
  $("#btnAdd").click(function(){
    var content = $("#contentId").val()
    var date = $("#dateId").val()
    
    $("div.items").prepend(`
    <div class="item active">
         <div class="col5">
             <img src="text idea/facebook.svg" alt="">
         </div>
         <div class="col70">
             <a href="#">${content}</a>
        </div>
        <div class="col15">
             ${date}
         </div>
         <div class="col5">
            <input type="button" value="Xoá">
         </div>
     </div>`)

     setTimeout(function(){
       $("div.item").removeClass("active")
     }, 2000)
  })

  $("div.items").on("click", "div.item input[type=button]",function() {
    if (confirm("Ban co chac chan xoa khong?") == true)
    $(this).parent().parent().remove();
  })

// Trượt trang web
  $("#gototop").hide()

  $(window).scroll(function(){
    if ($(this).scrollTop() >= 20)
      $("#gototop").show("slow")
    else
      $("#gototop").hide()
  })
  $("#gototop").click(function(){
    $("html, body").animate({ scrollTop: 0}, 1000)
  })

})
