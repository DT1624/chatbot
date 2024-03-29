<?php
$page = 1;
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Template Mo">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">

    <title>SexEdu</title>
    <link rel="icon" type="image/x-icon" href="assets/images/equality.png">

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-edu-meeting.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">

    <!-- Additional icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<body>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo">
                            <i class="fa-solid fa-venus-mars"></i> SexEdu
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li><a href="index.html">Trang chủ</a></li>
                            <li><a href="meetings.html">Quiz</a></li>
                            <li><a href="podcast.php" class="active">Podcast</a></li>
                            <li class="has-sub">
                                <a href="javascript:void(0)">Cẩm nang </a>
                                <ul class="sub-menu">
                                    <li><a href="book-child.html">Học sinh</a></li>
                                    <li><a href="book-parent.html">Phụ huynh</a></li>
                                </ul>
                            </li>
                            <li><a href="chatbot.html">Chatbot</a></li>
                            <li><a href="index.html#contact">Liên hệ</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <section class="heading-page header-text" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h6>Video</h6>
                    <h2>Giáo dục giới tính</h2>
                </div>
            </div>
        </div>


    </section>

    <!--section video  -->
    <section class="meetings-page" id="meetings">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="filters">
                                <ul>
                                    <li data-filter="*" class="active">Tất cả video</li>
                                    <li data-filter=".soon">Gần đây</li>
                                    <li data-filter=".imp">Nhiều người xem</li>
                                    <li data-filter=".att">Nhiều người thích</li>
                                </ul>
                            </div>
                        </div>

                        <!-- vid per page -->
                        <?php
                        require_once("func.inc.php");
                        require_once("connect.php");
                        vidPerPage($conn, $page);
                        ?>
                    </div>
                </div>
    </section>



    <!-- Scripts -->
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/lightbox.js"></script>
    <script src="assets/js/tabs.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/video.js"></script>
    <script src="assets/js/slick-slider.js"></script>
    <script src="assets/js/custom.js"></script>
    <script>
        //according to loftblog tut
        $('.nav li:first').addClass('active');

        var showSection = function showSection(section, isAnimate) {
            var
                direction = section.replace(/#/, ''),
                reqSection = $('.section').filter('[data-section="' + direction + '"]'),
                reqSectionPos = reqSection.offset().top - 0;

            if (isAnimate) {
                $('body, html').animate({
                        scrollTop: reqSectionPos
                    },
                    800);
            } else {
                $('body, html').scrollTop(reqSectionPos);
            }

        };

        var checkSection = function checkSection() {
            $('.section').each(function() {
                var
                    $this = $(this),
                    topEdge = $this.offset().top - 80,
                    bottomEdge = topEdge + $this.height(),
                    wScroll = $(window).scrollTop();
                if (topEdge < wScroll && bottomEdge > wScroll) {
                    var
                        currentId = $this.data('section'),
                        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
                    reqLink.closest('li').addClass('active').
                    siblings().removeClass('active');
                }
            });
        };

        $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function(e) {
            e.preventDefault();
            showSection($(this).attr('href'), true);
        });

        $(window).scroll(function() {
            checkSection();
        });
    </script>
    <script>
        window.onload = function() {
            var urlParams = new URLSearchParams(window.location.search);
            var page = urlParams.get('page');
            if (page) {
                var element = document.getElementById('meetings');
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };
    </script>
</body>


</body>

</html>