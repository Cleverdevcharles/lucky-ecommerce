import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="Dev AT E-commerce website with Next.js"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script>
                
                    <link rel="icon" type="image/png" href="/images/favicon.png" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/magnific-popup.min.css" />
                <link rel="stylesheet" href="/css/font-awesome.css" />
                <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
                <link rel="stylesheet" href="/css/themify-icons.css" />
                <link rel="stylesheet" href="/css/niceselect.css" />
                <link rel="stylesheet" href="/css/animate.css" />
                <link rel="stylesheet" href="/css/flex-slider.min.css" />
                <link rel="stylesheet" href="/css/owl-carousel.css" />
                <link rel="stylesheet" href="/css/slicknav.min.css" />
                <link rel="stylesheet" href="/css/reset.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
                <link rel="stylesheet" href="/css/color/color1.css" />
                <link rel="stylesheet" href="#" id="colors" />
                <script src="https://kit.fontawesome.com/a029c128a6.js" crossOrigin="anonymous"></script>
                </Head>
                <body className='js'>
                    <div className="preloader">
                        <div className="preloader-inner">
                            <div className="preloader-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                   
                    <Main/>
                    <NextScript/>
                    <script src="/js/jquery.min.js"></script>
                    <script src="/js/jquery-migrate-3.0.0.js"></script>
                    <script src="js/jquery-ui.min.js"></script>
                    <script src="/js/popper.min.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/colors.js"></script>
                    <script src="/js/slicknav.min.js"></script>
                    <script src="js/owl-carousel.js"></script>
                    <script src="/js/magnific-popup.js"></script>
                    <script src="/js/facnybox.min.js"></script>
                    <script src="/js/waypoints.min.js"></script>
                    <script src="/js/finalcountdown.min.js"></script>
                    <script src="/js/nicesellect.js"></script>
                    <script src="/js/ytplayer.min.js"></script>
                    <script src="/js/flex-slider.js"></script>
                    <script src="/js/scrollup.js"></script>
                    <script src="/js/onepage-nav.min.js"></script>
                    <script src="/js/easing.js"></script>
                    <script src="/js/active.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument