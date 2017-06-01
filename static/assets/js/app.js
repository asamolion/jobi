window.sr = ScrollReveal({reset: true});
sr.reveal('.home-content h1, .navbar-default', {duration: 1500});

$(document).ready(function () {


    $(".job-post .job-title h3 i").on('click', function () {
        $(this).toggleClass("liked");
    });
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    $(".circle").on("click", function () {
        $(".menu-links").toggleClass("active");
    });
    $(".close-menu").on("click", function () {
        $(".menu-links").toggleClass("active");
    });

});


function sliderInit() {

    $(".slick").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,

    });
    $(".job-slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]

    });
}

$(function () {


    $("#logos_section").hide();
    $("#search_jobs_section").hide();
    $("#jobs_section").hide();
    $("#contact_section").hide();


    var job_post = '';
    var recent_job_post = '';
    var server_address = "";
    var recent_job_api_url = server_address + '/recent_jobs/';
    var newsletter_subscription_api_url = server_address + '/newsletter_add_subscription/';


    function create_recent_job_posts(job_title, job_post_time, organization, job_location, job_url) {
        recent_job_post = recent_job_post + '<div>' +
            '<a href="' + job_url + '" data-toggle="tab">' +
            '<div>' +
            '<p>posted at ' + job_post_time + '</p>' +
            '<p><strong>' + job_title + '</strong></p>' +
            '<p>' + organization + '</p>' +
            '<p>' + job_location + '</p>' +
            '</div>' +
            '</a>' +
            '</div>';
    }

    function create_job_posts(job_title, job_post_time, job_description, job_url) {
        job_post = job_post + '<div class="job-post">' +
            '<a href="' + job_url + '">' +
            '<div class="job-title clearfix">' +
            '<div class="pull-left">' +
            '<h3>' + job_title + '</h3>' +
            '</div>' +
            '<div class="pull-right">' +
            '<span>posted at ' + job_post_time + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="job-description">' +
            '<p>' + job_description + '</p>' +
            '</div>' +
            '</a>' +
            '</div>';

    }

    //----------------------------------------------------------------------------
    //-----------------------------RECENT JOBS PULL-------------------------------

    $.ajax({
        type: 'GET',
        url: recent_job_api_url,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {

            recent_job_posts_entries = response['hits']['hits'];

            // console.log(Object.keys(recent_job_posts_entries).length);
            // console.log(recent_job_posts_entries[0]['_source']);

            for (i = 0; i < Object.keys(recent_job_posts_entries).length; i++) {


                job_title = recent_job_posts_entries[i]['_source']['keywords'][0];
                job_url = recent_job_posts_entries[i]['_source']['link'];
                job_post_time = recent_job_posts_entries[i]['_source']['create_time'];
                var local_time = new Date(job_post_time);
                job_post_time = local_time.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                });

                organization = '';
                job_location = '';

                create_recent_job_posts(job_title, job_post_time, organization, job_location, job_url);
                // console.log('-------------------------------------------------------------------------');
                // console.log(recent_job_post);

            }
            // recent_job_post = recent_job_post + '</div>';
            $('#recent_jobs_container').append(recent_job_post);
            sliderInit();


        },
        error: function (error) {
            console.log(error);
        }
    });

    //----------------------------------------------------------------------------
    //------------------------------RECENT JOBS PULL END--------------------------

    //---------------------------------------------------------------------------
    //-------------------------CONTACT FORM SUBMISSION---------------------------

    $("#contact_form").on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: newsletter_subscription_api_url,
            data: $(this).serialize(),
            dataType: "json",
            success: function (data) {
                // console.log(data);
            },
            error: function () {
                // alert('error handing here');
            }
        });
    });

    //----------------------------------------------------------------------------
    //-----------------------CONTACT FORM SUBMISSION END--------------------------

    //----------------------------------------------------------------------------
    //-----------------------------JOB SEARCH FORM--------------------------------


    $("#job_search_form").on("submit", function (event) {

        event.preventDefault();
        console.log("Form Submitted Hurray");

        job_post = '';
        keyword_val = $("#keyword").val();
        location_val = $("#location").val();
        job_type_val = $("#job_type").val();
        when_val = "now";

        final_url = server_address + "/search_jobs/?role=" + keyword_val + "&location=" + location_val + "&job_type=" + job_type_val + "&when=" + when_val;

        $.ajax({
            type: 'GET',
            url: final_url,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {

                // console.log(response);
                // console.log('-------------------------------------------------------------------------');

                $("#logos_section").show();
                $("#search_jobs_section").show();
                $("#jobs_section").show();
                $("#contact_section").show();

                job_posts_entries = response['hits']['hits'];

                // console.log(Object.keys(job_posts_entries).length);
                // console.log(job_posts_entries[0]['_source']);

                var no_of_jobs = Object.keys(job_posts_entries).length;

                if (no_of_jobs > 0) {
                    for (i = 0; i < no_of_jobs; i++) {
                        job_title = job_posts_entries[i]['_source']['keywords'][0];
                        job_url = job_posts_entries[i]['_source']['link'];
                        job_description = job_posts_entries[i]['_source']['msg'];
                        job_post_time = job_posts_entries[i]['_source']['create_time'];
                        var local_time = new Date(job_post_time);
                        job_post_time = local_time.toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        });
                        create_job_posts(job_title, job_post_time, job_description, job_url);
                        // console.log('-------------------------------------------------------------------------');
                        // console.log(job_post);
                    }
                }
                else {
                    job_post = job_post + '<div class="job-post">' +
                        '<a href="#">' +
                        '<div class="job-description">' +
                        '<p><text-center>Sorry, we couldn\'t find any job matching your criterion. Please try with some other parameters. </p>' +
                        '</div>' +
                        '</a>' +
                        '</div>';
                }

                $('#jobs_container').html(job_post);
                $('html, body').stop().animate({
                    scrollTop: $("#logos_section").offset().top
                }, 1000);

            },
            error: function (error) {
                // console.log(error);
            }
        });

    });

    //----------------------------------------------------------------------------
    //---------------------------JOB SEARCH FORM END------------------------------


});
