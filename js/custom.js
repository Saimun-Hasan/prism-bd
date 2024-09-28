(function ($) {
  "use strict";

  /* Window Load */
  $(window).on("load", function () {
    $(".loader").fadeOut(200);
    $(".line").addClass("active");
  });

  /* Navbar scroll*/
  $(".navbar-nav ul li a").on("click", function () {
    var target = $(this.hash);
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
      return false;
    }
  });

  /* Full page scroll Clothing*/
  if ($("#pagepiling").length > 0) {
    const tooltips = [
      "Home",
      "About Us",
      "Our Services",
      "Our Products",
      "Gallery",
      "Contact Us",
    ];

    $("#pagepiling").pagepiling({
      scrollingSpeed: 700,
      navigation: true,
      easing: "swing",
      menu: ".navbar-nav",
      anchors: ["home", "about", "services", "products", "gallery", "contact"],
      afterRender: function (anchorLink, index) {
        NavbarColor();
      },
      afterLoad: function (anchorLink, index) {
        $(".pp-section .intro").removeClass("animate");
        $(".active .intro").addClass("animate");
        NavbarColor();
      },
      sectionsColor: ["#fffdea", "#fffdea", "#fffdea", "white", "white", "#fffdea"],
      onLeave: function (index, nextIndex, direction) {
        const $nextSection = $(".pp-section").eq(nextIndex - 1);
        if (!$nextSection.hasClass("loaded")) {
          $nextSection.removeClass("initial-hidden loaded");
          $nextSection.addClass("loaded");
        }
      },
    });

    function NavbarColor() {
      if ($(".pp-section.active").hasClass("navbar-is-white")) {
        $(".navbar-desktop").addClass("navbar-white");
        $(".progress-nav").addClass("progress-nav-white");
        $(".navbar-bottom").addClass("navbar-bottom-white");
      } else {
        $(".navbar-desktop").removeClass("navbar-white");
        $(".progress-nav").removeClass("progress-nav-white");
        $(".navbar-bottom").removeClass("navbar-bottom-white");
      }
    }
  }

  /* Full page scroll Clothing*/
  if ($("#pagepiling_eco").length > 0) {
    const tooltips = [
      "Home",
      "About Us",
      "Our Services",
      "Our Products",
      "Our Partners",
      "Contact Us",
    ];

    $("#pagepiling_eco").pagepiling({
      scrollingSpeed: 700,
      navigation: true,
      easing: "swing",
      menu: ".navbar-nav",
      anchors: ["home", "about", "services", "products", "partners", "contact"],
      afterRender: function (anchorLink, index) {
        NavbarColor();
      },
      afterLoad: function (anchorLink, index) {
        $(".pp-section .intro").removeClass("animate");
        $(".active .intro").addClass("animate");
        NavbarColor();
      },
      sectionsColor: ["#fffdea", "#fffdea", "#fffdea","white","white", "#fffdea", "#fffdea", "white"],
      onLeave: function (index, nextIndex, direction) {
        const $nextSection = $(".pp-section").eq(nextIndex - 1);
        if (!$nextSection.hasClass("loaded")) {
          $nextSection.removeClass("initial-hidden loaded");
          $nextSection.addClass("loaded");
        }
      },
    });

    function NavbarColor() {
      if ($(".pp-section.active").hasClass("navbar-is-white")) {
        $(".navbar-desktop").addClass("navbar-white");
        $(".progress-nav").addClass("progress-nav-white");
        $(".navbar-bottom").addClass("navbar-bottom-white");
      } else {
        $(".navbar-desktop").removeClass("navbar-white");
        $(".progress-nav").removeClass("progress-nav-white");
        $(".navbar-bottom").removeClass("navbar-bottom-white");
      }
    }
  }

  /* Full page scroll IT*/
  if ($("#pagepiling_it").length > 0) {
    const tooltips = [
      "Home",
      "About Us",
      "Our Services",
      "Security",
      "Quality Control",
      "Contact Us",
    ];

    $("#pagepiling_it").pagepiling({
      scrollingSpeed: 700,
      navigation: true,
      easing: "swing",
      menu: ".navbar-nav",
      anchors: ["home", "about", "services", "security", "quality_control", "contact"],
      afterRender: function (anchorLink, index) {
        NavbarColor();
      },
      afterLoad: function (anchorLink, index) {
        $(".pp-section .intro").removeClass("animate");
        $(".active .intro").addClass("animate");
        NavbarColor();
      },
      sectionsColor: ["#fffdea", "#fffdea", "#fffdea","white","white", "#fffdea", "#fffdea", "white"],
      onLeave: function (index, nextIndex, direction) {
        const $nextSection = $(".pp-section").eq(nextIndex - 1);
        if (!$nextSection.hasClass("loaded")) {
          $nextSection.removeClass("initial-hidden loaded");
          $nextSection.addClass("loaded");
        }
      },
    });

    function NavbarColor() {
      if ($(".pp-section.active").hasClass("navbar-is-white")) {
        $(".navbar-desktop").addClass("navbar-white");
        $(".progress-nav").addClass("progress-nav-white");
        $(".navbar-bottom").addClass("navbar-bottom-white");
      } else {
        $(".navbar-desktop").removeClass("navbar-white");
        $(".progress-nav").removeClass("progress-nav-white");
        $(".navbar-bottom").removeClass("navbar-bottom-white");
      }
    }
  }

  /* Navbar toggler */
  $(".toggler").on("click", function () {
    $("body").addClass("menu-is-open");
  });

  $(".close, .click-capture").on("click", function () {
    $("body").removeClass("menu-is-open");
  });

  /* Navbar mobile */
  $(".navbar-nav-mobile li a").on("click", function () {
    $("body").removeClass("menu-is-open");
    $(".navbar-nav-mobile li a").removeClass("active");
    $(this).addClass("active");
  });

  /* Change bacgkround on project section*/
  $(".project-box").on("mouseover", function () {
    var index = $(".project-box").index(this);
    $(".bg-changer .section-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });

  /* Carousel experience*/
  $(".carousel-experience").owlCarousel({
    loop: true,
    margin: 45,
    dots: true,
    nav: true,
    smartSpeed: 1000,
    items: 1,
  });

  /* Experience In Years */
  window.onload = function () {
    const experienceNumber = document.querySelector(".experience-number");
    const currentYear = new Date().getFullYear();
    const startYear = 2011;
    const yearsOfExperience = currentYear - startYear;

    experienceNumber.textContent = yearsOfExperience;
  };

  /*------------------
    Background Set
  --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //Search Switch
  $('.search-switch').on('click', function () {
    $('.search-model').fadeIn(400);
  });

  $('.search-close-switch').on('click', function () {
    $('.search-model').fadeOut(400, function () {
      $('#search-input').val('');
    });
  });


  // Search functionality
  $("#searchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();
    filterProducts(searchTerm);
  });
  var activeCategory = "";
  // Category filtering toggle
  $(".category-link").click(function (event) {
    event.preventDefault();
    var selectedCategory = $(this).data("category");

    // Check if the clicked category is already active
    if (selectedCategory === activeCategory) {
      toggleCategory(""); // Show all categories
      activeCategory = ""; // Reset active category
    } else {
      toggleCategory(selectedCategory);
      activeCategory = selectedCategory; // Set the active category
    }

    // Update active class for category links
    $(".category-link").removeClass("active");
    $(this).toggleClass("active");

  });
  // Show all categories button
  $("#showAllButton").click(function (event) {
    event.preventDefault();
    showAllCategories();
    $(".category-link").removeClass("active");
  });
  // Function to filter products by search term
  function filterProducts(searchTerm) {
    $(".product__item").each(function () {
      var itemName = $(this).find("h6").text().toLowerCase();
      if (itemName.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
  // Function to toggle products by category
  function toggleCategory(category) {
    $(".product__item").each(function () {
      var categoryText = $(this).find(".category").text().toLowerCase();
      if (category === "" || categoryText.includes(category)) {
        $(this).show(); // Show products in the selected category or all categories
      } else {
        $(this).hide(); // Hide products in other categories
      }
    });
  }
  function showAllCategories() {
    $(".product__item").show(); // Show all products
  }

  var urlParams = new URLSearchParams(window.location.search);
  var selectedCategory = urlParams.get('category');
  toggleCategory(selectedCategory);
  if (selectedCategory) {
    toggleCategory(selectedCategory);
    $(".category-link[data-category='" + selectedCategory + "']").addClass("active");
  }
  function toggleCategory(category) {
    $(".product__item").each(function () {
      var categoryText = $(this).find(".category").text().toLowerCase();
      if (categoryText.includes(category)) {
        $(this).show(); 
      } else {
        $(this).hide();
      }
    });
  }

  /* Extra */
  $(".navbar-nav li").click(function () {
    const anchor = $(this).data("menuanchor");
    if (anchor) {
      $("#pagepiling").pagepiling.moveTo(anchor);
    }
    if (anchor) {
      $("#pagepiling_eco").pagepiling.moveTo(anchor);
    }
    if (anchor) {
      $("#pagepiling_it").pagepiling.moveTo(anchor);
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);
