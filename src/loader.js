/**
 * Created by dgutierrez-diez on 25.06.14.
 */

requirejs(['jquery'], function($)
{

    var letras = ["a.JPG", "b.JPG", "c.JPG", "d.JPG", "e.JPG", "f.JPG", "g.JPG", "h.JPG", "i.JPG", "l.JPG", "k.JPG",
        "m.JPG", "n.JPG", "o.JPG", "q.JPG", "r.JPG", "s.JPG", "t.JPG", "x.JPG", "y.JPG", "z.JPG", "u.JPG", "v.JPG", "w.JPG"];

    var animales = [
        "antilope1.jpg", "antilope2.jpg", "ballenas2.jpg", "barracuda.jpg", "bonito.jpg", "caiman.jpg", "carnero.jpg", "ballenas2.jpg",
        "carnero2.jpg", "coyote.jpg", "dalmata.jpg", "elefante-8.jpg", "flamenco.jpg", "gorrion.jpg", "gorrion2.jpg", "grulla.jpg",
        "husky.jpg", "iguana.jpg", "jabali.jpg", "koala.jpg", "llama.jpg", "llama2.jpg", "lobo1.jpg", "lobo2.jpg", "medusas.jpg",
        "mono.jpg", "nutria.jpg", "nyu.jpg", "orangutan.jpg", "oso panda.jpg", "pantera.jpg", "perro.jpg", "quebrantahuesos.jpg", "rana.jpg", "rebeco.jpg",
        "rinoceronte.jpg", "saltamontes.jpg", "sardina.jpg", "tigre.jpg", "tigre1.jpg", "urogallo.jpg", "vaca.jpg", "wallaby.jpg",
        "yak.jpg", "zorro.jpg", "zorro1.jpg"
    ];

    $('.letras').click(function()
    {

        image = $(this).find('img').attr('src').split('/');
        var file = image[image.length - 1];
        letraPulsada = file.substring(0, file.indexOf(".JPG"));

        imageActual = $("#animal").find('img').attr('src').split('/');
        var fileActual = imageActual[imageActual.length - 1];
        animalActual = fileActual.substring(0, fileActual.indexOf(".jpg"));

        letraCorrecta = animalActual.substring(0, 1);

        if (letraCorrecta.toUpperCase() === letraPulsada.toUpperCase()) {

            $('#error').html("")

            indexAnimal = Math.floor((Math.random() * animales.length) + 0);
            animal = "<img src='../pictures/" + animales[indexAnimal] + "' height='500' width='800'>";

            letraCorrectaLuego = animales[indexAnimal].substring(0, 1);

            $('#animal').html(animal);

            indexRandom = Math.floor((Math.random() * 3) + 0);
            $(".letras").each(function(index)
            {
                if (index === indexRandom) {
                    letraX = "<img src='../pictures/" + letraCorrectaLuego + ".JPG' height='150' width='150'>";
                    $(this).html(letraX);
                }
                else {
                    indexLetra = Math.floor((Math.random() * letras.length) + 0);
                    letraX = "<img src='../pictures/" + letras[indexLetra] + "' height='150' width='150'>";
                    $(this).html(letraX);
                }

            });

        }
        else {
            $('#error').html("Incorrecto! Intentalo otra vez");
        }
    });

})
;