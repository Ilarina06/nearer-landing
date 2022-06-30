<!-- Data and Script -->
<script>
    import Navbar from "../lib/components/Navbar.svelte";
    import VerticalSpacer from "../lib/components/VerticalSpacer.svelte";
</script>

<!-- HTML -->
<VerticalSpacer height="2" units={"rem"}/>
<div class="d-flex justify-content-center">
    <form name="contact-us" method="POST">
        <div class="mb-2 mt-2">
            <div class="heading-text text-center">
                <h1>
                    Contact Us <img src="assets/email.png" width="60" style="margin-bottom: 15px" alt="">
                </h1>
            </div>
            <div class="text-center">
                <p>Any questions about our services or want to say hi? Fill down the form below!</p>
            </div>
        </div>
        <div class="row">
            <div class="mb-3 col">
                <label for="user-name" class="form-label work-sans">
                    Your name
                </label>
                <input type="text" placeholder="Enter name" name="name" class="form-control questrial" id="user-name" aria-describedby="name-help">
                <div id="name-help" class="form-text work-sans light-text">
                    Used to address you in emails
                </div>
            </div>
            <div class="mb-3 col">
                <label for="email" class="form-label work-sans required">
                    Your Email
                </label>
                <input type="email" placeholder="Enter your email" name="email" class="form-control questrial" id="email" aria-describedby="email-help">
                <div id="email-help" class="form-text work-sans light-text">
                    Used to contact you via email
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label work-sans required">
                Subject
            </label>
            <input type="text" placeholder="Enter message Subject" name="subject" class="form-control questrial" id="subject">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label work-sans required">
                Comments
            </label>
            <textarea class="form-control questrial" placeholder="Comments and Suggestions" name="comments" id="message" rows="3"></textarea>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" name="is-accept" class="form-check-input" id="accept">
            <label class="form-check-label work-sans" for="accept">
                I consent in my personal details to be collected
            </label>
        </div>
        <div class="mb-3 work-sans">
            <button type="submit" class="d-flex btn btn-primary mx-auto">
                Submit
            </button>
        </div>
    </form>
</div>

<!-- Scope Styles -->
<style>
    .heading-text {
        font-weight: bold;
    }
    .required:after {
        content: "*";
        color: red;
    }
</style>