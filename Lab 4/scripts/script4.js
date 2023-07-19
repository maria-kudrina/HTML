$(document).ready(function(){
    // получаем текст по id
    // const text=$("#p1").text();
    // console.log(text);

    // получаем html по классу
    // const html=$(".text-wrapper").html();
    // console.log(html);

    //изменить текст по id
    //$("#p1").text("У меня лапки");

    // изменить html по классу
    //$(".text-wrapper").html("<p> <b> Лапки-царапки </b> у киски-сосиски </p>" )

    // изменить html по id
    // $("#p2").html('<a href="http://ssau.ru">Я ссылка на сайт университета</a>');

    // изменить аттрибут по id
    //$("#img_1").attr("src", "./img/cat2.jpg" );
    
    // изменить html по id, добавление нескольких элементов
    // $("#p2").html(
    //     "<a href='http://ssau.ru'>Я ссылка на сайт университета</a>\
    //      <div class='text-wrapper'> <p> Самарский университет </p> </div>\
    //      <p>Вторая строка</p>"
    // );
    
    // добавление контента в конец
    // $(".container-3").append(
    //     '<div class="cont_img_fon">\
    //         <img class="img_fon" src="./img/fon_besshovniy_cian6.jpg">\
    //         <p>Фон 5</p>\
    //     </div>'
    // );

    // добавление контента в начало
    // $(".container-3").prepend(
    //     '<div class="cont_img_fon">\
    //         <img class="img_fon" src="./img/fon_besshovniy_cian4.jpg">\
    //         <p>Фон 0</p>\
    //     </div>'
    // );

    // удаление всех дочерних элементов
    // $(".container-3").empty();

    // удаление одного дочернего элемента по id
    // $("div").remove("#1");

    // добавить класс фона к элементам по классу
    // $(".cont_img_fon").addClass("bgrd_violet");

    // удалить класс у элемента по классу
    // $(".bgrd_violet").removeClass("bgrd_violet");

    // переключаем добавление-удаление класса
    $(".cont_img_fon").toggleClass("bgrd_violet");
    
});