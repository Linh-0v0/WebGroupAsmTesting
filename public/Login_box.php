<!DOCTYPE php>
<php>
    <head>
    <meta charset="utf-08">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css.css">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <style>
        .pass_error{
            display: none;
            padding-top: 8px;
            padding-left: 15px;
            color: rgb(241, 13, 13);
            font-weight: bold;
        }
    </style>
    </head>

    <body>
        <div class="overflow-content">
        <header class="simple-header-container">
            <div class="black-logo"> 
                <a href="index.php">
                    <img class="logo" src="image/shop-logo.png" alt="TaoHu"></a>    
            </div>
            <p>Sign in</p>
            <div class="home-link">
                <a href="index.php">Home Page</a>
            </div>
        </header>

        <div class="login-container">
                <div class="header-login">Login</div>

            <form id="loginform" action="my-account.php">
                <div class="data">
                    <div class="username-login">
                        <input type="text" placeholder="Email/Phone" id="email" class="form-control" name="loginKey" pattern="(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$)" title="Invalid emaill address!" required>
                    </div>
                    <!-- <div class="email_error">Unvalid email address</div> -->
                </div>

                <div class="data">
                    <div class="password-login">
                        <input type="password" placeholder="Password" id="password" class="form-control" name="password" required>
                    </div>
                    <div class="pass_error">Wrong Password</div>
                </div>

                <div class="forgot-pass-login">
                    <a href="forgotPass.php">Forgot your password</a>
                </div>

                <input type="submit" class="btn" name="" value="Login">
            </form>

            <hr>
            <div class="no-account">
                <p>No account? <a href="register_acc.php">Create one here</a></p>
            </div>
        </div> 
        
        <footer class="simple-footer">
        <div class="container">
            <div class="content">
            <ul class="footer-nav">
                <li><a href="index.php#search-box">Search</a></li>
                    <li><a href="about_us.php">About Us</a></li>
                    <li><a href="contactform.php">Contact</a></li>
                    <li><a href="fees.php">Fees</a></li>
                    <li><a href="copyright.php">Term of Service</a></li>
                    <li><a href="faqs.php">FAQs</a></li>
                </ul>
                
            
                <ul class="socials">
                    <li><a href="https://github.com/lacnham/php-CSS-Assignment"><i class="fab fa-github"></i></a></li>
                    <li><a href="mailto:s3864120@rmit.edu.vn"><i class="fa fa-envelope"></i></a></li>
                    <li><a href="https://www.facebook.com/linh.vu.790/"><i class="fab fa-facebook"></i></a></li>
            </ul>
        </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2021 <span>taohu</span>. All Rights Reserved | s3864120@rmit.edu.vn </p>
        </div>
        
    </footer>
    </div>

    <script type="text/javascript" src="Login.js"></script>
</body>
</php>