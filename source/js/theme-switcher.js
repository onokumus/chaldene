$(function() {
  var backdrop = $("<div />");
  backdrop.addClass("backdrop d-none");
  $("body").append(backdrop);

  backdrop.on("click", function() {
    $(".demo-header").trigger("click");
  });
  $(".demo-header").on("click", function() {
    $(this).toggleClass("shadow-lg");
    $(this).children(".fa-cog").toggleClass("fa-spin");
    backdrop.toggleClass("d-none");
    $('[data-plugin="totop"]').click();
  });
  $("#page-form input").on("change", function() {
    var $body = $("body");
    var pl = parseInt($("input[name=p-l]:checked", "#page-form").val());
    var plm = $("#plm");
    var plmv = $("#plmv");
    var plsv = $("#plsv");
    if (pl === 0) {
      $body.removeClass("page-fixed main-fixed sidefixed");
      plm.attr("disabled", true);
      document.getElementById("plmv").checked = false;
      document.getElementById("plsv").checked = false;
      $(".psc").collapse("hide");
      $("#ps0").prop("checked", true);
      $("#ps1").prop("checked", false);
    } else {
      $body.addClass("page-fixed");
      plm.attr("disabled", false);
      $(".psc").collapse("show");
    }
    if (document.getElementById("plmv").checked) {
      $body.addClass("main-fixed");
    } else {
      $body.removeClass("main-fixed");
    }

    if (document.getElementById("plsv").checked) {
      $body.addClass("side-fixed");
    } else {
      $body.removeClass("side-fixed");
    }
    var pw = parseInt($("input[name=pw]:checked", "#page-form").val());
    var pageWrap = $(".app-wrap");
    if (pw === 0) {
      pageWrap.removeClass("container");
    } else if (pw === 1) {
      pageWrap.addClass("container");
    }

    var hs = parseInt($("input[name=hs]:checked", "#page-form").val());
    if (hs === 0) {
      $("body").removeClass("app-side-expand-on-hover app-side-mini");
    } else if (hs === 1) {
      $("body").addClass("app-side-expand-on-hover app-side-mini");
    }

    var ns = parseInt($("input[name=ns]:checked", "#page-form").val());
    if (ns === 1) {
      $(".app-heading .navbar")
        .removeClass("navbar-fixed-top")
        .addClass("navbar-static-top");
    } else if (ns === 0) {
      $(".app-heading .navbar")
        .removeClass("navbar-static-top")
        .addClass("navbar-fixed-top");
    }

    var nc = parseInt($("input[name=nc]:checked", "#page-form").val());
    if (nc === 1) {
      $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
    } else if (nc === 0) {
      $(".navbar").removeClass("navbar-default").addClass("navbar-inverse");
    }
  });

  if ($(".app-heading .navbar").length > 0) {
    $(".nss").removeClass("hidden");
  }

  $(".theme-list a").click(function() {
    $("#theme-list").attr("href", $(this).attr("rel"));
    return false;
  });

  Array.from(document.querySelectorAll(".theme-list a")).forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.documentElement.dataset.chlTheme = a.getAttribute("rel");
    });
  });

//   const bsLtrUrl = "https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css";
  const bsRtlUrl = "https://cdn.jsdelivr.net/npm/bootstrap-rtl@3.3.4/dist/cdnjs/3.3.4/css/bootstrap-rtl.min.css";

  const bsLink = document.getElementById("bslink");

  Array.from(document.querySelectorAll("input[type=radio][name=dir]")).forEach(
    (i) => {
      i.addEventListener("change", (e) => {
        document.documentElement.setAttribute("dir", i.value);
//         document.documentElement.dataset.chlTheme = i.value;
//         console.log(i.value);
        if(i.value === "rtl") {
          bsLink.setAttribute("href", bsRtlUrl);
        }
        else if(i.value === "ltr") {
          bsLink.setAttribute("href", "");
        }
      });
    }
  );


});
