$(function () {
  $("tbody td").on("click", function() {
    let checkFlag = $(this).data("check");
    let checkNum = +$(this).parent().children("th").data("check_num");

    // empty -> doubt -> certain
    switch(checkFlag) {
      case "empty":
        $(this).text("?");
        $(this).data("check", "doubt") ;
        break;
      case "doubt":
        $(this).text("O");
        $(this).data("check", "certain") ;
        $(this).parent().children("th").data("check_num", ++checkNum);
        break;
      case "certain":
        $(this).text("");
        $(this).data("check", "empty") ;
        $(this).parent().children("th").data("check_num", --checkNum);
        break;
    }

    // 행에 동그라미가 있는 지에 따라 색 변경
    if(checkNum > 0) {
      $(this).parent().css("background-color", "#ccc");
    } else {
      $(this).parent().css("background-color", "inherit");
    }

  })
});