$(document).ready(function(){
	
	$(".main_content").hide();
	
	setTimeout(function(){
		$(".pre_load").hide();
		$(".main_content").show();
	}, 3000);
	
	
	/* Particles JS */
	setTimeout(function(){
		particlesJS.load('particles-js', '../config/particles.json', function() {
		console.log('callback - particles.js config loaded');
		});
	},3100)
	
	
	/* Text typed */
	var options_job = {
		strings: ['WEB DEVELOPER IN HUE'],
		typeSpeed: 30,
		showCursor: false,
	};
	
	var options_name = {
		strings: ['I AM DUC PHUC'],
		typeSpeed: 30,
		showCursor: false,
	};
	
	var options_hello = {
		strings: ['Hey there,'],
		typeSpeed: 30,
		showCursor: false,
	};
	
	
	setTimeout(function(){
		var typed = new Typed('.header_content .text_running_hello', options_hello);
	},3000)
	
	setTimeout(function(){
		var typed = new Typed('.header_content .text_running_name', options_name);
	},3000)
	
	setTimeout(function(){
		var typed = new Typed('.header_content .text_running_job', options_job);
	},3000)
	
	/* Isotope project */
	var $grid = $('.project_list').isotope({
		itemSelector: '.project_item',
		layoutMode: 'fitRows'
	});
	
	$grid.isotope({ filter: '*' });
	
	$(document).on( 'click', '.btn_filter', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		$grid.isotope({ filter: filterValue });
		$(".btn_filter.active").removeClass("active");
		$(this).addClass("active");
	});
	
	setTimeout(function(){
		$(".btn_filter").eq(0).click();
	},3000);
	
	/* Open view detail of project */
	$(document).on("click", ".project_item .btn_action", function(){
		
		// Get value
		$project = $(this).parents(".project_item");
		var projectName = $project.data("name");
		var projectAvatar = $project.data("avt");
		var projectStartDate = $project.data("date");
		var projectStatus = $project.data("status");
		var projectLanguage = $project.data("language");
		var projectImage = $project.data("image");
		var projectSource = $project.data("source");
		var projectPreview = $project.data("preview");
		
		
		// Set value to modal
		$("#project_image_avt").attr("src", projectAvatar);
		$("#project_name").text(projectName);
		$("#project_start").text(projectStartDate);
		$("#project_status").text(projectStatus);
		$("#project_language").text(projectLanguage);
		$("#project_image_full").attr("href", projectImage);
		$("#project_source").attr("href", projectSource);
		$("#project_preview").attr("href", projectPreview);
		
		if(projectSource == "") {
			$("#project_source").addClass("disabled");
		}
		else {
			$("#project_source").removeClass("disabled");
		}
		if(projectPreview == "") {
			$("#project_preview").addClass("disabled");
		}
		else {
			$("#project_preview").removeClass("disabled");
		}
	})
	
	/* Sal load when scroll */
	sal();
	
	/* Smoot link */
	var scroll = new SmoothScroll('a[href*="#"]');
	
	/* Event scroll */
	window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
		if(scroll >= 300) {
			$("#top_menu").addClass("fixed_menu");
			$("#btn_back_to_top").addClass("active");
		}
		else {
			$("#top_menu").removeClass("fixed_menu");
			$("#btn_back_to_top").removeClass("active");
		}
	});
})

