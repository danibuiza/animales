/**
 * Created by dgutierrez-diez on 25.06.14.
 */

requirejs(['jquery'], function($)
{

    var letras = ["a.JPG", "b.JPG", "c.JPG", "d.JPG", "e.JPG", "f.JPG", "g.JPG", "h.JPG", "i.JPG", "l.JPG", "k.JPG",
        "m.JPG", "n.JPG", "o.JPG", "q.JPG", "r.JPG", "s.JPG", "t.JPG", "x.JPG", "y.JPG", "z.JPG", "u.JPG", "v.JPG", "w.JPG"];

    var animales = ["arce.jpg", "avestruz.jpg", "caballitomar.jpg", "ciervo.jpg", "cochinos.jpg", "delfin.jpg", "elefante.jpg", "foca.jpg", "gorila0.jpg",
        "guepardo2.jpg", "jirafa.jpg", "koalas.jpg", "lince.jpg", "mono_narzi.jpg"
        , "osopolar.jpg", "osopolar2.jpg", "pandarojo.jpg", "pinguinos.jpg", "tiburon_peligroso.jpg", "tigreblanco.jpg", "tortugamarina.jpg", "zebra.jpg",
        "antilope1.jpg", "antilope2.jpg", "ballenas2.jpg", "barracuda.jpg", "bonito.jpg", "caiman.jpg", "carnero.jpg", "ballenas2.jpg",
        "carnero2.jpg", "coyote.jpg", "dalmata.jpg", "elefante-8.jpg", "flamenco.jpg", "gorrion.jpg", "gorrion2.jpg", "grulla.jpg",
        "husky.jpg", "iguana.jpg", "jabali.jpg", "koala.jpg", "llama.jpg", "llama2.jpg", "lobo1.jpg", "lobo2.jpg", "medusas.jpg",
        "mono.jpg", "nutria.jpg", "nyu.jpg", "orangutan.jpg", "oso panda.jpg", "pantera.jpg", "perro.jpg", "quebrantahuesos.jpg", "rana.jpg", "rebeco.jpg",
        "rinoceronte.jpg", "saltamontes.jpg", "sardina.jpg", "tigre.jpg", "tigre1.jpg", "urogallo.jpg", "vaca.jpg", "wallaby.jpg",
        "yak.jpg", "zorro.jpg", "zorro1.jpg", "aguila.jpg", "buho.jpg", "buho2.jpg", "camello.jpg", "camello2.jpg", "camello3.jpg", "dromedario.jpg",
        "dromedario2.jpg", "gallina.jpg", "gallo.jpg", "gaviota.jpg", "gabiota2.jpg",
        "halcon.jpg", "leon.jpg", "leon2.jpg", "leon3.jpg", "leon4.jpg", "leopardo.jpg", "mandril.jpg", "mono2.jpg", "osopardo.jpg",
        "osopardo2.jpg", "paloma.jpg", "paloma2.jpg", "pavian.jpg", "perro2.jpg",
        "perro3.jpg", "perro4.jpg", "perro5.jpg", "pollito.jpg", "tigre3.jpg", "toro.jpg", "toro2.jpg", "tiburon.jpg", "tiburon2.jpg", "gorila.jpg", "gorila3.jpg", "gorila2.jpg", "gorila4.jpg"
    ];

    var intentadas = 0;

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

            intentadas = 0;
            $('#error').html("")

            indexAnimal = Math.floor((Math.random() * animales.length) + 0);
            animal = "<img src='../pictures/" + animales[indexAnimal] + "' height='500' width='800'>";

            letraCorrectaLuego = animales[indexAnimal].substring(0, 1);

            $('#animal').html(animal);

            indexRandom = Math.floor((Math.random() * 3) + 0);
            letrasUsadas = [];
            letraX = "<img src='../pictures/" + letraCorrectaLuego + ".JPG' height='150' width='150'>";
            letrasUsadas[letrasUsadas.length] = letraX;
            $(".letras").each(function(index)
            {
                if (index === indexRandom) {
                    letraX = "<img src='../pictures/" + letraCorrectaLuego + ".JPG' height='150' width='150'>";
                    $(this).html(letraX);
                }
                else {
                    letraUsada = true;
                    while (letraUsada) {
                        indexLetra = Math.floor((Math.random() * letras.length) + 0);
                        letraX = "<img src='../pictures/" + letras[indexLetra] + "' height='150' width='150'>";
                        if ($.inArray(letraX, letrasUsadas) === -1) {
                            $(this).html(letraX);
                            letrasUsadas[letrasUsadas.length] = letraX;
                            letraUsada = false;
                        }
                    }
                }

            });

        }
        else {
            intentadas++;
            if (intentadas > 2) {
                $('#error').html("<audio src='../sounds/horse.mp3'  controls  autoplay>Your browser does not support the audio element.</audio>");
            }
        }
    });

})
;