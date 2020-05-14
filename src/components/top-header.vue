<template>
    <div>
        <!--HEADER BEGIN-->
        <header>
            <div class="header-top">
                <div class="container">
                    <div class="header-top-item">
                        <div class="col-xl-3 col-lg-3">
                            <div class="header-top-phone">
                                <img src="../assets/images/phone-icon.png" alt="">
                                <a href="tel:+998935054505">+998935054505</a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <ul class=" header-top-menu">
                                <router-link tag="li" to="/about" class="header-top-menu-item" exact active-class="active"><a>О нас</a></router-link>
                                <router-link tag="li" to="/order" class="header-top-menu-item" active-class="active"><a>Доставка</a>
                                </router-link>
                                <router-link tag="li" to="/cabinet" class="header-top-menu-item" active-class="active"><a>Помощь</a></router-link>
                            </ul>
                        </div>
                        <div class="col-xl-3 col-lg-3 header-top-lang-block">
                            <div class="for-kabinet">
                                <a href="#" class="header-top-lang-block-item">
                                    <img src="images/kabinet-icon.png" alt="">
                                    <p class="header-top-lang-block-kabinet">кабинет</p>
                                    <div class="kabinet-enter">
                                        <div>
                                            <a href="#" class="kabinet-enter-item">Вход</a>
                                        </div>
                                        <div>
                                            <a href="#" class="kabinet-enter-regis">Регистрация</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="header-top-lang-block-item"
                                 @click="showLangList = !showLangList"
                            >
                                <img src="../assets/images/lang-icon.png" alt="">
                                <div class="lang-current" :class="{'active' : showLangList}">RU
                                    <svg version="1.1" height="12" width="25" id="Layer_1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 512.011 512.011"
                                         style="enable-background:new 0 0 512.011 512.011;"
                                         xml:space="preserve">
                                        <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                                            s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                                            C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                                    </svg>
                                    <ul class="lang-list"
                                        :class="{'active' : showLangList}"
                                    >
                                        <li class="lang-list-item"><a href="#">RU</a></li>
                                        <li class="lang-list-item"><a href="#">UZ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="header-middle">
                    <a href="#" class="col-xl-3 header-middle-logo">
                        <img src="../assets/images/logo.png" alt="">
                    </a>
                    <div class="col-xl-7 col-lg-7">
                        <input type="text" class="header-middle-input" placeholder="Поиск товаров">
                        <p class="header-middle-input-search">
                            <img src="../assets/images/search-icon.png" alt="">
                        </p>
                    </div>
                    <a href="#" class="col-xl-2 header-middle-korzina">
                        <div class="header-middle-korzina-icon">
                            <img src="../assets/images/korzina.png" alt="">
                            <div class="header-middle-korzina-badge">1</div>
                        </div>
                        <div class="header-middle-korzina-title">
                            корзина
                        </div>
                    </a>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="header-bottom-category">
                        <img src="../assets/images/hamburger.png" alt="">
                        <h4 class="header-bottom-category-title">категории</h4>
                    </div>
                </div>
            </div>
        </header>
        <!--HEADER END-->
    </div>
</template>
<script>
    export default {
        data: () => ({
            showLangList: false,
        }),
        components: {},
        methods: {
            activeMenuLine() {
                setTimeout(() => {
                    let activeMenu = this.$refs.mainNav.querySelector('.active');
                    this.lineAction(activeMenu);
                }, 100);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .lang-list.active {
        display: block;
    }

    .section-first-slider {
        width: 400px;
    }

    .swiper-slide {
        img {
            width: 600px;
            height: 425px;
        }
    }
</style>