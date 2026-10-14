/**
 * Winta Digital Ltd - Official Interactions & UI Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Navigation Scroll State ---
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. Mobile Menu Drawer ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer .nav-link, .mobile-drawer .btn');

  if (mobileToggle && mobileDrawer) {
    const toggleMenu = () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // --- 3. Scroll Spy for Active Navigation Link ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const updateActiveLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // --- 4. Portfolio Filter Tabs ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-filterable');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 5. Lightbox Modal (YouTube Video + Stills) ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxContainer = document.getElementById('lightbox-container');
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (type, src, title = '') => {
    if (!lightboxModal || !lightboxContainer) return;
    lightboxContainer.innerHTML = '';

    if (type === 'youtube') {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`;
      iframe.title = title || 'Winta Digital Video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      lightboxContainer.appendChild(iframe);
    } else if (type === 'image') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title || 'Winta Digital Production Still';
      lightboxContainer.appendChild(img);
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal || !lightboxContainer) return;
    lightboxModal.classList.remove('active');
    lightboxContainer.innerHTML = '';
    document.body.style.overflow = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-content-box')) {
        closeLightbox();
      }
    });
  }

  // Trigger elements for lightbox
  document.querySelectorAll('[data-lightbox-type]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const type = el.getAttribute('data-lightbox-type');
      const src = el.getAttribute('data-lightbox-src');
      const title = el.getAttribute('data-lightbox-title');
      openLightbox(type, src, title);
    });
  });

  // --- 6. Booking Modal ---
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtns = document.querySelectorAll('.trigger-booking-modal');
  const closeBookingBtn = document.getElementById('close-booking-modal');
  const bookingForm = document.getElementById('strategy-booking-form');
  const formSuccess = document.getElementById('booking-form-success');

  const openBooking = (preselectedService = '') => {
    if (!bookingModal) return;
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (preselectedService && bookingForm) {
      const serviceSelect = bookingForm.querySelector('#booking-service');
      if (serviceSelect) {
        serviceSelect.value = preselectedService;
      }
    }
  };

  const closeBooking = () => {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-preselect-service') || '';
      openBooking(service);
    });
  });

  if (closeBookingBtn) {
    closeBookingBtn.addEventListener('click', closeBooking);
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBooking();
      }
    });
  }

  // Handle Form Submission -> WhatsApp Link Generation + Confirmation
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name').value.trim();
      const email = document.getElementById('booking-email').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const service = document.getElementById('booking-service').value;
      const notes = document.getElementById('booking-notes').value.trim();

      // Format WhatsApp message
      const textMessage = `*New Strategy Call Request - Winta Digital*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Service Needed:* ${encodeURIComponent(service)}%0A` +
        `*Project Details:* ${encodeURIComponent(notes || 'N/A')}%0A%0A` +
        `_Sent via Winta Digital Website_`;

      // Uganda WhatsApp destination (configurable)
      const whatsappNumber = '256700000000'; // Replace with company official WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMessage}`;

      // Show success in modal
      if (formSuccess) {
        bookingForm.style.display = 'none';
        formSuccess.style.display = 'block';

        const whatsappDirectLink = document.getElementById('whatsapp-direct-submit');
        if (whatsappDirectLink) {
          whatsappDirectLink.href = whatsappUrl;
        }
      }

      // Automatically launch WhatsApp in new tab for instant connection
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 600);
    });
  }

  // Escape Key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeBooking();
    }
  });

  // --- 7. Smooth Scroll for all internal hash links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
