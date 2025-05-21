function sendOtp() {
    // Get the mobile number input
    const mobile = document.getElementById('mobile').value.trim();

    // Basic validation (e.g., check if it’s not empty and looks like a phone number)
    if (!mobile || !/^\+\d{10,12}$/.test(mobile)) {
        alert('Please enter a valid mobile number (e.g., +8805743031)');
        return;
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store mobile number and OTP in localStorage
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('generatedOtp', otp);

    // Simulate sending OTP (e.g., alert for now; replace with real API call if needed)
    alert(`OTP ${otp} has been sent to ${mobile}`);

    // Redirect to otp.html
    window.location.href = 'otp.html';
}