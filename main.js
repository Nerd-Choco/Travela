function handleNavbarScroll() {
    // Only apply sticky scroll effect on lg screens (992px and wider)
    if ($(window).width() >= 992) {
        if ($(window).scrollTop() > 45) {
            $('.navbar').addClass('scrolled shadow-sm').removeClass('mt-5');
        } else {
            $('.navbar').removeClass('scrolled shadow-sm').addClass('mt-5');
        }
    } else {
        // Reset to default on mobile/tablet screens
        $('.navbar').removeClass('scrolled shadow-sm').addClass('mt-5');
    }
}

// Trigger on scroll and on window resize
$(window).on('scroll resize', handleNavbarScroll);