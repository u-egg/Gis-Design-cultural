//kakao map api
var container = document.getElementById('map');             //지도를 담을 영역의 DOM 레퍼런스
var options = {                                             //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.6424341, 127.4890319),   //지도의 중심좌표.
    level: 11                                                //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);           //지도 생성 및 객체 리턴

// 마커 생성
var markerPosition = new kakao.maps.LatLng(36.6424341, 127.4890319);


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//좌측 사이드 네비 버튼 스위칭
function nav_1(){
    $(".section_1").css("display", "block");
    $(".section_2").css("display", "none");
    $(".section_3").css("display", "none");
 
    $("#left_side_nav_1").attr("class",'wrap_on');
    $("#left_side_nav_2").attr("class",'wrap');
    $("#left_side_nav_3").attr("class",'wrap');
 
}

function nav_2(){
    $(".section_1").css("display", "none");
    $(".section_2").css("display", "block");
    $(".section_3").css("display", "none");

    $("#left_side_nav_1").attr("class",'wrap');
    $("#left_side_nav_2").attr("class",'wrap_on');
    $("#left_side_nav_3").attr("class",'wrap');

}

function nav_3(){
    $(".section_1").css("display", "none");
    $(".section_2").css("display", "none");
    $(".section_3").css("display", "block");

    $("#left_side_nav_1").attr("class",'wrap');
    $("#left_side_nav_2").attr("class",'wrap');
    $("#left_side_nav_3").attr("class",'wrap_on');

}

// 상세검색 버튼 스위칭
function search_1(){
    $(".part_1").css("display", "block")
    $(".part_2").css("display", "none")
    $(".body").css("height", "480px")
    $(".btn_on").attr("class",'btn_off');
    $("#addr_btn_1").attr("class",'btn_on');
}

function search_2(){
    $(".part_1").css("display", "none");
    $(".part_2").css("display", "block");
    $(".body").css("height", "33px");
    $(".btn_on").attr("class",'btn_off');
    $("#addr_btn_2").attr("class",'btn_on');
}

// 사이드섹션_on/off
function sied_section_slide(){
    if ($('article section:nth-child(2)').css('width') == '360px') {
        $("article section:nth-child(2)").css("width", "0")
        $("#map").css("width", "calc(100vw - 70px)")
        $(".side_nav_close").css("left", "65px")
        $(".side_nav_open").css("left", "65px")

        if($('.section_1').css('display') == 'block'){
            $(".section_1").css("display", "none");
        }
        else if($('.section_2').css('display') == 'block'){
            $(".section_2").css("display", "none");
        }
        else if($('.section_3').css('display') == 'block'){
            $(".section_3").css("display", "none");
        }

        setTimeout(function() {
            $(".side_nav_close").css("display", "none")
            $(".side_nav_open").css("display", "block")
          }, 250);
    } 
    else {
        $("article section:nth-child(2)").css("width", "360px")
        $("#map").css("width", "calc(100vw - 430px)")
        $(".side_nav_close").css("left", "425px")
        $(".side_nav_open").css("left", "425px")

        if($('#left_side_nav_1').hasClass("wrap_on") == true){
            $(".section_1").css("display", "block");
        }
        else if($('#left_side_nav_2').hasClass("wrap_on") == true){
            $(".section_2").css("display", "block");
        }
        else if($('#left_side_nav_3').hasClass("wrap_on") == true){
            $(".section_3").css("display", "block");
        }


        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
            $(".side_nav_open").css("display", "none")
          }, 250);
    }

}
