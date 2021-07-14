$(document).ready(function(){
    // 점수, 현재 문제 번호, 문제를 담는 배열
    var score = 0;
    var count = 0;    

    $('.start').show();

    // 게임 시작 및 다시 시작하기를 눌렀을 때 시작되는 함수
    $('.str_btn').click(function(){
        $('.result').hide();
        $('#score').text('당신의 점수는 ' + score + '점 입니다');
        $('.start').hide();
        $('.problem1, .score').show();

    });
    
    $('#answers li').click(function(e){
        $('.problem1').hide();
        $('.problem2').hide();
        $('.problem3').hide();
        $('.problem4').hide();
        if($(e.target).text() == '동상이몽' || $(e.target).text() == '죽마고우' || $(e.target).text() == '이구동성' || $(e.target).text() == '유아독존'){
            score += 25;
            $('#o').show();
        }else{
            $('#x').show();
        }
        count++;
        $("#answer").attr("src", 'answer' + count  + '.png'); 
        $('.correct').show();
        $('#score').text('당신의 점수는 ' + score + '점 입니다');
    });

    $('.nxt_btn').click(function(e){
        $('#o, #x, .correct').hide();

        if(count == 4){
            $('.result').show();
            count = 0;
            score = 0;
        }else{
            if(count == 1) $('.problem2, .score').show();
            else if(count == 2) $('.problem3, .score').show();
            else $('.problem4, .score').show();
        }
    });

});