class Main {
    constructor() {
        this.initTabs();
        this.initAccordion();
        this.initModal();
        this.initAuthLogin();
        this.initAuthFormToggle();
    }

    /* -------------------------
       TABS
    -------------------------- */
    initTabs() {
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabContents = document.querySelectorAll(".tab-content");

        if (!tabButtons.length) return;

        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {

                const target = btn.getAttribute("data-tabs-target");

                tabButtons.forEach(b => b.classList.remove("active-tab"));
                tabContents.forEach(c => c.classList.add("hidden"));

                btn.classList.add("active-tab");
                document.querySelector(target).classList.remove("hidden");
            });
        });
    }

    /* -------------------------
       ACCORDION
    -------------------------- */
    initAccordion() {
        const triggers = document.querySelectorAll(".accodion-expand");

        triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {

                // Find accordion wrapper
                const wrapper = trigger.closest(".faq-accordion");
                const content = wrapper.querySelector(".accodion-content");
                const icon = wrapper.querySelector(".plus-icon");

                if (!content || !icon) return;

                // Toggle rotation class on the icon
                icon.classList.toggle("rotate");

                // Toggle content visibility
                if (content.classList.contains("open")) {
                    this.closeAccordion(content);
                } else {
                    this.openAccordion(content);
                }
            });
        });
    }

    openAccordion(content) {
        content.classList.remove("hidden");
        content.classList.add("open");
        content.style.paddingTop = "24px";
    }
    closeAccordion(content) {
        content.style.paddingTop = "0px";
        content.classList.remove("open");
        content.classList.add("hidden");
    }

    /* -------------------------
      Enquery MODAL popup 
   -------------------------- */
    initModal() {
        const modal = document.getElementById("enquiryModal");
        const closeBtn = document.getElementById("closeModal");

        if (!modal) return;

        const openModal = () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            document.body.classList.add("overflow-hidden");
            modal.setAttribute("aria-hidden", "false");
        };

        const closeModal = () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
            document.body.classList.remove("overflow-hidden");
            modal.setAttribute("aria-hidden", "true");
        };

        document.addEventListener("click", (e) => {
            const btn = e.target.closest(".enquire-btn");
            if (btn) {
                e.preventDefault();
                openModal();
            }
        });

        closeBtn?.addEventListener("click", closeModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
            }
        });
    }


    /* -------------------------
    AUTH LOGIN (Loading State)
    -------------------------- */
    initAuthLogin() {
        const forms = document.querySelectorAll('.qx-auth-form');
        if (!forms.length) return;

        forms.forEach(form => {
            form.addEventListener('submit', () => {

                const loginBtn = form.querySelector('[data-login-btn]');
                const registerBtn = form.querySelector('[data-register-btn]');

                const btn = loginBtn || registerBtn;
                if (!btn) return;

                btn.disabled = true;
                btn.classList.add('is-loading');

                btn.textContent = loginBtn
                    ? 'Logging in…'
                    : 'Creating account…';
            });
        });
    }

    /* -------------------------
    PASSWORD TOGGLE
    -------------------------- */
    initPasswordToggle() {
        const toggles = document.querySelectorAll('.toggle-password');

        toggles.forEach(toggle => {
            const wrapper = toggle.closest('.qx-input');
            const input = wrapper?.querySelector('.qx-password-input');

            if (!input) return;

            // Toggle visibility
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();

                const isHidden = input.type === 'password';

                input.type = isHidden ? 'text' : 'password';
                toggle.classList.toggle('is-visible', isHidden);
                toggle.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
            });

            // Click outside → hide password
            document.addEventListener('click', (e) => {
                if (!wrapper.contains(e.target)) {
                    input.type = 'password';
                    toggle.classList.remove('is-visible');
                    toggle.setAttribute('aria-pressed', 'false');
                }
            });

            // Keyboard blur → hide password
            input.addEventListener('blur', () => {
                input.type = 'password';
                toggle.classList.remove('is-visible');
                toggle.setAttribute('aria-pressed', 'false');
            });
        });
    }


    initAuthFormToggle() {
        const loginBlock = document.querySelector('.qx-login-form');
        const registerBlock = document.querySelector('.qx-register-form');
        const showRegisterBtn = document.querySelector('.get-register');
        const showLoginBtn = document.querySelector('.get-login');

        if (!loginBlock || !registerBlock) return;

        // Default state: show login, hide register
        registerBlock.classList.add('qx-auth-hidden');

        showRegisterBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            loginBlock.classList.add('qx-auth-hidden');
            registerBlock.classList.remove('qx-auth-hidden');
        });

        showLoginBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            registerBlock.classList.add('qx-auth-hidden');
            loginBlock.classList.remove('qx-auth-hidden');
        });
    }




}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    new Main();
});
