<template>
    <footer id="footer">
        <div class="first-footer">
        <div class="container">
            <div class="row">
                <div class="contact col-lg-4">
                    <h5>Thông tin Liên hệ</h5>
                    <ul>
                        <li class="address"><font-awesome-icon icon="location-dot" class="icon-contact"/>12 trịnh đình thảo</li>
                        <li class="phone"><font-awesome-icon icon="phone" class="icon-contact"/>7683452342</li>
                        <li class="email"><font-awesome-icon icon="envelope" class="icon-contact"/>dangquangminhdn86@gmail.com</li>
                    </ul>
                </div>

                <div class="column col-lg-2">
                    <h5>Dịch vụ khách hàng</h5>
                    <ul>
                        <li>
                            <a href="#">Liên hệ chúng tôi</a>
                        </li>
                        <li>
                            <a href="#">Về chúng tôi</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="second-footer">
        <div class="container">
            <div id="powered" class="clearfix" style="border: none;">
                <div class="powered-text pull-left">
                    <p>Bản quyền thuộc về đội ngũ TEAM THẢM HẠI</p>
                </div>
                <div class="social pull-right">
                    <a href="">
                        <img src="@/assets/images/facebook.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
    </footer> 
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
    display: block;
    padding-top: 30px;
}
.first-footer {
    background-color: #f3f3f3;
    color: #444;
    padding-top: 50px;
    padding-bottom: 50px;
}

#footer h5 {
    font-size: 18px;
    color: #000;
    margin: 0 0 15px 0;
    padding: 0 0 7px 0;
    font-weight: normal;
}

#footer .contact ul {
    list-style: none;
    padding: 0px;
}

#footer .contact ul li {
    color: #444;
    text-decoration: none;
    display: block;
    padding: 3px 0;
    line-height: 20px;
    font-size: 14px;
}

#footer .icon-contact {
    margin-right: 5px;
    font-size: 16px;
}

#footer .contact ul li + li {
    margin-top: 12px;
}

#footer .column ul {
    list-style: none;
    padding: 0px;
}

#footer .column ul li a {
    color: #888;
    text-decoration: none;
    padding: 3px 0px;
    line-height: 18px;
    font-size: 13px;
}

#footer .column ul li a:hover {
    text-decoration: underline 1px #3e7cb4;
    color: #3e7cb4;
}

.second-footer {
    color: #666;
    padding: 25px 0px 0px;
}

#footer #powered {
    line-height: 18px;
    padding: 0 0 25px;
    margin-bottom: 25px;
}

#footer .powered-text {
    padding-top: 6px;
}
#footer .powered-text p {
    line-height: 18px;
    margin: 0px;
    font-size: 13px;
}

#footer .social img {
    width: 32px;
    height: 32px;
}
.pull-left {
    float: left;
}

.pull-right {
    float: right;
}
</style>