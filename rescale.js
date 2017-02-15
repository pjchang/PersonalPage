
//      var divname = "pf1";
//     var scalezoom=1;
//     var rescale = function() {
//         var manuwidth = 0;
//         var timebarheight=0;

//         var pw=document.getElementById("pf1").offsetWidth;
//         var ph= document.getElementById("pf1").offsetHeight+timebarheight;
//         var cw=$(window).width()-manuwidth;
//         var ch=$(window).height();

//         var scal = Math.min((cw/pw),(ch / ph));
        


//         scalezoom=scal;

//         // document.getElementById(divname).style.WebkitTransform = "scale(" + scal + ")";
//         // document.getElementById(divname).style.OTransform = "scale(" + scal + ")";
//         // document.getElementById(divname).style.MozTransform = "scale(" + scal + ")";
//         // document.getElementById(divname).style.msTransform = "scale(" + scal + ")";
//         // document.getElementById(divname).style.Transform = "scale(" + scal + ")";
//         // document.getElementById(divname).style.WebkitTransformOrigin = "0 0";
//         // document.getElementById(divname).style.OTransformOrigin = "0 0";
//         // document.getElementById(divname).style.MozTransformOrigin = "0 0";
//         // document.getElementById(divname).style.msTransformOrigin = "0 0";
//         // document.getElementById(divname).style.TransformOrigin = "0 0";


//     };
//     window.onresize = function() {
//         rescale();
//         updateTimebarcss();

//     }

//     // initial the size at begining
// rescale();