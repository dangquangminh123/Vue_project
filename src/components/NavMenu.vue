<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Chuyên Mục
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="column col-lg-2">
                            <a href="dropdown-item">MARVEL</a><div class="dropdown-divider"></div>
                            <ul>
                                    <li><a class="dropdown-item" href="#">SHFIGUARTS</a></li>
                                    <li><a class="dropdown-item" href="#">MAFEX MEDICOM</a></li>
                                    <li><a class="dropdown-item" href="#">MEZCO</a></li>
                                    <li><a class="dropdown-item" href="#">HASBRO    </a></li>
                            </ul>
                        </div>
                        <div class="column col-lg-2">
                            <a href="dropdown-item">DC COMICS</a><div class="dropdown-divider"></div>
                            <ul>
                                    <li><a class="dropdown-item" href="#">SHFIGUARTS</a></li>
                                    <li><a class="dropdown-item" href="#">MAFEX MEDICOM</a></li>
                                    <li><a class="dropdown-item" href="#">MEZCO</a></li>
                                    <li><a class="dropdown-item" href="#">REVOLTECH</a></li>
                            </ul>
                        </div>
                        <div class="column col-lg-2">
                            <a href="dropdown-item">1/12</a><div class="dropdown-divider"></div>
                            <ul>
                                    <li><a class="dropdown-item" href="#">SHFIGUARTS</a></li>
                                    <li><a class="dropdown-item" href="#">MEDICOMTOYS</a></li>
                                    <li><a class="dropdown-item" href="#">MEZCO</a></li>
                                    <li><a class="dropdown-item" href="#">REVOLTECH</a></li>
                            </ul>
                        </div>
                        <div class="column col-lg-2">
                            <a href="dropdown-item">1/6</a><div class="dropdown-divider"></div>
                            <ul>
                                    <li><a class="dropdown-item" href="#">Ram</a></li>
                                    <li><a class="dropdown-item" href="#">Màn hình laptop</a></li>
                                    <li><a class="dropdown-item" href="#">Pin laptop</a></li>
                                    <li><a class="dropdown-item" href="#">Cục Sạc</a></li>
                            </ul>
                        </div>
                        <div class="column col-lg-2">
                            <a href="dropdown-item">Laptop</a><div class="dropdown-divider"></div>
                            <ul>
                                    <li><a class="dropdown-item" href="#">Ram</a></li>
                                    <li><a class="dropdown-item" href="#">Màn hình laptop</a></li>
                                    <li><a class="dropdown-item" href="#">Pin laptop</a></li>
                                    <li><a class="dropdown-item" href="#">Cục Sạc</a></li>
                            </ul>
                        </div>
                    </div>
                </li>


                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Quan Tâm
                    </a>
                    <div class="dropdown-menu menu-brand" aria-labelledby="navbarDropdown">
                        <div class="column col-lg-1">
                            <a href="#" class="brand-logo"><img src="@/assets/images/medicom.jpg" style="width: 50px; height: 50px;" alt=""></a>
                            <a href="#" class="brand-name">MEDICOM TOYS</a>
                        </div>
                        <div class="column col-lg-1">
                            <a href="#" class="brand-logo"><img src="@/assets/images/shfiguarts.jpg" style="width: 80px; height: 50px;" alt=""></a>
                            <a href="#" class="brand-name">BANDAI (SHFIGUARTS)</a>
                        </div>
                        <div class="column col-lg-1">
                            <a href="#" class="brand-logo"><img src="@/assets/images/yamaguchilogo.jpg" style="width: 50px; height: 50px;" alt=""></a>
                            <a href="#" class="brand-name">REVOLTECH YAMAGUCHI</a>
                        </div>
                        <div class="column col-lg-1">
                            <a href="#" class="brand-logo"><img src="@/assets/images/logomezco.jpg" style="width: 50px; height: 50px;" alt=""></a>
                            <a href="#" class="brand-name">MEZCOTOYZ</a>
                        </div>
                        <div class="column col-lg-1">
                            <a href="#" class="brand-logo"><img src="@/assets/images/logohasbro.png" style="width: 50px; height: 50px;" alt=""></a>
                            <a href="#" class="brand-name">HASBRO</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hoạt Động</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Thông tin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Liên Hệ</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 0 5px;
}

.container-fluid {
    padding: 0 0;
}
.navbar {
    border-top: 1px solid #d6d6d6;
    border-bottom: 3px solid #6d6d6d;
    border-right: 0;
    border-left: 0;
    margin: 60px;
    padding: 0px 0px;
}

.navbar .nav-item {
    color: #ffff;
    padding: 0px 0px;
    position: relative;
    text-align: center;
}

.navbar .nav-item a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #555;
    text-align: left;
    font-size: 16px;
}
.navbar .nav-item a:hover {
    color: #3e7c4b;
    background: #d6d6d6;
}

.nav-item ul li a {
    display: flex;
    text-align: left;
    padding-left: 0;
    padding-bottom: 0;
}
.dropdown-menu {
    width: 1170px;
    display: none;
    position: absolute;
    background: #fff;
    z-index: 1;
    padding: 10px 0 0;
    border-top: 3px solid blue;
    border-bottom: 0 none;
    border-left: 0 none;
    border-right: 0 none;
    font-size: 16px;
    margin-top: 0px;
    margin-left: -30px;
    border-radius: 0%;
}

.dropdown-menu ul {
    position: relative;
    z-index: 500px;
    left: 0px;
    right: 0px;
}
.nav-item:hover .dropdown-menu {
    display: block;
}

.column {
    display: inline-block;
    margin: 0 0 15px;
    padding: 0 15px;
}

.column ul {
    list-style: none;
    float: left;
    padding: 0 0;
}
.column li {
    line-height: 27px;
    padding-top: 0px;
}

.column ul li a {
    color: #444;
    text-decoration: none;
    white-space: nowrap;
    font-size: 12px !important;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}

.column a.dropdown-item {
    color: #3e7cb4;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 13px;
    text-transform: uppercase;
    padding: 4px 0px;
}

.column a:hover {
    background: #fff !important;
}

.dropdown-divider {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
}

.menu-brand {
     width: 1170px;
    display: none;
    position: absolute;
    background: #fff;
    z-index: 1;
    padding: 10px 0 0;
    border-top: 3px solid blue;
    border-bottom: 0 none;
    border-left: 0 none;
    border-right: 0 none;
    font-size: 16px;
    margin-top: 0px;
    margin-left: -144px;
    border-radius: 0%;
}

.menu-brand .column {
    margin: 0 auto;
    vertical-align: middle;
}

.menu-brand a.brand-name {
    color: #3e7cb4 !important;
    text-decoration: none;
    padding: 0 10px;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
}

.menu-brand a.brand-name:hover {
    color: #e444 !important;
}
</style>